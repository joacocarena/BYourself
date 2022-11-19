import Form from './Components/Form'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/login' element={<Form />} exact></Route>
        <Route path='/register' element={<Register />} exact></Route>
      </Routes>
    </>
  );
}

export default App;