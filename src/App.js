
import './App.css';
import { Provider } from 'react-redux';
import store from './Storage';
import Counter from './Reducers/Counter';

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <Counter/>
        </Provider>
    </div>
  );
}

export default App;
