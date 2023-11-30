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
import Swal from "sweetalert2";

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

const MyDonationCard = ({ data, refetch }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

 

  const handleRefund = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Refund Donations!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Refund!",
    }).then((result) => {
      if (result.isConfirmed) {
        const refundAmount = {
            amount: 'refund'
        }
        axiosSecure.patch(`/donations_refund/${id}`, refundAmount).then((res) => {
          refetch();
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Refunded!",
              text: "Your donation has been Refunded.",
              icon: "success",
            });
          }
        });
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
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Pet name</StyledTableCell>
              <StyledTableCell align="right">Donation Amount</StyledTableCell>
              <StyledTableCell align="right">Refund</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 &&
              data
                .slice(sliceData, sliceData + rowsPerPage)
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
                      $ {pet.amount}
                    </StyledTableCell>
                    {/* delete btn */}
                    <StyledTableCell align="right">
                      <Button onClick={() => handleRefund(pet._id)}>
                        Refund
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

export default MyDonationCard;
