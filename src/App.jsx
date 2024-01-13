import React from "react";
import { TypographyStyle } from '@mui/material/styles';
import { Typography, AppBar, Card, CardActions, CardContent,CardMedia, CssBaseline,Grid, Toolbar,Container, Button } from "@mui/material";
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import Icon from '@mui/material/Icon';
// for buttons
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
// import '@fontsource/roboto/300.css';
// for define custom css properties
import useStyles from './style'; 

const App = () => {
    const classes = useStyles();
    const cards = [1,2,3,4,5];
    return (
      <>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            {/* <AccUnitIcon /> */}
            <Icon className={classes.icon}>star</Icon>
            <Typography variant="h6" className={classes.title}>PhotoAlmum</Typography>
            <h3>heko</h3>
          </Toolbar>
        </AppBar>
        <main>
          <div>
          {/* className="objofuseStyles.container" */}
            <Container maxWidth="sm" style={{marginTop: '100px'}}>
              <Typography
                variant="h2"
                marginTop="5rem"
                align="center"
                color="textPrimary"
                // className="classes.title"
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Photo Album Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Exercitationem dolor, ex voluptates consequuntur et optio.
                Sed iusto reiciendis, commodi a veritatis consequatur deserunt
                architecto molestias laudantium, modi ea dicta sapiente!
                Provident perspiciatis sequi,
              </Typography>
              <div>
                <Grid container justify="center" spacing={2}>
                    <Grid item>
                        <Button variant="contained" color="primary">Add New Photos</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="secondary">Upload Your Photos</Button>
                    </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container maxWidth="sm" className={classes.cardContainer}>
            <Grid container spacing={2}>
                {cards.map((card) => (
                    <Grid key={card} sm={6} item className={classes.grid}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia}
                        image="https://source.unsplash.com/random">
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Typography >Hello</Typography>
                            <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum similique earum voluptas architecto omnis hic nam, aliquam quia, at nisi vitae fuga quo incidunt quisquam odit dolor et eligendi exercitationem.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Add to Card</Button>
                            <Button>Remove to Card</Button>
                        </CardActions>
                    </Card>
                </Grid>
                ))}
                
            </Grid>
          </Container>
        </main>
      </>
    );
}

export default App;