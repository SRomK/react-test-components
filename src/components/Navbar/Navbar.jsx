import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


//STYLES
import styles from '../Navbar/Navbar.module.css';

//images
import companyLogo from '../../img/logo_white.png';

//icons
import BadgeIcon from '@mui/icons-material/Badge';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LogoutIcon from '@mui/icons-material/Logout';
//hamburger menu, that displays to the side
import { Drawer } from '@mui/material';


export default class Navbar extends React.Component{

    state = {
        drawerOpen: false,
    }

    //function to open drawer menu that shows different sections
    handleDrawerOpen() {
        console.log("handleDrawerOpen");
    }

    render() {
  return (
<div className={styles.navbar}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="neutral"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={this.handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        
          <Link to="/"><img src={companyLogo} className={styles.logoLink} alt="logo" width="200px"></img></Link>
            {/* Drawer / Hamburger menu that opens up and shows sections */}
        {/* <Drawer> */}
          {/* ACCOUNTS */}
          <Link to="/accounts" className={styles.navlink}>
          <Typography variant="smallType" className="alignIcon"><BadgeIcon color="info" fontSize="medium"/>
            Accounts
          </Typography>
          </Link>

          {/* TRACKERS */}
          <Link to="/trackers" className={styles.navlink}>
          <Typography variant="smallType" className="alignIcon"><TrackChangesIcon color="info" fontSize="medium"/>
            Trackers
          </Typography>
          </Link>
          {/* INVOICES */}
          <Link to="/invoices" className={styles.navlink}>
          <Typography variant="smallType" className="alignIcon"><ReceiptLongIcon color="info" fontSize="medium"/>
            Invoices
          </Typography>
          </Link>
          {/* USERS */}
          <Link to="/users" className={styles.navlink}>
          <Typography variant="smallType" className="alignIcon"><PeopleAltIcon color="info" fontSize="medium"/>
            Invoices
          </Typography>
          </Link>
          {/* LOGOUT */}
          <Link to="/" className={styles.navlink}>
          <Typography variant="smallType" className="alignIcon"><LogoutIcon color="info" fontSize="medium"/>
            Logout
          </Typography>
          </Link>
          {/* </Drawer> */}

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      </div>


        );

    }
}