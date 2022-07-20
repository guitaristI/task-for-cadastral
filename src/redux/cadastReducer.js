import axios from "axios";

const SET__CADAST = 'SET__CADAST';
const SET_IS_FETCHING = 'SET_IS_FETCHING';


let defaultState = {
    items: [],
    isFetching: false
}

export default function cadastReducer(state = defaultState, action) {
    switch (action.type) {
        case SET__CADAST:
            return {
                ...state,
                items: [...action.items],
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            }
        default:
            return state
    }
}

export const setCadastItems = (items) => ({type: SET__CADAST, items});
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, bool});


export const getCadastItems = (searchQuery) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        axios.get(`/fir_lite_rest/api/gkn/fir_objects/${searchQuery}*`).then(response => {
            dispatch(setCadastItems(response.data))
        })
    }
}