import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

export class App extends React.Component {
  static propTypes = {
    callback: PropTypes.func.isRequired
  }
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.callEndpoint1();
    window.addEventListener('hashchange', this.onHashchange);
  }
  componentWillUnmount(){
    window.removeEventListener('hashchange', this.onHashchange);
  }
  onHashchange = ()=>{
    if(window.location.hash === 'certainHash'){
      this.buildPerHash();
    }
  }
  callEndpoint1 = ()=>{
    fetch('/api/endpoint1')
      .then(res=>{
        if(res.status===200){
          return res.json()
        }
        return null
      })
      .then(json=>{
        console.log(json);
      })
      .catch(e=>{
        console.error(e);
      });
  }
  buildPerHash = ()=>{
    console.log('do something for specific hash');
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="cb" onClick={this.props.callback}>call props callback</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state=>({state});

const mapDispatchToProsp = dispatch => ({dispatch});

export default connect(mapStateToProps, mapDispatchToProsp)(App);
