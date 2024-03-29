import React from 'react'
import moment from 'moment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import DownloadDialog from './DownloadDialog';

export default (props) => {   
    
    return (
        <AppBar position="static" style={{background: '#041E42'}}>
            <Toolbar style={styles.toolbar}>
                <Typography style={styles.content} variant="subheading" color="inherit">                    
                    {                        
                        props.lastUpdate && <p>Ultima atualização: { moment(props.lastUpdate).format('DD/MM/YYYY - HH:mm:ss') }</p>
                    }
                </Typography>
            </Toolbar>
            <Toolbar style={styles.warningBar}>
                <Typography style={styles.warning}>
                    O Cardápio está sujeito a alterações
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

const styles = {
    toolbar: {
        display: 'flex',
        justifyContent: 'center',  
    },
    content: {
        textAlign: 'center',
        fontSize: '2.5vh' 
    },
    warningBar : {
        display: 'flex', 
        justifyContent: 'center'       
    },
    warning: {
        display: 'flex',
        fontSize: '1.75vh',
        color: 'white'
    }
}