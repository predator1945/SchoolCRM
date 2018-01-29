
import { FETCH_LESSONS, UPDATE_CLASS_LESSON_FIELD, UPDATE_CLASSROOM_LESSON_FIELD,
        UPDATE_DAY_LESSON_FIELD, UPDATE_LESSON, UPDATE_START_LESSON_FIELD,
        UPDATE_SUBJECT_LESSON_FIELD, UPDATE_TEACHER_LESSON_FIELD } from './lessons.actions';

export default function(state = {list: [], clas:"", classroom:"", day:"", start:"", subject:"", teacher:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_LESSONS:
        //console.log(action.payload)
        return {...state, list: _.mapKeys(action.payload.data.json, 'id')};
        
        case UPDATE_CLASS_LESSON_FIELD:
        return {...state, clas:action.payload}

        case UPDATE_CLASSROOM_LESSON_FIELD:
        return {...state, classroom:action.payload}

        case UPDATE_DAY_LESSON_FIELD:
        return {...state, day:action.payload}

        case UPDATE_START_LESSON_FIELD:
        return {...state, start:action.payload}

        case UPDATE_SUBJECT_LESSON_FIELD:
        return {...state, subject:action.payload}

        case UPDATE_TEACHER_LESSON_FIELD:
        return {...state, teacher:action.payload}
        

        default:
        return state;
    }

    
}