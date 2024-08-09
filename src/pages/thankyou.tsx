import { Dispatch, SetStateAction, useState } from "react";
import PayPal from "../components/paypal.tsx";
import {
	FaRegCheckCircle,
	FaFileAlt,
	FaShippingFast,
	FaCogs,
	FaCheck,
} from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

import { IconType } from "react-icons";

const ThankYouPage = () => {
	return (
		<div className="pt-4">
			<ThankYou />
			<PayPalDiv />
			<div className="w-full lg:px-40">
				<DetailCards />
			</div>
		</div>
	);
};

export default ThankYouPage;

const ThankYou = () => {
	return (
		<div className="pb-4">
			<div className="flex  flex-col justify-center ">
				<div className="flex justify-center">
					<FaRegCheckCircle size={"100"} color="#93c5fd" />
				</div>
				<div className="text-6xl text-center text-blue-300">Thank You</div>
			</div>
			<div className="flex justify-center py-2 mb-6">
				<OrderNumTag orderNumber="#123456" bgcolor="bg-blue-300" />
			</div>
			<div className="flex justify-center">
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
	const [currentState, setCurrentState] = useState("Order");
	return (
		<div className="sm:flex gap-4">
			<StateIcon
				currentState={currentState}
				setCurrentState={setCurrentState}
				text="Order"
				Icon={FaFileAlt}
			/>
			<StateIcon
				currentState={currentState}
				setCurrentState={setCurrentState}
				text="Payment"
				Icon={RiSecurePaymentFill}
			/>
			<StateIcon
				currentState={currentState}
				setCurrentState={setCurrentState}
				text="Editing"
				Icon={FaCogs}
			/>
			<StateIcon
				currentState={currentState}
				setCurrentState={setCurrentState}
				text="Send"
				Icon={FaShippingFast}
			/>
		</div>
	);
};

interface StateIconProps {
	currentState: string;
	setCurrentState: Dispatch<SetStateAction<string>>;
	text: string;
	Icon: IconType;
}

const StateIcon: React.FC<StateIconProps> = ({
	currentState,
	setCurrentState,
	text,
	Icon,
}) => {
	return (
		<div
			onClick={() => {
				setCurrentState(currentState);
			}}
			className={`flex justify-center items-center rounded-full size-32 ${
				currentState === text ? "bg-blue-300" : "bg-slate-300"
			}`}
		>
			<div className="flex-col gap-1 justify-center items-center">
				<div className="flex justify-center">{<Icon size={32} />}</div>
				<div className="text-xl">{text}</div>
				<div className="flex justify-center">
					{currentState === text && <FaCheck />}
				</div>
			</div>
		</div>
	);
};

const PayPalDiv = () => {
	return (
		<div className="flex justify-center">This Div Reserved for Paypal</div>
	);
};

const DetailCards = () => {
	return (
		<div className="flex flex-wrap w-full">
			<div className="sm:w-1/2 w-full p-2 flex items-center justify-center ">
				<DetailCard title="Billing Address" />
			</div>
			<div className="sm:w-1/2 w-full p-2 flex items-center justify-center ">
				<DetailCard title="Shipping Info" />
			</div>
			<div className="sm:w-1/2 w-full p-2 flex items-center justify-center ">
				<DetailCard title="The Invoice" />
			</div>
			<div className="sm:w-1/2 w-full p-2 flex items-center justify-center ">
				<DetailCard title="Tracking of Shipment" />
			</div>
		</div>
	);
};

const DetailCard = ({
	title = "Defult Title",
	content = "No content",
}: {
	title: string;
	content?: string;
}) => {
	return (
		<div className=" w-full rounded-sm border-slate-600 border-2   ">
			<div className=" bg-slate-200 min-h-12 flex items-center pl-2 font-bold">
				{title}
			</div>
			<div className="flex pl-2">{content}</div>
		</div>
	);
};
