import jwtDecode from 'jwt-decode'
import * as auth from '../actions/auth'
const initialState = {
  access: undefined,
  refresh: undefined,
  errors: {},
}
export default (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case auth.LOGIN_SUCCESS:
      return {
        access: {
          token: action.payload.access,
          ...jwtDecode(action.payload.access)
        },
        refresh: {
          token: action.payload.refresh,
          ...jwtDecode(action.payload.refresh)
        },
        errors: {}
    }
    case auth.TOKEN_RECEIVED:
      return {
        ...state,
        access: {
          token: action.payload.access,
          ...jwtDecode(action.payload.access)
        }
      }
    case auth.LOGIN_FAILURE:
    case auth.TOKEN_FAILURE:
      return {
         access: undefined,
         refresh: undefined,
         errors: 
             action.payload.response || 
                {'non_field_errors': action.payload.statusText},
      }
    case auth.USER_LOGOUT:
      return {
        access: undefined,
        refresh: undefined,
        errors: {}
      }
    default:
      return state
    }
}

export function accessToken(state) {
    if (state.access) {
        return  state.access.token
    }
}
    
export function refreshToken(state) {
    if (state.refresh) {
        return  state.refresh.token
    }
}
    
export function isAccessTokenExpired(state) {
  if (state.access && state.access.exp) {
    return 1000 * state.access.exp - (new Date()).getTime() < 5000
  }
  return true
}
export function isRefreshTokenExpired(state) {
  if (state.refresh && state.refresh.exp) {
    console.log(1000 * state.refresh.exp - (new Date()).getTime());
    return 1000 * state.refresh.exp - (new Date()).getTime() < 5000 //Cambiarlo por mayor
  }
  return true
}
export function isAuthenticated(state) {
  return !isRefreshTokenExpired(state)
}
export function errors(state) {
   return  state.errors
}

export function authenticatedUser(state) {
    if (isAuthenticated(state)) {
        return state.access.user_id;
    }

    return false;
}