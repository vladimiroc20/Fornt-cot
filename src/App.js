import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* Agrega otras rutas aquí */}
      </Switch>
    </Router>
  );
}

export default App;
