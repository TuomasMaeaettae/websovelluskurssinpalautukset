import './App.css';
import UpperBar from './components/UpperBar';
import Adds from './components/Adds';
import Banners from './components/Banners';

function App() {
  return (
    <div className="App">
      <UpperBar />
      <Adds />
      <Banners/>
    </div>
  );
}

export default App;