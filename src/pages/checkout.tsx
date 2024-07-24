import { Dispatch, SetStateAction, useState } from "react";
import Heading from "../components/heading";

const CheckOutPage = () => {
	return (
		<div className="flex p-2 justify-center ">
			<div className="2xl:max-w-screen-2xl w-full sm:flex ">
				<Left />
				<Right />
			</div>
		</div>
	);
};
export default CheckOutPage;

const Left = () => {
	const [showDeliveryAddress, setShowDeliveryAddress] = useState(false);
	return (
		<div className="flex-1">
			<BillingAdress
				showDeliveryAddress={showDeliveryAddress}
				setShowDeliveryAddress={setShowDeliveryAddress}
			/>
			{showDeliveryAddress && <DeliveryAddress />}
		</div>
	);
};

const BillingAdress = ({
	showDeliveryAddress,
	setShowDeliveryAddress,
}: {
	showDeliveryAddress: boolean;
	setShowDeliveryAddress: Dispatch<SetStateAction<boolean>>;
}) => {
	const handleOnClick = () => {
		setShowDeliveryAddress(!showDeliveryAddress);
	};
	return (
		<div>
			<div>
				<FullForm />
			</div>
			<button
				onClick={handleOnClick}
				className="cursor-pointer p-2 bg-blue-500 rounded-lg text-white hover:bg-blue-300 my-2"
			>
				If different deliveryAddress address
			</button>
		</div>
	);
};

const FullForm = () => {
	return (
		<div>
			<h1>Billing Address</h1>
			<AddressForm />
			<ContactForm />
		</div>
	);
};

const DeliveryAddress = () => {
	return (
		<div>
			<h1>DeliveryAddress</h1>
			<AddressForm />
		</div>
	);
};

const AddressForm = () => {
	return (
		<section className="flex w-full">
			<form className="w-full " action="">
				<div className="w-full my-1 sm:flex  gap-2">
					<input
						className="pl-1 py-1 my-1 sm:w-1/2 w-full border-2 border-slate-400"
						placeholder="First Name"
					/>
					<input
						className="pl-1 py-1 my-1 sm:w-1/2 w-full border-2 border-slate-400"
						placeholder="Last Name"
					/>
				</div>
				<div>
					<input
						className="pl-1 py-1 my-1 w-full border-2 border-slate-400"
						placeholder="Company Name"
					/>
				</div>
				<div className="w-full my-1 sm:flex  gap-2">
					<input
						className="pl-1 py-1 my-1 sm:w-3/4 w-full border-2 border-slate-400"
						placeholder="Street"
					/>
					<input
						className="pl-1 py-1 my-1 sm:w-1/4 w-full border-2 border-slate-400"
						placeholder="House Number"
					/>
				</div>
				<div>
					<input
						className="pl-1 py-1 my-1 w-full border-2 border-slate-400"
						placeholder="Aditional(Appartment) - Optional "
					/>
				</div>
				<div className="w-full my-1 sm:flex  gap-2">
					<input
						className="pl-1 py-1 my-1 sm:w-1/4 w-full border-2 border-slate-400"
						placeholder="PLZ"
					/>
					<input
						className="pl-1 py-1 my-1 sm:w-3/4 w-full border-2 border-slate-400"
						placeholder="City"
					/>
				</div>
			</form>
		</section>
	);
};

const ContactForm = () => {
	return (
		<form action="">
			<div>
				<input
					className="pl-1 py-1 my-1 w-full border-2 border-slate-400"
					placeholder="Email Address"
				/>
			</div>
			<div>
				<input
					className="pl-1 py-1 my-1 w-full border-2 border-slate-400"
					placeholder="Telphone Number"
				/>
			</div>
		</form>
	);
};

const Right = () => {
	return (
		<div className="sm:w-72 w-full px-1 flex-col">
			<Heading text="Your Order" />
			<PriceTable />
			<button className="bg-red-600 text-white text-lg font-bold grid place-content-center min-h-6 mt-4 w-full">
				ADD TO ORDER
			</button>
		</div>
	);
};

const PriceTable = () => {
	return (
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
	);
};
