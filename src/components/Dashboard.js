import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import AddItemButton from './AddItemButton'
import { Container } from '@material-ui/core'
import Item from './Item'
import { fetchShoppingItems } from './../redux/site/siteActions'
import YearFilter from './YearFilter/YearFilter'
import Pagination from './Pagination/Pagination'

function Dashboard(props) {

    useEffect(() => {
        props.fetchShoppingItems();
    });

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredItems = props.shoppingItemsList.filter((item) => {
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
                    filteredItems < 1
                        ? <h2 style={{ textAlign: 'center' }}>ITEMS NOT FOUND</h2>
                        : <Pagination
                            data={filteredItems}
                            RenderComponent={Item}
                            pageLimit={3}
                            dataLimit={3}
                        />
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
