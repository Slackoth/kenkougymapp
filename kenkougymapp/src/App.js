import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import LoginForm from './componentes/autenticacion/LoginForm';
import Menu from './componentes/autenticacion/Menu';
import SignUp from './componentes/autenticacion/SignUp';

import Breakfast from './componentes/recipes/Breakfast';
import Dinner from './componentes/recipes/Dinner';
import Ingredients from './componentes/recipes/Ingredients';
import Lunch from './componentes/recipes/Lunch';
import Recipes from './componentes/recipes/Recipes';

import Rutines from './componentes/rutines/Rutines';

import Layout from './componentes/layout/Layout';
import Index from './paginas/Index';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<LoginForm/>}></Route>

        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        
        <Route path='/breakfast' element={<Breakfast/>}></Route>
        <Route path='/dinner' element={<Dinner/>}></Route>
        <Route path='/ingredients' element={<Ingredients/>}></Route>
        <Route path='/lunch' element={<Lunch/>}></Route>
        <Route path='/recipes' element={<Recipes/>}></Route>

        <Route path='/rutines' element={<Rutines/>}></Route>

        <Route path='/index' element={<Index/>}></Route>

      </Routes>
    </Layout>
  );
}

export default App;