import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { cloneDeep } from 'lodash';
import { teardownGlobals } from '../jest/teardown_globals';
import { createMockStore, loadEd1ResponseToStore, loadEd2ResponseToStore } from '../jest/mock_store';

import App from './App';

describe('App Testing', () => {
  const initialProps = {
  	// put initial props here
  	callback: jest.fn()
  };

  let store, props;

  beforeAll(()=>{
    props = initialProps;
    store = createMockStore();
    store = loadEd1ResponseToStore(store);
    store = loadEd2ResponseToStore(store);
  });

  beforeEach(()=>{
    props = cloneDeep(initialProps);
  });

  afterAll(()=>{
    teardownGlobals();
  });

  test('snapshot renders', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render.', () => {
    const wrapper = mount(
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should trigger function to fetch data after did mount.', ()=>{
  	// clear the store first by override ed1 response with {} in reducer
    store = loadEd1ResponseToStore(store, {});

    const wrapper = mount(
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    );
    // must find the unconnected component wrapped inside provider to create an instance
    const instance = wrapper.find('App').instance();
    // spy on instance is easiest
    const spy = jest.spyOn(instance, 'callEndpoint1');
    // must manually trigger componentDidMount method on instance;
    instance.componentDidMount();
    // check if function is called
    expect(spy).toHaveBeenCalledTimes(1);

    // reload store
    store = loadEd1ResponseToStore(store);
  });
  
  it('should trigger callback function after clicking the button.', ()=>{
    const wrapper = mount(
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    );
    const btn = wrapper.find('button.cb').first();
    btn.simulate('click');
    // check if function is called
    expect(props.callback).toHaveBeenCalledTimes(1);

    // after check UI change after call update
    wrapper.update();
  });

  it('should trigger function via hash change.', ()=>{
  	// set hash
    window.location.hash = '#certainHash';

    const wrapper = mount(
      <Provider store={store}>
        <App {...props}/>
      </Provider>
    );
    const instance = wrapper.find('App').instance();
    const spy = jest.spyOn(instance, 'buildPerHash');
    instance.componentDidMount();
    expect(spy).toHaveBeenCalledTimes(1);

    // change hash back
    window.location.hash = '';
  });
});
