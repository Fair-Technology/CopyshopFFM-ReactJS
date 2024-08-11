import Heading from "./heading";

const CalculationArea = () => {
	return (
		<div>
			<FormInfoList />

			<div className="pt-3">
				<Heading text="Total" />
				<CostSum />
				<div className="mt-4">
					<AddToCartBtn />
				</div>
			</div>
		</div>
	);
};

export default CalculationArea;

const FormInfoList = () => {
	return (
		<div className="py-2">
			<table className="min-w-full bg-white border border-gray-200">
				<tbody>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Paper Format</td>
						<td className="py-2 px-4 border-b border-l border-gray-200">A4</td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Paper weight</td>
						<td className="py-2 px-4 border-b border-l border-gray-200">
							80g/m<sup>2</sup>
						</td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Print Side</td>
						<td className="py-2 px-4 border-b border-l border-gray-200">
							One-Sided
						</td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Pages in PDF</td>
						<td className="py-2 px-4 border-b border-l border-gray-200">
							<div>Black and white: 3</div>
							<div>Color: 2</div>
						</td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Copies</td>
						<td className="py-2 px-4 border-b border-l border-gray-200">
							3 copies
						</td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Next Step</td>
						<td className="py-2 px-4 border-b border-l border-gray-200">
							Print
						</td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Options</td>
						<td className="py-2 px-4 border-b border-l border-gray-200">NA</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const CostSum = () => {
	return (
		<div>
			<div className="min-w-full bg-blue-100">
				<div className="flex justify-between gap-6">
					<div className="py-2 pl-1">Products Total Cost</div>
					<div className="py-2 pr-1">&euro; 0.00</div>
				</div>
			</div>
			<div className="min-w-full">
				<div className="flex justify-between gap-6">
					<div className="py-2 pl-1">DHL Delivery Cost</div>
					<div className="py-2 pr-1">&euro; 0.00 </div>
				</div>
				{/* <div className="flex justify-between gap-6">
        <div>
        DHL Delivery Fee:
        </div>
        <div>
        &euro; 0.00
        </div>
      </div> */}
				<div className=" text-sm px-1">
					* If you pick at store, the delivery fee will be &euro;0.
				</div>
			</div>
		</div>
	);
};

const AddToCartBtn = () => {
	return (
		<div
			onClick={() => alert("test add to cart")}
			className="bg-red-600 text-white text-lg font-bold place-content-center min-h-12"
		>
			Add to Cart
		</div>
	);
};
