import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275,
        marginRight: theme.spacing(2),
    },
    button: {
        width: "100%",
    },
}));

const tags = [
    { id: 1, nome: 'ReactJS', },
    { id: 2, nome: 'React Native', },
    { id: 3, nome: 'PHP', },
    { id: 4, nome: 'Dotnet', },
    { id: 5, nome: 'Python', },
    { id: 6, nome: 'Javascript', },
];

const NavBar = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Button variant="outlined" color="secondary" className={classes.button}>Registrar Gratis</Button>
            <ListSubheader>{'Tags em Alta'}</ListSubheader>
            {
                tags.map((item) => (
                    <ListItem dense button key={`item-${item.id} - ${item.nome}`}>
                        <ListItemText primary={`#${item.nome}`} />
                    </ListItem>
                ))
            }
            <ListItem button>
                Exibir mais tags
            </ListItem>
        </Paper>
    );
};

export default NavBar;