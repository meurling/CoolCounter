import React, { Component } from 'react';
import allReducers from './src/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';

import { addNavigationHelpers } from 'react-navigation';
import {AppNavigator} from './src/reducers/navReducer.js';
import Counter from './src/components/counter.js';

const store = createStore(allReducers);
class App extends Component{
  render(){
    return(
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);


export default class Root extends Component{
  render(){
    return(
      <Provider store={store}>
        <AppWithNavigationState/>  
      </Provider>
    )
  }
}

/*

class App extends React.Component {
  render() {
    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
      })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

*/