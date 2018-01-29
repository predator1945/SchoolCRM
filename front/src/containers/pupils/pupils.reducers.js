
import { FETCH_PUPILS, UPDATE_CARD_FIELD, UPDATE_FNAME_FIELD, UPDATE_LNAME_FIELD, UPDATE_PESEL_FIELD } from './pupils.actions';

export default function(state = {card:"", lname:"", fname:"", pesel:"", list:[]}, action) {
    switch(action.type) {
        case FETCH_PUPILS:
        return {...state,
            list: _.mapKeys(action.payload.data.json, 'card_number')
        };

        case UPDATE_CARD_FIELD:
        return {...state, card:action.payload}

        case UPDATE_FNAME_FIELD:
        return {...state, fname:action.payload}

        case UPDATE_LNAME_FIELD:
        return {...state, lname:action.payload}

        case UPDATE_PESEL_FIELD:
        return {...state, pesel:action.payload}
        

        default:
        return state;
    }

    
}