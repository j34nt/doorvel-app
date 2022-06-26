import {AddBusinessOutlined, TurnedInNot} from '@mui/icons-material';
import { Drawer, Box, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText, Typography, CardMedia, Button } from '@mui/material';
import React, { useContext } from 'react'
import { ParentContext } from '../context/parents/ParentContext';
import logo from '../../static/images/DOORVEL-LOGOS-02.png'

export const SideBar = ({drawerWidth}) => {
    const {parents, selectParent, addNewParent} = useContext(ParentContext);

    const handleSelectParent = (parent, idx) => {
        const newParent = {
            ...parent,
            idx
        }
        selectParent(newParent);
    }

    const addParent = () => {
        addNewParent()
    }

  return (
    <Box component="nav" sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}>
        <Drawer variant="permanent" open sx={{
            display:{xs:'block'},
            '& .MuiDrawer-paper': {boxSizing:'border-box', width: drawerWidth}
        }}>
            <Toolbar>
                <Grid 
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"
                >
                    <Grid item>
                        <img src={logo}  height={50} alt="Doorvel Logo"/>
                        {/* <Typography fontWeight="light">By</Typography> */}
                    </Grid>
                    {/* <Grid item>
                        <Typography variant="h6" noWrap component="div">
                            Jose Jeanton
                        </Typography>

                    </Grid> */}

                </Grid>
            </Toolbar>
            <Divider />
            <Button color="primary" disabled={parents.length > 0 ? false : true} onClick={() => addParent()} sx={{padding:2}}>
                <AddBusinessOutlined sx={{fontSize:30, mr:2}}/>
                Agregar
            </Button>
            <List>
                {
                    parents?.map((parent, idx) => (
                        <ListItem key={parent.id} disablePadding>
                            <ListItemButton onClick={() => handleSelectParent(parent, idx)}>
                                <ListItemIcon>
                                    <TurnedInNot></TurnedInNot>
                                </ListItemIcon>
                                <Grid container direction="column">
                                    <ListItemText className='text-sidebar-overflow' primary={parent.name} />
                                    <ListItemText className='text-sidebar-overflow' secondary={parent.seo_friendly} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}
