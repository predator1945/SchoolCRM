import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createClass, updateDateField, updateNameField, updateTeacherField } from './classes.actions';
import { fetchTeachers} from './../teachers/teachers.actions';

import DatePicker from "react-bootstrap-date-picker";
class SubjectsNew extends Component {


    componentWillMount() {
        this.props.fetchTeachers();
    }


    onSubmit() {
        let date = this.props.date.slice(0,10);
        console.log(date);
        this.props.createClass({
            name_of_class:this.props.name,
            date_of_grad: date,
            counsellor_id: this.props.teacher
        }, () => this.props.history.push("/classes"));
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>Create new class </h3>
                <div className="form-group">
                    <label for="description">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="emailHelp"
                        placeholder="Enter name"
                        value={this.props.name}
                        onChange={event => { this.props.updateNameField(event.target.value) }}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="from-group">
                    <label>Graduation date </label>
                    <DatePicker
                        type="text"
                        id="grad_time"
                        className="datepicker form-control"
                        placeholder="MM/DD/YYYY"
                        className="form-control"
                        type="text"
                        value={this.props.date}
                        onChange={(v, value)=> this.props.updateDateField(v)}
                    />
                </div>
                <div className="form-group">
                    <label for="description">Counsellor</label>
                    <select name="cars" className="form-control" 
                    onChange={(e)=> this.props.updateTeacherField(e.target.value)}
                    value={this.props.teacher}
                    >
                    <option>None </option>
                    {_.map(this.props.teachers, (t) => {
                        return (
                            <option value={t.pesel}> {t.first_name} {t.last_name} </option>
                        )
                    })}
                    </select>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button className="btn btn-success" onClick={() => this.onSubmit()} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/classes")} > Back</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        date: state.classes.date,
        name: state.classes.name,
        teacher: state.classes.teacher,
        teachers: state.teachers.list
    }
}

export default connect(mapStateToProps, { createClass, updateDateField, updateNameField, updateTeacherField, fetchTeachers })(SubjectsNew);

