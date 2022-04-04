import { storageService } from './storageService';
import { httpService } from './httpService';
import { makeId } from './utilService';
import diamondData from '../assets/data/diamondData.json';

export const itemService = {
    query,
    save,
    remove,
    getById,
    getEmptyItem,
};

const STORAGE_KEY = 'items';

const gDefaultItems = diamondData;


var gItems = _loadItems();

function query(filterBy) {
    // return httpService.get(`items`, filterBy);

    let itemsToReturn = gItems;
    if (filterBy) {
        itemsToReturn = filter(itemsToReturn, filterBy);
    }
    return Promise.resolve([...itemsToReturn]);
}

function save(itemToSave) {
    if (itemToSave._id) {
        const idx = gItems.findIndex((item) => item._id === itemToSave._id);
        gItems.splice(idx, 1, itemToSave);
    } else {
        itemToSave._id = makeId();
        gItems.push(itemToSave);
    }
    storageService.store(STORAGE_KEY, gItems);
    return Promise.resolve(itemToSave);
}

function remove(id) {
    const idx = gItems.findIndex((item) => item._id === id);
    gItems.splice(idx, 1);
    if (!gItems.length) gItems = gDefaultItems.slice();
    storageService.store(STORAGE_KEY, gItems);
    return Promise.resolve();
}

function getById(id) {
    const item = gItems.find((item) => item._id === id);
    return Promise.resolve({ ...item });
}

function filter(items, filterBy) {
    return items.filter((item) => {
        if (filterBy) {
            return (
                item.shape
                    .toLocaleLowerCase()
                    .includes(filterBy.search.toLocaleLowerCase()) ||
                item.color
                    .toLocaleLowerCase()
                    .includes(filterBy.search.toLocaleLowerCase()) ||
                item.clarity
                    .toLocaleLowerCase()
                    .includes(filterBy.search.toLocaleLowerCase()) 
            );
        } else return item;
    });
}
function getEmptyItem() {
   
    return {
        shape: '',
        size: 0,
        color: '',
        clarity: '',
        price: 0,
        listPrice: 0,
    };
}

function _loadItems() {
    let items = storageService.load(STORAGE_KEY);
    if (!items || !items.length) items = gDefaultItems;
    storageService.store(STORAGE_KEY, items);
    return items;
}
