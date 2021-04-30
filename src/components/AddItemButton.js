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
import { connect } from 'react-redux';
import { addItem } from './../redux/site/siteActions'

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

const AddItemButton = (props) => {

    const [open, setOpen] = useState(false);
    const [form, setFormValues] = useState({
        id: 1,
        name: '',
        description: '',
        price: '',
        dateModified: getTodaysDate()
    });

    const handleClickOpen = () => {
        console.log(form.dateModified);
        setOpen(true);
        //props.fetchPumpOptimizationAlgoInput(props.assetID);
    };

    const handleClose = () => {
        setFormValues({
            id: 1,
            name: '',
            description: '',
            price: '',
            dateModified: getTodaysDate()
        })
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(form);
        setOpen(false); //close the form modal
        setFormValues({
            id: 1,
            name: '',
            description: '',
            price: '',
            dateModified: getTodaysDate()
        })
    };

    const handleValueChange = (event) => {
        setFormValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <React.Fragment>
            <Button
                variant="outlined"
                color="primary"
                onClick={handleClickOpen}
            >
                Add Item
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Add Item</DialogTitle>
                <DialogContent >
                    <Grid container justify="space-around" spacing={1} style={{ width: '500px' }}>
                        <Paper style={{ width: '490px', padding: '10px' }}>
                            <form>
                                <TextField
                                    variant="outlined"
                                    id="itemName"
                                    label="Name"
                                    autoFocus
                                    name="name"
                                    value={form.name}
                                    onChange={handleValueChange}
                                    style={{ marginRight: '20px' }}
                                />
                                <TextField
                                    variant="outlined"
                                    id="itemPrice"
                                    label="Price ($)"
                                    name="price"
                                    value={form.price}
                                    onChange={handleValueChange}
                                />
                                <br />
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
        addItem: (itemObj) => dispatch(addItem(itemObj))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItemButton);
