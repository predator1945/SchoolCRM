
import { FETCH_GRADES, UPDATE_DATE_GRADE_FIELD,
    UPDATE_PUPIL_GRADE_FIELD, UPDATE_SUBJECT_GRADE_FIELD, UPDATE_GRADE_GRADE_FIELD } from './grades.actions';

export default function(state = {list: [], grade:"", subject:"", pupil:"", date:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_GRADES:
        //console.log(action.payload)
        return {...state, list: _.mapKeys(action.payload.data.json, 'id')};
        
        case UPDATE_DATE_GRADE_FIELD:
        return {...state, date:action.payload}

        case UPDATE_SUBJECT_GRADE_FIELD:
        return {...state, subject:action.payload}

        case UPDATE_PUPIL_GRADE_FIELD:
        return {...state, pupil:action.payload}

        case UPDATE_GRADE_GRADE_FIELD:
        return {...state, grade:action.payload}

        default:
        return state;
    }

    
}