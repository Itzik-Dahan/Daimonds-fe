import React, { useCallback, useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DeleteModal } from '../cmps/DeleteModel';
import { ItemFilter } from '../cmps/ItemFilter';
import { ItemList } from '../cmps/ItemList';
import { itemService } from '../services/itemService';
import {
    loadItems,
    removeItem,
    setFilterBy,
} from '../store/actions/itemAction';
import { Statistics } from './Statistics';

export const ItemApp = () => {
    const { items } = useSelector((state) => state.itemModule);
    const [remove, setRemove] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:3030/items', {
            crossDomain: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onChangeFilter = useCallback((filterBy) => {
        dispatch(setFilterBy(filterBy));
        dispatch(loadItems());
    }, []);

    const onRemoveItem = (itemId) => {
        setRemove(itemId);
    };

    const onHandleDelete = (val) => {
        if (val) {
            dispatch(removeItem(remove));
        }
        setRemove(null);
    };

    return (
        <div className="item-app main-layout ">
            <ItemFilter onChangeFilter={onChangeFilter}></ItemFilter>
            <Statistics items={items}></Statistics>
            {/* <Link to="/item/edit">Add Diamond</Link> */}
            <ItemList items={items} onRemoveItem={onRemoveItem}></ItemList>
            {remove && <DeleteModal onHandleDelete={onHandleDelete} />}
        </div>
    );
};
