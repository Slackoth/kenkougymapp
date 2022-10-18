import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './componentes/autenticacion/LoginForm';
import Layout from './componentes/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/login' element={<LoginForm/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;