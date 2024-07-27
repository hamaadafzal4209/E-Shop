import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteShopProducts,
  getAllShopProducts,
} from "../../../redux/actions/product";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../../Loader";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import { server } from "../../../server";
import { toast } from "react-toastify";

function AllCoupons() {
  const { products, isLoading } = useSelector((state) => state.products);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [coupouns, setCoupouns] = useState([]);
  const [minAmount, setMinAmout] = useState(null);
  const [maxAmount, setMaxAmount] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (seller?._id) {
      dispatch(getAllShopProducts(seller._id));
    }
  }, [dispatch, seller._id]);

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteShopProducts(id));
    window.location.reload();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${server}/coupunsCodeRouter/create-coupoun`,
        {
          name,
          value,
          minAmount,
          maxAmount,
          selectedProducts,
          shopId: seller._id,
        },
        { withCredentials: true },
      )
      .then(() => {
        toast.success("Coupon code created successfully!");
        setModalOpen(false);
        window.location.reload();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
    setModalOpen(false);
  };

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },
    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "Preview",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/product/${params.id}`}>
            <Button>
              <AiOutlineEye size={20} />
            </Button>
          </Link>
        );
      },
    },
    {
      field: "delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "Delete",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button onClick={() => handleDelete(params.id)}>
            <AiOutlineDelete size={20} />
          </Button>
        );
      },
    },
  ];

  const rows =
    products?.map((item) => ({
      id: item._id,
      name: item.name,
      price: `US$${item.discountPrice}`,
      stock: item.stock,
      sold: 10,
    })) || [];

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <div className="relative">
        <div className="absolute right-0 top-4">
          <Button
            variant="contained"
            className="font-semibold"
            onClick={() => setModalOpen(true)}
          >
            Create Coupon Code
          </Button>
        </div>
      </div>
      <div className="mx-4 mt-16 w-full overflow-hidden bg-white pt-1">
        <Box
          sx={{ height: { xs: 300, sm: 400 }, width: "100%" }}
          className="overflow-auto"
        >
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
      {/* popup box */}
      {modalOpen && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-75"
        >
          <div className="relative flex w-full max-w-2xl items-center justify-center p-4">
            <div className="custom-scrollbar relative h-[90vh] overflow-y-auto rounded-lg bg-white shadow md:h-[70vh] dark:bg-gray-700">
              <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create Coupon Code
                </h3>
                <button
                  type="button"
                  className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setModalOpen(false)}
                >
                  <IoClose size={30} />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Coupon Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="Coupon Name"
                      value={couponData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="value"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Value
                    </label>
                    <input
                      type="number"
                      name="value"
                      id="value"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="Coupon Value"
                      value={couponData.value}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="minAmount"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Minimum Amount
                    </label>
                    <input
                      type="number"
                      name="minAmount"
                      id="minAmount"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="Minimum Amount"
                      value={couponData.minAmount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="maxAmount"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Maximum Amount
                    </label>
                    <input
                      type="number"
                      name="maxAmount"
                      id="maxAmount"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      placeholder="Maximum Amount"
                      value={couponData.maxAmount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="productId"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Select Product
                    </label>
                    <select
                      name="productId"
                      id="productId"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
                      value={couponData.productId}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select a Product
                      </option>
                      {products.map((product) => (
                        <option key={product._id} value={product._id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create Coupon
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllCoupons;
