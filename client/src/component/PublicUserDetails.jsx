import { TableHead, TableRow,Button ,Table, TableBody, TableCell, styled } from "@mui/material"
import { useState, useEffect } from "react";
import { getPublicUsers } from "../Service/api.js";
import { Link } from "react-router-dom"

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
    background: #000000;
    & > th {
        color: #fff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size: 20px;
    }
`


const AllPublicUsers =() =>{
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const response = await getPublicUsers();
            setUsers(response);

            // Optionally, you can filter users based on the selected role here
            // and update the users state accordingly.
        } catch (error) {
            console.error('Error while fetching users', error);
        }
    }

    // const deleteUserDetails = async (id) => {
    //     await deleteUser(id);
    //     getAllUsers();
    // }
    return(

        <div>
            
            <StyledTable>
                <TableHead>
                    <THead>
                        <TableCell> ID</TableCell>
                        <TableCell> Name</TableCell>
                        <TableCell> Username</TableCell>
                        <TableCell> E-mail</TableCell>
                        <TableCell> Phone</TableCell>
                        <TableCell> Gender</TableCell>
                        <TableCell></TableCell>
                    </THead>
                </TableHead>

                <TableBody>
                    {users.map((user) => (
                        <TBody key={user._id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.Phone}</TableCell>
                            <TableCell>{user.gender}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{ marginRight: 10 }} component={Link} to={`/edit/${user._id}`}> Edit</Button>
                                
                            </TableCell>
                        </TBody>
                    ))}
                </TableBody>
            </StyledTable>
        </div>
    )
}

export default AllPublicUsers;