import PageNotAccessible from '../PageNotAccessible';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

const Profile = () => {
  const isAuthenticated = true;
  const account = {name:"Rahul Thakur",username:"RThakur"};

  if (!isAuthenticated) {
    return <PageNotAccessible />;
  }
  else {
    return (
      <Container maxWidth="xl">
        <h2>User Profile</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table" sx={{ marginTop: "12px" }}>
            <TableHead sx={{ "& th": { color: "white", backgroundColor: "black" } }} >
              <TableRow>
                <TableCell>Profile Property</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={"name"}>
                <TableCell component="th" scope="row">name</TableCell>
                <TableCell>{account?.name}</TableCell>
              </TableRow>
              <TableRow key={"username"}>
                <TableCell component="th" scope="row">username</TableCell>
                <TableCell>{account?.username}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    )
  }
}

export default Profile;