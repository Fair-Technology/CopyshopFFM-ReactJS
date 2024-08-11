import { useTranslation } from "react-i18next";
import { IconContext } from "react-icons";
import { MdDeleteOutline } from "react-icons/md";
import { FaForward, FaBackward } from "react-icons/fa";

const CartPage = () => {
  return (
    <div className="container mx-auto mt-8 w-4/5">
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
    <div className="shadow-md sm:rounded-lg overflow-x-auto">
      <table className="min-w-[980px] table-auto w-full">
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
          <TableRow>
            <td className="px-4 py-2"></td>
            <td
              colSpan={2}
              className="px-4 py-2 font-medium whitespace-nowrap text-right"
            >
              Subtotal
            </td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2 text-right font-medium text-blue-800">
              €310.00
            </td>
            <td className="px-4 py-2"></td>
          </TableRow>
          <TableRow>
            <td className="px-4 py-2"></td>
            <td
              colSpan={2}
              className="px-4 py-2 font-normal whitespace-nowrap text-right"
            >
              Tax (incl. 19% VAT)
            </td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2 text-right font-normal text-blue-800">
              €10.00
            </td>
            <td className="px-4 py-2"></td>
          </TableRow>
          <TableRow>
            <td className="px-4 py-2"></td>
            <td
              colSpan={2}
              className="px-4 py-2 font-normal whitespace-nowrap text-right"
            >
              Tax (incl. 7% VAT)
            </td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2 text-right font-normal text-blue-800">
              €10.00
            </td>
            <td className="px-4 py-2"></td>
          </TableRow>
        </tbody>
        <tfoot>
          <TableRow>
            <td className="px-4 py-2"></td>
            <td
              colSpan={2}
              className="px-4 py-2 font-bold whitespace-nowrap text-lg text-right"
            >
              Total (including all taxes and shipping charges)
            </td>
            <td className="px-4 py-2"></td>
            <td className="px-4 py-2 text-right font-bold text-blue-800 text-lg">
              €330.00
            </td>
            <td className="px-4 py-2"></td>
          </TableRow>
        </tfoot>
      </table>
    </div>
  );
};

const CartItem = () => {
  return (
    <TableRow>
      <td className="px-4 py-2 size-32 flex-none">
        <img
          src={"src/assets/print.jpg"}
          alt="Product image"
          className="size-32"
        />
      </td>
      <td className="px-4 py-2">
        <p className="font-normal">1x</p>
        <p className="font-normal"> Print </p>
      </td>
      <td className="px-4 py-2">
        <ProductOptions />
      </td>
      <td className="px-4 py-2 text-center">
        <ProductQuantity />
      </td>
      <td className="px-4 py-2 text-right font-normal text-blue-800">
        €100.00
      </td>
      <td className="px-4 py-2">
        <button className="text-white bg-red-600 hover:text-red-800 text-lg text-center font-medium rounded focus:outline-none p-1">
          <IconContext.Provider value={{ className: "size-6" }}>
            <MdDeleteOutline />
          </IconContext.Provider>
        </button>
      </td>
    </TableRow>
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
    <div className="">
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
      <td className="px-4 py-2"></td>
      <td className="px-4 py-2 font-normal"> Delivery </td>
      <td colSpan={2} className="px-4 py-2">
        <div className="pl-8">
          <div className="">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="size-4"
            />
            <label htmlFor="default-radio-1" className="text-base font-base">
              <span className="p-2 relative top-[-3px] inline-block">
                Pick-up - Downtown branch{" "}
                <span className="inline-block">
                  (Mon-Sat 10:00 AM - 6:00 PM)
                </span>
              </span>
            </label>
          </div>
          <div className="">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="size-4"
            />
            <label htmlFor="default-radio-2" className="text-base font-base">
              <span className="p-2 relative top-[-3px] inline-block">
                DHL Shipping (Germany-wide)
              </span>
            </label>
          </div>
        </div>
      </td>
      <td className="px-4 py-2 text-right font-normal text-blue-800">€10.00</td>
      <td className="px-4 py-2"></td>
    </tr>
  );
};

const CartActions = () => {
  return (
    <div className="px-3 my-4">
      <div className="flex p-8">
        <div className="grow"></div>
        <input
          id="default-checkbox"
          type="checkbox"
          className="size-6 rounded-lg accent-blue-500"
          value=""
        ></input>
        <label
          htmlFor="default-checkbox"
          className="text-base font-base self-end pl-3"
        >
          I have read and agree to the{" "}
          <a href="#" className="text-blue-800">
            Terms and Conditions
          </a>{" "}
          and the{" "}
          <a href="#" className="text-blue-800">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      <div className="flex justify-between items-center">
        <button
          type="button"
          className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-slate-300 font-medium rounded text-lg px-5 py-2.5 focus:outline-none w-2/5"
        >
          <IconContext.Provider value={{ className: "size-5 inline mx-2" }}>
            <FaBackward />
          </IconContext.Provider>

          <span className="inline-block relative bottom-[-3px]">
            {" Add More items".toUpperCase()}
          </span>
        </button>
        <button
          type="button"
          className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-slate-300 font-medium rounded text-lg px-5 py-2.5 focus:outline-none w-2/5"
        >
          <span className="inline-block relative bottom-[-3px]">
            {"Proceed to checkout".toUpperCase()}
          </span>
          <IconContext.Provider value={{ className: "size-5 inline mx-2" }}>
            <FaForward />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

const TableRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className="even:bg-white odd:bg-slate-100 border-b border-slate-300">
      {children}
    </tr>
  );
};

export default CartPage;
