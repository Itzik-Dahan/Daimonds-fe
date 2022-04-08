import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Statistics = ({ items }) => {
    const [avgPrice, setAvgPrice] = useState(null);
    const [minPrice, setMinPrice] = useState(null);

    useEffect(() => {
        if (items.length) {
            calcAveragePrice();
            calcMinPrice();
        }
    }, [items]);

    const calcAveragePrice = () => {
        const price = items.reduce((acc, item) => (acc += item.price), 0);
        const avg = (price / items.length).toFixed(2);
        setAvgPrice(avg);
    };

    const calcMinPrice = () => {
        const itemsPrice = items.sort((a, b) => (a.price > b.price ? 1 : -1));
        setMinPrice(itemsPrice[0].price);
    };

    return (
        <div className="statistics">
            <fieldset>
                <legend>Average Price:</legend>
                <span>{avgPrice}</span>
            </fieldset>
            <fieldset>
                <legend>Number Of Diamonds:</legend>
                <span>{items.length}</span>
            </fieldset>
            <fieldset>
                <legend>Min Price:</legend>
                <span>{minPrice}</span>
            </fieldset>
        </div>
    );
};
