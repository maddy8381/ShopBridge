import React from 'react'

import './YearFilter.css'


function YearFilter(props) {

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className='year-filter'>
            <div className='year-filter__control'>
                <label>Filter by year</label>sdfds
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    )
}

export default YearFilter
