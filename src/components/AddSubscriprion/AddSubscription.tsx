import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

type AddSubscriptionProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddSubscription = ({ open, setOpen }: AddSubscriptionProps) => {
    return (
        <div>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add New Subscription</DialogTitle>
                andiiiiiiii
            </Dialog>
        </div>
    )
}

export default AddSubscription