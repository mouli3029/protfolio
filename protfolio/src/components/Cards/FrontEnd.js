import React from 'react'
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import { Typography, makeStyles, Icon } from '@material-ui/core'

const useStyles = makeStyles(()=>({
    card:{
        marginLeft:"4rem", 
        padding:"0px 50px 50px 50px",
         
    },
    
    heading:{
        fontSize:"3rem",
        textAlign:"center",
    },
   



}))
function FrontEnd() {
    const classes = useStyles();
    return (
        <div className="frontend">
            <Grid container spacing={3}>
                <Card className={classes.card}
                raised="true">
                    <Typography className ={classes.heading} variant="h1" component="h1">
                        FrontEnd
                    </Typography>
                    <br/>
                    <br/>
                        <Icon style={{fontSize:"3rem",cursor:"pointer"}}  className="devicon-html5-plain colored">Html 5</Icon>
                        <br/>
                        <br/>
                        <br/>
                        <Icon style={{fontSize:"3rem",cursor:"pointer"}}  className ="devicon-css3-plain colored" >CSS 3</Icon>
                        <br/>
                        <br/>
                        <br/>
                        
                        <Icon style={{fontSize:"3rem",cursor:"pointer"}}  className ="devicon-javascript-plain colored" >JavaScript</Icon>
                        <br/>
                        <br/>
                        <br/>
                        <Icon style={{fontSize:"3rem",cursor:"pointer"}} className ="devicon-react-original colored" >React</Icon>
                        <br/>
                        <br/>
                        <br/>
                        <Icon style={{fontSize:"3rem",cursor:"pointer"}}>Material UI</Icon>  
                </Card>
            </Grid>
        </div>
    )
}

export default FrontEnd
