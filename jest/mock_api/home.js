export const notFound = Promise.resolve({
	status: 404,
	json: ()=>Promise.resolve({details:'not found'})
});