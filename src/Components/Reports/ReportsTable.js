import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "../../Utils/Common";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import Pdf from "../../Assets/sample.pdf";

const ReportsTable = () => {
  const [reports, setReports] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const jwt = getToken();
      let config = {
        headers: {
          Authorization: `Bearer ${jwt} `,
        },
      };
      const request = await axios.get(
        "http://van-dev-tm4web2.tmwsystems.com:51841/tm/reports", config
      );
      console.log(request);
      setReports(request.data.reports);
      return request;
    }
    fetchData();
  }, []);

  async function fetchById(id) {
    const jwt = getToken();
    let config = {
      headers: {
        Authorization: `Bearer ${jwt} `,
      },
    };
    const request = await axios.get(
      `http://van-dev-tm4web2.tmwsystems.com:51841/tm/reports/${id}`,
      config
    );
    console.log(request);
    return request;
  }

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
     
        backgroundColor: "white",
      
    },
  }))(TableRow);

  const rows = reports;

  const useStyles = makeStyles({
    table: {
      width: "100%",
    },
  });

  function createData() {
    return "Crystal Reports";
  }

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [pdfData, setPdfData] = useState("");

  return (
    <Container component="main" maxWidth="md">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Crystal Reports</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow
                    key={row.reportId}
                    onClick={() =>
                      fetchById(row.reportId)
                        .then((result) => setPdfData(`data:application/pdf;base64,${result.data.reportData}`))
                        .catch((error) => setPdfData(Pdf))
                    }
                  >
                    <StyledTableCell component="th" scope="row">
                      {/*row.reportDescription*/}
                      <a style={{textDecoration: "none", color: "black"}} href = {pdfData} download={row.reportId}>
                        {row.reportDescription}
                      </a>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default ReportsTable;
