
import { FETCH_PUPIL_PARENT } from './p_parents.actions';

export default function(state = {list: [], desc:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_PUPIL_PARENT:
        console.log(action.payload)
        return {...state, list: _.mapKeys(action.payload.data.json, 'id')};
        
        

        default:
        return state;
    }

    
}