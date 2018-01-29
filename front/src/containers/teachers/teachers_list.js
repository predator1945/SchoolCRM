import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchTeachers, updateFNameField, updateLNameField, updatePeselField, deleteTeacher } from './teachers.actions';


class TeachersList extends Component {

    renderRows() {
        const {updateFNameField, updateLNameField, updatePeselField} = this.props;
        return _.map(this.props.teachers.list, teacher => {
            return (
                <tr>
                    <td> {teacher.pesel}</td>
                    <td> {teacher.first_name}</td>
                    <td> {teacher.last_name}</td>
                    <td><button className="btn btn-light" onClick={ () => {
                        updateFNameField(teacher.first_name + " " + teacher.last_name);
                        this.props.history.push(`/t_subjects/${teacher.pesel}`)
                    }} > Subjects</button></td>
                    <td><Link to={`/teachers/edit/${teacher.pesel}`} className="btn btn-primary"
                    onClick={()=> {
                        updateFNameField(teacher.first_name);
                        updateLNameField(teacher.last_name);
                        updatePeselField(teacher.pesel);
                    }}
                    >Edit </Link> </td>
                    <td><button className="btn btn-danger" onClick={ () => {this.onDeleteClick(teacher.pesel)}} > Delete</button></td>
                </tr>
            );
        })
    }

    onDeleteClick(index) {
        console.log(index);
        this.props.deleteTeacher(index, ()=> this.props.fetchTeachers());
    }

    componentDidMount() {
        this.props.fetchTeachers();
    }

    render() {
        console.log(this.props.teachers);
        const {updateFNameField, updateLNameField, updatePeselField} = this.props;
        return (
            <div>
                <h2>Teachers </h2>
                <Link to="/teachers/new"><input type="button" className="btn btn-info" value="+ ADD" 
                onClick={()=> {
                    updateFNameField("");
                    updateLNameField("");
                    updatePeselField("");
                }}
                /> </Link>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>PESEL</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Subjects</th>
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
    return {
        teachers: state.teachers
    }
}

export default connect(mapStateToProps, { fetchTeachers, updateFNameField, updateLNameField, updatePeselField, deleteTeacher })(TeachersList);
