import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_PUPIL_PARENT= 'FETCH_PUPIL_PARENT';
export function fetchPupilParents(id) {
    const request = instance.get(`/api/pupil_parent?card_number=${id}`);
    console.log(request);
    return {
        type: FETCH_PUPIL_PARENT,
        payload: request
    };
}

export const CREATE_PUPIL_PARENT = 'CREATE_PUPIL_PARENT';
export function createPupilParent(card_number, parent_id, callback) {
    const request = instance.post(`/api/pupil_parent`, {card_number, parent_id})
    .then(()=> callback())
    console.log(request);
    return {
        type: CREATE_PUPIL_PARENT,
        payload: request
    };
}

export const DELETE_PUPIL_PARENT = 'DELETE_PUPIL_PARENT';
export function deletePupilParent(id, callback) {
    const request = instance.delete(`/api/pupil_parent/${id}`)
    .then(()=> callback())
    console.log(request);
    return {
        type: DELETE_PUPIL_PARENT,
        payload: request
    };
}

