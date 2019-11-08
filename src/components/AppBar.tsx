import React from 'react';
import { makeStyles, Toolbar, IconButton, Grid, Typography, AppBar as MaterialAppBar } from '@material-ui/core';
import { Logo } from './Logo';
import { SearchTextField } from './_Shared/SearchTextField';
import firebase from 'firebase';
import { Dictionary } from '../models/dictionary';
import { Pane, majorScale, Heading, Button, Text, SearchInput } from 'evergreen-ui';

type AppBarProps = {
  onDictionaryChange?: (d: Dictionary | undefined) => void | Promise<void>
};

export function AppBar(props: AppBarProps) {
  return (
    <Pane
      elevation={1}
      background="tint1"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={majorScale(2)}
    >
      <Pane>
          <Heading size={600} onClick={() => { }}>RPG Directory</Heading>
      </Pane>
      <Pane>
        <SearchInput placeholder="Search for a dictionary..." />
        <Button appearance="minimal" intent="danger">
          LOGOUT
        </Button>
      </Pane>
    </Pane>



    // <MaterialAppBar position="static">
    //   <Toolbar>
    //     <IconButton edge="start" className={classes.menuButton} color='inherit'
    //       aria-label="menu" onClick={() => props.onDictionaryChange && props.onDictionaryChange(undefined)}>
    //       <Logo color='#FFF' />
    //     </IconButton>
    //     <Grid className={classes.title} container spacing={6} justify='space-between'>
    //       <Grid item>
    //         <Typography variant="h6" >Your RPG Dictionaries</Typography>
    //       </Grid>
    //       <Grid item>
    //         <SearchTextField
    //           placeholder='Search for a dictionary...'
    //         />
    //       </Grid>
    //     </Grid>
    //     <Button color="inherit" onClick={() => firebase.auth().signOut()}>Logout</Button>
    //   </Toolbar>
    // </MaterialAppBar>
  );
}

const useStyles = makeStyles(theme => ({
  header: {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/assets/background.jpg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px 0'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left'
  }
}));

