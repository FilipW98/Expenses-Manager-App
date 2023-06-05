import React, { ChangeEvent } from 'react';
import './ExpensesFilter.scss';

interface ExpensesFilterProps {
  onSetYear: (selectedYear: string) => void
  selected: string
}


const ExpensesFilter = (props:ExpensesFilterProps) => {

  const yearPickHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value
    props.onSetYear(selectedYear)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearPickHandler} value={props.selected}>
          <option value='2023'>2023</option>
          <option value='2022' >2022</option>
          <option value='2021' >2021</option>
          <option value='2020' >2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;