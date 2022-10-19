import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './componentes/autenticacion/LoginForm';
import Layout from './componentes/layout/Layout';
import Index from './paginas/Index';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/index' element={<Index/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;