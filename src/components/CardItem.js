import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { add } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function CardItem({ record }) {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.cart);
  const { title, img, price, id } = record;

  const handleAdd = (record) => {
    const exists = datas.filter((item) => item.id === id);
    if (exists.length) return;
    dispatch(add(record));
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="cards-item">
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => handleAdd(record)}
        >
          Add to cart
        </Button>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
