import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon } from '@material-ui/core';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
    AppBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    },
  });

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" color="inherit" className={classes.AppBar}>
            <Toolbar>
                 <img src="/imagens/logo.png" alt="logo conecta-dev" className={classes.img} />
                 <div className={classes.grow}></div>
                 <div className={classes.userSection}>
                     <Button variant="contained" color="primary" className={classes.button}>
                        Novo Post
                     </Button>
                     <SvgIcon className={classes.bell}>
                         <Bell></Bell>
                     </SvgIcon>
                     <Avatar alt="Remy Sharp" src="/" />
                 </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;