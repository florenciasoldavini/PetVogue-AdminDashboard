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
import deletePet from "../../redux/actions/pets/deletePet";
import getPetById from "../../redux/actions/pets/getPetById";

const Pets = () => {
  const pets = useSelector(state => state.pets.allPets);
  const dispatch = useDispatch();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(pets);

  const onDelete = (e, params) => {
    dispatch(deletePet(params.petID));
  };

  const onEdit = (e, params) => {
    dispatch(getPetById(params.petID));
  };

  const columns = [
    {
      field: "petID",
      headerName: "ID",
      flex: 0.5
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "birth",
      headerName: "Fecha de nacimiento",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Género",
      flex: 1,
    },
    {
      field: "specie",
      headerName: "Especia",
      flex: 1,
    },
    {
      field: "breed",
      headerName: "Raza",
      flex: 1,
    },
    {
      field: "castrated",
      headerName: "Castrado",
      flex: 1,
    },
    {
      field: "weight",
      headerName: "Peso",
      flex: 1,
    },
    {
      field: "size",
      headerName: "Tamaño",
      flex: 1,
    },
    {
      field: "image",
      headerName: "Foto",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Estado",
      flex: 1,
    },
    { field: 'delete', headerName: '', width: 50, renderCell: (params) => {
      return (
        <IconButton 
          onClick={(e) => onDelete(e, params.row)}
        >
          <DeleteIcon/>
        </IconButton>
      );
    } },
    { field: 'edit', headerName: '', width: 50, renderCell: (params) => {
      return (
        <IconButton
          onClick={(e) => onEdit(e, params.row)} component={Link} to="/pets/form/update" 
        >
          <EditIcon/>
        </IconButton>
      );
    } }
  ];

  return (
    <Box m="20px">
      <Header
        title="MASCOTAS"
      />
      <Box display="flex" justifyContent="end" mt="20px">
        <Button component={Link} to="/pets/form/create" color="secondary" variant="contained">
          Crear nueva mascota
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
          getRowId={(row) => row.petID}
          rows={pets.rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Pets;
