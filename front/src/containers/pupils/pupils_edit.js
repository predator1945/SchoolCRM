import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { updatePupil, updateCardField, updateFNameField, updateLNameField, updatePeselField } from './pupils.actions';

class PupilsEdit extends Component {




    onSubmit() {
        console.log(this.props);
        this.props.updatePupil(this.props.match.params.id,
            {
            card_number: this.props.card,
            pesel: this.props.pesel,
            first_name: this.props.fname,
            last_name:this.props.lname
        },
        () => this.props.history.push("/pupils"));
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>Edit pupil </h3>
                <div className="form-group">
                    <label for="description">Card number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="card_number"
                        aria-describedby="emailHelp"
                        placeholder="Enter card number"
                        value={this.props.card}
                        onChange={event => { this.props.updateCardField(event.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="pesel">PESEL</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="pesel" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter PESEL" 
                    value={this.props.pesel}
                    onChange={event =>{this.props.updatePeselField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="description">First name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="fname" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    value={this.props.fname}
                    onChange={event =>{this.props.updateFNameField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="description">Last name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="lname" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    value={this.props.lname}
                    onChange={event =>{this.props.updateLNameField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button className="btn btn-success" onClick={() => this.onSubmit()} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/pupils")} > Back</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        lname: state.pupils.lname,
        fname: state.pupils.fname,
        pesel: state.pupils.pesel,
        card: state.pupils.card
    }
}

export default connect(mapStateToProps, { updatePupil, updateCardField, updateFNameField, updateLNameField, updatePeselField })(PupilsEdit);

