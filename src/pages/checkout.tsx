import Heading from "../components/heading";

const CheckOutPage = () => {
	return (
		<div className="mx-auto sm:flex justify-center">
			{/* Left Part */}
			<div className="sm:w-2/3 bg-black text-white text-center">
				<section className="bg-red-500 border-8 border-zinc-500">
					home address
				</section>
				<section className="bg-green-300">a toggle buttion</section>
				<section className=" border-8 border-zinc-500">
					shipping address
				</section>
			</div>
			{/* Right part */}
			<div className="sm:w-1/3 bg-gray-100 m-2 p-2">
				{/* heading component */}
				<Heading text="Your Order" />
				{/* price table */}
				<table className="table-auto w-full">
					<thead className="text-start">
						<tr>
							<th className="text-start">Product</th>
							<th className="text-start">Price</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Product 1</td>
							<td>12</td>
						</tr>
						<tr>
							<td>Product 2</td>
							<td>16</td>
						</tr>
					</tbody>
					<tfoot className="border-t-2 border-dashed border-gray-400">
						<tr>
							<td>In Total:</td>
							<td>30</td>
						</tr>
					</tfoot>
				</table>
				{/* button */}
				<div className="custom-button min-h-6 mt-8">TO ORDER</div>
			</div>
		</div>
	);
};

export default CheckOutPage;
