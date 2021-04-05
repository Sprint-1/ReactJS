
import './App.css';
import {Provider} from 'react-redux'
import Header from './Components/Header'
import store from './redux/store'



function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Header/>
    </div>
    </Provider>
  );
}

export default App;
