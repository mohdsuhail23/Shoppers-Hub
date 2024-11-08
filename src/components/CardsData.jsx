
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { products } from './ProductData';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/CartSlice'
import { Snackbar, Alert } from '@mui/material';




export default function CardsData() {
    // const [cardData, setCardData] = useState([]); // Initialize with an empty array
    const [open, setOpen] = useState(false);

    // Function to handle the button click
    const handleAddToCart = () => {
      setOpen(true); // Show the Snackbar when button is clicked
  
      // Hide Snackbar after 2 seconds
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    };
    

    // const fetchData = async () => {
    //     try {
    //         const url = await fetch('https://dummyjson.com/products');
    //         const data = await url.json();
    //         setCardData(data.products);
    //         // console.log(data.products) // Set cardData to data.products array
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []); // Fetch data only once when component mounts
    // const [cardData, setCardData] = useState(products)
    const dispatch = useDispatch();

    const items= useSelector((state)=>state.allCarts.items);
    
    const truncateDescription = (description) => {
        return description.length > 80 ? description.substring(0, 90) + '...' : description;
    };
  return (
    <>
    { items.map((element , id)=>{
        return(
            <Card style={{ width: "22rem" }} key={id} className='mx-2 my-2 border-0 '>
            <Card.Img variant="top" src={element.thumbnail}  className='mt-2 shadow hover rounded 'loading='lazy' style={{cursor: "pointer",}}/>
            <Card.Body>
              <Card.Title>{element.title}</Card.Title>
             
              <Card.Text >
               {truncateDescription(element.description)}
              </Card.Text>
              <Card.Text  className='text-bold'>
               Price: <b>{element.price}</b> Rs.
              </Card.Text>
              <span onClick={()=>dispatch(addToCart(element))}> <Button variant='outline-secondary' onClick={handleAddToCart}>Add To Cart</Button></span>
             
            </Card.Body>
          </Card>
        )
    })}
     
     <Snackbar open={open} onClose={() => setOpen(false)}  anchorOrigin={{ vertical:"top", horizontal:'center' }}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '22rem' }}>
          Item added successfully!
        </Alert>
      </Snackbar>
    </>
  )
}
