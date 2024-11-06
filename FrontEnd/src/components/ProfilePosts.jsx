function ProfilePosts() {
    return ( 
        <div className="w-full flex mt-8 space-x-4">

            {/* Left for image */}
            <div className="w-[35%] h-[200px] flex justify-center items-center">
                <img src='data:image/jpeg;base64,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' className="h-full w-full object-cover"/>
            </div>

            {/* Right for text */}
            <div className="flex flex-col w-[65%]">

            {/* Heading of text */}
                <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
    Blog Images - Free Download on Freepik
    </h1>       

            {/* Author info */}
            <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
                <p>@saurabh</p>
                <div className="flex space-x-2 text-sm">
                    <p>4/11/2024</p>
                    <p>4:50</p>
                </div>
            </div>

            {/* Text Summary */}
            <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore dignissimos architecto iusto sunt perspiciatis similique omnis quas. Debitis corporis illum ipsum asperiores at quam distinctio. Minima, praesentium? Sapiente, a!</p>
        </div>
    </div>
     );
}

export default ProfilePosts;