import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchSubjects, deleteSubject, updateDescField } from './subjects.actions';


class SubjectsList extends Component {

    renderRows() {
        return _.map(this.props.subjects, subject => {
            return (
                <tr key={subject.id}>
                    <td> {subject.id}</td>
                    <td> {subject.description}</td>
                    
                    <td><Link to={`/subjects/edit/${subject.id}`} className="btn btn-primary"
                    onClick={() => this.props.updateDescField(subject.description)}
                    >Edit </Link> </td>

                    <td><button className="btn btn-danger" onClick={ () => {this.onDeleteClick(subject.id)}} > Delete</button>
                    
                    </td>
                </tr>
            );
        });
    }

    onDeleteClick(index) {
        console.log(index);
        this.props.deleteSubject(index, ()=> this.props.fetchSubjects());
    }

    componentDidMount() {
        this.props.fetchSubjects();
    }

    render() {
        console.log(this.props.subjects);

        return (
            <div>
                <h2>Subjects </h2>
                <Link to="/subjects/new" className="btn btn-info" onClick={ ()=> this.props.updateDescField("")}>+ ADD </Link>

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
        subjects: state.subjects.list
    }
}

export default connect(mapStateToProps, { fetchSubjects, deleteSubject, updateDescField })(SubjectsList);
