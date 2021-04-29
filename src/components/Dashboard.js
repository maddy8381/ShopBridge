import React from 'react'
import AddItemButton from './AddItemButton'
import { Container } from '@material-ui/core'
import Item from './Item'

function Dashboard() {
    return (
        <Container fixed>
            <h1 className="display-4 text-center">SHOPPING ITEMS</h1>
            <br />
            <AddItemButton />
            <br />
            <hr />
            <Item />
        </Container>
    )
}

export default Dashboard
