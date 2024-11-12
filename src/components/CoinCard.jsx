import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
const CoinCard = ({ coin }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          sx={{ height: 140 }}
          image={coin.item.large}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {coin.item.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {coin.item.data.price.toFixed(3)}$
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" fullWidth color="success" size="small">
            <Link to={`/coin/${coin.item.id}`}>Learn More</Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CoinCard;
