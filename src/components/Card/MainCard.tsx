import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const MainCard = () => {
    return (
        <div className='main-card'>
            <div className='card-container'>
                <CardContent className='card-content'>
                    <Typography variant="h2" gutterBottom>
                       ₹499
                    </Typography>
                    <Typography variant="h6"gutterBottom>
                        Per month
                    </Typography>
                </CardContent>
            </div>
        </div>
    )
}

export default MainCard