import Pages from './pages/pages';
import Category from './components/category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/search';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Search/>
    <Category/>
    <Pages/>
    </BrowserRouter>
    
  );
}

export default App;
