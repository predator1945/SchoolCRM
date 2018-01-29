import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_SUBJECTS_TEACHER = 'FETCH_SUBJECTS_TEACHER';
export function fetchSubjectsTeacher(id) {
    const request = instance.get(`/api/teacher_subject?pesel=${id}`);
    console.log(request);
    return {
        type: FETCH_SUBJECTS_TEACHER,
        payload: request
    };
}

export const CREATE_SUBJECTS_TEACHER = 'CREATE_SUBJECTS_TEACHER';
export function create(pesel, subject_id, callback) {
    const request = instance.post(`/api/teacher_subject`, {pesel, subject_id})
    .then(()=> callback())
    console.log(request);
    return {
        type: FETCH_SUBJECTS_TEACHER,
        payload: request
    };
}

export const DELETE_SUBJECTS_TEACHER = 'DELETE_SUBJECTS_TEACHER';
export function deleteSubjectsTeacher(id, callback) {
    const request = instance.delete(`/api/teacher_subject/${id}`)
    .then(()=> callback())
    console.log(request);
    return {
        type: DELETE_SUBJECTS_TEACHER,
        payload: request
    };
}

