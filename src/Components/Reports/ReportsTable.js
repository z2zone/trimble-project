import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { getToken } from '../../Utils/Common';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const ReportsTable = () => {
    const[reports, setReports] = useState([]);
    useEffect(() => {

        async function fetchData(){
            const jwt = getToken();
            let config = {
                headers: {
                    'Authorization' : `Bearer ${jwt} ` 
                }
            };
            const request = await axios.get(
                'http://localhost/tm/reports',
                config
            )
            console.log(request);
            setReports(request.data.reports);
            return request;
        }
        fetchData();
    }, []);

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: "#060024",
          color: "#fff",
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);
      
      function createData() {
        return "Crystal Reports";
      }
      
      const rows = reports;
      
      const useStyles = makeStyles({
        table: {
          minWidth: 700,
        },
      });


      const classes = useStyles();
    
    return (
        
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Crystal Reports</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.reportId}>
              <StyledTableCell component="th" scope="row">
                {row.reportDescription}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
    


export default ReportsTable
