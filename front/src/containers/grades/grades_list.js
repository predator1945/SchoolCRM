import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchGrades, deleteData, updateDateField, updatePupilField, updateSubjectField, updateGradeField } from './grades.actions';
import { fetchPupils } from './../pupils/pupils.actions';
import {fetchSubjects } from './../subjects/subjects.actions';


class GradesList extends Component {

    renderName(card) {
        if(Object.keys(this.props.pupils).length > 0) {
            return (
                <p>{this.props.pupils[card].first_name} {this.props.pupils[card].last_name}</p>
            )
        } else {
            return card;
        }
    } 
    
    renderSubject(id) {
        if(Object.keys(this.props.subjects).length > 0) {
            return (
                <p>{this.props.subjects[id].description}</p>
            )
        } else {
            return id;
        }
    }

    renderRows() {
        const {pupils, updateDateField, updatePupilField, updateSubjectField, updateGradeField} = this.props;    
        
        return _.map(this.props.grades, grade => {
            return (
                <tr>
                    <td>{grade.id}</td>
                    <td>{this.renderName(grade.card_number)}</td>
                    <td>{grade.date_of_reciv.slice(0, 10)} </td>
                    <td>{grade.grade}</td>
                    <td>{this.renderSubject(grade.subject_id)}</td>
                    <td><button className="btn btn-info" 
                    onClick={ () => {
                        updateDateField(grade.date_of_reciv);
                        updatePupilField(grade.card_number);
                        updateSubjectField(grade.subject_id);
                        updateGradeField(grade.grade);
                        this.props.history.push(`/grades/edit/${grade.id}`)
                    }} > Edit</button></td>
                    <td><button className="btn btn-danger" onClick={ () => {this.onDeleteClick(grade.id)}} > Delete</button></td>

                </tr>
            );
        });
    }

    onDeleteClick(index) {
        console.log(index);
        this.props.deleteGrade(index,()=> this.props.history.push("/grades")) ;
    }

    componentWillMount() {
        this.props.fetchPupils()
        this.props.fetchGrades()
        this.props.fetchSubjects();
        
        
    }


    render() {

        const {pupils, updateDateField, updatePupilField, updateSubjectField, updateGradeField} = this.props;    
        return (
            <div>
                <h2>Grades </h2>
                <Link to="/grades/new"><input type="button" className="btn btn-info" value="+ ADD" 
                onClick={ () => {
                    updateDateField("");
                    updatePupilField("");
                    updateSubjectField("");
                    updateGradeField("")
                }}
                /> </Link>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pupil</th>
                            <th>Date</th>
                            <th>Grade</th>
                            <th>Subject</th>
                            <th>Edit </th>
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

    console.log(Object.keys(state.pupils.list).length)
    return {
        pupils: state.pupils.list,
        grades: state.grades.list,
        subjects: state.subjects.list
    }
}

export default connect(mapStateToProps, {fetchPupils, fetchGrades, deleteData, fetchSubjects, updateDateField, updatePupilField, updateSubjectField, updateGradeField })(GradesList);
