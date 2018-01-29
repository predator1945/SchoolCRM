
import { FETCH_PARENTS, UPDATE_FNAME_PARENT_FIELD,
     UPDATE_ADRESS_PARENT_FIELD, UPDATE_LNAME_PARNET_FIELD, 
     UPDATE_PHONE_PARENT_FIELD, UPDATE_ID_PARNET_FIELD } from './parents.actions';

export default function(state = {list: [], lname:"", fname:"", adress:"", id:"", phone:"" }, action) {
    //console.log(action.payload)
    switch(action.type) {
        case FETCH_PARENTS:
        console.log(action.payload)
        return {...state, list: _.mapKeys(action.payload.data.json, 'id')};
        
        case UPDATE_FNAME_PARENT_FIELD:
        return {...state, fname: action.payload}

        case UPDATE_ADRESS_PARENT_FIELD:
        return {...state, adress: action.payload}

        case UPDATE_LNAME_PARNET_FIELD:
        return {...state, lname: action.payload}

        case UPDATE_PHONE_PARENT_FIELD:
        return {...state, phone: action.payload}
        
        case UPDATE_ID_PARNET_FIELD:
        return {...state, id: action.payload}

        default:
        return state;
    }

    
}