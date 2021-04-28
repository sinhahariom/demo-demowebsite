import './App.scss';
import PresenterParent from './Components/PresenterParent';
import LeftNav from './Components/LeftNav';

function App() {
  return (
    <div className="App">
      <LeftNav></LeftNav>
      <PresenterParent></PresenterParent>
    </div>
  );
}

export default App;
