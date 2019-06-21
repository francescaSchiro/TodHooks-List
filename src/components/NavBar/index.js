import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import TodoApp from '../../containers/TodoApp';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100vw',
    flexGrow: 1,
  },
  typography: {
    color: 'white',
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab label="Workflows" />
          <StyledTab label="TodoApp" />
          <StyledTab label="Connections" />
        </StyledTabs>
      {value === 0 &&   <Typography className={classes.typography}>ciaone 1</Typography>}
      {value === 1 &&   <TodoApp/>}
      {value === 2 &&   <Typography className={classes.typography}>ciaone 3</Typography>}
      
      </div>
    </div>
  );
}