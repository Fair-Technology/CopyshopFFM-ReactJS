import logoImg from "../assets/Copyshop-FFM-Logo_img.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className=" bg-red-600 w-full mx-auto flex justify-center">
			<div className="2xl:max-w-screen-2xl w-full flex-warp sm:flex justify-between p-4">
				<div className="flex items-center justify-center  min-w-36 min-h-18 sm:mb-0">
					<Logo />
				</div>
				<div className="flex items-center justify-center min-w-48 min-h-18">
					<NavList />
				</div>
			</div>
		</div>
	);
};

export default Navbar;

const Logo = () => {
	return <img className="w-64 h-24 " src={logoImg} alt="Logo" />;
};

const NavList = () => {
	return (
		<ul className="flex gap-8 px-8 text-2xl text-white">
			<NavListItem page="Home" route="/" />
			<NavListItem page="Cart" route="/cart" />
			<NavListItem page="OrderState" route="/ourdersearch" />
		</ul>
	);
};
const NavListItem = ({ page, route }: { page: string; route: string }) => {
	return (
		<li>
			<Link to={route}>{page}</Link>
		</li>
	);
};
