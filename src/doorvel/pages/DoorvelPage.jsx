import { Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ParentContext } from '../context/parents/ParentContext'
import { DoorvelLayout } from '../layout/DoorvelLayout'
import { NoInfoView, ParentView } from '../views'

export const DoorvelPage = () => {
  const {parents} = useContext(ParentContext)
  return (
    <DoorvelLayout>
      {/* <Typography>
        lorem ipsum
      </Typography> */}
      {
        parents.length > 0 ? <ParentView /> : <NoInfoView />
      }
      {/* <NoInfoView /> */}
      {/* <NoteView /> */}
    </DoorvelLayout>
  )
}
