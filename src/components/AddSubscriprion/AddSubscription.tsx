import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

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

const AddSubscription = ({ open, setOpen }: AddSubscriptionProps) => {
    return (
        <div>
            <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
                <DialogTitle className='new-subs-dialog' onClick={() => setOpen(false)}>
                    <div style={{ display: 'flex' ,justifyContent:'space-between'}}>
                        <div>
                            New Subscription
                        </div>
                        <div style={{width:24,height:24, paddingTop:'1px'}}>
                            <CloseIcon sx={{paddingTop:'3px'}}/>
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
                    </List>
                </DialogContent>
            </Dialog>
        </div >
    )
}

export default AddSubscription