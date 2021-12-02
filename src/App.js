import './App.css';
import TShape from './Components/TShape';
import EdviPermission from './Components/EdviPermission';
import ConnectToEdvi from './Components/ConnectToEdvi';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <TShape /> */}
        {/* <EdviPermission /> */}
        <ConnectToEdvi />
      </div>
    </Router>
  );
}

export default App;
