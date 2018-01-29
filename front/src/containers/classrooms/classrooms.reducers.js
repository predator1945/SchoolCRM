
import { FETCH_CLASSROOMS, UPDATE_NAME_CLASSROOM_FIELD, UPDATE_ID_CLASSROOM_FIELD } from './classrooms.actions';

export default function(state = {list: [], name:"", id:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_CLASSROOMS:        
        return {...state, list: _.mapKeys(action.payload.data.json, 'classroom_id')};
        
        case UPDATE_NAME_CLASSROOM_FIELD:
        return {...state, name:action.payload}

        case UPDATE_ID_CLASSROOM_FIELD:
        return {...state, id:action.payload}

        

        default:
        return state;
    }

    
}