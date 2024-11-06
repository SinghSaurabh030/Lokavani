import Comments from "../components/Comments";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function PostDetails() {
    return ( <>
    <Navbar/>
    <div className="px-8 md:px-[200px] mt-8 space-y-3">
        <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-black md:text-3xl">Stunning royalty free images </h1>
        <div className="flex items-center justify-center space-x-2">
                <p className="cursor-pointer"><BiEdit /></p>
                <p className="cursor-pointer"><RiDeleteBin6Line /></p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>@Saurabh</p>
        <div className="flex space-x-2">
                <p>4/4/2004</p>
                <p>4:30</p>
            </div>
        </div>

            <img src='https://cdn.pixabay.com/photo/2022/06/07/16/22/drift-7248723_640.jpg' className="w-full h-[500px]"/>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem nulla ducimus ad aut in, ea aliquam possimus laudantium accusantium fugiat quae doloribus dolorum neque mollitia temporibus dolor, eius animi maiores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officiis illum, ullam hic eaque facilis iste. Voluptatem delectus reiciendis rem tempore quos sed eos similique, doloremque odit maxime, neque quae?
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
            <p>Categories : </p>
            <div className="flex justify-center items-center space-x-2"></div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
        </div>
        {/* Comments */}
        <div className="flex flex-col mt-4">
         <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            <Comments/>
            <Comments/>
         </div>
         <div className="flex flex-col mt-4 md:flex-row">
            <input type="text" placeholder="Write your comment" className="md:w-[80%] py-2 outline-none px-4 mt-4 md:mt-0"/>
            <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0 text-sm">Add commmet</button>
         </div>
    </div>


    <Footer/>
    </> );
}

export default PostDetails;