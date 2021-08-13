import React, {useState, useEffect} from 'react';
import { Paper, FormControl, Container, FormGroup, Select, } from '@material-ui/core';
import { InputAdornment } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { TextField } from '@material-ui/core';
import axios from 'axios';

const ExternalTrace = () => {
    const[searchBy, setSearchBy] = useState("");
    const handleChange = (event) =>{
        setSearchBy(event.target.value);
    };
    const [searchContent, setSearchContent] = useState('');
    const [open, setOpen] = useState(false);

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
            alert(JSON.stringify(request.data.orders));
            return request;
            
        }
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
                                    <SearchOutlinedIcon  onClick = {handleSearch} />
                                    </IconButton>
                                 </InputAdornment>
                             )
                  }}
            
            />
                    </FormGroup>
                </Paper>
            </Container>
            
        </div>
    )
}

export default ExternalTrace
