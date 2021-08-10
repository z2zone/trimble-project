import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { DataGrid, useGridSlotComponentProps  } from '@material-ui/data-grid';
import { createMuiTheme } from '@material-ui/core/styles';
import { Button, Container, FormGroup, Paper, TextField } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    GridColDef,
    GridApi,
    GridCellValue,
    GridCellParams
  } from "@material-ui/data-grid";
import InputAdornment from "@material-ui/core/InputAdornment"; 
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/styles';
import { Select } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { getToken } from '../../Utils/Common';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function customCheckbox(theme) {
    return {
      '& .MuiCheckbox-root svg': {
        width: 16,
        height: 16,
        backgroundColor: 'transparent',
        border: `1px solid ${
          theme.palette.type === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
        }`,
        borderRadius: 2,
      },
      '& .MuiCheckbox-root svg path': {
        display: 'none',
      },
      '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
        backgroundColor: '#009ad9',
        borderColor: '#1890ff',
      },
      '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
        position: 'absolute',
        display: 'table',
        border: '2px solid #fff',
        borderTop: 0,
        borderLeft: 0,
        transform: 'rotate(45deg) translate(-50%,-50%)',
        opacity: 1,
        transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
        content: '""',
        top: '50%',
        left: '39%',
        width: 5.71428571,
        height: 9.14285714,
      },
      '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
        width: 8,
        height: 8,
        backgroundColor: '#009ad9',
        transform: 'none',
        top: '39%',
        border: 0,
      },
    };
  }
  
  const defaultTheme = createMuiTheme();
  const useStyles = makeStyles(
    (theme) => ({
      root: {
        border: 0,
        color:
          theme.palette.type === 'light'
            ? 'rgba(0,0,0,.85)'
            : 'rgba(255,255,255,0.85)',
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        WebkitFontSmoothing: 'auto',
        letterSpacing: 'normal',
        '& .MuiDataGrid-columnsContainer': {
          backgroundColor: theme.palette.type === 'light' ? '#fafafa' : '#1d1d1d',
        },
        '& .MuiDataGrid-iconSeparator': {
          display: 'none',
        },
        '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
          borderRight: `1px solid ${
            theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
          }`,
        },
        '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
          borderBottom: `1px solid ${
            theme.palette.type === 'light' ? '#f0f0f0' : '#303030'
          }`,
        },
        '& .MuiDataGrid-cell': {
          color:
            theme.palette.type === 'light'
              ? 'rgba(0,0,0,.85)'
              : 'rgba(255,255,255,0.65)',
        },
        '& .MuiPaginationItem-root': {
          borderRadius: 0,
        },
        ...customCheckbox(theme),
      },
    }),
    { defaultTheme },
  );
  
  

const Trace = () => {
    const jwt = getToken();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        async function getOrders(){
            let config = {
                headers: {
                  Authorization: `Bearer ${jwt} `,
                },
              };
            const request = await axios.get('http://van-dev-tm4web2.tmwsystems.com:51841/tm/orders',
            config
            )
            setOrders(request.data.orders);
            return request;
    } getOrders() 

    ;}, [])



    const columns = [
        //{field: "id", headerName: "ID", width:150},
        {
        field: "billNumber",
        headerName: "Bill Number",
        width: 150,
       /* renderCell : () =>{
            return <Button onClick={handleMapOpen} > Heri rakj </Button>
        }
        */
    },
    {
        field: "billToCode",
        headerName: "Bill_To_Code",
        width: 150
    },
    {
        field: "billToName",
        headerName: "Bill To Name",
        width: 150
    },
    {
        field: "tripNumber",
        headerName: "Trip Number Number",
        width: 150
    },
    {
        field: "currentStatus",
        headerName: "Current Status",
        width: 150
    },
    {
        field: "startZone",
        headerName: "Start Zone",
        width: 150
    },
    {
        field: "endZone",
        headerName: "End Zone",
        width: 150
    },
    {
        field: "pickupBy",
        headerName: "Pick Up By",
        width: 150
    },
    {
        field: "deliverBy",
        headerName: "Deliver by",
        width: 150
    },
    {
        field: "traceNumber",
        headerName: "Trace Numberr",
        width: 150
    },
    
    {
        field: "movementType",
        headerName: "Movement Type",
        width: 150
    },
    ]

    const createRows = (billNumber, billToCode, billToName, tripNumber, currentStatus, startZone, endZone, pickupBy, deliverBy, traceNumber, movementType) =>{
        return {
            
            id: billNumber, 
            billNumber: billNumber, 
            billToCode: billToCode, 
            billToName: billToName, 
            tripNumber: tripNumber, 
            currentStatus: currentStatus, 
            startZone: startZone,
             endZone: endZone, 
             pickupBy: pickupBy, 
             deliverBy: deliverBy, 
             traceNumber: traceNumber, 
             movementType: movementType
            }
    }
    console.log("haalnu >>", orders)
      
    const rows = 
        orders.map((order)=>createRows(
            order.billNumber, order.billToCode, order.billToName, order.tripNumber, order.status, 
            order.startZone, order.endZone, order.pickUpBy, order.deliverBy, order.tripNumber));
                
    
    const style={
        overflow: "scroll"
    }

    const [map, setMap] = useState(false);
    const handleMapOpen = () => {
        setMap(true);
      };
    
      const handleMapClose = () => {
        setMap(false);
      };

      function currentlySelected(GridCellParams) {
        const  GridApi = GridCellParams.api;
        const value = GridCellParams.colDef.field;
    
        if (!(value === "Bill Number")) {
          return;
        } else{handleMapOpen();}
        
    }    

    const classes = useStyles();

    const [searchBy, setSearchBy] = useState('');
    const handleChange = (event) =>{
        setSearchBy(event.target.value);
    };
    
    return (
        <>
        <div>
           <Paper variant="outlined" elevation="3" style={{backgroundColor:"#fafafa"}}>
            <Container maxWidth="sm" >
            <FormGroup style={{flexDirection: "row", padding: "2rem"}}>
            <Select
                native
                value={searchBy}
                onChange={handleChange}
                variant="outlined"
                style={{height: "2.5rem", width: "10rem", backgroundColor: "white"}}
                xs={3}
            >
                 <option >Bill Number</option>
                 <option >Trip Number</option>
                 <option >Trace Number</option>
            </Select>
            
        
        
        <Select
                native
                value={searchBy}
                onChange={handleChange}
                variant="outlined"
                style={{height: "2.5rem", width:"10rem", backgroundColor: "white"}}
            >
          <option >is exactly</option>
          <option >starts with</option>
          <option >contains</option>
        </Select>
       
       
       
            <TextField 
                variant="outlined"  
                style= {{backgroundColor: 'white', height: "2.5rem"}}
                size="small" 
                InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton style={{position: "relative", left: "20px",
        top: "0px"}}>
                          <SearchOutlinedIcon style={{color: "#838383"}} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
            
            />
            <Button >More <ArrowDropDownIcon /></Button>
            </FormGroup>
            </Container>

            </Paper>
       <div style={{ height: 800, width: '100%', overflow: "scroll", backgroundColor: 'white', marginTop: '10px'}}>
        <DataGrid
        filterModel={{
            items: [{ columnField: 'billNumber', operatorValue: 'contains', value: '' }],
          }}
       rows={rows}
       columns={columns}
       className={classes.root} 
       pageSize={10}
       style={style}
       checkboxSelection
       disableSelectionOnClick
       onCellClick={currentlySelected}
    
       
     />

     
     </div>
     
     </div>
     </>
    )
}

export default Trace
