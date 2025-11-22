import React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<unknown>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type AddSubscriptionProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const style = {
    p: 0,
    color: 'white',
    borderColor: 'divider',
    padding: '12px',
    // paddingLeft: '4px',
};

const textFieldStyle = {
    '& .MuiInputBase-input': {
        color: 'aliceblue',
        border: '1px solid aliceblue',
        borderRadius: '10px'
    },
    '& .MuiInputBase-sizeSmall': {
        borderRadius: '10px'
    }
}

const days: number[] = Array.from({ length: 30 }, (_, i) => i + 1);
const frequency: string[] = ['Day(s)', 'Week(s)', 'Month(s)', 'Year(s)'];

const AddSubscription = ({ open, setOpen }: AddSubscriptionProps) => {
    return (
        <div >
            <Dialog open={open} onClose={() => setOpen(false)}
                sx={{
                    marginTop: '206px',
                    marginLeft: '3px',
                    marginRight: '3px',
                    '& .MuiDialog-paperScrollPaper': {
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px'
                    }
                }} fullScreen
                slots={{
                    transition: Transition,
                }}>
                <DialogTitle className='new-subs-dialog' onClick={() => setOpen(false)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            New Subscription
                        </div>
                        <div style={{ width: 24, height: 24, paddingTop: '1px' }}>
                            <CloseIcon sx={{ paddingTop: '3px' }} />
                        </div>
                    </div>
                </DialogTitle>
                <DialogContent className='new-subs-dialog-content' sx={{ padding: 0 }}>
                    <List sx={style} aria-label="mailbox folders">
                        <ListItem>
                            <ListItemText primary="Name" />
                            <TextField size='small' sx={textFieldStyle} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Description" />
                            <TextField size='small' sx={textFieldStyle} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="First Date" />
                            <TextField size='small' type="date" sx={{ ...textFieldStyle, width: '192px' }} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Repeats Every" />
                            <TextField size='small' select sx={{ ...textFieldStyle, width: '90px', marginRight: '8px' }} >
                                {days.map(day => (
                                    <MenuItem key={day} value={day} sx={{ ...textFieldStyle, width: '90px' }}>
                                        {day}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField size='small' select sx={{ ...textFieldStyle, width: '115px' }}>
                                {frequency.map(day => (
                                    <MenuItem key={day} value={day} sx={{ ...textFieldStyle, width: '90px' }}>
                                        {day}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </ListItem>
                    </List>
                </DialogContent>
            </Dialog>
        </div >
    )
}

export default AddSubscription