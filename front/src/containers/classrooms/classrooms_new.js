import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createClassroom, updateNameField } from './classrooms.actions';

class ClassroomNew extends Component {




    onSubmit() {
        setTimeout(() =>this.props.history.push("/classrooms"), 200);
        this.props.createClassroom({name: this.props.name}, ()=> this.props.history.push("/classrooms"));
        
    }


    render() {

        return (
            <div> 
                <h3>Create new classroom </h3>
                <div className="form-group">
                    <label for="id">ID</label>
                    <input type="text" 
                    className="form-control" 
                    id="id" 
                    aria-describedby="idHelp" 
                    placeholder="ID" 
                    disabled/>
                    <small id="idHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="description">Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    value={this.props.name}
                    onChange={event =>{this.props.updateNameField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button className="btn btn-success" onClick={() => this.onSubmit()} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/classrooms")} > Back</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.classrooms.name
    }
}

export default connect(mapStateToProps, { createClassroom, updateNameField })(ClassroomNew);

