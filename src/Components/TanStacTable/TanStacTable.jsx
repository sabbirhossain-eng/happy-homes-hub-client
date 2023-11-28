import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Button, TablePagination } from "@mui/material";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TanStacTable = ({ data, refetch }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [adoptedValue, setAdoptedValue] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleChangePage = (event, newPage) => {
    event.preventDefault();
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sliceData = page * rowsPerPage;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  const handleAdopted = async (data) => {
    setAdoptedValue(!adoptedValue);

    await axiosSecure.patch(`/pets/adopted/${data._id}`, {
        adopted: !adoptedValue,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${data.name} adopted change`);
        }
      });
  };

  const handleDeletePet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/pets/delete/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
console.log(data[0]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Pet name</StyledTableCell>
              <StyledTableCell align="right">Pet category</StyledTableCell>
              <StyledTableCell align="right">Adoption Status</StyledTableCell>
              <StyledTableCell align="right">Update</StyledTableCell>
              <StyledTableCell align="right">Adopted</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data.slice(sliceData, sliceData + rowsPerPage)
              .map((pet, index) => (
                <StyledTableRow key={pet._id}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  
                  <StyledTableCell align="right">
                    <img
                      src={pet.image}
                      alt={`Image of ${pet.name}`}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right">{pet.name}</StyledTableCell>
                  <StyledTableCell align="right">
                    {pet.category}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {pet.adopted == true ? "true" : "false"}
                  </StyledTableCell>
                  {/* update btn */}
                  <StyledTableCell align="right">
                    <Link to={`/dashboard/petUpdate/${pet._id}`}>
                    <Button>
                    <BorderColorIcon color="warning" />
                    </Button>
                    </Link>
                  </StyledTableCell>
                  {/* Adopted confirm */}
                  <StyledTableCell align="right">
                    {!pet.adopted ? (
                      <Button
                        onClick={() => handleAdopted(pet)}
                        variant="outlined"
                        color="warning"
                      >
                        Not Adopted
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleAdopted(pet)}
                        variant="outlined"
                        color="warning"
                      >
                        Adopted
                      </Button>
                    )}
                  </StyledTableCell>
                  {/* delete btn */}
                  <StyledTableCell align="right">
                    <Button onClick={() => handleDeletePet(pet._id)}>
                      <DeleteIcon color="warning" />
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {emptyRows > 0 && (
              <StyledTableRow style={{ height: 53 * emptyRows }}>
                <StyledTableCell colSpan={8} />
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TanStacTable;
