import React from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { deleteItem } from './../redux/site/siteActions'
import UpdateItem from './UpdateItem'



function Item(props) {

    const { item } = props;

    const handleDeleteItem = (id) => {
        props.deleteItem(id);
    }

    return (
        <div className="col-lg-4 col-md-6" style={{ display: 'inline-block', marginBottom: '15px' }}>
            <div className="card" style={{ padding: '15px' }}>
                <h3 style={{ height: '50px' }}>{item.name}</h3>
                <p style={{ height: '100px' }}>{item.description}</p>
                <h3 style={{ height: '50px' }}>${item.price}</h3>
                <p style={{ height: '20px' }}>{item.dateModified}</p>

                <div>
                    <UpdateItem item={item} />
                    <Button
                        style={{ width: '115px', float: 'right' }}
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDeleteItem(item.id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
