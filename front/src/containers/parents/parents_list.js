import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
    fetchParents, deleteParent, updateAdressField, updatePhoneField,
    updateFNameField, updateLNameField, updateIdField
} from './parents.actions';


class ParentsList extends Component {

    renderRows() {
        const { deleteParent, updateAdressField,
            updateFNameField, updateLNameField, updateIdField, updatePhoneField } = this.props
        return _.map(this.props.parents.list, parent => {
            return (
                <tr>
                    <td> {parent.id}</td>
                    <td> {parent.first_name}</td>
                    <td> {parent.last_name}</td>
                    <td> {parent.phone_number}</td>
                    <td> {parent.address}</td>
                    <td><Link to={`/parents/edit/${parent.id}`} className="btn btn-primary"
                        onClick={() => {
                            updateAdressField(parent.address);
                            updateFNameField(parent.first_name);
                            updateLNameField(parent.last_name);
                            updateIdField(parent.id);
                            updatePhoneField(parent.phone_number);
                        }}
                    >Edit </Link> </td>
                    <td><button className="btn btn-danger" onClick={() => { this.onDeleteClick(parent.id) }} > Delete</button></td>
                </tr>
            );
        })
    }

    onDeleteClick(index) {
        console.log(index);
        this.props.deleteParent(index, ()=> this.props.fetchParents());
    }

    componentDidMount() {
        this.props.fetchParents();
    }

    render() {
        const { deleteParent, updateAdressField,
            updateFNameField, updateLNameField, updateIdField, updatePhoneField } = this.props

        return (
            <div>
                <h2>Parents </h2>
                <Link to="/parents/new"><input type="button" className="btn btn-info" value="+ ADD" 
                onClick={()=>{
                    updateAdressField("");
                    updateFNameField("");
                    updateLNameField("");
                    updateIdField("");
                    updatePhoneField("");

                }}
                /> </Link>


                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th> Phone number</th>
                            <th>Adress</th>
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
        parents: state.parents
    }
}

export default connect(mapStateToProps, { fetchParents, deleteParent, updateAdressField,
    updateFNameField, updateLNameField, updateIdField, updatePhoneField })(ParentsList);



