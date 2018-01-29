
import { FETCH_SUBJECTS, UPDATE_DESC_FIELD } from './subjects.actions';

export default function(state = {list: [], desc:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_SUBJECTS:
        console.log(action.payload)
        return {...state, list: _.mapKeys(action.payload.data.json, 'id')};
        
        case UPDATE_DESC_FIELD:
        return {...state, desc:action.payload}

        default:
        return state;
    }

    
}