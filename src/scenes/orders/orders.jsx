import { Box, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { tokens } from "../../theme";
import Header from "../../components/Header";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import deleteOrder from "../../redux/actions/orders/deleteOrder";
import getOrderById from "../../redux/actions/orders/getOrderById";

const Orders = () => {
  const orders = useSelector(state => state.orders.allOrders);
  const dispatch = useDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(orders);

  const onDelete = (e, params) => {
    dispatch(deleteOrder(params.orderID));
  };

  const onEdit = (e, params) => {
    dispatch(getOrderById(params.orderID));
  };

  const columns = [
    {
      field: "orderID",
      headerName: "orderID",
      flex: 1
    },
    {
      field: "userID",
      headerName: "userID",
      flex: 1
    },
    {
      field: "productID",
      headerName: "productID",
      flex: 1
    },
    {
      field: "serviceID",
      headerName: "serviceID",
      flex: 1
    },
    {
      field: "date",
      headerName: "Fecha",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "quantity",
      headerName: "Cantidad",
      flex: 1,
    },
    {
      field: "amount",
      headerName: "Cantidad",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Tipo",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
    },
    {
      field: "rate",
      headerName: "Tasa",
      flex: 1,
    },
    {
      field: "currency_id",
      headerName: "currency_id",
      flex: 1,
    },
    {
      field: "mp_payment_id",
      headerName: "mp_payment_id",
      flex: 1,
    },
    {
      field: "mp_status",
      headerName: "mp_status",
      flex: 1,
    },
    {
      field: "mp_merchant_order_id",
      headerName: "mp_merchant_order_id",
      flex: 1,
    },
    {
      field: "mp_external_reference",
      headerName: "mp_external_reference",
      flex: 1,
    },
    // { field: 'delete', headerName: '', width: 50, renderCell: (params) => {
    //   return (
    //     <IconButton 
    //       onClick={(e) => onDelete(e, params.row)}
    //     >
    //       <DeleteIcon/>
    //     </IconButton>
    //   );
    // } },
    // { field: 'edit', headerName: '', width: 50, renderCell: (params) => {
    //   return (
    //     <IconButton
    //       onClick={(e) => onEdit(e, params.row)} component={Link} to="/orders/form/update" 
    //     >
    //       <EditIcon/>
    //     </IconButton>
    //   );
    // } }
  ];

  return (
    <Box m="20px">
      <Header
        title="ORDENES DE COMPRA"
      />
      <Box display="flex" justifyContent="end" mt="20px">
        {/* <Button component={Link} to="/orders/form/create" color="secondary" variant="contained">
          Crear nueva orden de compra
        </Button> */}
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          getRowId={(row) => row.orderID}
          rows={orders.rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Orders;
