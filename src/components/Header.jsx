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


  

  // const [card , setCard]= useState(true);
  return (
    <>
    { Loading && <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={opens}
        
      >
        <CircularProgress color="inherit" />
      </Backdrop> }
      <Navbar  data-bs-theme="light" className='sticky-top ' style={{backgroundColor:"rgb(248 228 253)" , height:"5rem"}}>
        <Container>
          <Navbar.Brand href="/"> <svg id="s3fhaIKHM" viewBox="0 0 369.65517241379314 90.51631825077818" height="90.51631825077818" width="1324.455" style={{width: "190px", height: "90px", transform: "translate(-50%, -50%), scale(0.61368)", zIndex: "0", cursor: "pointer", overflow: "visible", color:"black"}}><defs id="SvgjsDefs1363"></defs><g id="SvgjsG1364" featurekey="symbolFeature-0" transform="matrix(0.9236359005181447,0,0,0.9236359005181447,-16.009381232803786,-0.9236359005181447)" fill="#a9d2ff"><g xmlns="http://www.w3.org/2000/svg"><path d="M50,1c0,20.219-32.667,42.937-32.667,65.333c0,11.038,5.474,20.797,13.855,26.711c0-20.22,32.667-42.937,32.667-65.333   C63.855,16.672,58.381,6.914,50,1z"></path><path d="M74.927,38.552c-4.613,20.542-32.005,41.154-32.005,59.669C45.201,98.727,47.568,99,50,99   c18.041,0,32.667-14.625,32.667-32.667C82.667,58.777,79.602,48.761,74.927,38.552z"></path></g></g><g id="SvgjsG1365" featurekey="nameFeature-0" transform="matrix(1.0462909126044824,0,0,1.0462909126044824,76.9866820519606,18.444511044387752)" fill="black" ><path d="M15.52 22.8 c2.76 0 5 2.24 5 5 l0 7.24 c0 2.76 -2.24 4.96 -5 4.96 l-12.64 0 l0 -6.4 l11.2 0 l0 -4.36 l-6.24 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -7.24 c0 -2.76 2.24 -5 4.96 -5 l12.68 0 l0 6.44 l-11.24 0 l0 4.36 l6.24 0 z M39.68000000000001 22.8 l0 -10.8 l6.4 0 l0 28 l-6.4 0 l0 -10.8 l-7 0 l0 10.8 l-6.4 0 l0 -28 l6.4 0 l0 10.8 l7 0 z M66.68 12 c2.72 0 5.04 2.24 5.04 5 l-0.08 18.04 c0 2.76 -2.24 4.96 -5 4.96 l-9.84 0 c-2.72 0 -4.96 -2.2 -4.96 -4.96 l0 -18.04 c0 -2.76 2.24 -5 4.96 -5 l9.88 0 z M65.24000000000001 33.6 l0 -15.16 l-7 0 l0 15.16 l7 0 z M92.24000000000001 12 c2.76 0 5.04 2.24 5.04 5 l0 10.52 c0 2.76 -2.28 4.96 -5.04 4.96 l-8.44 0 l0 7.52 l-6.4 0 l0 -28 l14.84 0 z M90.80000000000001 26.08 l0 -7.64 l-7 0 l0 7.64 l7 0 z M117.88000000000001 12 c2.76 0 5.04 2.24 5.04 5 l0 10.52 c0 2.76 -2.28 4.96 -5.04 4.96 l-8.44 0 l0 7.52 l-6.4 0 l0 -28 l14.84 0 z M116.44000000000001 26.08 l0 -7.64 l-7 0 l0 7.64 l7 0 z M146.28 18.44 l-11.2 0 l0 4.36 l8.04 0 l0 6.4 l-8.04 0 l0 4.4 l11.2 0 l0 6.4 l-17.6 0 l0 -28 l17.6 0 l0 6.44 z M166.84000000000003 12 c2.76 0 5 2.24 5 5 l0 10.52 c0 2.12 -1.32 3.92 -3.16 4.64 l3.16 7.84 l-6.8 0 l-3.04 -7.48 l-3.56 0 l0 7.48 l-6.4 0 l0 -28 l14.8 0 z M164.12000000000003 26.08 c0.72 0 1.32 -0.56 1.32 -1.28 l0 -5.08 c0 -0.72 -0.6 -1.28 -1.32 -1.28 l-5.68 0 l0 7.64 l5.68 0 z M190.12000000000003 22.8 c2.76 0 5 2.24 5 5 l0 7.24 c0 2.76 -2.24 4.96 -5 4.96 l-12.64 0 l0 -6.4 l11.2 0 l0 -4.36 l-6.24 0 c-2.76 0 -4.96 -2.24 -4.96 -5 l0 -7.24 c0 -2.76 2.24 -5 4.96 -5 l12.68 0 l0 6.44 l-11.24 0 l0 4.36 l6.24 0 z M222.20000000000002 22.8 l0 -10.8 l6.4 0 l0 28 l-6.4 0 l0 -10.8 l-7 0 l0 10.8 l-6.4 0 l0 -28 l6.4 0 l0 10.8 l7 0 z M247.76000000000002 33.6 l0 -21.6 l6.4 0 l0 23.04 c0 2.76 -2.24 4.96 -5 4.96 l-9.84 0 c-2.76 0 -4.96 -2.2 -4.96 -4.96 l0 -23.04 l6.4 0 l0 21.6 l7 0 z M274.72 12 c2.76 0 5 2.24 5 5 l0 5.28 c0 1.84 -1.32 3.4 -3.16 3.68 l-0.24 0.04 l0.24 0.04 c1.84 0.32 3.16 1.88 3.16 3.68 l0 5.32 c0 2.72 -2.24 4.96 -5 4.96 l-14.8 0 l0 -28 l14.8 0 z M273.32000000000005 32.28 l0 -1.72 c0 -0.76 -0.6 -1.32 -1.32 -1.32 l-5.68 0 l0 4.36 l5.68 0 c0.72 0 1.32 -0.6 1.32 -1.32 z M273.32000000000005 21.48 l0 -1.72 c0 -0.72 -0.6 -1.32 -1.32 -1.32 l-5.68 0 l0 4.36 l5.68 0 c0.72 0 1.32 -0.6 1.32 -1.32 z"></path></g></svg></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className={(e) => { return e.isActive ? "text-danger" : "text-light" }} to="/" style={{textDecoration:"none"}}>Home</NavLink>
            <NavLink className="mx-4 text-decoration-none" to="/about">About</NavLink>
          </Nav>
          <Badge badgeContent={totalQuantity} color="primary"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <NavLink to="/cart"> <i className="fa-solid fa-cart-shopping  hover " style={{ fontSize: 25, cursor: "pointer", color:"#3e3e3e" }} >

            </i>
            </NavLink>
          </Badge>
          <Nav><strong  className='fs-5 mx-2'> Hi! {username[0].toUpperCase()+ username.slice(1)}</strong>
          <span className='mx-1 my-auto red' style={{cursor:"pointer"}} onClick={handleLogout}>(Logout)</span>
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
          <div className=' card-details d-flex justify-content-center p-3 px-1 align-items-center' style={{ width: "20rem" }}>

            <i className="fa-regular fa-x red" style={{ position: "absolute", top: "6px", right: "10px", cursor: "pointer" }} onClick={handleClose}></i>
            <p className='fs-5 my-2 mx-2'> {username[0].toUpperCase()+ username.slice(1)} Your cart is empty</p>

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