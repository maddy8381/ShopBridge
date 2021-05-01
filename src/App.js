import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
