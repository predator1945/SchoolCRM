import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_GRADES = 'FETCH_GRADES';
export function fetchGrades() {
    const request = instance.get(`/api/grade`);
    //console.log(request);
    return {
        type: FETCH_GRADES,
        payload: request
    };
}

export const CREATE_GRADE = "CREATE_GRADE";
export function createGrade(values, callback) {
    console.log(values);
    const request = instance.post(`/api/grade`, values)
    .then(() => callback());
    
        return {
            type: CREATE_GRADE,
            payload: request
        };
}
export const UPDATE_GRADE = "UPDATE_GRADE";
export function updateGrade(id, values, callback) {
    const request = instance.put(`/api/grade/${id}`, values)
    .then(() => callback());
    
        return {
            type: UPDATE_GRADE,
            payload: request
        };
}
export const DELETE_GRADE = "DELETE_GRADE"
export function deleteGrade(id, callback) {
    const request = instance.delete(`/api/grade/${id}`)
    .then(() => callback());

    return {
        type: DELETE_GRADE,
        payload: id
    }

}
export const UPDATE_PUPIL_GRADE_FIELD = "UPDATE_PUPIL_GRADE_FIELD"
export function updatePupilField(value) {
    return {
        payload: value,
        type: UPDATE_PUPIL_GRADE_FIELD
    }
}
export const UPDATE_DATE_GRADE_FIELD = "UPDATE_DATE_GRADE_FIELD"
export function updateDateField(value) {
    return {
        payload: value,
        type: UPDATE_DATE_GRADE_FIELD
    }
}
export const UPDATE_SUBJECT_GRADE_FIELD = "UPDATE_SUBJECT_GRADE_FIELD"
export function updateSubjectField(value) {
    return {
        payload: value,
        type: UPDATE_SUBJECT_GRADE_FIELD
    }
}
export const UPDATE_GRADE_GRADE_FIELD = "UPDATE_GRADE_GRADE_FIELD"
export function updateGradeField(value) {
    return {
        payload: value,
        type: UPDATE_GRADE_GRADE_FIELD
    }
}