import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_PARENTS = 'FETCH_PARENTS';
export function fetchParents() {
    const request = instance.get(`/api/parent`);
    //console.log(request);
    return {
        type: FETCH_PARENTS,
        payload: request
    };
}

export const CREATE_PARENT = "CREATE_PARENT";
export function createParent(values, callback) {
    console.log(values);
    const request = instance.post(`/api/parent`, values)
    .then(() => callback());
    
        
        return {
            type: CREATE_SUBJECT,
            payload: request
        };
}
export const UPDATE_PARENT = "UPDATE_PARENT";
export function updateParent(id, values, callback) {
    const request = instance.put(`/api/parent/${id}`, values)
    .then(() => callback());
    
        
        return {
            type: UPDATE_PARENT,
            payload: request
        };
}
export const DELETE_PARENT = "DELETE_PARENT"
export function deleteParent(id, callback) {
    const request = instance.delete(`/api/parent/${id}`)
    .then(() => callback());

    return {
        type: DELETE_PARENT,
        payload: id
    }

}
export const UPDATE_ID_PARNET_FIELD = "UPDATE_ID_PARNET_FIELD"
export function updateIdField(value) {
    return {
        payload: value,
        type: UPDATE_ID_PARNET_FIELD
    }
}
export const UPDATE_FNAME_PARENT_FIELD = "UPDATE_FNAME_PARENT_FIELD"
export function updateFNameField(value) {
    return {
        payload: value,
        type: UPDATE_FNAME_PARENT_FIELD
    }
}
export const UPDATE_LNAME_PARNET_FIELD = "UPDATE_LNAME_PARNET_FIELD"
export function updateLNameField(value) {
    return {
        payload: value,
        type: UPDATE_LNAME_PARNET_FIELD
    }
}
export const UPDATE_ADRESS_PARENT_FIELD = "UPDATE_ADRESS_PARENT_FIELD"
export function updateAdressField(value) {
    return {
        payload: value,
        type: UPDATE_ADRESS_PARENT_FIELD
    }
}
export const UPDATE_PHONE_PARENT_FIELD = "UPDATE_PHONE_PARENT_FIELD"
export function updatePhoneField(value) {
    return {
        payload: value,
        type: UPDATE_PHONE_PARENT_FIELD
    }
}