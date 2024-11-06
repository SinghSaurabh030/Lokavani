import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Comments() {
    return ( 
        <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                <div className="flex items-center justify-between">
                    <h3>@saurabh</h3>
                    <div className="flex justify-center items-center space-x-4 ">
                        <p className="text-gray-500 text-sm" >24/4/2004</p>
                        <p className="text-gray-500 text-sm">4:35</p>
                        <div className="flex items-center justify-center space-x-2">
                            <p className="cursor-pointer"><BiEdit /></p>
                            <p className="cursor-pointer"><RiDeleteBin6Line /></p>
                        </div>
                    </div>
                </div>
                <p className="px-4 mt-2">Nice Information</p>
            </div>
     );
}

export default Comments;