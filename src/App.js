
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Dashboard from './components/dashboard/Dashboard';
import Category from './components/category/Category';
import Subcategory from './components/subcategory/Subcategory';
import Packing from './components/packing/Packing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sidebar><Dashboard /></Sidebar>} />
          <Route path='/category' element={<Sidebar><Category /></Sidebar>} />
          <Route path='/subcategory' element={<Sidebar><Subcategory /></Sidebar>} />
          <Route path='/packing' element={<Sidebar><Packing/></Sidebar>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
