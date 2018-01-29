import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createGrade, updateDateField, updatePupilField, updateSubjectField, updateGradeField } from './grades.actions';
import { fetchPupils} from "./../pupils/pupils.actions";
import { fetchSubjects } from "./../subjects/subjects.actions"


import DatePicker from "react-bootstrap-date-picker";
class SubjectsNew extends Component {


    componentWillMount() {

        this.props.fetchSubjects();
        this.props.fetchPupils();

    }


    onSubmit() {
        let date = this.props.date.slice(0, 10);
        console.log(date);
        this.props.createGrade({
            card_number:this.props.pupil,
            date_of_reciv: date,
            subject_id:this.props.subject,
            grade:this.props.grade
        }, () => this.props.history.push("/grades"));
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>Create new grade </h3>
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

                <div className="from-group">
                    <label>Date of reciving </label>
                    <DatePicker
                        type="text"
                        id="grad_time"
                        className="datepicker form-control"
                        placeholder="MM/DD/YYYY"
                        className="form-control"
                        type="text"
                        value={this.props.date}
                        onChange={(v, value) => this.props.updateDateField(v)}
                    />
                </div>
                <div className="form-group">
                    <label for="description">Pupil</label>
                    <select name="cars" className="form-control"
                        onChange={(e) => this.props.updatePupilField(e.target.value)}
                        value={this.props.pupil}
                    >
                        <option>None </option>
                        {_.map(this.props.pupils, (t) => {
                            return (
                                <option value={t.card_number}> {t.first_name} {t.last_name} </option>
                            )
                        })}
                    </select>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="description">Subject</label>
                    <select name="cars" className="form-control"
                        onChange={(e) =>{this.props.updateSubjectField(e.target.value)}}
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
                <div className="form-group">
                    <label for="description">Grade</label>
                    <select name="grades" className="form-control"
                        onChange={(e) => {
                            console.log(e.target.value)
                            this.props.updateGradeField(e.target.value)
                            console.log(this.props.grades.grade)
                        }}
                        value={this.props.grade}
                    >
                        <option value="1">1 </option>
                        <option value="2">2 </option>
                        <option value="3">3 </option>
                        <option value="4">4 </option>
                        <option value="5">5 </option>
                        <option value="6">6 </option>
                        
                    </select>
                </div>
                <button className="btn btn-success" onClick={() => this.onSubmit()} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/grades")} > Back</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log
    return {
        date: state.grades.date,
        pupil: state.grades.pupil,
        subject: state.grades.subject,
        grade: state.grades.grade,
        pupils: state.pupils.list,
        subjects: state.subjects.list
    }
}

export default connect(mapStateToProps, { 
    fetchPupils, fetchSubjects,
    createGrade, updateDateField, updatePupilField, updateSubjectField, updateGradeField })(SubjectsNew);

