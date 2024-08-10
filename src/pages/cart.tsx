import { useTranslation } from "react-i18next";

const CartPage = () => {
  return (
    <div className="container mx-auto mt-4 w-4/5">
      <CartHeader />
      <CartItems />
      <CartActions />
    </div>
  );
};

const CartHeader = () => {
  return (
    <div className="flex justify-between items-center border-b pb-2 px-3">
      <h1 className="text-3xl font-medium"> Shopping Basket</h1>
      <button
        type="button"
        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 focus:outline-none"
      >
        + Add more items
      </button>
    </div>
  );
};

const CartItems = () => {
  return (
    <div className="mb-2">
      <table className="table-auto">
        <thead>
          <tr className="border-b border-slate-300">
            <th className="px-4 py-3"></th>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Options</th>
            <th className="px-4 py-3">Quantity</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 3 }).map((_, index) => (
            <CartItem key={index} />
          ))}
          <ProductDelivery />
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

const CartItem = () => {
  return (
    <tr className="even:bg-white odd:bg-slate-200 border-b border-slate-300">
      <td className="px-4 py-2 size-32">
        <img src={"src/assets/print.jpg"} alt="Product image" className="" />
      </td>
      <td className="px-4 py-2">
        <p className="font-bold">1x</p>
        <p className="font-bold"> Print </p>
      </td>
      <td className="px-4 py-2">
        <ProductOptions />
      </td>
      <td className="px-4 py-2 text-center">
        <ProductQuantity />
      </td>
      <td className="px-4 py-2">$100.00</td>
      <td className="px-4 py-2">
        <button className="text-red-600 hover:text-red-800 font-medium rounded text-sm px-5 py-2.5 focus:outline-none">
          Remove
        </button>
      </td>
    </tr>
  );
};

const ProductOptions = () => {
  const orderProps = {
    format: "A4",
    weight: "80gsm",
    printSetting: "single-sided",
    flipSetting: "short-edge",
    numberOfSets: 1,
    bwPages: 0,
    colorPages: 0,
  };
  return (
    <div className="flex-wrap">
      {Object.entries(orderProps).map(([key, value]) => (
        <Chip key={key} name={key} value={value.toString()} />
      ))}
    </div>
  );
};

const Chip = ({ name, value }: { name: string; value: string }) => {
  const { t } = useTranslation();
  return (
    // <div className="items-center whitespace-nowrap rounded-lg bg-gray-900/10 px-2 py-1 font-sans text-xs uppercase text-gray-900">
    <span className="text-white bg-slate-500 px-2 m-1 rounded-lg py-1 text-sm inline-block">
      {t(name)}: <span className=" font-medium text-amber-200"> {value} </span>
    </span>
    // </div>
  );
};

const ProductQuantity = () => {
  return (
    <div className="flex items-center">
      <button className="text-white bg-slate-400 hover:bg-slate-500 font-medium rounded-l-lg text-base px-3 py-1 focus:outline-none">
        -
      </button>
      <span className="px-3 py-1 text-base bg-slate-600 text-amber-200 font-medium">
        1
      </span>
      <button className="text-white bg-slate-400 hover:bg-slate-500 font-medium rounded-r-lg text-base px-3 py-1 focus:outline-none">
        +
      </button>
    </div>
  );
};

const ProductDelivery = () => {
  return (
    <tr className="even:bg-white odd:bg-slate-200 border-b border-slate-300">
      <td colSpan={4} className="px-4 py-2">
        <div>
          <div className="mb-3">Shipping options</div>
          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-base flex flex-col"
            >
              <span className="px-1">Pick-up - Downtown branch</span>{" "}
              <span className="px-1 text-gray-400">
                Mon-Sat 10:00 AM - 6:00 PM
              </span>
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-base flex flex-col"
            >
              <span className="px-1">DHL Shipping</span>
              <span className="px-1 text-gray-400">Germany-wide</span>
            </label>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">$10.00</td>
      <td className="px-4 py-2"></td>
    </tr>
  );
};

const CartActions = () => {
  return <div className="px-3"></div>;
};

export default CartPage;
