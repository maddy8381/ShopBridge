import React from 'react'
import AddItemButton from './AddItemButton'
import { Container } from '@material-ui/core'

function Dashboard() {
    return (
        <Container fixed>
            <h1 className="display-4 text-center">Items</h1>
            <br />
            <AddItemButton />
            <br />
            <hr />
            {

            }
        </Container>
    )
}

export default Dashboard
