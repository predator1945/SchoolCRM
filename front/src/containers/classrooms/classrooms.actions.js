import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_CLASSROOMS = 'FETCH_CLASSROOMS';
export function fetchClassrooms() {
    const request = instance.get(`/api/classroom`);
    console.log(request);
    return {
        type: FETCH_CLASSROOMS,
        payload: request
    };
}

export const CREATE_CLASSROOM = "CREATE_CLASSROOM";
export function createClassroom(values, callback) {
    console.log(values);
    const request = instance.post(`/api/classroom`, {name: values.name})
    .then(() => callback());
    
        
        return {
            type: CREATE_CLASSROOM,
            payload: request
        };
}
export const UPDATE_CLASSROOM = "UPDATE_CLASSROOM";
export function updateClassroom(id, values, callback) {
    const request = instance.put(`/api/classroom/${id}`, values)
    .then(() => callback());
    
        
        return {
            type: UPDATE_CLASSROOM,
            payload: request
        };
}
export const DELETE_CLASSROOM = "DELETE_CLASSROOM"
export function deleteClassroom(id, callback) {
    const request = instance.delete(`/api/classroom/${id}`)
    .then(() => callback());

    return {
        type: DELETE_CLASSROOM,
        payload: id
    }

}
export const UPDATE_ID_CLASSROOM_FIELD = "UPDATE_ID_CLASSROOM_FIELD"
export function updateIdField(value) {
    return {
        payload: value,
        type: UPDATE_ID_CLASSROOM_FIELD
    }
}
export const UPDATE_NAME_CLASSROOM_FIELD = "UPDATE_ID_CLASSROOM_FIELD"
export function updateNameField(value) {
    return {
        payload: value,
        type: UPDATE_NAME_CLASSROOM_FIELD
    }
}