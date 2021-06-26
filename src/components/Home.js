import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Mail from './Mail';
import MailInfos from './MailInfo';
import data from '../data'

const useStyles = makeStyles((theme) => ({
  
}));

function Home() {

    const [mail, setMail] = useState(data())
    const [currentmail, setCurrentmail] = useState(mail[0])

  const classes = useStyles();
    console.log(mail[0])
  function FormRow() {
    return (
      <React.Fragment>
        <Grid style={{textAlign:"center",color:"white",overflow:"scroll",overflowX: 'hidden',height:'1000px',padding:"0px",margin:"0px",background:"#28344B"}} item xs={2}>
            <div style={{background:"#28344B",margin:"0px",padding:"10px"}}>
            <h1>SMART ALERT</h1>
            <input type="text" style={{width:"auto"}} />
            </div>
         <Mail mails={mail} setCurrentmail={setCurrentmail} />
        </Grid>
        <Grid item xs={10}>
             <MailInfos mailinfo={currentmail}  />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root} style={{backgr:"brown"}}>
        <Grid container item xs={12} spacing={0}>
            
          <FormRow />
        </Grid>

    </div>
  );
}


export default Home