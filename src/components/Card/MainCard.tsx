import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
const MainCard = () => {
    return (
        <div className='main-card'>
            <div className='card-container'>
                <CardContent className='card-content' sx={{paddingTop:0}}>
                    <CurrencyExchangeIcon sx={{width:65,height:65,paddingLeft:'10px'}}/>
                    <Typography variant="h2" gutterBottom sx={{marginBottom:1}}>
                        ₹499
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Per month
                    </Typography>
                </CardContent>
            </div>
        </div>
    )
}

export default MainCard