import * as register from '../actions/register'
const initialState = {
  response: {},
  errors: {},
}
export default (state=initialState, action) => {
  console.log(action);
  switch(action.type) {
    case register.REGISTER_SUCCESS:
      return {
        register: true,
        errors: {}
      }
    case register.REGISTER_FAILURE:
      console.log('ESTOY AQUI');
      return {
        register: false,
        errors: 
          action.payload.response || 
          {'non_field_errors': action.payload.statusText},
      }
    default:
      return state
    }
}
    
export function errors(state) {
   return  state.errors
}
