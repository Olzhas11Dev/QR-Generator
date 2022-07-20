import {Box, Container, Typography} from "@mui/material";
import BasicSelect from "../components/DropDown";


const Main = ({user}) => {

    const displayUserName = (user) => {
        return <Box>Hello {user} !!!</Box>
    }

    return (
        <Container sx={{width:"30%"}}>
            <Box sx={{display:"flex",alignItems:'center',justifyContent:'space-between',mt:4}}>
                <Typography variant="h6">Main Page</Typography>
                <Box sx={{m: 2}}> {user ? displayUserName(user) : ''}</Box>
            </Box>

            <BasicSelect sx={{mt: 2}}/>
        </Container>
    )
}

export default Main