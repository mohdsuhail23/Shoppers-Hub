import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from '@mui/material';
import { React, useState } from 'react';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { Alert } from 'react-bootstrap'


function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (totalQuantity <= 0) {
      setAnchorEl(event.currentTarget);
    }

  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const totalQuantity = useSelector((state) => state.allCarts.totalQuantity)

  // const [card , setCard]= useState(true);
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='sticky-top'>
        <Container>
          <Navbar.Brand href="#home">Add To Cart</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={(e) => { return e.isActive ? "bg-danger text-light" : "text-white" }} to="/">Home</NavLink>
            <NavLink className="mx-4 text-decoration-none" to="/about">About</NavLink>
          </Nav>
          <Badge badgeContent={totalQuantity} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <NavLink to="/cart"> <i className="fa-solid fa-cart-shopping text-light hover " style={{ fontSize: 25, cursor: "pointer" }} >

            </i>
            </NavLink>
          </Badge>

        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {/* <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>  */}
          <div className=' card-details d-flex justify-content-center p-3 px-1 align-items-center' style={{ width: "20rem" }}>

            <i className="fa-regular fa-x red" style={{ position: "absolute", top: "6px", right: "10px", cursor: "pointer" }} onClick={handleClose}></i>
            <p className='fs-5 my-2 mx-2'>Your cart is empty</p>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 " style={{ width: "3rem", padding: " 4px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
          </div>
        </Menu>
      </Navbar>
    </>
  );
}



export default Header;