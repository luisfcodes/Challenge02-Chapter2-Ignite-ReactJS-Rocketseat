import GlobalStyles from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoutesDOM } from './routes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <RoutesDOM />
      </Router>
    </>
  );
}

export default App;