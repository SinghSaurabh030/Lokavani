import Footer from "./components/Footer";
import Homepost from "./components/Homepost";
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import PostDetails from "./pages/PostDetails";

function App() {
  return( 
    <>
    <Routes>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/posts/post/:id' element={<PostDetails/>}/>
    </Routes>
    </>
    );
   
}

export default App;