import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AddItemButton from './AddItemButton'
import { Container } from '@material-ui/core'
import Item from './Item'
import { fetchShoppingItems } from './../redux/site/siteActions'

function Dashboard(props) {

    useEffect(() => {
        props.fetchShoppingItems();
    });

    return (
        <Container fixed>
            <h1 className="display-4 text-center">SHOPPING ITEMS</h1>
            <br />
            <AddItemButton />
            <br />
            <hr />
            <div>
                {
                    props.shoppingItemsList.length < 1
                        ? <h1 style={{ textAlign: 'center' }}>No Items Found</h1>
                        : props.shoppingItemsList.map(item => (
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
