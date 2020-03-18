import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { history } from "./history";
import auth, * as fromAuth from './reducers/auth'
import register, * as fromRegister from './reducers/register'

const createRootReducer = combineReducers({
  auth: auth,
  register: register,
  router: connectRouter(history),
})

export default createRootReducer

export const isAuthenticated =
 state => fromAuth.isAuthenticated(state.auth)
export const accessToken = 
  state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired =
  state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken =
  state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired =
  state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors =
  state => fromAuth.errors(state.auth)
export const authenticatedUser = 
  state => fromAuth.authenticatedUser(state.auth)
export function withAuth(headers={}) {
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  })
}

export const registerErrors =
  state => fromRegister.errors(state.register)