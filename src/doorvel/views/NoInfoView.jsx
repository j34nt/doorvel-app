import { Grid, IconButton, Typography } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import {StartOutlined} from '@mui/icons-material';
import React, { useContext } from 'react'
import { ParentContext } from '../context/parents/ParentContext';
import { ChildsContext } from '../context/childs/ChildsContext';

export const NoInfoView = () => {
  const {getDataParents} = useContext(ParentContext);
  const {getDataChilds} = useContext(ChildsContext);

  const handleDataParents = () => {
    getDataParents()
    getDataChilds()
  }
  return (
    <>
      <Grid 
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{minHeight:'calc(100vh - 120px)', backgroundColor:'#f2f2f2', borderRadius:5}}
      >
          {/* <Grid item xs={12}>
              <StartOutlined sx={{fontSize:100, color:'white'}}/>
          </Grid> */}
          <Grid item xs={12}>
              <Typography color="primary.main" variant="h5">Cargar Información</Typography>
          </Grid>
          <IconButton
            size='large'
            sx={{
              color:'white',
              backgroundColor:'error.main',
              ':hover':{backgroundColor:'error.main', opacity:0.9},
              position:'fix',
              right:5,
              bottom:1
            }}
            onClick={() => handleDataParents()}
          >
            <AddOutlined></AddOutlined>
          </IconButton>
      </Grid>
    </>
  )
}
