import logo from './logo.svg';
import './App.css'; //css is imported to all other children files
import CakeListContainer from './containers/CakeListContainer';

function App() {
  return (
    <>
      <h1 className='header'>Bakery</h1>
      <CakeListContainer />
    </>
  );
}

export default App;
