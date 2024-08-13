import { useSelector } from "react-redux";
import { calculatePrice } from "../lib/utils";
import { setError } from "../services/redux/selectionSlice";
import {
	RootState,
	useAppDispatch,
	useAppSelector,
} from "../services/redux/store";
import Heading from "./heading";
import { useTranslation } from "react-i18next";

const CalculationArea = () => {
	const dispatch = useAppDispatch();

	const error = useAppSelector((store: RootState) => store.selection.error);
	if (error) {
		alert(error);
		dispatch(setError(null));
	}

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
	const { t } = useTranslation();

	const currentProduct = useSelector(
		(store: RootState) => store.selection.selectedProduct
	);

	return (
		<div className="py-2">
			<table className="min-w-full bg-white border border-gray-200">
				<tbody>
					<tr>
						<td className="px-4 py-2 border-b border-gray-200">
							{t("format")}
						</td>
						<td className="px-4 py-2 border-b border-l border-gray-200">
							{currentProduct.format}
						</td>
					</tr>
					<tr>
						<td className="px-4 py-2 border-b border-gray-200">Paper weight</td>
						<td className="px-4 py-2 border-b border-l border-gray-200">
							{currentProduct.weight}/m<sup>2</sup>
						</td>
					</tr>
					<tr>
						<td className="px-4 py-2 border-b border-gray-200">Print Side</td>
						<td className="px-4 py-2 border-b border-l border-gray-200">
							{currentProduct.printSetting === "singleSided"
								? "Single Side"
								: "Double Side"}
							{" & "}
							{currentProduct.flipSetting === "shortSideFlip"
								? "Short Side Flip"
								: "Long Side Flip"}
						</td>
					</tr>
					<tr>
						<td className="px-4 py-2 border-b border-gray-200">Pages in PDF</td>
						<td className="px-4 py-2 border-b border-l border-gray-200">
							<div>Black and white: {currentProduct.bwPages}</div>
							<div>Color: {currentProduct.colorPages}</div>
						</td>
					</tr>
					<tr>
						<td className="px-4 py-2 border-b border-gray-200">Copies</td>
						<td className="px-4 py-2 border-b border-l border-gray-200">
							{currentProduct.noOfSets} copies
						</td>
					</tr>
					<tr>
						<td className="px-4 py-2 border-b border-gray-200">Next Step</td>
						<td className="px-4 py-2 border-b border-l border-gray-200">
							{currentProduct.option.name}
						</td>
					</tr>
					<tr>
						<td className="px-4 py-2 border-b border-gray-200">Options</td>
						<td className="px-4 py-2 border-b border-l border-gray-200">NA</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

const CostSum = () => {
	const selectedProduct = useAppSelector(
		(store: RootState) => store.selection.selectedProduct
	);
	const price = calculatePrice(selectedProduct);
	return (
		<div>
			<div className="min-w-full bg-blue-100">
				<div className="flex justify-between gap-6">
					<div className="py-2 pl-1">Products Total Cost</div>
					<div className="py-2 pr-1">&euro; {price}</div>
				</div>
			</div>
			<div className="min-w-full">
				<div className="flex justify-between gap-6">
					<div className="py-2 pl-1">DHL Delivery Cost</div>
					<div className="py-2 pr-1">&euro; 0.00 </div>
				</div>
				<div className="px-1 text-sm ">
					* If you pick at store, the delivery fee will be &euro;0.
				</div>
			</div>
		</div>
	);
};

const AddToCartBtn = () => {
	return (
		<div
			onClick={AddToCart}
			className="grid text-xl font-bold text-white bg-red-600 place-content-center min-h-12"
		>
			Add to Cart
		</div>
	);
};

const AddToCart = () => {
	alert("You successfully added the items into Cart");
	return;
};
