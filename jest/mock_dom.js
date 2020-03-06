import { JSDOM } from 'jsdom';
const jsdom = new JSDOM('<!doctype html><html><body><div id="app"></div></body></html>');
global.window = jsdom.window;
global.document = jsdom.window.document;

// assign window variables here
global.window.someVariable = 'valueOfTheVariable';


// mock some window methods
global.window.addEventListener = ()=>{
	// console.log('window addEventListener');
}

global.window.removeEventListener = ()=>{
	// console.log('window removeEventListener');
}

global.window.scrollTo = ()=>{
  // console.log('window scrollTo mock');
}


