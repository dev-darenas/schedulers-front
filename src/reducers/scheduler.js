import API from '../Api';
import { setNotification } from './notifications';

const initialState = {
  fetching: false,
  dates: []
}

const SET_FETCHING  = "SET_FETCHING"
const SET_DATES     = "SET_DATES"

export default function reducer(state=initialState, action){
  switch(action.type){
    case SET_FETCHING:
      return { ...state, fetching: action.payload }
    case SET_DATES:
      return { ...state, dates: action.payload }
    default:
      return state
  }
}

//Actions
export const getSchedulersAction = () => (dispatch, getState) => {
  dispatch({ 
    type: SET_FETCHING,
    payload: true
  })

  return API.get(`/api/v1/schedulers`)
    .then(res =>{
      dispatch({ 
        type: SET_DATES,
        payload: res.data
      })
    })
    .catch(err => {
      setNotification({ message: 'Error al obtener Horario', variant: 'danger' })(dispatch, getState)
    })
    .then(res => {
      dispatch({ type: SET_FETCHING, payload: false })
    });
}

export const createSchedulersAction = (data) => (dispatch, getState) => {
  dispatch({ 
    type: SET_FETCHING,
    payload: true
  })

  return API.post(`/api/v1/schedulers`, { scheduler: data })
    .then(res =>{
      setNotification({ message: 'Horarios Creado', variant: 'success' })(dispatch, getState)
    })
    .catch(err => {
      // err.response.data.errors.dates_scheduler[0].error
      setNotification({ message: 'Fechas Invalidas', variant: 'danger' })(dispatch, getState)
    })
    .then(res => {
      dispatch({ type: SET_FETCHING, payload: false })
    });
}
