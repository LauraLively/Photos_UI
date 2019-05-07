import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArchiveIcon from '@material-ui/icons/Archive';
import PaletteIcon from '@material-ui/icons/Palette';
// import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import ImageIcon from '@material-ui/icons/Image';
import TableChartIcon from '@material-ui/icons/TableChart';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  showButton: {
      display: 'flex',
      justifyContent: 'flex-end',
  }
};

class MyDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemIcon><DashboardIcon/> </ListItemIcon>
            <ListItemText>All Photos</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><TableChartIcon/> </ListItemIcon>
            <ListItemText>New Album</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><PaletteIcon/> </ListItemIcon>
            <ListItemText>Color Palette</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon><ImageIcon/> </ListItemIcon>
            <ListItemText>Background Image</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><ArchiveIcon/></ListItemIcon>
            <ListItemText>Archive Album</ListItemText>
          </ListItem>
        </List>
      </div>
    );


    return (
      <div>
        <Button onClick={this.toggleDrawer('right', true) }>...Show Menu</Button>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyDrawer);