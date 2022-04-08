import React from 'react';
import { Link } from 'react-router-dom';

export const ItemPreview = ({ item, onRemoveItem }) => {
    return (
        <article className="diamond-card">
            <span  className="info">
                <>
                    <div className='card-content'>
                        <p>
                            <span>Shape:</span> <span>{item.shape}</span>{' '}
                        </p>
                        <p>
                            <span>Size:</span> <span>{item.size}</span>{' '}
                        </p>
                        <p>
                            <span>Color:</span> <span>{item.color}</span>{' '}
                        </p>
                        <p>
                            <span>Clarity:</span> <span>{item.clarity}</span>{' '}
                        </p>
                        <p className='price price-top'>
                            <span>Price:</span> <span>{item.price}</span>{' '}
                        </p>
                        <p className='price'>
                            <span>List Price:</span>{' '}
                            <span>{item.listPrice}</span>{' '}
                        </p>
                    </div>
                </>
            </span>
            <div className="card-btns">
                <Link className="simple-button" to={`/item/edit/${item.id}`}>Edit</Link>
                <a
                    className="simple-button"
                    onClick={() => onRemoveItem(item.id)}
                >
                    Delete
                </a>
            </div>
        </article>
    );
};
