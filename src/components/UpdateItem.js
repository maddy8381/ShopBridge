import React, { useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Paper,
    TextField
} from '@material-ui/core'
import { connect } from 'react-redux'
import { modifyItem } from './../redux/site/siteActions'

const getTodaysDate = () => {
    let monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"];

    let today = new Date();
    let day = today.getDate();
    let monthIndex = today.getMonth();
    let monthName = monthNames[monthIndex];
    let year = today.getFullYear();
    return `${day} ${monthName} ${year}`;
}

function UpdateItem(props) {
    const { id, name, description, price } = props.item;
    const [open, setOpen] = useState(false);
    const [form, setFormValues] = useState({
        id: id,
        name: name,
        description: description,
        price: price,
        dateModified: getTodaysDate()
    });

    const [itemNameErr, setItemNameErr] = useState({});
    const [itemPriceErr, setItemPriceErr] = useState({});
    const [itemDescrErr, setItemDescrErr] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            props.modifyItem(form);
            setOpen(false); //close the form modal
        }
    };

    const handleValueChange = (event) => {
        setFormValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleIntegerInput = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
    };

    const formValidation = () => {
        let isValid = true;
        const itemNameErr = {};
        const itemPriceErr = {};
        const itemDescrErr = {};

        if (form.name.trim().length < 5) {
            itemNameErr.shortName = 'Item Name is Too Short';
            isValid = false;
        }
        else if (form.name.trim().length > 30) {
            itemNameErr.longName = 'Item Name is Too Long';
            isValid = false;
        }

        if (form.price < 1) {
            itemPriceErr.priceNegative = 'Price should be greater than 0';
            isValid = false;
        }

        if (form.description.trim().length < 30) {
            itemDescrErr.shortName = 'Item Description is Too Short';
            isValid = false;
        }
        else if (form.description.trim().length > 300) {
            itemDescrErr.longName = 'Item Description is Too Long';
            isValid = false;
        }

        setItemNameErr(itemNameErr);
        setItemPriceErr(itemPriceErr);
        setItemDescrErr(itemDescrErr);

        return isValid;
    };

    return (
        <React.Fragment>
            <Button className="fa fa-edit pr-1" onClick={handleClickOpen}> Update Item</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Update Item</DialogTitle>
                <DialogContent >
                    <Grid container justify="space-around" spacing={1} style={{ width: '500px' }}>
                        <Paper style={{ width: '490px', padding: '10px' }}>
                            <form>
                                <div className="row">
                                    <div className="col-6">
                                        <TextField
                                            variant="outlined"
                                            id="itemName"
                                            label="Name"
                                            autoFocus
                                            name="name"
                                            value={form.name}
                                            onChange={handleValueChange} />
                                        {
                                            Object.keys(itemNameErr).map((key) => {
                                                return <div style={{ color: 'red' }}>{itemNameErr[key]}</div>
                                            })
                                        }
                                    </div>
                                    <div className="col-6">
                                        <TextField
                                            variant="outlined"
                                            id="itemPrice"
                                            label="Price ($)"
                                            name="price"
                                            value={form.price}
                                            onKeyPress={handleIntegerInput}
                                            onChange={handleValueChange}
                                        />
                                        {
                                            Object.keys(itemPriceErr).map((key) => {
                                                return <div style={{ color: 'red' }}>{itemPriceErr[key]}</div>
                                            })
                                        }
                                    </div>
                                </div>
                                <br />
                                <TextField
                                    variant="outlined"
                                    multiline
                                    id="itemDescription"
                                    label="Description"
                                    name="description"
                                    fullWidth
                                    value={form.description}
                                    onChange={handleValueChange}

                                />
                                {
                                    Object.keys(itemDescrErr).map((key) => {
                                        return <div style={{ color: 'red' }}>{itemDescrErr[key]}</div>
                                    })
                                }
                                <br />
                                <br />
                            </form>
                        </Paper>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                </Button>
                    <Button onClick={(e) => handleSubmit(e)} color="primary">
                        Save
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>

    )
}


const mapStateToProps = (state) => {
    return {

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        modifyItem: (itemObj) => dispatch(modifyItem(itemObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateItem);
