import React from 'react';
import { useForm } from '../hooks/useForm';

export const ItemFilter = ({ onChangeFilter }) => {
  const [filterBy, handleChange] = useForm(
    {
      search: '',
    },
    // when submit - load onChangeFilter
    onChangeFilter 
  );
  const { search } = filterBy;
  return (
    <form>
      <section className='search'>
        <label htmlFor="search">Search </label>
        <input onChange={handleChange} value={search} type="text" name="search" id="search" />
      </section>
    </form>
  );
};
