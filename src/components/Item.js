import React from 'react'
import { Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { deleteItem } from './../redux/site/siteActions'

function Item(props) {
    const { id, name, description, price, dateModified } = props.item;

    const handleDeleteItem = (id) => {
        props.deleteItem(id);
    }

    return (
        <div>
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <h3>{price}</h3>
                        <p>{dateModified}</p>
                    </div>
                    <div className="col-md-2 d-none d-lg-block">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Button className="fa fa-edit pr-1"> Update Item</Button>
                            </li>
                            <li className="list-group-item">
                                <Button className="fa fa-edit pr-1" onClick={() => handleDeleteItem(id)}> Delete Item</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
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
