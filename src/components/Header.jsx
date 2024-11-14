import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from '@mui/material';
import { React, useState, useContext } from 'react';
import Menu from '@mui/material/Menu';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import { UserContext } from "./Context/UserContext";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';
import Logo from '../assets/logo2.png'


function Header() {

  const [mobileMenu, setMobileMenu] = useState(true);
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


  const storedUser = JSON.parse(localStorage.getItem("formData"));
  const username= storedUser.name;
  console.log(username)

  const [Loading, setLoading] = useState(false)
  const [opens, setOpen] = useState(false);


  const { setIsUserLoggedIn } = useContext(UserContext);
  const handleLogout=()=>{
    setLoading(true)
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      localStorage.clear();
      setIsUserLoggedIn(false);
    }, 1500);
  }
  
  const [show, setShow] = useState(false);

  const handleCloses = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [card , setCard]= useState(true);
  return (
    <>
    { Loading && <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={opens}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop> }


      <Navbar  data-bs-theme="light" className='sticky-top bg ' style={{height:"5rem"}}>
        <Container>
          <Navbar.Brand href="/"> <img src={Logo} alt="" style={{height:"11rem" , marginTop:".3rem"}} /></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={(e) => { return e.isActive ? "text-decoration-underline" : "" }} to="/" style={{textDecoration:"none", fontSize:"18px" , fontFamily:"poppins", fontWeight:"bold", color:"purple" }}>Home</NavLink>
            <NavLink className={(e) => { return e.isActive ? "text-decoration-underline" : "" }}  to="/about" style={{textDecoration:"none", fontSize:"18px" , fontFamily:"poppins", fontWeight:"bold", color:"purple" , margin:"0 2rem" }}>About</NavLink>
            <NavLink className={(e) => { return e.isActive ? "text-decoration-underline" : "" }}  to="/about" style={{textDecoration:"none", fontSize:"18px" , fontFamily:"poppins", fontWeight:"bold", color:"purple" , margin:"0 2rem" }}>Contact</NavLink>
            <NavLink className={(e) => { return e.isActive ? "text-decoration-underline" : "" }}  to="/about" style={{textDecoration:"none", fontSize:"18px" , fontFamily:"poppins", fontWeight:"bold", color:"purple" , margin:"0 2rem" }}>All Products</NavLink>
            <NavLink className={(e) => { return e.isActive ? "text-decoration-underline" : "" }}  to="/about" style={{textDecoration:"none", fontSize:"18px" , fontFamily:"poppins", fontWeight:"bold", color:"purple" , margin:"0 2rem" }}>Shop</NavLink>
          </Nav>
          <Badge badgeContent={totalQuantity} color="primary"
           >
            <NavLink to="/cart"> <i className="fa-solid fa-cart-shopping  hover " style={{ fontSize: 25, cursor: "pointer", color:"#3e3e3e" }} >

            </i>
            </NavLink>
          </Badge>
          <Nav  id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} style={{cursor:"pointer"}}><strong  className='fs-5 mx-2'> Hi! {username[0].toUpperCase()+ username.slice(1)}</strong>
          </Nav>

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
          <div className=' card-details d-flex justify-content-center p-3 px-1 align-items-center' style={{ width: "8rem" }}>

            <i className="fa-regular fa-x red" style={{ position: "absolute", top: "6px", right: "10px", cursor: "pointer" }} onClick={handleClose}></i>
            <span className='mx-1 my-auto red' style={{cursor:"pointer"}} onClick={handleLogout}>Logout</span>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 " style={{ width: "3rem", padding: " 4px" }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg> */}
          </div>

          
        </Menu>
      </Navbar>
      
    </>
  );
}



export default Header;