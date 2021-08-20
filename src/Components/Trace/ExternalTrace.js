import React, {useState, useEffect} from 'react';
import { Paper, FormControl, Container, FormGroup, Select, } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Deets from './Deets';

const ExternalTrace = () => {
    const[searchBy, setSearchBy] = useState("");
    const handleChange = (event) =>{
        setSearchBy(event.target.value);
    };
    const [searchContent, setSearchContent] = useState('');
    const [orderId, setOrderId] = useState(0);

    async function handleSearch (){
        if ( searchContent != null){
            let config = {
                headers: {
                  Authorization: `Bearer 37eb595e371970789e094654aee51d39 `,
                },
              };
    
       
            const request = await axios.get(`http://van-dev-tm4web2.tmwsystems.com:51841/tm/orders?$filter=billNumber eq ${searchContent}`,
            config
            )
            setOrderId(parseInt(request.data.orders[0].orderId));

            return request;
            
        }
    }
    const [map, setMap] = useState(false);
    const handleMapOpen = () => {
        setMap(true);
      };
    
      const handleMapClose = () => {
        setMap(false);
      };

    
    
    const [caller, setCaller] = useState({})
    async function getCaller (id){
        let config = {
            headers: {
              Authorization: `Bearer 37eb595e371970789e094654aee51d39 `,
            },
          };

   
        const request = await axios.get(`http://van-dev-tm4web2.tmwsystems.com:51841/tm/orders/${id}/caller`,
        config
        )
        setCaller(request)
        return request;

    }
    async function getShipper () {

    }
    async function getCosignee () {

    }
    return (
        <div>
            <Container component="main">
                <Paper variant= "outlined" elevation={7} style={{display: "flex", flexDirection: "row"}}>
                    <FormGroup style={{display: "flex", flexDirection:"row", padding: "2rem", alignItems: 'center'}}>
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
                        onChange={(e) =>{
                            setSearchContent(e.target.value)
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton style={{position: "relative", left: "20px",
                                        top: "0px"}}>
                                    <SearchOutlinedIcon  onClick = {() => {handleSearch(); setMap(true)}} />
                                    </IconButton>
                                 </InputAdornment>
                             )
                  }}
            
            />
                    </FormGroup>
                </Paper>
            </Container>
            
            <Deets deets = {map} handleClose = {handleMapClose} billNumber = {searchContent} />
            
            
        </div>
    )
}

export default ExternalTrace
