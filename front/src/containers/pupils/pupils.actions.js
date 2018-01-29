import axios from 'axios';
import $ from 'jquery';
import _ from 'lodash';

const instance = axios.create({baseURL: 'http://localhost:5000'})


export const FETCH_PUPILS = 'FETCH_PUPILS';
export function fetchPupils() {
    const request = instance.get(`/api/pupil`);
    //console.log(request);
    return {
        type: FETCH_PUPILS,
        payload: request
    };
}

export const CREATE_PUPIL = "CREATE_PUPIL";
export function createPupil(values, callback) {
    console.log(values);
    const request = instance.post(`/api/pupil`, values)
    .then(() => callback());
    
        
        return {
            type: CREATE_PUPIL,
            payload: request
        };
}
export const UPDATE_PUPIL = "UPDATE_PUPIL";
export function updatePupil(id, values, callback) {
    const request = instance.put(`/api/pupil/${id}`, values)
    .then(() => callback());
    
        
        return {
            type: UPDATE_PUPIL,
            payload: request
        };
}
export const DELETE_PUPIL = "DELETE_PUPIL"
export function deletePupil(id, callback) {
    const request = instance.delete(`/api/pupil/${id}`)
    .then(() => callback());

    return {
        type: DELETE_PUPIL,
        payload: id
    }

}
export const UPDATE_CARD_FIELD = "UPDATE_CARD_FIELD"
export function updateCardField(value) {
    return {
        payload: value,
        type: UPDATE_CARD_FIELD
    }
}

export const UPDATE_PESEL_FIELD = "UPDATE_PESEL_FIELD"
export function updatePeselField(value) {
    return {
        payload: value,
        type: UPDATE_PESEL_FIELD
    }
}

export const UPDATE_FNAME_FIELD = "UPDATE_FNAME_FIELD"
export function updateFNameField(value) {
    return {
        payload: value,
        type: UPDATE_FNAME_FIELD
    }
}

export const UPDATE_LNAME_FIELD = "UPDATE_LNAME_FIELD"
export function updateLNameField(value) {
    return {
        payload: value,
        type: UPDATE_LNAME_FIELD
    }
}