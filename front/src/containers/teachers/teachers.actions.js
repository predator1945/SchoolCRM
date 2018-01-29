import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_TEACHERS = 'FETCH_TEACHERS';
export function fetchTeachers() {
    const request = instance.get(`/api/teacher`);
    console.log(request);
    return {
        type: FETCH_TEACHERS,
        payload: request
    };
}

export const CREATE_TEACHER = "CREATE_TEACHER";
export function createTeacher(values, callback) {
    console.log(values);
    const request = instance.post(`/api/teacher`, values)
    .then(() => callback());
    
        
        return {
            type: CREATE_TEACHER,
            payload: request
        };
}
export const UPDATE_TEACHER = "UPDATE_TEACHER";
export function updateTeacher(id, values, callback) {
    const request = instance.put(`/api/teacher/${id}`, values)
    .then(() => callback());
    
        
        return {
            type: UPDATE_TEACHER,
            payload: request
        };
}
export const DELETE_TEACHER = "DELETE_TEACHER"
export function deleteTeacher(id, callback) {
    const request = instance.delete(`/api/teacher/${id}`)
    .then(() => callback());

    return {
        type: DELETE_TEACHER,
        payload: id
    }

}
export const UPDATE_PESEL_TEACHER_FIELD = "UPDATE_PESEL_TEACHER_FIELD"
export function updatePeselField(value) {
    return {
        payload: value,
        type: UPDATE_PESEL_TEACHER_FIELD
    }
}
export const UPDATE_FNAME_TEACHER_FIELD = "UPDATE_FNAME_TEACHER_FIELD"
export function updateFNameField(value) {
    return {
        payload: value,
        type: UPDATE_FNAME_TEACHER_FIELD
    }
}
export const UPDATE_LNAME_TEACHER_FIELD = "UPDATE_LNAME_TEACHER_FIELD"
export function updateLNameField(value) {
    return {
        payload: value,
        type: UPDATE_LNAME_TEACHER_FIELD
    }
}