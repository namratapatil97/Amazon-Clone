import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../context/ContextProvider";
import Rightheader from "./Rightheader";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";

const Navbar = () => {
    window.scrollTo(0, 0);

    const { account, setAccount } = useContext(LoginContext);


    // use navigate
    const navigate = useNavigate();

    //for searchBar
    const [text, setText] = useState("");
    console.log(text);
    const [listopen, setListopen] = useState(true);

    const { products } = useSelector(state => state.getproductsdata);

    const getText = (items) => {
        setText(items);
        setListopen(false);
    }

    // Menu icon
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Drawer 
    const [dropen, setDropen] = useState(false);

    const handleopen = () => {
        setDropen(true);
    }

    const handleclose = () => {
        setDropen(false)
    }

    // user valid details
    const getdetailvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content_Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);

        if (res.status !== 201) {
            console.log("error");
        } else {
            console.log("data valid");
            setAccount(data);
        }
    }


    // for logout user
    const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content_Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status !== 201) {
            console.log("error");
        } else {
            console.log("data valid");
            toast.success("User Logout ", {
                position: "top-center",
            })
            navigate("/");
            setAccount(false);
        }
    }

    useEffect(() => {
        getdetailvaliduser()
    }, [])

    return (
        <>
            <header>
                <nav>
                    <div className="left">
                        <IconButton className="hamburgur" onClick={handleopen}>
                            <MenuIcon style={{ color: "#fff" }} />
                        </IconButton>

                        <Drawer open={dropen} onClose={handleclose}>
                            <Rightheader logclose={handleclose} logoutuser={logoutuser} />
                        </Drawer>

                        <div className="navlogo">
                            <NavLink to="/"> <img src="./amazon_PNG25.png" alt="" /> </NavLink>
                        </div>
                        <div className="nav_searchbaar">
                            <input type="text" name=""
                                onChange={(e) => getText(e.target.value)}
                                placeholder="Search your products"
                                id="" />
                            <div className="search_icon">
                                <SearchIcon id="search" />
                            </div>

                            {/* Search filter */}
                            {
                                text &&
                                <List className="extrasearch" hidden={listopen}>
                                    {
                                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                            <ListItem>
                                                <NavLink to={`/getproductsone/${product.id}`} onClick={()=>setListopen(true)}>
                                                    {product.title.longTitle}
                                                </NavLink>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            }

                        </div>
                    </div>
                    <div className="right">
                        <div className="nav_btn">
                            <NavLink to="/login">SignIn</NavLink>
                        </div>
                        <div className="cart_btn">
                            {
                                account ? <NavLink to="/buynow">
                                    <Badge badgeContent={account.carts.length} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge>
                                </NavLink> : <NavLink to="/login">
                                    <Badge badgeContent={0} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                    </Badge>
                                </NavLink>
                            }
                            <ToastContainer />
                            <p>Cart</p>
                        </div>
                        {
                            account ? <Avatar className='avtar2'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}>{account.fname[0].toUpperCase()}</Avatar> :

                                <Avatar className='avtar'
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}></Avatar>
                        }


                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}>

                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            {
                                account ? <MenuItem onClick={logoutuser}><LogoutIcon style={{ fontSize: 16, marginRight: 3 }} />Logout</MenuItem> : ""
                            }

                        </Menu>

                    </div>
                </nav>
            </header>
        </>
    );
}

export default Navbar;