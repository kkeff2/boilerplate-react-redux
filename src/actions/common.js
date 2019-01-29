import {
  // ASYNC_CALL_ERROR,
  ASYNC_CALL_OK,
  ASYNC_CALL_START
} from '../constants/actionTypes'
import testServiceResponse from '../mocks/testServiceResponse'

export const callFakeServer = props => {
  return dispatch => {
    console.log(props)
    dispatch({type: ASYNC_CALL_START})
    setTimeout(() => {
      dispatch({type: ASYNC_CALL_OK, response: testServiceResponse})
      // dispatch({type: ASYNC_CALL_ERROR, ok: 'ok'});
    }, 2000)
  }
}
