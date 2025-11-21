import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

type ActionButtonProps = {
    // open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActionButton = ({ setOpen }: ActionButtonProps) => {

    const handleAddClicked = (): void => {
        setOpen(true);
    }
    return (
        <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', bottom: 20, right: 20 }}>
            <Fab color="primary" aria-label="add" sx={{ background: 'linear-gradient(140deg, rgba(252,70,107,1) 0%, rgba(63,94,251,1) 100%)' }}>
                <AddIcon onClick={handleAddClicked} />
            </Fab>
        </Box>
    )
}

export default ActionButton