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
import Footer from './components/Footer';

function App() {

  return (
    <div className='w-full flex justify-center'>
      <div className="App w-[1800px]">

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
      <Footer/>
    </Router>
    
      </div>
    </div>
  )
}

export default App
