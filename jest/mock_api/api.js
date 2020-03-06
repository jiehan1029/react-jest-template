import ed1Stub from './stubs/endpoint1.json';
import ed2Stub from './stubs/endpoint2.json';

export const statusOK = Promise.resolve({
	status: 200,
	json: ()=>Promise.resolve({status: 'ok'})
});

export const endpoint1 = Promise.resolve({
	status: 200,
	json: ()=>Promise.resolve(ed1Stub)
});

export const endpoint2 = Promise.resolve({
	status: 200,
	json: ()=>Promise.resolve(ed2Stub)
});
