import React, { use } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { simpleIconCdn } from "../../utils/iconCDN";

type SubscriptionsProps = {
    // viewOpen: boolean,
    setViewOpen: React.Dispatch<React.SetStateAction<boolean>>,
    getAllSubscriptionsPromise: Promise<any> | undefined
}

const Subscriptions = ({ setViewOpen, getAllSubscriptionsPromise }: SubscriptionsProps) => {
    const availableSubs = getAllSubscriptionsPromise ? use(getAllSubscriptionsPromise) : undefined
    console.log(availableSubs, 'availsubs')
    const style = {
        p: 0,
        border: '1px solid',
        color: 'white',
        borderColor: 'divider',
        padding: '12px',
        // paddingLeft: '4px',
        margin: '10px'
    };

    const icon: string = simpleIconCdn('netflix')
    return (
        <List sx={style} aria-label="mailbox folders">
            <ListItem onClick={() => setViewOpen(true)}>
                <Avatar alt="Netflix" sx={{ bgcolor: 'white', width: 36, height: 36 }}>
                    <img src={icon} width={'25px'} />
                </Avatar>
                <ListItemText primary="Netflix" sx={{ marginLeft: '1rem' }} />
                <Typography variant="body1" color="white">₹499/mo</Typography>
            </ListItem>
            <Divider component="li" sx={{ backgroundColor: 'aliceblue' }} />
            <ListItem>
                <Avatar alt="Netflix" sx={{ bgcolor: 'white', width: 36, height: 36 }}>
                    <img src={icon} width={'25px'} />
                </Avatar>
                <ListItemText primary="Netflix" sx={{ marginLeft: '1rem' }} />
                <Typography variant="body1" color="white">₹499/mo</Typography>
            </ListItem>
            <Divider component="li" sx={{ backgroundColor: 'aliceblue' }} />
        </List>
    )
}

export default Subscriptions