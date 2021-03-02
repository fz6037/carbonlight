
import { 
    DATA_LIST_FETCH,
    DATA_LIST_SUCCESS,
    DATA_LIST_ERROR,
    DATA_LIST_ACCESS_DENIED,
 } from '../actions/types';

 
const initialState = {
    loading: false,
    dataDetail: {},
    dataList:[],
    error: null,
    accesDenied: null,
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case DATA_LIST_FETCH:
            return {
                ...state,
                error: null,
                dataList: [],
                loading: true,
                accesDenied: null
            };
        case DATA_LIST_SUCCESS:
            return {
                ...state,
                dataList: action.payload,
                loading: false,
            };
        case DATA_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        case DATA_LIST_ACCESS_DENIED:
            return {
                ...state,
                accesDenied: true,
                error: null,
                loading: false,
            };
        default:
            return state;
    }
}
