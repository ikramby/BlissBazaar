import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useStepperContext } from '@mui/material';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}






export default function DenseTable({users, deleteUser}) {
   
  return (
    <TableContainer component={Paper} style={{background:'transparent', marginTop:'20vh', color:'white'}}>
     <h1>Dashboard User</h1>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow >
            <TableCell style={{ color:'white'}}>USER NAME</TableCell>
            <TableCell align="right" style={{ color:'white'}}>Last Name</TableCell>
            <TableCell align="right" style={{ color:'white'}}>E-mail</TableCell>
            <TableCell align="right" style={{ color:'white'}}>Purpose</TableCell>
            <TableCell align="right" style={{ color:'white'}}>Ban</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.firstNme}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{ color:'white'}} >
                {user.firstName}
              </TableCell>
              <TableCell align="right" style={{ color:'white'}}>{user.lastName}</TableCell>
              <TableCell align="right" style={{ color:'white'}}>{user.email}</TableCell>
              <TableCell align="right" style={{ color:'white'}}>{user.purpose}</TableCell>
              <TableCell align="right" style={{ color:'white'}}>
              <button  onClick={() => deleteUser(user.id)}
              
              >Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}