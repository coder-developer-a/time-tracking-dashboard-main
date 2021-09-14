import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import Profile from './components/Profile';
import Item from './components/Item';

import { Items } from './data';

function App() {

  const items = Items;
  return (
    <div className='container'>
      <div className='app'>
        <Router>
          <Switch>
            <Route path={'/' || '/daily'}>
              <Profile />
              { items.map(item => <Item title={item.title} timeframes='Day' timeline={item.timeframes.daily}/>) }
            </Route>
            <Route path='/weekly'>
              <Profile />
              { items.map(item => <Item title={item.title} timeframes='Week' timeline={item.timeframes.weekly}/>) }
            </Route>
            <Route path='/monthly'>
              <Profile />
              { items.map(item => <Item title={item.title} timeframes='Month' timeline={item.timeframes.monthly}/>) }
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
