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
        <div>
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <h3>{item.price}</h3>
                        <p>{item.dateModified}</p>
                    </div>
                    <div className="col-md-2 d-none d-lg-block">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <UpdateItem item={item} />
                            </li>
                            <li className="list-group-item">
                                <Button className="fa fa-edit pr-1" onClick={() => handleDeleteItem(item.id)}> Delete Item</Button>
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
