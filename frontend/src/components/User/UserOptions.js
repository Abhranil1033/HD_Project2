import React, { Fragment, useState } from 'react';
import "./UserOptions.css";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../actions/userActions';
import Backdrop from '@mui/material/Backdrop';
import Loader from '../layout/Loader/Loader';

const UserOptions = ({ user }) => {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.user);

    const actions = [
        { icon: <ListAltIcon />, name: "Orders", func: orders },
        { icon: <PersonIcon />, name: "Profile", func: profile },
        { icon: <ShoppingCartIcon />, name: "Cart", func: goToCart },
        { icon: <LogoutIcon />, name: "Logout", func: logoutUser },
    ]

    function orders() {
        navigate("/orders");
    }

    function profile() {
        navigate("/account");
    }

    function goToCart() {
        navigate("/cart");
    }

    function logoutUser() {
        dispatch(logout());
        alert.success("Logout Success");
    }

    // if (!user || !user.avatar || !user.avatar.url) {
    //     return <div>Loading...</div>; // Render null or a loading state if the user details or avatar URL are not available
    // }

    // if (loading) {
    //     // Render a loading state or component if the user details are still being fetched
    //     return <div>Loading...</div>;
    //   }


    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <Backdrop open={open} style={{ zindex: "100" }} />
                    <SpeedDial
                        ariaLabel="SpeedDial tooltip example"
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        direction="down"
                        style={{ zIndex: "99" }}
                        className="speedDial"
                        icon={
                            <img
                                className="speedDialIcon"
                                src={user.avatar.url ? user.avatar.url : "../../../src/images/Profile.png"}
                                alt="Profile"
                            />}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                                onClick={action.func}
                            // tooltipOpen={window.innerWidth<=600?true : false}
                            />
                        ))}
                        {/* <SpeedDialAction icon={<DashboardIcon />} tooltipTitle="Dashbboard" />
                <SpeedDialAction icon={<DashboardIcon />} tooltipTitle="Dashbboard" />
                <SpeedDialAction icon={<DashboardIcon />} tooltipTitle="Dashbboard" />
                <SpeedDialAction icon={<DashboardIcon />} tooltipTitle="Dashbboard" /> */}


                    </SpeedDial>
                </Fragment>
            )}
        </Fragment>
    )
}

export default UserOptions