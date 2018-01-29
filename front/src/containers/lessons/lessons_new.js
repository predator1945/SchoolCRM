import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {
    updateClassroomField, updateClassField, updateDayField,
    updateLesson, updateStartField, updateSubjectField,
    updateTeacherField, createLesson
} from "./lessons.actions"
import { fetchSubjects } from './../subjects/subjects.actions'
import { fetchClassrooms } from "./../classrooms/classrooms.actions"
import { fetchClasses } from "./../classes/classes.actions"
import { fetchTeachers } from "./../teachers/teachers.actions"


class SubjectsNew extends Component {


    componentWillMount() {

        this.props.fetchSubjects();
        this.props.fetchClassrooms();
        this.props.fetchClasses();
        this.props.fetchTeachers();

    }


    onSubmit() {
        this.props.createLesson( {
            classroom_id: this.props.classroom,
            time_start: this.props.start,
            day_of_week: this.props.day,
            name_of_class: this.props.clas,
            teacher: this.props.teacher,
            subject: this.props.subject
        }, () => this.props.history.push("/lessons"));
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div>
                <h3>Create new lesson </h3>
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
                    <label for="description">Classroom</label>
                    <select name="cars" className="form-control"
                        onChange={(e) => { this.props.updateClassroomField(e.target.value) }}
                        value={this.props.classroom}
                    >
                        <option>None </option>
                        {_.map(this.props.classrooms, (t) => {
                            return (
                                <option value={t.id}> {t.name} </option>
                            )
                        })}
                    </select>
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
                <div className="form-group">
                    <label for="description">Day</label>
                    <select name="grades" className="form-control"
                        onChange={(e) => {
                            this.props.updateDayField(e.target.value)
                        }}
                        value={this.props.day}
                    >
                        <option>None </option>
                        <option value="0">Monday </option>
                        <option value="1">Tuesday </option>
                        <option value="2">Wednesday </option>
                        <option value="3">Thursday </option>
                        <option value="4">Friday </option>
                        <option value="5">Saturday </option>
                        <option value="6">Sunday </option>

                    </select>
                </div>

                <div className="form-group">
                    <label for="description">Time start</label>
                    <select name="grades" className="form-control"
                        onChange={(e) => {
                            this.props.updateStartField(e.target.value)
                        }}
                        value={this.props.start}
                    >
                        <option>None </option>
                        <option value="8">8.00 </option>
                        <option value="9">9.00 </option>
                        <option value="10">10.00 </option>
                        <option value="11">11.00 </option>
                        <option value="12">12.00 </option>
                        <option value="13">13.00 </option>
                        <option value="14">14.00 </option>

                    </select>
                </div>

                <div className="form-group">
                    <label for="description">Class</label>
                    <select name="cars" className="form-control"
                        onChange={(e) => { this.props.updateClassField(e.target.value) }}
                        value={this.props.clas}
                    >
                        <option>None </option>
                        {_.map(this.props.classes, (t) => {
                            return (
                                <option value={t.name_of_class}> {t.name_of_class} </option>
                            )
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label for="description">Teacher</label>
                    <select name="cars" className="form-control"
                        onChange={(e) => { this.props.updateTeacherField(e.target.value) }}
                        value={this.props.teacher}
                    >
                        <option>None </option>
                        {_.map(this.props.teachers, (t) => {
                            return (
                                <option value={t.pesel}> {t.first_name }  {t.last_name}</option>
                            )
                        })}
                    </select>
                </div>
                <button className="btn btn-success" onClick={() => this.onSubmit()} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/lessons")} > Back</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log
    return {
        classroom: state.lessons.classroom,
        start: state.lessons.start,
        day: state.lessons.day,
        clas: state.lessons.clas,
        teacher: state.lessons.teacher,
        subject: state.lessons.subject,

        teachers: state.teachers.list,
        classes: state.classes.list,
        classrooms: state.classrooms.list,
        subjects: state.subjects.list
    }
}

export default connect(mapStateToProps, {
    fetchSubjects, fetchClassrooms, fetchClasses, updateClassroomField, updateClassField, updateDayField,
    updateLesson, updateStartField, updateSubjectField, fetchTeachers,createLesson,
    updateTeacherField
})(SubjectsNew);

