const CheckOutPage = () => {
	return (
		<div className="mx-auto sm:flex justify-center bg-cyan-700">
			<div className="sm:w-2/3 bg-black text-white text-center">
				<section className="bg-red-500 border-8 border-zinc-500">
					home address
				</section>
				<section className="bg-green-300">a toggle buttion</section>
				<section className=" border-8 border-zinc-500">
					shipping address
				</section>
			</div>
			<div className="sm:w-1/3 bg-green-400 text-white text-center">
				Right Container
			</div>
		</div>
	);
};

export default CheckOutPage;
