import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {Grid, Container} from "@mui/material";
import MemberDetails from "../../Assets/MemberDetails.json"
import "../../Assets/css/about.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function AboutTeam() {
    return (
        <Container>
            <h1 className="about-team-header">THis is the section of our valiable team member</h1>

            <Grid container>
                {MemberDetails.map((member, id) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={id}>
                            <Card className="card" sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="240"
                                    padding="20"
                                    margin-top="20"
                                    image="https://th.bing.com/th/id/OIP.wxYYGv_ntZqhmJug1GQyWwEsEs?pid=ImgDet&w=500&h=500&rs=1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <p>{member.Name}</p>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions className="about-team-link">
                                    <Link onClick={() => window.open('https://www.google.com')}>
                                        <TwitterIcon className="about-team-icon"/>
                                    </Link>
                                    <Link onClick={() => window.open('https://www.google.com')}>
                                        <FacebookIcon className="about-team-icon"/>
                                    </Link>
                                    <Link onClick={() => window.open('https://www.google.com')}>
                                        <GitHubIcon className="about-team-icon"/>
                                    </Link>
                                    <Link onClick={() => window.open('https://www.google.com')}>
                                        <LinkedInIcon className="about-team-icon"/>
                                    </Link>

                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
}

export default AboutTeam;