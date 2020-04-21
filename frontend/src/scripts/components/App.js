import React from 'react';
import '../../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}
// mapStateToProps(state, ownProps) => ({ todos: state.todos})
// mapDispatchToProps(dispatch) => ({action: () => dispatch(actionX())})
// connect(mapStateToProps, mapDispatchToProps)(Component)
export default App;
