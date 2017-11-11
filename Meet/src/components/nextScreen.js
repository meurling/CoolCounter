import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class NextScreen extends Component {
  render(){
    return (
      <Text style = {{fontSize: 20, fontWeight: 'bold'}}>
        count:   {this.props.count}
      </Text>
    );
  }
}


function mapStateToProps(state){
return{
 count : state.count
};
}
function matchDispatchToProps(dispatch){
return bindActionCreators({increment: increment, decrement: decrement}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(NextScreen);
