import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from "react-scroll"
import earth from "../images/earth-on-fire.jpeg"
import pollution from "../images/pollution.png"
import jobs from "../images/jobs.jpg"
import glass from "../images/glass.jpg"
import clothes from "../images/shoes-and-clothing-recycling-illustration-symbol-vector.png"
import { bgcolor } from '@mui/system'

function Homepage() {
  return (
    <div style={{ textAlign: "center" }}>

        {/* Hero section */}
        <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", bgcolor: "#e3cab9" }}>
            <Typography variant="h1" mb={4} >
                You Should Recycle. <br/> Here's Why.
            </Typography>
            <Button variant="contained" sx={{ fontSize: "1rem", padding: "10px 20" }}>
                <Link to="learn-more" smooth={true}>Learn More</Link>
            </Button>
        </Box>

        
        {/* Learn More section */}
        <Container id="learn-more" sx={{ padding: "15px 25px" }}>
            <Grid container spacing={2} my={13}>
                <Grid item xs={4}>
                    <Stack direction="column" alignItems="center">
                        <Typography variant="h5" component="h3" color="#8f364e" sx={{ fontWeight: "500", marginBottom: "20px" }}>
                            Climate Change
                        </Typography>
                        <Typography variant="body1" lineHeight={2}>
                        Landfills are the leading manmade cause of methane emissons. Methane acts as a greenhouse gas that contributes to climate change.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="column" alignItems="center">
                        <Typography variant="h5" component="h3" color="#8f364e" sx={{ fontWeight: "500", marginBottom: "20px" }}>
                            Reducing Pollution
                        </Typography>
                        <Typography variant="body1" lineHeight={2}>
                        Extracting and using raw materials can result in pollution. With recyling, there is less need to extract raw materials, leading to less pollution being created.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="column" alignItems="center">
                        <Typography variant="h5" component="h3" color="#8f364e" sx={{ fontWeight: "500", marginBottom: "20px" }}>
                            Create Jobs
                        </Typography>
                        <Typography variant="body1" lineHeight={2}>
                        Recycling involves collecting, sorting, and processing the materials. This creates a variety of new jobs. Examples include sorters, tractor drivers, and managers who oversee the process. 
                        </Typography>
                        
                    </Stack>
                </Grid>
                <Grid item xs={4}><img src={earth} alt="the earth on fire because of methane gas from landfills" style={{ width: "200px", marginTop: "35px" }}/></Grid>
                <Grid item xs={4}><img src={pollution} alt="the earth on fire because of methane gas from landfills" style={{ width: "200px", marginTop: "35px" }}/></Grid>
                <Grid item xs={4}><img src={jobs} alt="the earth on fire because of methane gas from landfills" style={{ width: "200px", marginTop: "35px" }}/></Grid>
            </Grid>
        </Container>

        
        {/* How to get started */}
        <Box sx={{ bgcolor: "#DDE2EA" }} pt={12}>
            <Container>
                <Typography variant="h3" color="#0C0051">
                    How to Get Started
                </Typography>
                <Typography variant="subtitle1">
                    Recycling doesn't have to be complicated.
                </Typography>

                <Stack direction="row" spacing={6} mt={3} textAlign="left" alignItems="center">
                    <Box>
                        <Typography variant="h4" color="#0C0051" mb={3}>Glass</Typography>
                        <Typography variant="body1">Glass used to make salsa jars, iced tea bottles, and other food packages can be recycled. Glass from cookware, storage containers, windows, and most lightbulbs are not able to be recycled. Here are some options for recycling glass:
                        <br/>
                        <ul>
                            <li><u>Recycling bins:</u> dispose of your glass in a curbside recyling bin.</li>
                            <li><u>Drop-off centers:</u> any glass containers that you recycle at a drop-off center that have a CRV value can allow you to recieve compensation.</li>
                            <li><u>Find alternative uses:</u> turn an old jar into a flower vase, use glass bottles as reusable water bottles, use them as storage containers, etc. Be creative. </li>
                        </ul>
                        </Typography>
                    </Box>
                    <img src={glass} alt="someone throwing glass in recycling bin" style={{ borderRadius: "50%" }}/>
                </Stack>

                <Stack direction="row" mt={3} spacing={6} textAlign="end" alignItems="center">
                    <img src={clothes} alt="someone throwing folding clothes" style={{ borderRadius: "20px", maxWidth: "500px" }}/>
                    <Box>
                        <Typography variant="h4" color="#0C0051" mb={3}>Clothing</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat:
                        <br/>
                        <ul style={{ textAlign: "left" }}>
                            <li><u>Recycling bins:</u> dispose of your glass in a curbside recyling bin.</li>
                            <li><u>Drop-off centers:</u> any glass containers that you recycle at a drop-off center that have a CRV value can allow you to recieve compensation.</li>
                            <li><u>Find alternative uses:</u> turn an old jar into a flower vase, use glass bottles as reusable water bottles, use them as storage containers, etc. Be creative. </li>
                        </ul>
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
        <section className="footer" style={{ alignSelf: "auto", display: "flex", justifyContent: 'space-between', padding: "20px", backgroundColor: "#DDE2EA" }}>
            <span><a href="https://docs.google.com/document/d/1kKv1OYALasOs8-9njgamDpZofB1BdgfdU4ulUur_oyc/edit?usp=sharing" style={{ marginTop: "40px", color: "#0C0051" }}>Sources</a></span>
            <span style={{ margin: 0, fontSize: "13px"}}>Copyright © 2022 Ally Petitt</span>
        </section>


    </div>
  )
}

export default Homepage