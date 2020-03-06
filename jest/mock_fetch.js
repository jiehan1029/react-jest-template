// mock fetch responses for each endpoint
import * as homeResponse from './mock_api/home';
import * as apiResponse from './mock_api/api';

global.fetch = jest.fn().mockImplementation((endpoint, extra)=>{
  console.log('****** mock fetch for', endpoint, extra);
  if(endpoint.includes('api/')){
    if(endpoint.includes('/endpoint1')){
      return apiResponse.endpoint1;
    }
    else if(){
      return apiResponse.endpoint2;
    }
    else{
      return apiResponse.statusOK;
    }
  }
  else{
    return homeResponse.notFound;
  }
});