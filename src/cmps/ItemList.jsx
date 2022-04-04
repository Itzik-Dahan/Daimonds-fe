import React from 'react';
import { ItemPreview } from './ItemPreview';
import { Link } from 'react-router-dom';

export const ItemList = ({ items, onRemoveItem }) => {
    return (
        <div className='items-list'>
            {/* אם יש בעיות בעיצוב, זה בגלל הקלאס קארד-גריד */}
            <ul className="card-grid clean-list">
                {items.map((item) => (
                    <ItemPreview
                        item={item}
                        key={item.id}
                        onRemoveItem={onRemoveItem}
                    ></ItemPreview>
                ))}
            </ul>
            <article className="add-diamond">
                <Link to="/item/edit">
                    <>
                        <div className="add-btn">
                            <span>Add Diamond </span> 
                        </div>
                    </>
                </Link>
            </article>
        </div>
    );
};
