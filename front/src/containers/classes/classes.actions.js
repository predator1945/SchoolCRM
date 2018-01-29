import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_CLASSES = 'FETCH_CLASSES';
export function fetchClasses() {
    const request = instance.get(`/api/class`);
    console.log(request);
    return {
        type: FETCH_CLASSES,
        payload: request
    };
}

export const CREATE_CLASS = "CREATE_CLASS";
export function createClass(values, callback) {
    console.log(values);
    const request = instance.post(`/api/class`, values)
    .then(() => callback());
    
        
        return {
            type: CREATE_CLASS,
            payload: request
        };
}
export const UPDATE_CLASS = "UPDATE_CLASS";
export function updateClass(id, values, callback) {
    const request = instance.put(`/api/class/${id}`, values)
    .then(() => callback());
    
        
        return {
            type: UPDATE_CLASS,
            payload: request
        };
}
export const DELETE_CLASS = "DELETE_CLASS"
export function deleteClass(id, callback) {
    const request = instance.delete(`/api/class/${id}`)
    .then(() => callback());

    return {
        type: DELETE_CLASS,
        payload: id
    }

}
export const UPDATE_NAME_CLASS_FIELD = "UPDATE_NAME_CLASS_FIELD"
export function updateNameField(value) {
    return {
        payload: value,
        type: UPDATE_NAME_CLASS_FIELD
    }
}
export const UPDATE_DATE_CLASS_TEACHER_FIELD = "UPDATE_DATE_CLASS_TEACHER_FIELD"
export function updateDateField(value) {
    return {
        payload: value,
        type: UPDATE_DATE_CLASS_TEACHER_FIELD
    }
}
export const UPDATE_TEACHER_CLASS_TEACHER_FIELD = "UPDATE_TEACHER_CLASS_TEACHER_FIELD"
export function updateTeacherField(value) {
    return {
        payload: value,
        type: UPDATE_TEACHER_CLASS_TEACHER_FIELD
    }
}