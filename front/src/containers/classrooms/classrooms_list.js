import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchClassrooms, updateIdField, updateNameField, deleteClassroom } from './classrooms.actions';


class ClassroomList extends Component {

    renderRows() {
        return _.map(this.props.classrooms.list, classroom => {
            return (
                <tr>
                    <td>{classroom.classroom_id}</td>
                    <td>{classroom.name}</td>
                    <td><Link to={`/classrooms/edit/${classroom.classroom_id}`} className="btn btn-primary"
                        onClick={() => {
                            this.props.updateIdField(classroom.classroom_id);
                            this.props.updateNameField(classroom.name);
                        }}
                    >Edit </Link> </td>
                    <td><button className="btn btn-danger" onClick={() => { this.onDeleteClick(classroom.classroom_id) }} > Delete</button></td>


                </tr>
            );
        });
    }

    onDeleteClick(index) {
        this.props.deleteClassroom(index, ()=> this.props.fetchClassrooms());
    }

    componentDidMount() {
        this.props.fetchClassrooms();
    }

    render() {

        return (
            <div>

                <h2>Classrooms </h2>
                <Link to="/classrooms/new"><input type="button" className="btn btn-info" value="+ ADD"
                    onClick={() => {
                        this.props.updateIdField("");
                        this.props.updateNameField("");
                    }}
                /> </Link>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
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
        classrooms: state.classrooms
    }
}

export default connect(mapStateToProps, { fetchClassrooms, updateIdField, updateNameField, deleteClassroom })(ClassroomList);
