import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Home from './Home';

function App() {
  return (
    <Provider store={store}>
<></>
<Home />

    </Provider>
  );
}

export default App;
