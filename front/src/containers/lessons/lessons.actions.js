import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_LESSONS = 'FETCH_LESSONS';
export function fetchLessons() {
    const request = instance.get(`/api/lesson`);
    //console.log(request);
    return {
        type: FETCH_LESSONS,
        payload: request
    };
}

export const CREATE_LESSON = "CREATE_LESSON";
export function createLesson(values, callback) {
    console.log(values);
    const request = instance.post(`/api/lesson`, values)
    .then(() => callback());
    
        return {
            type: CREATE_LESSON,
            payload: request
        };
}
export const UPDATE_LESSON = "UPDATE_LESSON";
export function updateLesson(id, values, callback) {
    const request = instance.put(`/api/lesson/${id}`, values)
    .then(() => callback());
    
        return {
            type: UPDATE_LESSON,
            payload: request
        };
}
export const DELETE_LESSON = "DELETE_LESSON"
export function deleteLesson(id, callback) {
    const request = instance.delete(`/api/lesson/${id}`)
    .then(() => callback());

    return {
        type: DELETE_LESSON,
        payload: id
    }

}
export const UPDATE_CLASSROOM_LESSON_FIELD = "UPDATE_CLASSROOM_LESSON_FIELD"
export function updateClassroomField(value) {
    return {
        payload: value,
        type: UPDATE_CLASSROOM_LESSON_FIELD
    }
}
export const UPDATE_START_LESSON_FIELD = "UPDATE_START_LESSON_FIELD"
export function updateStartField(value) {
    return {
        payload: value,
        type: UPDATE_START_LESSON_FIELD
    }
}
export const UPDATE_DAY_LESSON_FIELD = "UPDATE_DAY_LESSON_FIELD"
export function updateDayField(value) {
    return {
        payload: value,
        type: UPDATE_DAY_LESSON_FIELD
    }
}
export const UPDATE_CLASS_LESSON_FIELD = "UPDATE_CLASS_LESSON_FIELD"
export function updateClassField(value) {
    return {
        payload: value,
        type: UPDATE_CLASS_LESSON_FIELD
    }
}
export const UPDATE_TEACHER_LESSON_FIELD = "UPDATE_TEACHER_LESSON_FIELD"
export function updateTeacherField(value) {
    return {
        payload: value,
        type: UPDATE_TEACHER_LESSON_FIELD
    }
}
export const UPDATE_SUBJECT_LESSON_FIELD = "UPDATE_SUBJECT_LESSON_FIELD"
export function updateSubjectField(value) {
    return {
        payload: value,
        type: UPDATE_SUBJECT_LESSON_FIELD
    }
}