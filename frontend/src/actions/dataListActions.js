
import { 
    DATA_LIST_FETCH,
    DATA_LIST_SUCCESS,
    DATA_LIST_ERROR,
    DATA_LIST_ACCESS_DENIED,
 } from './types';


export const fetchDataList = () => {
    return dispatch => {
        console.log('Redux - Data List')
        dispatch(dataListFetch());
        fetch("/api/v1/category/")
        .then(res => {if(res.status == 200){return res.json()}else{return null}})
        .then(res => {
            if (res != null){
                console.log('Redux - success')
                dispatch(dataListSuccess(res));
            } else {
                console.log('Redux - error')
                dispatch(dataListAccessDenied())
            }
        })
        .catch(err => {
            dispatch(dataListError(err.message));
        });
    };
};



const dataListFetch = () => ({
    type: DATA_LIST_FETCH
});

const dataListSuccess = data => ({
    type: DATA_LIST_SUCCESS,
    payload: data
});


const dataListError = error => ({
    type: DATA_LIST_ERROR,
    payload: {
        error
    }
});

const dataListAccessDenied = () => ({
    type: DATA_LIST_ACCESS_DENIED
});


