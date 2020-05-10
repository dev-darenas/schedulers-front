
const initialState = {
  message: '',
  variant: '',
  show: false
}

const SET_SHOW  = "SET_SHOW"
const SET_NOTIFICATION  = "SET_NOTIFICATION"

export default function reducer(state=initialState, action){
  switch(action.type){
    case SET_NOTIFICATION:
      return { ...state, message: action.payload.message, variant: action.payload.variant, show: true }
    case SET_SHOW:
      return { ...state, message: '', variant: '', show: action.payload }
    default:
      return state
  }
}

//Actions
export const setShow = (status) => (dispatch, _getState) => {
  dispatch({
    type: SET_SHOW,
    payload: status
  })
}

export const setNotification = (data) => (dispatch, _getState) => {
  dispatch({
    type: SET_NOTIFICATION,
    payload: {
      message: data.message,
      variant: data.variant
    }
  })
}
