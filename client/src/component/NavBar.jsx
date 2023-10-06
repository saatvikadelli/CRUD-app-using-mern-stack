import { styled } from '@mui/material'
import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
//import UserRoleSelection from './UserSelectionRole';

const Container = styled(Box)`
    background: #1111111;
    display: flex;
    justify-content :space-between;
    align-items : center;
    padding:10px 20px;
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    color: black;
    text-decoration:none;
    margin-left: 20px;
`


const NavBar = ()=>{
    return(
        <Container>
            <Typography variant ="h6" style={{color:'black'}}>
                User Intereaction Page
            </Typography>
            
                
            
            <Tabs to ='/add'>Add User</Tabs>
           
        
        </Container>
    )
}
 export default NavBar;