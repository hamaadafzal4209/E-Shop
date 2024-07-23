import { MdOutlineTrackChanges } from "react-icons/md";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

function TrackOrders() {
  const orders = [
    {
      _id: "3872738263872y3x7nnx72362",
      orderItems: [
        {
          name: "Iphone 14 pro max",
        },
      ],
      totalPrice: 150,
      orderStatus: "Processing",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "Order ID",
      minWidth: 150,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.value === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemQty",
      headerName: "Item Qty",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: " ",
      flex: 1,
      minWidth: 130,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.id}`}>
            <Button>
              <MdOutlineTrackChanges size={20} color="black" />
            </Button>
          </Link>
        );
      },
    },
  ];

  const rows = orders.map((item) => ({
    id: item._id,
    itemQty: item.orderItems.length,
    total: "USD " + item.totalPrice,
    status: item.orderStatus,
  }));

  return (
    <div className="pl-6 pt-1 font-semibold">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        autoHeight
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default TrackOrders;
