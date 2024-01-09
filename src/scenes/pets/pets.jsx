import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";


const Pets = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", 
    headerName: "ID", 
    flex: 0.5 
    },
    {
      field: "image",
      headerName: "Foto",
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "species",
      headerName: "Especie",
      flex: 1,
    },
    {
      field: "breed",
      headerName: "Raza",
      flex: 1,
    },
    {
      field: "gender",
      headerName: "Género",
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
      field: "height",
      headerName: "Altura",
      flex: 1,
    },
    {
    field: "length",
    headerName: "Largo",
    flex: 1,
  },
  {
    field: "birth",
    headerName: "Fecha de nacimiento",
    flex: 1,
  },
  ];

  return (
    <Box m="20px">
      <Header
        title="MASCOTAS"
      />
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
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Pets;
