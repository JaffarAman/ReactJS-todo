import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AddBtn({addFun , value}) {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      
      <Button variant="contained" onClick={()=>addFun()} color="secondary">
      {value}
      </Button>
     
    </div>
  );
}