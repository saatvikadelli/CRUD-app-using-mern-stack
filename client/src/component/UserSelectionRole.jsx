import React from 'react';
import { useState } from "react";
import { Container, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

const UserRoleSelection =({onRoleSelect}) =>{
    const  [selectedRole, setSelectRole]= useState("admin");


    const handleRoleChange = (e) =>{
        setSelectRole(e.target.value);
        onRoleSelect(e.target.value);
    }

    

    return(
        <Container>
            <FormControl component = "fieldset">
                <RadioGroup
                    aria-label="user-role"
                    name="user-role" 
                    value ={selectedRole} 
                    onChange={handleRoleChange}
                    >
                        <FormControlLabel
                            value ="admin"
                            control ={<Radio />}
                            label ="Admin User"
                        />
                        <FormControlLabel
                            value ="user"
                            control ={<Radio />}
                            label ="Public User"
                        />
                    </RadioGroup>
            </FormControl>
            
        </Container>
    )
}

export default UserRoleSelection;