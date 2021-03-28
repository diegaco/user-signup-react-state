import { useReducer } from 'react';

const reducer = (prevState = {}, nextState = {}) => {
  console.log(prevState);
  console.log(nextState);
  return {
    ...prevState,
    ...nextState
  }
};

const useSetState = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = nextState => dispatch(nextState);

  return [state, setState];
}

export default useSetState;