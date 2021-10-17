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

function App() {
  return (
    <div>
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
         <Route exact path="/signup">
           <Registration />
         </Route>
         <Route path="*">
           <NotFound />
         </Route>
       </Switch>
       <Footer />
    </Router>
   </div> 
  );
}

export default App;
