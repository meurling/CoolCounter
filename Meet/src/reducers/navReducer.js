import {AppRouteConfigs} from '../routes.js';
import {StackNavigator} from 'react-navigation';

export const AppNavigator = StackNavigator(AppRouteConfigs);
console.log('action: ', AppNavigator.router.getActionForPathAndParams('Counter'));
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Counter'));

//navReducer
export default (state = initialState, action) => {
  console.log('action:',action);
  console.log('orgState:', state);
  const nextState = AppNavigator.router.getStateForAction(action, state);
  console.log('nextState:', nextState);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
