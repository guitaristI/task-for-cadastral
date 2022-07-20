import axios from "axios";


const SET_CADAST_ITEM_DATA = 'SET_CADAST_ITEM_DATA';
const SET_VISIBLE = 'SET_VISIBLE';
const SET_DATA_IS_FETCHING = 'SET_DATA_IS_FETCHING';

let defaultState = {
    items: [],
    isFetching: false,
    visible: false
}

export default function cadastItemDataReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_CADAST_ITEM_DATA:
            return {
                ...state,
                items: action.items,
            }
        case SET_VISIBLE:
            return {
                ...state,
                visible: action.vis
            }
        case SET_DATA_IS_FETCHING:
            return {
                ...state, isFetching: action.bool
            }
        default:
            return state
    }
}

export const setCadastItemData = (items) => ({type: SET_CADAST_ITEM_DATA, items});
export const setVisible = (vis) => ({type: SET_VISIBLE, vis});
export const setDataIsFetching = (bool) => ({type: SET_DATA_IS_FETCHING, bool});

export const getCadastItemData = (searchQuery) => {
    return async (dispatch) => {
        dispatch(setDataIsFetching(true))
        axios.get(`/fir_lite_rest/api/gkn/fir_lite_object/${searchQuery}`).then(response => {
            dispatch(setCadastItemData(response.data.objectData))
            dispatch(setDataIsFetching(false))
            dispatch(setVisible(true))
        })
    }
}