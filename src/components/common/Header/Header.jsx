import React, { useContext } from "react";
import logo from "../../../assets/Logo.jpg"
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
  Tooltip
} from "@material-tailwind/react";
import { Link, NavLink ,useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import toast  from 'react-hot-toast';

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const { user, logOut  } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
              toast.success('log out successfully')
              navigate('/login')
            })
            .catch()
    }


    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);
   
    const navList = (
      <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
          <NavLink
            style={({ isActive, isPending, isTransitioning }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "black",
                  viewTransitionName: isTransitioning ? "slide" : "",
                };
              }}
           to="/" className="flex items-center text-[#150B2BB3]">
          Home
        </NavLink>
        </Typography>

        {/* <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/updateProfile" className="flex items-center text-[#150B2BB3]">
          Update Profile
        </NavLink>
        </Typography> */}

        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/price" className="flex items-center text-[#150B2BB3]">
          Price
        </NavLink>
        </Typography>




        {/* <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/userProfile" className="flex items-center text-[#150B2BB3]">
          User Profile
        </NavLink>
        </Typography> */}




        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm lg:hidden`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/register" className="flex items-center text-[#150B2BB3]">
        Register
        </NavLink>
        </Typography>
  
        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className={`p-1 text-sm`}
        >
        <NavLink
         style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        to="/contact" className="flex items-center text-[#150B2BB3]">
          Contact
        </NavLink>
        </Typography>
     
      
      </ul>
    );
   
    return (
      <div className="max-h-[768px]  lg:max-w-7xl mx-auto">
        <Navbar className="sticky top-0 z-10  py-2 lg:px-8 lg:py-5 shadow-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center">
              <Typography
                as="a"
                className="mr-7 cursor-pointer py-1.5 font-medium"
              >
                <NavLink to="/">
               <img src={logo} className="w-[60px] h-[60px] rounded-full" />
                </NavLink>
              </Typography>           
            </div>

            <div className="flex items-center gap-4 ">
              <div className="mr-2 hidden lg:block">{navList}</div>   
     
            </div>

            <div className="flex items-center gap-2">

            {
                    user ? 
                  <>
                  <div className="flex items-center space-x-2">
                <Tooltip content= {user.displayName}>
                <img  src={user.photoURL} alt="" className="w-[60px] h-[60px] object-cover rounded-full"/>
                </Tooltip>
             
                    <Button onClick={handleSignOut} className={`bg-[#59C6D2]`}>Log out</Button>
                    </div>
                   
                    </>
                      :
             <>
            <div>
            <Link to="/login">  <Button className={`bg-[#59C6D2]`}>Log in</Button></Link>
            </div>
            <div className="gap-4  hidden lg:block">
            <Link to="/register">  <Button className={`bg-[#23BE0A]`}>Register</Button></Link>
            </div>
            </>
            }
            <IconButton
                variant="text"
                className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </IconButton>
            <div>
            </div>
            </div>
          </div>
          <MobileNav open={openNav} className={`flex justify-center`}>{navList}</MobileNav>
        </Navbar>
      </div>
    );
};

export default Header;