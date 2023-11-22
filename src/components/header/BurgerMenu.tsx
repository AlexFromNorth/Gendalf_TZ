import React from "react";
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Divider, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const BurgerMenu = () => {
  const [drawer, setDrawer] = React.useState(false);

  const sideDrawer = () => (
    <Box
      role="presentation"
      onClick={() => setDrawer(false)}
      onKeyDown={() => setDrawer(false)}
    >
      <List component="nav" sx={{width: '250px'}}>
        <ListItem button>
          <ListItemText primary="Link 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Link 2" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Link 3" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Link 4" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Link 5" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawer(true)}>
            <MenuIcon sx={{width: '45px', height: '45px', color: 'var(--azure-color)'}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
        {sideDrawer()}
      </Drawer>
    </div>
  );
};

export default BurgerMenu;
