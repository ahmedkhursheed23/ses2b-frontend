import { Typography } from '@material-ui/core'
import React from 'react'
import Sidebar from '../../components/Sidebar'


export default function exams() {
    return (
        <div>
            <Sidebar>
                <Typography variant="h5">
                    This will display any messages from the examinator(idk if thats what you call it)
                </Typography>
            </Sidebar>
        </div>
    )
}
