
import { FETCH_CLASSES, UPDATE_DATE_CLASS_TEACHER_FIELD, UPDATE_NAME_CLASS_FIELD,
        UPDATE_TEACHER_CLASS_TEACHER_FIELD } from './classes.actions';

export default function(state = {list: [], date:"", name:"", teacher:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_CLASSES:
        return {...state, list: _.mapKeys(action.payload.data.json, 'name_of_class')};

        case UPDATE_DATE_CLASS_TEACHER_FIELD:
        return {...state, date: action.payload};

        case UPDATE_NAME_CLASS_FIELD:
        return {...state, name: action.payload}
        
        case UPDATE_TEACHER_CLASS_TEACHER_FIELD:
        return {...state, teacher: action.payload};
        
       

        default:
        return state;
    }

    
}