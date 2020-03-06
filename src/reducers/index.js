export const endpointResponses = (state={endpoint1: {}, endpoint2: {}}, action={}) => {
  switch(action.type){
    case 'RECEIVE_RESPONSE_ENDPOINT_1':
      return {...state, endpoint1: action.value};
    case 'RECEIVE_RESPONSE_ENDPOINT_2':
      return {...state, endpoint1: action.value};
    default:
      return state;
  }
}

export default endpointResponses;