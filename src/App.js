import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blogs';
import AuthProvider from './components/Context/AuthProvider';

function App() {
  return (
    <div>
    <AuthProvider>
    <Router>
      <NavBar />
        <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route exact path="/home">
           <Home />
         </Route>
         <Route exact path="/blogs">
           <Blogs />
         </Route>
         <Route exact path="/login">
           <Login />
         </Route>
         <Route exact path="/register">
           <Registration />
         </Route>
         <Route path="*">
           <NotFound />
         </Route>
       </Switch>
       <Footer />
    </Router>
    </AuthProvider>
   </div> 
  );
}

export default App;
