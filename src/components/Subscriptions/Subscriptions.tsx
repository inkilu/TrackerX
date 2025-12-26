import React, { use, type SetStateAction } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { simpleIconCdn } from "../../utils/iconCDN";

type SubscriptionsProps = {
    // viewOpen: boolean,
    setEditData: React.Dispatch<SetStateAction<SubscriptionList>>,
    setViewOpen: React.Dispatch<React.SetStateAction<boolean>>,
    getAllSubscriptionsPromise: Promise<any> | undefined
}

type SubscriptionList =
    {
        _id: string,
        "userId": string,
        "name": string,
        "description": string,
        "firstDate": string,
        "repeatsEvery": number,
        "repeatsUnit": string,
        "amount": number,
        "currency": string,
        "createdAt": string,
        "updatedAt": string,
        "__v": number
    }


const Subscriptions = ({ setViewOpen, getAllSubscriptionsPromise, setEditData }: SubscriptionsProps) => {
    const availableSubs = getAllSubscriptionsPromise ? use(getAllSubscriptionsPromise) : undefined
    const [subs] = React.useState(availableSubs)
    console.log(subs, 'availsubs')
    const style = {
        p: 0,
        border: '1px solid',
        color: 'white',
        borderColor: 'divider',
        padding: '12px',
        // paddingLeft: '4px',
        margin: '10px'
    };

    const onItemClick = (id: string) => {
        const selectedSub = subs?.items?.find((i:SubscriptionList)=>i._id === id)
        setEditData(selectedSub || {})
        setViewOpen(true)
    }
    // const icon: string = simpleIconCdn('netflix')
    return (
        <List sx={style} aria-label="mailbox folders">
            {
                subs?.items?.map((i: SubscriptionList) => {
                    return (
                        <div key={i?._id} onClick={() => onItemClick(i?._id)}>
                            <ListItem >
                                <Avatar alt="Netflix" sx={{ bgcolor: 'white', width: 36, height: 36 }}>
                                    <img
                                        src={simpleIconCdn(i?.name?.toLowerCase())}
                                        width={'25px'}
                                        onError={(e) => {
                                            const img = e.currentTarget;
                                            img.onerror = null;
                                            img.src = "public/money-bag.png";
                                        }}
                                    />
                                </Avatar>
                                <ListItemText primary={i?.name} sx={{ marginLeft: '1rem' }} />
                                <Typography variant="body1" color="white">₹{i?.amount}</Typography>
                            </ListItem>
                            <Divider component="li" sx={{ backgroundColor: 'aliceblue' }} />
                        </div>
                    )
                })
            }
            {/* <ListItem onClick={() => setViewOpen(true)}>
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
            <Divider component="li" sx={{ backgroundColor: 'aliceblue' }} /> */}
        </List>
    )
}

export default Subscriptions