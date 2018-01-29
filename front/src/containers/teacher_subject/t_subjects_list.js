import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchSubjectsTeacher,deleteSubjectsTeacher } from "./t_subjects.actions"
import { fetchSubjects } from './../subjects/subjects.actions';


class SubjectsList extends Component {

    renderRows() {
        return _.map(this.props.list, a => {
            return (
                <tr key={a.id}>

                    <td> {a.id}</td>
                    <td> {this.props.subjects[a.subject_id].description}</td>
                    <td><button className="btn btn-danger" onClick={() => {this.onDeleteClick(a.id)  }} > Delete</button>

                    </td>
                </tr>
            );
        });
    }

    onDeleteClick(index) {
        console.log(index);
        this.props.deleteSubjectsTeacher(index, ()=> this.props.fetchSubjectsTeacher(this.props.match.params.id));
    }

    componentDidMount() {
        this.props.fetchSubjects();
        this.props.fetchSubjectsTeacher(this.props.match.params.id);
    }

    render() {
        console.log(this.props.subjects);

        return (
            <div>
                <h2>Subjects thought by {this.props.teacher}</h2>
                <Link to={`/t_subjects/${this.props.match.params.id}/new`} className="btn btn-info" >+ ADD </Link>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
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
    console.log(state.t_subjects);
    return {
        teacher: state.teachers.fname,
        list: state.t_subjects.list,
        subjects: state.subjects.list
    }
}

export default connect(mapStateToProps, { fetchSubjects, fetchSubjectsTeacher,deleteSubjectsTeacher })(SubjectsList);
