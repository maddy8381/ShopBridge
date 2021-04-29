import React from 'react'
import { Button } from '@material-ui/core'

function Item() {
    return (
        <div>
            <div className="card card-body bg-light mb-3">
                <div className="row">
                    <div className="col-2">
                        <span className="mx-auto">ID01</span>
                    </div>
                    <div className="col-lg-6 col-md-4 col-8">
                        <h3>ITEM Name</h3>
                        <p>Item description will come here</p>
                    </div>
                    <div className="col-md-4 d-none d-lg-block">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <Button className="fa fa-edit pr-1"> Update Item</Button>
                            </li>
                            <li className="list-group-item">
                                <Button className="fa fa-edit pr-1"> Delete Item</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
