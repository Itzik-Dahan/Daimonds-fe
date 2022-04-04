// import { storageService } from './storageService';
import axios from 'axios';
import { httpService } from './httpService';
// import { makeId } from './utilService';
// import diamondData from '../assets/data/diamondData.json';

export const itemService = {
    query,
    save,
    filter,
    remove,
    getById,
    getEmptyItem,
};

const httpUrl = 'https://localhost:5001/';

// const gDefaultItems = diamondData;

// var gItems = _loadItems();

function query() {
    return axios.get(httpUrl + 'items').then((items) => items.data);
    // return httpService.get(`items`);

    // let itemsToReturn = gItems;
    // if (filterBy) {
    //     itemsToReturn = filter(itemsToReturn, filterBy);
    // }
    // return Promise.resolve([...itemsToReturn]);
}

function save(item) {
    return item.id
        ? axios.put(httpUrl + `items/${item.id}`, item).then((items) => items.data)
        : axios.post(httpUrl + 'items', item).then((items) => items.data);
}


function remove(itemId) {
    // return httpService.delete(`items/${itemId}`);
    axios.delete(httpUrl + `items/${itemId}`).then((items) => items.data);
}

async function getById(itemId) {
    const item = await axios.get(`items/${itemId}`);
    return item.data;
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
        img: '',
        shape: '',
        size: 0,
        color: '',
        clarity: '',
        price: 0,
        listPrice: 0,
    };
}

