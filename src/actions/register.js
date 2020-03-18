import { RSAA } from 'redux-api-middleware';
export const REGISTER_REQUEST = '@@auth/REGISTER_REQUEST';
export const REGISTER_SUCCESS = '@@auth/REGISTER_SUCCESS';
export const REGISTER_FAILURE = '@@auth/REGISTER_FAILURE';

export const register = (first_name, last_name, email, password, profile) => ({
  [RSAA]: {
    endpoint: 'https://167.172.142.59/accounts/users/',
    method: 'POST',
    body: JSON.stringify({first_name, last_name, email, password, profile}),
    headers: { 'Content-Type': 'application/json' },
    types: [
      REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE
    ]
  }
})