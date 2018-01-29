import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchClasses, deleteClass,  updateDateField, 
    updateNameField, updateTeacherField, } from './classes.actions';
import {fetchTeachers} from './../teachers/teachers.actions';


class ClassessList extends Component {

    renderRows() {
        const {updateDateField, updateNameField, updateTeacherField} = this.props;
        return _.map(this.props.classes.list, clas => {
            return (
                <tr>
                    <td>{clas.name_of_class}</td>
                    <td>{clas.date_of_grad.slice(0, 10)}</td>
                    <td>{this.props.teachers[clas.counsellor_id].first_name} {this.props.teachers[clas.counsellor_id].last_name}</td>
                    <td><Link to={`/classes/edit/${clas.name_of_class}`} className="btn btn-primary"
                    onClick={()=>{
                        updateDateField(clas.date_of_grad);
                        updateNameField(clas.name_of_class);
                        updateTeacherField(clas.counsellor_id);
                    }}                    
                    >Edit </Link> </td>
                    <td><button className="btn btn-danger" onClick={ () => {this.onDeleteClick(clas.name_of_class)}} > Delete</button></td>

                </tr>
            );
        });
    }

    onDeleteClick(index) {
        console.log(index);
        this.props.deleteClass(index, ()=> this.props.fetchClasses());
    }

    componentDidMount() {
        this.props.fetchTeachers();
        this.props.fetchClasses();
        
    }

    render() {

        return (
            <div>
                <h2>Classes </h2>
                <Link to="/classes/new"><input type="button" className="btn btn-info" value="+ ADD" 
                nClick={()=>{
                    updateDateField("");
                    updateNameField("");
                    updateTeacherField("");
                }}  
                /> </Link>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Graduation</th>
                            <th>Name of counselor</th>
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
        classes: state.classes,
        teachers: state.teachers.list
    }
}

export default connect(mapStateToProps, {fetchTeachers,  updateDateField, updateNameField, updateTeacherField, fetchClasses, deleteClass })(ClassessList);
