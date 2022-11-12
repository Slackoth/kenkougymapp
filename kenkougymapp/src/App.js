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
import RecipesSearch from './componentes/recipes/RecipesSearch';
import React from "react";
import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";
import Rutines from './componentes/rutines/Rutines';
import Progreso from './componentes/progreso/progreso';
import RutinesSearch from './componentes/rutines/RutinesSearch';
import RutinesSearch2 from './componentes/rutines/RutinesSearch2';

import RecipesKenkou from './componentes/recipes/RecipesKenkou';

import Layout from './componentes/layout/Layout';

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
        <Route path='/searchRecipe' element={<RecipesSearch/>}></Route>
        <Route path='/perfil' element={<Progreso/>}></Route>
        <Route path='/rutines' element={<Rutines/>}></Route>
        <Route path='/searchRutine' element={<RutinesSearch/>}></Route>
        <Route path='/searchRutine2' element={<RutinesSearch2/>}></Route>
        <Route path='/recipesKenkou' element={<RecipesKenkou/>}></Route>

      </Routes>
    </Layout>
  );
}

export default App;