import { ThemeProvider } from '@material-ui/core/styles'
import GlobalStyle from './globalStyles';
import { theme } from './theme'
import { Home, 
  Login, 
  Signup, 
  Catalog, 
  Course, 
  Product, 
  University, 
  Provider, 
  Language, 
  About, 
  Contact, 
  Faq, 
  Terms, 
  Blogs, 
  News,
  BlogPost,
  Profile,
  CustomizePage,
  Customize,
  Recommend,
  TopCourses} from './views';
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
        <Route path = "/product">
          <Product />
        </Route>
        <Route path = "/university">
          <University />
        </Route>
        <Route path = "/provider">
          <Provider />
        </Route>
        <Route path = "/language">
          <Language />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/contactus">
        <Contact />
      </Route>
      <Route path = "/faq">
        <Faq />
      </Route>
      <Route path = "/termsandconditions">
        <Terms />
      </Route>
      <Route path = "/blogs">
        <Blogs />
      </Route>
      <Route path = "/newsandarticles">
        <News />
      </Route>
      <Route path = "/blogpost">
        <BlogPost />
      </Route>
      <Route path = "/profile">
        <Profile />
      </Route>
      <Route path = "/customizepage">
        <CustomizePage />
      </Route>
      <Route path = "/customizenow">
        <Customize />
      </Route>
      <Route path = "/recommendedcourses">
        <Recommend />
      </Route>
      <Route path = "/topcourses">
        <TopCourses />
      </Route>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
