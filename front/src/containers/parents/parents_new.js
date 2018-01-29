import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createParent, updateAdressField, updateFNameField,
        updateIdField, updateLNameField, updateParent,  updatePhoneField } from './parents.actions';

class SubjectsNew extends Component {




    onSubmit(v) {
        console.log(v);
        this.props.createParent({
            first_name:this.props.fname,
            last_name: this.props.lname,
            phone_number:this.props.phone,
            address: this.props.adress
        }, ()=> this.props.history.push("/parents"));
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div> 
                <h3>Create new parent </h3>
                <div className="form-group">
                    <label for="id">ID</label>
                    <input type="text" 
                    className="form-control" 
                    id="id" 
                    aria-describedby="idHelp" 
                    placeholder="ID" 
                    disabled/>
                    <small id="idHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="description">First name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
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
                    id="description" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    value={this.props.lname}
                    onChange={event =>{this.props.updateLNameField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="description">Phone number</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    value={this.props.phone}
                    onChange={event =>{this.props.updatePhoneField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="description">Address</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    value={this.props.adress}
                    onChange={event =>{this.props.updateAdressField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button className="btn btn-success" onClick={() => this.onSubmit(this.props.desc)} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/subjects")} > Back</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        fname: state.parents.fname,
        lname: state.parents.lname,
        adress: state.parents.adress,
        phone: state.parents.phone
    }
}

export default connect(mapStateToProps, { createParent, updateAdressField, updateFNameField,
    updateIdField, updateLNameField, updateParent,  updatePhoneField })(SubjectsNew);

