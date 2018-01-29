import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_SUBJECTS = 'fetch_subjects';
export function fetchSubjects() {
    const request = instance.get(`/api/subject`);
    console.log(request);
    return {
        type: FETCH_SUBJECTS,
        payload: request
    };
}

export const CREATE_SUBJECT = "CREATE_SUBJECT";
export function createSubject(values, callback) {
    console.log(values);
    const request = instance.post(`/api/subject`, {description: values})
    .then(() => callback());
    
        
        return {
            type: CREATE_SUBJECT,
            payload: request
        };
}
export const UPDATE_SUBJECT = "UPDATE_SUBJECT";
export function updateSubject(id, values, callback) {
    const request = instance.put(`/api/subject/${id}`, {description: values})
    .then(() => callback());
    
        
        return {
            type: UPDATE_SUBJECT,
            payload: request
        };
}
export const DELETE_SUBJECT = "DELETE_SUBJECT"
export function deleteSubject(id, callback) {
    const request = instance.delete(`/api/subject/${id}`)
    .then(() => callback());

    return {
        type: DELETE_SUBJECT,
        payload: id
    }

}
export const UPDATE_DESC_FIELD = "UPDATE_DESC_FIELD"
export function updateDescField(value) {
    return {
        payload: value,
        type: UPDATE_DESC_FIELD
    }
}