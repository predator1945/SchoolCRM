import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { updateTeacher, updateFNameField, updateLNameField, updatePeselField } from './teachers.actions';

class SubjectsNew extends Component {




    onSubmit() {
        this.props.updateTeacher(this.props.match.params.id,{
            pesel: this.props.pesel,
            first_name: this.props.fname,
            last_name: this.props.lname
        }, () => this.props.history.push("/teachers"));
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>Edit teacher </h3>
                <div className="form-group">
                    <label for="description">PESEL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="emailHelp"
                        placeholder="Enter PESEL"
                        value={this.props.pesel}
                        onChange={event => { this.props.updatePeselField(event.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="description">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="emailHelp"
                        placeholder="Enter first name"
                        value={this.props.fname}
                        onChange={event => { this.props.updateFNameField(event.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="emailHelp"
                        placeholder="Enter last name"
                        value={this.props.lname}
                        onChange={event => { this.props.updateLNameField(event.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button className="btn btn-info" onClick={() => this.onSubmit(this.props.desc)} > Edit</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/teachers")} > Back</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        lname: state.teachers.lname,
        fname: state.teachers.fname,
        pesel: state.teachers.pesel
    }
}

export default connect(mapStateToProps, { updateTeacher, updateFNameField,  updatePeselField,   updateLNameField })(SubjectsNew);

