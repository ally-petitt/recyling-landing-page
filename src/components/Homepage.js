import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import { Link } from "react-scroll"
import earth from "../images/earth-on-fire.jpeg"
import pollution from "../images/pollution.png"
import jobs from "../images/jobs.jpg"
import glass from "../images/glass.jpg"
import clothes from "../images/shoes-and-clothing-recycling-illustration-symbol-vector.png"
import { Fade, Flip, Slide } from 'react-reveal'
import "./homepage.css"

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
                            <Fade bottom>
                            Landfills are the leading manmade cause of methane emissons. Methane acts as a greenhouse gas that contributes to climate change.
                            </Fade>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="column" alignItems="center">
                        <Typography variant="h5" component="h3" color="#8f364e" sx={{ fontWeight: "500", marginBottom: "20px" }}>
                            Reducing Pollution
                        </Typography>
                        <Typography variant="body1" lineHeight={2}>
                            <Fade bottom>
                            Extracting and using raw materials can result in pollution. With recyling, there is less need to extract raw materials, leading to less pollution being created.
                            </Fade>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Stack direction="column" alignItems="center">
                        <Typography variant="h5" component="h3" color="#8f364e" sx={{ fontWeight: "500", marginBottom: "20px" }}>
                            Create Jobs
                        </Typography>
                        <Typography variant="body1" lineHeight={2}>
                            <Fade bottom>
                            Recycling involves collecting, sorting, and processing the materials. This creates a variety of new jobs. Examples include sorters, tractor drivers, and managers who oversee the process. 
                            </Fade>
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4}><img id="grow" src={earth} alt="the earth on fire because of methane gas from landfills" style={{ width: "200px", marginTop: "35px" }}/></Grid>
                <Grid item xs={4}><img id="grow" src={pollution} alt="the earth on fire because of methane gas from landfills" style={{ width: "200px", marginTop: "35px" }}/></Grid>
                <Grid item xs={4}><img id="grow" src={jobs} alt="the earth on fire because of methane gas from landfills" style={{ width: "200px", marginTop: "35px" }}/></Grid>
            </Grid>
        </Container>

        
        {/* How to get started */}
        <Box sx={{ bgcolor: "#DDE2EA" }} pt={12}>
            <Container>
                <Typography variant="h3" color="#0C0051">
                    How to Get Started
                </Typography>
                <Typography variant="subtitle1">
                    <Slide left>
                    Recycling doesn't have to be complicated.
                    </Slide>
                </Typography>

                <Stack direction="row" spacing={5} mt={3} textAlign="left" alignItems="center">
                    <Box>
                        <Typography variant="h4" color="#0C0051" mb={3}>Glass</Typography>
                        <Typography variant="body1">
                            <Fade bottom>
                                Glass used to make salsa jars, iced tea bottles, and other food packages can be recycled. Glass from cookware, storage containers, windows, and most lightbulbs are not able to be recycled. Here are some options for recycling glass:
                                <br/>
                                <ul>
                                    <li><u>Recycling bins:</u> dispose of your glass in a curbside recyling bin.</li>
                                    <li><u>Drop-off centers:</u> any glass containers that you recycle at a drop-off center that have a CRV value can allow you to recieve compensation.</li>
                                    <li><u>Find alternative uses:</u> turn an old jar into a flower vase, use glass bottles as reusable water bottles, use them as storage containers, etc. Be creative. </li>
                                </ul>
                            </Fade>
                        </Typography>
                    </Box>
                    <img  src={glass} alt="someone throwing glass in recycling bin" style={{ borderRadius: "50%" }}/>
                </Stack>

                <Stack direction="row" mt={3} textAlign="end" alignItems="center">
                    <img id="rotate-left" src={clothes} alt="someone throwing folding clothes" style={{ borderRadius: "20px", maxWidth: "500px" }}/>
                    <Box>
                        <Typography variant="h4" color="#0C0051" mb={3}>Old Clothes</Typography>
                        <Typography variant="body1">
                            <Fade bottom>
                            Everyone goes through old clothes, which is why it is important to recycle them. However, unlike items that are recycled, old clothes can fill up landfills, negatively affecting the environment. Here are some ways you can recycle them without harming the planet:
                                <br/>
                                <ul style={{ textAlign: "left" }}>
                                    <li><u>Donate:</u> this is keeps clothes out of landfills and into the hands of people who will actually use it. It can also help those in need because it will be more affordable.</li>
                                    <li><u>Sell:</u> the same reasoning as donating still applies, but instead you earn money.</li>
                                    <li><u>Reuse:</u> make something out of your old clothing. Many people use old clothes as rags or make diy projects with them. </li>
                                </ul>
                            </Fade>
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