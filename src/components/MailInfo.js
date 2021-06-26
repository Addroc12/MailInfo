import SimpleTabs from "./Nav"
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  
}));

const MailInfos = ({mailinfo}) => {
    const classes = useStyles();

    function FormRow() {
        return (
          <React.Fragment>
            <Grid style={{  margin: 0,textAlign:"center",display:"flex",justifyContent:"center"}} item xs={6}>
                    <div>
                        <table style={{fontSize:"20px", textAlign:"left",borderCollapse: "separate",borderSpacing:" 8em 1em"}}>
                            <tr>
                                <th>Subject</th>
                                <td>{mailinfo.subject}</td>
                            </tr>
                            <tr>
                                <th>Date</th>
                                <td>{mailinfo.date}</td>
                            </tr>
                            <tr>
                                <th>Site</th>
                                <td>{mailinfo.site}</td>
                            </tr>
                            <tr>
                                <th>Camera</th>
                                <td>{mailinfo.camera}</td>
                            </tr>
                            

                        </table>
                        <h1>Dedicated Information</h1>
                        {mailinfo.detectedinfo.map(data => (
                            <h3>Name : {data.name} Confidence : {data.confidence} </h3>
                        ))}

                    </div>
            </Grid>
            <Grid item xs={6} style={{  margin: 0,textAlign:"center",display:"flex",justifyContent:"center"}}>
                <h1>Carousel</h1>
            </Grid>
          </React.Fragment>
        );
      }
    
      return (
        <div className={classes.root} style={{backgr:"brown"}}>
        <SimpleTabs />
          <Grid container spacing={0} style={{marginTop:"100px"}}>
            <Grid container item xs={12} spacing={0}>
                
              <FormRow />
            </Grid>
          </Grid>
        </div>
      );
    }

export default MailInfos