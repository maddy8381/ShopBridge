import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import AddItemButton from './AddItemButton'
import { Container } from '@material-ui/core'
import Item from './Item'
import { fetchShoppingItems } from './../redux/site/siteActions'
import YearFilter from './YearFilter/YearFilter'

function Dashboard(props) {

    useEffect(() => {
        props.fetchShoppingItems();
    });

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredItem = props.shoppingItemsList.filter((item) => {
        let date = item.dateModified;
        date = date.slice(-4);
        return date === filteredYear;
    });

    return (
        <Container fixed>
            <br />
            <YearFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <AddItemButton />
            <br />
            <hr />
            <div>
                {
                    filteredItem < 1
                        ? <h2 style={{ textAlign: 'center' }}>ITEMS NOT FOUND</h2>
                        : filteredItem.map(item => (
                            <Item key={item.id} item={item} />
                        ))
                }
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        shoppingItemsList: state.shoppingItems.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchShoppingItems: () => dispatch(fetchShoppingItems()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
