import './Stylesheets/App.scss';
import Main from './components/Common/Main';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Common/Layout';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
