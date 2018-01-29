
import { FETCH_TEACHERS, UPDATE_FNAME_TEACHER_FIELD, UPDATE_LNAME_TEACHER_FIELD, UPDATE_PESEL_TEACHER_FIELD } from './teachers.actions';

export default function(state = {list: [], lname:"", fname:"", pesel:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_TEACHERS:
        console.log(action.payload)
        return {...state, list: _.mapKeys(action.payload.data.json, 'pesel')};
        
        case UPDATE_FNAME_TEACHER_FIELD:
        return {...state, fname:action.payload}

        case UPDATE_LNAME_TEACHER_FIELD:
        return {...state, lname:action.payload}

        case UPDATE_PESEL_TEACHER_FIELD:
        return {...state, pesel:action.payload}

        default:
        return state;
    }

    
}