import { Box, Typography, Button, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreIcon from "@mui/icons-material/Restore";
import EditIcon from "@mui/icons-material/Edit";

import { tokens } from "../../theme";
import Header from "../../components/Header";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import deleteUser from "../../redux/actions/users/deleteUser";
import restoreUser from "../../redux/actions/users/restoreUser";
import getUserById from "../../redux/actions/users/getUserById";

const Users = () => {
  const users = useSelector((state) => state.users.allUsers);
  const dispatch = useDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(users);

  const onDelete = (e, params) => {
    dispatch(deleteUser(params.userID));
  };

  const onRestore = (e, params) => {
    dispatch(restoreUser(params.userID));
  };

  const onEdit = (e, params) => {
    dispatch(getUserById(params.userID));
  };

  const columns = [
    {
      field: "userID",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "photo",
      headerName: "Foto",
      flex: 0.5,
    },
    {
      field: "firstName",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "lastName",
      headerName: "Apellido",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "password",
      headerName: "Contraseña",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Celular",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Domicilio",
      flex: 1,
    },
    {
      field: "birth",
      headerName: "Fecha de nacimiento",
      flex: 1,
    },
    {
      field: "dni",
      headerName: "DNI",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "enabled"
                ? colors.greenAccent[600]
                : colors.greenAccent[800]
            }
            borderRadius="4px"
          >
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "systemRole",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { systemRole } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              systemRole === "admin"
                ? colors.greenAccent[600]
                : systemRole === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {systemRole === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {systemRole === "manager" && <SecurityOutlinedIcon />}
            {systemRole === "usuario" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {systemRole}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "delete",
      headerName: "Eliminar",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton onClick={(e) => onDelete(e, params.row)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
    {
      field: "restore",
      headerName: "Restaurar",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton onClick={(e) => onRestore(e, params.row)}>
            <RestoreIcon />
          </IconButton>
        );
      },
    },
    {
      field: "edit",
      headerName: "Editar",
      width: 50,
      renderCell: (params) => {
        return (
          <IconButton
            onClick={(e) => onEdit(e, params.row)}
            component={Link}
            to="/users/form/update"
          >
            <EditIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="USUARIOS" />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button
          component={Link}
          to="/users/form/create"
          color="secondary"
          variant="contained"
        >
          Crear nuevo usuario
        </Button>
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
          getRowId={(row) => row.userID}
          rows={users.rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Users;
