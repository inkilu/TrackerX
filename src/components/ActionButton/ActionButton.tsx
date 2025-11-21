import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';

const ActionButton = () => {
    return (
        <Box sx={{ '& > :not(style)': { m: 1 },position:'fixed',bottom:20,right:20 }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>
    )
}

export default ActionButton