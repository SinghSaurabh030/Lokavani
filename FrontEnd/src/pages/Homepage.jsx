import Footer from "../components/Footer";
import Homepost from "../components/Homepost";
import Navbar from "../components/Navbar";

function Homepage() {
    return ( <>
    <Navbar/>
    <div className="px-8 md:px-[200px] min-h-[80vh]">
    <Homepost/>
    <Homepost/>
    <Homepost/>
    </div>
    
    <Footer/>
    </> );
}

export default Homepage;