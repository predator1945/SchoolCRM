import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createSubject, updateDescField } from './subjects.actions';

class SubjectsNew extends Component {




    onSubmit(v) {
        console.log(v);
        this.props.createSubject(v, ()=> this.props.history.push("/subjects"));
    }


    render() {
        const { handleSubmit } = this.props;

        return (
            <div> 
                <h3>Create new subject </h3>
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
                    <label for="description">Description</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="description" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter description" 
                    value={this.props.desc}
                    onChange={event =>{this.props.updateDescField(event.target.value)}}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button className="btn btn-success" onClick={() => this.onSubmit(this.props.desc)} > Add</button>
                <button className="btn btn-danger" onClick={() => this.props.history.push("/subjects")} > Back</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        desc: state.subjects.desc
    }
}

export default connect(mapStateToProps, { createSubject, updateDescField })(SubjectsNew);

