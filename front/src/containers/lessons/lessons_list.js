import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    fetchLessons, deleteLesson, updateClassroomField, updateClassField, updateDayField,
    updateLesson, updateStartField, updateSubjectField,
    updateTeacherField, createLesson
} from './lessons.actions';
import { fetchTeachers } from "./../teachers/teachers.actions"
import { fetchClassrooms } from "./../classrooms/classrooms.actions";
import { fetchSubjects } from "./../subjects/subjects.actions"



class LessonsList extends Component {

    dayOfWeek(id) {
        switch (id) {
            case 0: return "Monday";
            case 1: return "Tuesday";
            case 2: return "Wednesday";
            case 3: return "Thursday";
            case 4: return "Friday";
            case 5: return "Saturday";
            case 6: return "Sunday";
            default: return "xdd";


        }
    }

    renderClassroom(id) {
        //console.log(this.props.classrooms)
        if (Object.keys(this.props.classrooms).length > 0) {
            return (
                <p>{this.props.classrooms[id].name} </p>
            )
        } else {
            return id;
        }
    }

    renderTeacher(id) {
        if (Object.keys(this.props.teachers).length > 0) {
            return (
                <p>{this.props.teachers[id].first_name} {this.props.teachers[id].last_name}</p>
            )
        } else {
            return id;
        }
    }
    renderSubject(id) {
        if (Object.keys(this.props.subjects).length > 0) {
            return (
                <p>{this.props.subjects[id].description}</p>
            )
        } else {
            return id;
        }
    }


    renderRows() {

        const { updateClassroomField, updateClassField, updateDayField,
            updateLesson, updateStartField, updateSubjectField,
            updateTeacherField, createLesson } = this.props;

        return _.map(this.props.lessons, lesson => {
            return (
                <tr>
                    <td> {lesson.id}</td>
                    <td>{this.renderClassroom(lesson.classroom_id)}</td>
                    <td> {lesson.time_start}</td>
                    <td> {this.dayOfWeek(lesson.day_of_week)}</td>
                    <td> {lesson.name_of_class}</td>
                    <td>{this.renderTeacher(lesson.teacher)}</td>
                    <td> {this.renderSubject(lesson.subject)}</td>
                    <td><Link to={`/lessons/edit/${lesson.id}`} className="btn btn-primary"
                        onClick={() => {
                            updateClassroomField(lesson.classroom_id);
                            updateClassField(lesson.name_of_class);
                            updateDayField(lesson.day_of_week);
                            updateStartField(lesson.time_start);
                            updateSubjectField(lesson.subject);
                            updateTeacherField(lesson.teacher);
                        }}
                    >Edit </Link> </td>
                    <td><button className="btn btn-danger" onClick={() => { this.onDeleteClick(lesson.id) }} > Delete</button></td>
                </tr>
            );
        })

        return (
            <tr><td> <div>Loading... </div></td></tr>
        )
    }

    onDeleteClick(index) {
        // console.log(index);
        this.props.deleteLesson(index, () => this.props.fetchLessons());
    }

    componentWillMount() {
        this.props.fetchClassrooms();
        this.props.fetchLessons();
        this.props.fetchTeachers();

        this.props.fetchSubjects();
    }

    render() {

        //console.log(this.props.teachers);

        return (
            <div>
                <h2>Lessons </h2>
                <Link to="/lessons/new"><input type="button" className="btn btn-info" value="+ ADD"
                 onClick={() => {
                    updateClassroomField("");
                    updateClassField("");
                    updateDayField("");
                    updateStartField("");
                    updateSubjectField("");
                    updateTeacherField("");
                }}
                /> </Link>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Classroom</th>
                            <th>Time start</th>
                            <th>Day of week</th>
                            <th>Class</th>
                            <th>Teacher</th>
                            <th>Subject</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>


                        {this.renderRows()}

                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {

    //console.log(state)
    return {

        classrooms: state.classrooms.list,
        lessons: state.lessons.list,
        teachers: state.teachers.list,
        subjects: state.subjects.list
    }
}

export default connect(
    mapStateToProps,
    {
        fetchLessons, fetchTeachers, deleteLesson, fetchClassrooms, fetchSubjects ,updateClassroomField, updateClassField, updateDayField,
        updateLesson, updateStartField, updateSubjectField,
        updateTeacherField, createLesson
    })(LessonsList);
