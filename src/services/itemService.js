import axios from 'axios';

export const itemService = {
    query,
    save,
    filter,
    remove,
    getById,
    getEmptyItem,
};

const httpUrl = 'https://localhost:5001/';

async function query() {
    const { data } = await axios.get(httpUrl + 'items');
    return data;
}

async function save(item) {
    const { data } = await item.id
        ? axios.put(httpUrl + `items/${item.id}`, item)
        : axios.post(httpUrl + 'items', item);
    return data;
}

async function remove(itemId) {
    const { data } = await axios.delete(httpUrl + `items/${itemId}`);
    return data;
}

async function getById(itemId) {
    const { data } = await axios.get(`items/${itemId}`);
    return data;
}

function filter(items, filterBy) {
    return items.filter((item) => {
        if (filterBy) {
            return item.shape
                .toLowerCase()
                .includes(filterBy.search.toLowerCase());
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
