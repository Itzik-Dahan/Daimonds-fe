import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../cmps/Loading';
import { getItemById } from '../store/actions/itemAction';

export const ItemDetails = (props) => {
  const [item, setItem] = useState(null);
  const dispatch = useDispatch();
 

  useEffect(() => {
    loadItem();
  }, [props.match.params.id]);

  const loadItem = async () => {
    const item = await dispatch(getItemById(props.match.params.id));
    setItem(item);
  };
  if (!item) return <Loading />;

  return (
    <div>
      {item.type}

      <Link to="/item">Back</Link>
    </div>
  );
};
