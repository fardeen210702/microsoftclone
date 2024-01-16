import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Microsoft365 from './pages/Microsoft365';
import Copilot from './pages/Copilot'
import Surface from './pages/Surface'
import Support from './pages/Support'
import Teams from './pages/Teams'
import Windows from './pages/Windows'
import Xbox from './pages/Xbox'
import Error from './pages/Error';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/microsoft365' element={<Microsoft365/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/surface' element={<Surface/>}/>
        <Route path='/teams' element={<Teams/>}/>
        <Route path='/windows' element={<Windows/>}/>
        <Route path='/xbox' element={<Xbox/>}/>
        <Route path='/copilot' element={<Copilot/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
