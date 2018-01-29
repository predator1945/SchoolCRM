import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {create} from "./t_subjects.actions"
import {updateSubjectField} from "./../lessons/lessons.actions";
import { fetchSubjects } from './../subjects/subjects.actions'


class SubjectsNew extends Component {


    componentWillMount() {

        this.props.fetchSubjects();

    }


    onSubmit() {
        this.props.create( this.props.match.params.id, this.props.subject, 
            () => this.props.history.push(`/t_subjects/${this.props.match.params.id}`));
    }


    render() {

        return (
            <div>
                <h3>Add subject </h3>
                <div className="form-group">
                    <label for="description">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="emailHelp"
                        placeholder="ID"
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label for="description">Subject</label>
                    <select name="cars" className="form-control"
                        onChange={(e) => { this.props.updateSubjectField(e.target.value) }}
                        value={this.props.subject}
                    >
                        <option>None </option>
                        {_.map(this.props.subjects, (t) => {
                            return (
                                <option value={t.id}> {t.description} </option>
                            )
                        })}
                    </select>
                </div>

                <button className="btn btn-success" onClick={() => this.onSubmit()} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/teachers")} > Back</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log
    return {
        subject: state.lessons.subject,

        subjects: state.subjects.list
    }
}

export default connect(mapStateToProps, {
    fetchSubjects,updateSubjectField,create
})(SubjectsNew);

