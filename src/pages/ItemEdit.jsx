import React, { useEffect, useRef } from 'react';
import { useForm } from '../hooks/useForm';
import { itemService } from '../services/itemService';

export const ItemEdit = (props) => {
    const [item, handleChange, setItem] = useForm(null);
    const inputRef = useRef();

    useEffect(() => {
        (async () => {
            try {
                const itemId = props.match.params.id;
                const item = itemId
                    ? await itemService.getById(itemId)
                    : itemService.getEmptyItem();
                setItem(item);
            } catch (err) {
                // setErrMsg(err.name + ': ' + err.message);
            }
        })();
    }, []);

    const onSaveItem = async (ev) => {
        ev.preventDefault();
        await itemService.save({ ...item });
        props.history.push('/item');
    };
    if (!item) return <div>{'Loading...'}</div>;

    return (
        <div>
            <h1 className='text-center'>{item.id ? 'Edit ' : 'Add '}A Diamond</h1>
            <form className="simple-form" onSubmit={onSaveItem}>
                <label htmlFor="Shape">Shape</label>
                <select
                    onChange={handleChange}
                    value={item.shape}
                    name="shape"
                    id="shape"
                    required
                >
                    <option value="" disabled>
                        Select Shape
                    </option>
                    <option value="Round">Round</option>
                    <option value="Pear">Pear</option>
                    <option value="Emerald">Emerald</option>
                    <option value="Princess">Princess</option>
                    <option value="Oval">Oval</option>
                    <option value="Cushion">Cushion</option>
                    <option value="Radiant">Radiant</option>
                    <option value="Asscher">Asscher</option>
                    <option value="Marquise">Marquise</option>
                    <option value="Heart">Heart</option>
                </select>

                <label htmlFor="Size">Size</label>
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    value={item.size ? item.size : ''}
                    type="number"
                    min="0.00"
                    step="0.01"
                    max="6.00"
                    name="size"
                    id="size"
                    required
                />

                <label htmlFor="Color">Color</label>
                <select
                    onChange={handleChange}
                    value={item.color}
                    name="color"
                    id="color"
                    required
                >
                    <option value="" disabled>
                        Select Color
                    </option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                    <option value="I">I</option>
                    <option value="J">J</option>
                    <option value="K">K</option>
                    <option value="L">L</option>
                    <option value="M">M</option>
                    <option value="N">N</option>
                    <option value="O-P">O-P</option>
                    <option value="Q-R">Q-R</option>
                    <option value="S-T">S-T</option>
                    <option value="U-V">U-V</option>
                    <option value="W-X">W-X</option>
                    <option value="Y-Z">Y-Z</option>
                </select>

                <label htmlFor="Clarity">Clarity</label>
                <select
                    onChange={handleChange}
                    value={item.clarity}
                    name="clarity"
                    id="clarity"
                    required
                >
                    <option value="" disabled>
                        Select Clarity
                    </option>
                    <option value="Flawless">Flawless</option>
                    <option value="Internally Flawless">
                        Internally Flawless
                    </option>
                    <option value="VVS1">VVS1</option>
                    <option value="VVS2">VVS2</option>
                    <option value="VS1">VS1</option>
                    <option value="VS2">VS2</option>
                    <option value="SI1">SI1</option>
                    <option value="SI2">SI2</option>
                    <option value="I1">I1</option>
                    <option value="I2">I2</option>
                    <option value="I3">I3</option>
                </select>

                <label htmlFor="Price">Price</label>
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    value={item.price ? item.price : '' }
                    type="number"
                    min="0"
                    step="1"
                    name="price"
                    id="price"
                    required
                />
                <label htmlFor="List Price">List Price</label>
                <input
                    ref={inputRef}
                    onChange={handleChange}
                    value={item.listPrice ? item.listPrice : ''}
                    type="number"
                    min="0"
                    step="1"
                    name="listPrice"
                    id="listPrice"
                    required
                />

                {/* בפורם, כאשר יש כפתור אחד בלי כלום עליו הוא עושה שליחה בתור ברירת מחדל */}
                <button>Save</button>
            </form>
        </div>
    );
};
