import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { SaveAsOutlined } from '@mui/icons-material';
import React, {useContext, useState, useEffect} from 'react'
import { ParentContext } from '../context/parents/ParentContext';
import { ChildsContext } from '../context/childs/ChildsContext';
import { ChildrensList } from './ChildrensList';

export const ParentView = () => {
    const {parentSelected, updateParent} = useContext(ParentContext);
    const {childsByParent, getChildsByParentId} = useContext(ChildsContext);
    const [formState, setFormState] = useState({
        name:'',
        description:''
    })
    const {name, description} = formState;

    const onInputChange =  ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value
        });
    }

    const handleUpdateParent = (idx) => {
        const editedParent = {
            ...parentSelected,
            name,
            seo_friendly: description
        }
        updateParent(editedParent, idx);
    }

    useEffect(() => {
        if(parentSelected !== null) {
            setFormState({
              ...formState,
              name: parentSelected.name,
              description: parentSelected.seo_friendly
            });
            getChildsByParentId(parentSelected.id)

        }
    }, [parentSelected])
    useEffect(() => {
    //   console.log('change name');
    }, [name]);
    useEffect(() => {
    //   console.log('change description');
    }, [description]);
    useEffect(() => {
      childsByParent
    }, [childsByParent]);
    
  return (
    
        parentSelected != null ? 
        <>
            <Grid container direction="row" justifyContent="space-between" alignItems="top" sx={{mb:1}}>
                <Grid item sm={8}>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb:1}}>
                        <Grid item>
                            <Grid item>
                                <Typography fontSize={14} fontWeight="light">Creado Por</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontSize={39} fontWeight="light">{parentSelected.created_by}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontSize={14} fontWeight="light">{parentSelected.created_at}</Typography>
                            </Grid>

                        </Grid>
                        <Grid item>
                            <Button color="secondary" onClick={() => handleUpdateParent(parentSelected.idx)} sx={{padding:2}}>
                                <SaveAsOutlined sx={{fontSize:30, mr:2}}/>
                                Guardar
                            </Button>
                        </Grid>
                    
                
                    </Grid>
                    <Grid container>
                        <TextField onChange={onInputChange} name="name" value={name}type="text" variant='filled' fullWidth placeholder='Set Title' sx={{border:'none', mb:1}}/>
                        <TextField onChange={onInputChange} name="description" value={description}type="text" variant='filled' fullWidth multiline placeholder='Description' minRows={5}/>
                    </Grid>

                </Grid>
                <Box sm={4} sx={{height:300}}>
                    {
                        childsByParent.length > 0 ?
                        <>
                            <Grid item sm={12}>
                                <Typography fontSize={39} fontWeight="light">Amenidades</Typography>
                            </Grid>
                            <ChildrensList childrensList={childsByParent}></ChildrensList>
                        </>
                            :
                            <Grid item sm={12}>

                                <Typography>Sin amenidades</Typography>
                            </Grid>

                    }
                </Box>
            </Grid>
        
        </>

        :
        <Typography> Seleccione un valor</Typography>
    
  )
}
