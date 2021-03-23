import globalState from './redux/reducers/globalReducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Content from './components/Content';
import './App.css';
function App() {
  const globalStore = createStore(globalState);
  return (
    <div className="App">
      <Provider store={globalStore}>
        <Content></Content>
      </Provider>
    </div>
  );
}

export default App;
