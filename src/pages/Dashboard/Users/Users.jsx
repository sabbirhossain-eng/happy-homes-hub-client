import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, TablePagination } from "@mui/material";

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

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/users");
        return res.data;
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
  });

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
    rowsPerPage - Math.min(rowsPerPage, users.length - page * rowsPerPage);

    const handleMakeAdmin = async (user) => {
        try {
          const res = await axiosSecure.patch(`/users/admin/${user._id}`,{
            role: 'admin'
          });
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success(`${user.name} is Make Admin successfully`);
          }
        } catch (error) {
          console.error("Error making admin:", error);
          
          toast.error("Error making admin");
        }
      };
      
      const handleAdminOut = async (user) => {
        try {
          const res = await axiosSecure.patch(`/users/admin_out/${user._id}`,{
            role: 'user'
          });
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success(`${user.name} is Admin Out success`);
          }
        } catch (error) {
          console.error("Error admin out:", error);
          
          toast.error("Error admin out");
        }
      };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial Number</StyledTableCell>
              <StyledTableCell align="right">Profile pic</StyledTableCell>
              <StyledTableCell align="right">user Name</StyledTableCell>
              <StyledTableCell align="right">user Email</StyledTableCell>
              <StyledTableCell align="right">User Role</StyledTableCell>
              <StyledTableCell align="right">Make Admin/Out</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 &&
              users
                .slice(sliceData, sliceData + rowsPerPage)
                .map((user, index) => (
                  <StyledTableRow key={user._id}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>

                    <StyledTableCell align="right">
                      <img
                        src={user.image}
                        alt={`Image of ${user.name}`}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">{user.name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {user.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">{user.role}</StyledTableCell>
                    {/* Make Admin */}
                    <StyledTableCell align="right">
                      {user.role === "user" ? (
                        <Button
                          onClick={() => handleMakeAdmin(user)}
                          variant="outlined"
                          color="warning"
                        >
                          Make Admin
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleAdminOut(user)}
                          variant="outlined"
                          color="warning"
                        >
                          Admin Out
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
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Users;
