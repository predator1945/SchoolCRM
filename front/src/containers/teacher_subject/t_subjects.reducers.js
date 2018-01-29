
import { FETCH_SUBJECTS_TEACHER } from './t_subjects.actions';

export default function(state = {list: [], desc:""}, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_SUBJECTS_TEACHER:
        console.log(action.payload)
        return {...state, list: _.mapKeys(action.payload.data.json, 'id')};
        
        

        default:
        return state;
    }

    
}