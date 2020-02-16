import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Drawer from './drawer';
import NavBar from './tabs';
import  Card from './cards/card';
import  Image_card  from './cards/image_card';
import Grid from '@material-ui/core/Grid';
import Skill from './Skill';
import Project from './Projects';
import Proj from './Proj';
import Contact from './Contact';
import Carousel from './MyCarousel';



function MainPage() {
    return (
        <div className="Box">
            <div className="Main_Container">
                <div>
                    <NavBar />
                </div>
                <div><Carousel /></div>
            </div>
            <div className="Grid_Container">
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Image_card />
                    </Grid>
                    <Grid item md={6}>
                        <Card />
                    </Grid>                   
                </Grid>
                <div className="Title_Block">About Me</div>
            </div>
            <div className="Skill_Container">
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                </Grid>
                <div className="Title_Block">Skills</div>
            </div>
            <div className="Experience_Container">
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                    <Grid item md={3}>
                        <Skill />
                    </Grid>
                </Grid>
                <div className="Title_Block">Experience</div>
            </div>
            <div className="Projects_Container">
                <Project />
                <div className="Title_Block">Projects</div>
            </div>
            <div className="Projects_Container">
                <Proj />
                <div className="Title_Block">More Projects</div>
            </div>
            <div className="Contact_Container">
                <Contact />
                <div className="Title_Block">Contact Me</div>
            </div>

        </div>

    );
}


export default MainPage;