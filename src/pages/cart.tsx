const CartPage = () => {
  return (
    <div className="container mx-auto mt-4">
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
          <tr>
            <th className=""></th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Options</th>
            <th className="px-4 py-2">Price</th>
            <th className=""></th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

const CartActions = () => {
  return <div className="px-3"></div>;
};

export default CartPage;
