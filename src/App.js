
import logo from './logo.svg';
import './App.css';
import Demo from'./components/Demo';
import FluentNav from'./components/FluentNav';
import Navbar from './components/Navbar';


const menulist = ['Home', 'Contact', 'Settings'];

function App() {
  return (
    <div className="App">
        <FluentNav menulist = {menulist}/>
    </div>
  );
}

export default App;
