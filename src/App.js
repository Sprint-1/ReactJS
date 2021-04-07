
import './App.css';
import {Provider} from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Header from './Components/Header'
import store from './redux/Store'




function App() {
  return (
    <Router>
    <Provider store={store}>
    <div className="App">
      <Switch>

        <Route path="/" component={Header}></Route>
        
      </Switch>
     
    </div>
    </Provider>
    </Router>
  );
}

export default App;
