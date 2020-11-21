import { ThemeProvider } from '@material-ui/core/styles'
import GlobalStyle from './globalStyles';
import { theme } from './theme'
import { Home, Login, Signup, Catalog, Course } from './views';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  require('typeface-nunito')
  require('typeface-skranji')
  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle />
      <Router>
        <Route exact path = "/">
        <Home />
        </Route>  
        <Route path = "/signup" >
          <Signup />
        </Route>
        <Route path = "/login">
        <Login />
        </Route>
        <Route path = "/catalog">
          <Catalog />
        </Route>
        <Route path = "/course">
          <Course />
        </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
