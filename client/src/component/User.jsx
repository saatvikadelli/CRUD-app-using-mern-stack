import { useState } from "react"

import { FormControl, FormGroup, InputLabel,Input, Typography, styled, Button, RadioGroup, Radio, FormControlLabel} from "@mui/material"
 
import { addUser , addPublicUser} from "../Service/api.js" ;

import PublicUserDetails from "./PublicUserDetails.jsx";



//all users should open direct once we click add user
import { useNavigate } from 'react-router-dom'




const Container = styled(FormGroup)`
    width : 50%;
    margin : 5% auto 0 auto ;
    & > div{
        margin-top : 20px;
    }

`
const defaultValue = {
    name : '',
    username : '',
    email : '',
    Phone : '',
    gender : ''
}
const AddUser = ()=>{

    const navigate = useNavigate();

    const [user, setUser] = useState(defaultValue);
    

    const onValueChange =(e)=>{
       // console.log(e.target.name, e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }
    const handleRoleChange =(event) =>{
        setUser({...user, role: event.target.value});
    }
    
    const addUserDetails = async ()=>{
        if(user.role=== "admin"){
            const response =await addUser(user);
            navigate('/all');
            console.log(user.role);
            console.log(response.data.userId)
        }else if(user.role === "public"){
            const response = await addPublicUser(user);
            console.log(response);
            //const createdUserId = response.data.userId;
            //console.log(createdUserId);
            navigate(`/public-users`);
        }   
    }
    return(
        <Container> 
            <Typography variant="h4">Add User</Typography>
            <FormControl component={"fieldset"}>
                <RadioGroup
                    aria-label="user-role"
                    name="role"
                    value={user.role}
                    onChange={handleRoleChange}
                >
                    <FormControlLabel
                        value = "admin"
                        control ={<Radio />}
                        label ="Admin-user"
                    />
                    <FormControlLabel
                        value = "public"
                        control ={<Radio />}
                        label ="Public-user"
                    />
                </RadioGroup>
            
            </FormControl>
                 
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="name" />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="username"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="Phone"/>
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input onChange={(e)=>{onValueChange(e)}} name="gender"/>
            </FormControl>
            <FormControl>
                <Button variant ="contained" onClick={()=>{addUserDetails()}}>Add User</Button>
            </FormControl>
            
            
        </Container>
    )
}

export default AddUser;