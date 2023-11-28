import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { Button, TablePagination } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

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

const MyDonationCamCart = ({data, refetch}) => {
    const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [campaignValue, setCampaignValue] = useState(false);
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

  const handleCampaign = async (data) => {
    setCampaignValue(!campaignValue);

    await axiosSecure.patch(`/createDonation_status/${data._id}`, {
        donation: !campaignValue,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`${data.name} Campaign Status change`);
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
              <StyledTableCell>Serial</StyledTableCell>
              <StyledTableCell align="right">Image</StyledTableCell>
              <StyledTableCell align="right">Pet name</StyledTableCell>
              <StyledTableCell align="right">Donation Amount</StyledTableCell>
              <StyledTableCell align="right">Campaigns Status</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">View Donators</StyledTableCell>
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
                    {pet.amount}
                  </StyledTableCell>
                    {/* Campaign Status */}
                    <StyledTableCell align="right">
                    {!pet.donation ? (
                      <Button
                        onClick={() => handleCampaign(pet)}
                        variant="outlined"
                        color="warning"
                      >
                        Active
                      </Button>
                    ) : (
                      <Button
                        onClick={() => handleCampaign(pet)}
                        variant="outlined"
                        color="warning"
                      >
                        Pause
                      </Button>
                    )}
                  </StyledTableCell>
                  {/* Editors btn */}
                  <StyledTableCell align="right">
                    <Link to={`/dashboard/campaignEdit/${pet._id}`}>
                    <Button>
                    <BorderColorIcon color="warning" />
                    </Button>
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Button variant="outlined"
                        color="primary">
                        View Donators
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

export default MyDonationCamCart;