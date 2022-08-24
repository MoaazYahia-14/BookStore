import './App.css';
import { Route , Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Notfound from './Components/Notfound';
import Home from './Components/Home';
import BookDescription from './Components/BookDescription';
import Footer from './Components/Footer';
import GetStart from './Components/GetStart';

function App() {
  return (<>
    <section className='container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <GetStart/>} />
        <Route path='/home' element={ <Home/>} />
        <Route path='/bookdescription' element={<BookDescription />} >
          <Route path=':id' element={<BookDescription />} />
        </Route>
        <Route path='*' element={ <Notfound/>} />
      </Routes>
      <Footer/>
    </section>
  </>
  );
}

export default App;
