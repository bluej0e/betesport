import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './Navigation.css'
import logo from '../../images/logo.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
     <div className={classes.root}>
       <AppBar position="static">
         <Toolbar>
           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
             <MenuIcon />
           </IconButton>
           <Typography variant="h6" className={classes.title}>
             Photos
           </Typography>
           {auth && (
             <div>
               <IconButton
                 aria-label="Account of current user"
                 aria-controls="menu-appbar"
                 aria-haspopup="true"
                 onClick={handleMenu}
                 color="inherit"
               >
                 <AccountCircle />
               </IconButton>
               <Menu
                 id="menu-appbar"
                 anchorEl={anchorEl}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 keepMounted
                 transformOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 open={open}
                 onClose={handleClose}
               >
                 <MenuItem onClick={handleClose}>Profile</MenuItem>
                 <MenuItem onClick={handleClose}>My account</MenuItem>
               </Menu>
             </div>
           )}
         </Toolbar>
       </AppBar>
     </div>
   );
 }


const Navigation = () => (





  <div className="nav-main-holder">
    <div className="nav-main-content">
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <NavigationAuth /> : <NavigationNonAuth />
        }
      </AuthUserContext.Consumer>
    </div>
  </div>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <ul>
        <li>
          <Link to={ROUTES.LANDING}><img alt="bet-esport.com" className="logo" src={logo} /></Link>
        </li>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
      </ul>
    </li>
    <li>
      <ul>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>

    <li>
      <Link to={ROUTES.LANDING}><img alt="bet-esport.com" className="logo" src={logo} /></Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

// export default Navigation;
