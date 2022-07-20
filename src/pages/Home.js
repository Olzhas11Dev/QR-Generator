import {Box, Button, Container, Typography} from "@mui/material";

const Home = ({googleSignIn}) => {
    return (
        <Container>

            <Box sx={{width:"50%",margin:'auto',mt:"200px"}}>
                <Typography sx={{textAlign:'center'}} variant="h6">Please Sign In</Typography>
                <Button sx={{width:'100%',mt:4}} variant={"outlined"} onClick={googleSignIn}>Sigh In</Button>
            </Box>

        </Container>
    )
}
export default Home