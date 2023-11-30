import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination } from "@mui/material";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

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
const RequiestCard = ({ data, refetch }) => {
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

    await axiosSecure
      .patch(`/pets/adopted/${data._id}`, {
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

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Location</StyledTableCell>
              <StyledTableCell align="right">Adoption Request</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data
                .slice(sliceData, sliceData + rowsPerPage)
                .map((adopt, index) => (
                  <StyledTableRow key={adopt._id}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="right">{adopt.name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {adopt.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {adopt.number}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {adopt.location}
                    </StyledTableCell>
                    {/* Adopted confirm */}
                    <StyledTableCell align="right">
                      {!adopt.adopted ? (
                        <Button
                          onClick={() => handleAdopted(adopt)}
                          variant="outlined"
                          color="warning"
                        >
                          Not Adopted
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleAdopted(adopt)}
                          variant="outlined"
                          color="warning"
                        >
                          Adopted
                        </Button>
                      )}
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

export default RequiestCard;
