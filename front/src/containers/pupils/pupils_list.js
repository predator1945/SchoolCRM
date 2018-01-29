import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchPupils, deletePupil, updateCardField, updateFNameField, updateLNameField, updatePeselField } from './pupils.actions'


class PupilsList extends Component {

    renderRows() {
        console.log(this.props.pupils);
        const { updateCardField, updateFNameField, updateLNameField, updatePeselField } = this.props;
        return _.map(this.props.pupils.list, pupil => {
            return (
                <tr>
                    <td>{pupil.card_number} </td>
                    <td>{pupil.first_name} </td>
                    <td>{pupil.last_name} </td>
                    <td>{pupil.pesel} </td>
                    <td><button className="btn btn-light" 
                    onClick={() => { 
                        updateFNameField(pupil.first_name + " " + pupil.last_name);
                        this.props.history.push(`/p_parents/${pupil.card_number}`);

                    }} 
                    > Parents</button></td>
                    <td><Link to={`/pupils/edit/${pupil.card_number}`} className="btn btn-primary"
                        onClick={() => {
                            updateCardField(pupil.card_number);
                            updateFNameField(pupil.first_name);
                            updateLNameField(pupil.last_name);
                            updatePeselField(pupil.pesel);
                        }}
                    >Edit </Link> </td>
                    <td><button className="btn btn-danger" onClick={() => { this.onDeleteClick(pupil.card_number) }} > Delete</button></td>

                </tr>
            );
        });
    }

    onDeleteClick(index) {
        console.log(index);
        this.props.deletePupil(index, ()=>{this.props.fetchPupils()});
    }

    componentDidMount() {
        this.props.fetchPupils();
    }

    render() {

        return (
            <div>
                <h2>Pupils </h2>
                <Link to="/pupils/new"><input type="button" className="btn btn-info" value="+ ADD"
                onClick={() => {
                    updateCardField("");
                    updateFNameField("");
                    updateLNameField("");
                    updatePeselField("");
                }}
                /> </Link>

                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Card number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>PESEL</th>
                            <th>Parents </th>
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
        pupils: state.pupils
    }
}

export default connect(mapStateToProps, { fetchPupils, deletePupil, updateCardField, updateFNameField, updateLNameField, updatePeselField })(PupilsList);
