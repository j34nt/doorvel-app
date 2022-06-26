import { Box, Card, CardContent, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const ChildrensList = ({childrensList}) => {
  return (
        
            childrensList.length > 0 ?
            <Box sx={{maxHeight:300}} style={{
                overflowY: "auto",
                maxHeight: "calc(100vh - 200px)",
                display: "flex",
                flexGrow: 1,
                flexDirection: "column"
              }}>
                <List sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}>
                {childrensList.map(child => (
                    <ListItem key={child.id}>
        
                        <ListItemText className='text-childs-overflow' primary={child.name} secondary={child.seo_friendly} />
                    </ListItem>
                ))}
                </List>

            </Box>
            :
                <Typography >Sin amenidades</Typography>
  )
}
