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

export default function EditBtn({addFun , value}) {
  const classes = useStyles();
    
  return (
    <div className={classes.root}>
      
      <Button variant="contained" onClick={()=>addFun()} color="primary">
        {value}
      </Button>
     
    </div>
  );
}