This is a template for setup unit and integration testing for React & Redux.

Example react application is bootstraped with `create-react-app`.

Test toolkit includes [Jest](https://jestjs.io/docs/en/getting-started), [Enzyme](https://enzymejs.github.io/enzyme/), [react-test-renderer](https://reactjs.org/docs/test-renderer.html) (for snapshot rendering), and [istanbul](https://istanbul.js.org/) (for coverage report).

`create-react-app` comes with [React Testing Library](https://github.com/testing-library/react-testing-library) which has overlaps with [react-test-renderer](https://reactjs.org/docs/test-renderer.html), I've only used the latter so switched to that for convenience.

### Setup redux store and api mock
I didn't use [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store#readme) because especially for complex application I'd like to have a real store where I can freely save data into it / pull state out of it, i.e, exactly the same way as in real world. My approach is to build a real redux store during testing, and put real data (in terms of schema) into it.

To achive this, responses from api must be mocked. And there're libraries such as [fetch-mock](http://www.wheresrhys.co.uk/fetch-mock/) can step in between the fetch process to substitute the response. I choose to use Jest mock functions (https://jestjs.io/docs/en/mock-function-api.html) because it requires no additional pacakage, and only need to setup one time globally for all requests where `fetch` function is used. It also provides great flexibility in configure the response specific to different endpoint, and serve the response as promise of json data stubs. See `jest` folder and jest configuration in `package.json` for details.

### Situations to test
* Snapshot render.
* callback function in lifecycle methods
* callback function passed as props
* callback function triggered via window hashchange
