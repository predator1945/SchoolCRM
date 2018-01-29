import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {updateSubjectField} from "./../lessons/lessons.actions";
import { fetchParents} from "./../parents/parents.actions";
import {createPupilParent} from "./p_parents.actions";


class SubjectsNew extends Component {


    componentWillMount() {

        this.props.fetchParents();

    }


    onSubmit() {
        this.props.createPupilParent( this.props.match.params.id, this.props.subject, 
            () => this.props.history.push(`/p_parents/${this.props.match.params.id}`));
    }


    render() {

        return (
            <div>
                <h3>Add parent </h3>
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
                    <label for="description">Parent</label>
                    <select name="cars" className="form-control"
                        onChange={(e) => { this.props.updateSubjectField(e.target.value) }}
                        value={this.props.subject}
                    >
                        <option>None </option>
                        {_.map(this.props.parents, (t) => {
                            return (
                                <option value={t.id}> {t.first_name} {t.last_name} </option>
                            )
                        })}
                    </select>
                </div>

                <button className="btn btn-success" onClick={() => this.onSubmit()} > Add</button>
                <button className="btn btn-danger" 
                onClick={() => this.props.history.push(`/p_parents/${this.props.match.params.id}`)} 
                > Back</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log
    return {
        subject: state.lessons.subject,

        parents: state.parents.list
    }
}

export default connect(mapStateToProps, {
    fetchParents,updateSubjectField,createPupilParent
})(SubjectsNew);

