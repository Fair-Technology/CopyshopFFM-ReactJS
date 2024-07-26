const ThankYouPage = () => {
	return (
		<div>
			<ThankYou />
			<PayPal />
			<DetailCards />
		</div>
	);
};

export default ThankYouPage;

const ThankYou = () => {
	return (
		<div>
			<div className="bg-red-100 flex justify-center">Thank you</div>
			<div className="bg-red-200 flex justify-center">
				<OrderNumTag />
			</div>
			<div className="bg-red-300 flex justify-center">StateIcons</div>
		</div>
	);
};

const OrderNumTag = () => {
	return <div>OrderTag</div>;
};

const PayPal = () => {
	return <div>PayPal</div>;
};
const DetailCards = () => {
	return <div>DetailCards</div>;
};
