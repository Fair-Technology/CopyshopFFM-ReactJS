import { BrowserRouter, Routes, Route } from "react-router-dom";
// page routes
import HomePage from "./pages/home";
import CartPage from "./pages/cart";
import CheckOutPage from "./pages/checkout";
import LoginPage from "./pages/login";
import OrderSearchPage from "./pages/ordersearch";
import ThankYouPage from "./pages/thankyou";
import AdminPage from "./pages/admin/admin";
import DashBoardPage from "./pages/admin/dashboard";
import SettingPage from "./pages/admin/settings";
import ErrorPage from "./pages/error";

//components
import Navbar from "./components/navbar";

const App: React.FC = () => (
	<BrowserRouter>
		<Navbar />
		<Routes>
			{/* user routes */}
			<Route path="/" element={<HomePage />} />
			<Route path="/cart" element={<CartPage />} />
			<Route path="/checkout" element={<CheckOutPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/ordersearch" element={<OrderSearchPage />} />
			<Route path="/thankyou" element={<ThankYouPage />} />
			{/* admin routes */}
			<Route path="/admin" element={<AdminPage />} />
			<Route path="/admin/dashboard" element={<DashBoardPage />} />
			<Route path="/admin/settings" element={<SettingPage />} />
			{/* 404 page */}
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</BrowserRouter>
);

export default App;
