import { itemService } from '../../services/itemService';

export function loadItems() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().itemModule;
        try {
            const items = await itemService.query(filterBy);
            dispatch({ type: 'SET_ITEMS', items });
        } catch (err) {
            console.log(err);
        }
    };
}

export function removeItem(itemId) {
    return async (dispatch) => {
        try {
            await itemService.remove(itemId);
            dispatch({ type: 'REMOVE_ITEM', itemId });
        } catch (err) {
            console.log(err);
        }
    };
}

export function setFilterBy(filterBy) {
    return async (dispatch, getState) => {
        const { items } = getState().itemModule;
        const itemsFilter = itemService.filter(items, filterBy);
        dispatch({ type: 'SET_FILTER_BY', filterBy });
        return itemsFilter;
    };
}

export function getItemById(itemId) {
    return async () => {
        return await itemService.getById(itemId);
    };
}
