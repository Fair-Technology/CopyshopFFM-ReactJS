import PayPal from "../components/paypal.tsx";
import { FaRegCheckCircle } from "react-icons/fa";

const ThankYouPage = () => {
	return (
		<div className="bg-slate-100 pt-4">
			<ThankYou />
			<PayPalDiv />
			<DetailCards />
		</div>
	);
};

export default ThankYouPage;

const ThankYou = () => {
	return (
		<div className=" pb-4">
			<div className="flex  flex-col justify-center ">
				<div className="flex justify-center">
					<FaRegCheckCircle size={"100"} color="#93c5fd" />
				</div>
				<div className="text-6xl text-center text-blue-300">Thank You</div>
			</div>
			<div className="flex justify-center py-2">
				<OrderNumTag orderNumber="#123456" bgcolor="bg-blue-300" />
			</div>
			<div className="bg-red-300 flex justify-center">
				<StateIcons />
			</div>
		</div>
	);
};

const OrderNumTag = ({
	orderNumber,
	bgcolor,
}: {
	orderNumber: string;
	bgcolor: string;
}) => {
	return (
		<div className={bgcolor + " text-2xl py-1 px-2 rounded-lg"}>
			Order Number: {orderNumber}
		</div>
	);
};
const StateIcons = () => {
	return <div>4 ICONS: Order Payment Editing Sent</div>;
};

const PayPalDiv = () => {
	return (
		<div className="flex justify-center">
			<PayPal />
		</div>
	);
};

const DetailCards = () => {
	return <div>DetailCards</div>;
};
