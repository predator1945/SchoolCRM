import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchPupilParents, deletePupilParent} from "./p_parents.actions";
import { fetchParents } from './../parents/parents.actions';
import { fetchPupils } from "./../pupils/pupils.actions"


class SubjectsList extends Component {

    

    

    componentDidMount() {
        this.props.fetchPupils();
        this.props.fetchParents();
        this.props.fetchPupilParents(this.props.match.params.id);
    }

    renderRows() {
        return _.map(this.props.list, i => {
            let p = this.props.parents[i.parent_id];
            return (
                <tr>
                    <td>{i.id}</td>
                    <td>{p.first_name}</td>
                    <td>{p.last_name}</td>
                    <td>{p.phone_number}</td>
                    <td>{p.address}</td>
                    <td> <button className="btn btn-danger" onClick={() => { 
                        this.props.deletePupilParent(i.id, ()=> this.props.fetchPupilParents(this.props.match.params.id))
                     }} > Delete</button></td>
                    </tr>
            );
        });
    }

    render() {

        return (
            <div>
                <h2>Parents of  {this.props.pupil}</h2>
                <Link to={`/p_parents/${this.props.match.params.id}/new`}><input type="button" className="btn btn-info" value="+ ADD" 
                
                /> </Link>


                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th> Phone number</th>
                            <th>Adress</th>
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
        pupil: state.pupils.fname,
        pupils: state.pupils.list,
        teacher: "xd",
        list: state.p_parents.list,
        parents: state.parents.list
    }
}

export default connect(mapStateToProps, { fetchParents, fetchPupilParents, deletePupilParent,fetchPupils })(SubjectsList);
