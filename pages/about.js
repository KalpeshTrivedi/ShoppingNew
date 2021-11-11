import Navbar from "../pages/navbar";
const About=()=>{
    return(
        <>
        <Navbar/>
        {/* <h1>Landing page</h1> */}

	
		{/* <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"> */}

		<title>About Us</title>

		<div class="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">

			<div class="mb-12">
				<h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider">About Us</h1>

				<p class="tracking-wide text-sm mb-6 leading-relaxed mx-auto max-w-xl text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br class="hidden md:block" />Aenean commodo ligula eget dolor.</p>

				<p class="tracking-wide text-xs text-gray-600 leading-loose mx-auto max-w-xl text-center">Donec id elit non mi porta gravida at eget metus. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum.</p>
			</div>


			<div class="flex flex-wrap -mx-2">
				
				<div class="w-1/3 p-2">
					<a href="#" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="https://images.unsplash.com/photo-1499175898579-d743fea6e7dc?w=800" class="w-full h-auto opacity-75" />
					</a>
					<a href="#" class="block text-xl text-center">Fashion &amp; Beauty</a>
				</div>
				
				<div class="w-1/3 p-2">
					<a href="#" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="https://images.unsplash.com/photo-1477064996809-dae46985eee7?w=800" class="w-full h-auto opacity-75" />
					</a>
					<a href="#" class="block text-xl text-center">Lifestyle</a>
				</div>
				
				<div class="w-1/3 p-2">
					<a href="#" class="block mb-8 bg-black hover:bg-gray-700">
						<img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800" class="w-full h-auto opacity-75" />
					</a>
					<a href="#" class="block text-xl text-center">Travel</a>
				</div>

			</div>


		</div>

		{/* <div class="-mx-6 bg-white px-6 py-12"> */}
			
			

		{/* </div>/ */}
	
    </>
    )
}
export default About;