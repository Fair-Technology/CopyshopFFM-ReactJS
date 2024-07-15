import { BrowserRouter, Routes, Route } from "react-router-dom";
// page routes
import CartPage from "./Pages/CartPage";
import CheckOutPage from "./Pages/CheckOutPage";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import OrderSearchPage from "./Pages/OrderSearchPage";
import ThankYouPage from "./Pages/ThankYouPage";
import AdminPage from "./Pages/adminPages/AdminPage";
import DashBoardPage from "./Pages/adminPages/DashBoardPage";
import SettingPage from "./Pages/adminPages/SettingPage";
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
			<Route path="/admin/setting" element={<SettingPage />} />
			{/* 404 page */}
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	</BrowserRouter>
);

export default App;
