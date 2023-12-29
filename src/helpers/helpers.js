import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";

export const navbarItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "About",
    href: "/about",
    icon: <InfoIcon />,
  },
  {
    id: 3,
    name: "Products",
    href: "/products",
    icon: <StorefrontIcon />,
  },
  {
    id: 4,
    name: "Cart",
    href: "/cart",
    icon: <AddShoppingCartIcon />,
  },
  {
    id: 5,
    name: "Checkout",
    href: "/checkout",
    icon: <CheckCircleOutlineIcon />,
  },
  {
    id: 6,
    name: "Orders",
    href: "/orders",
    icon: <FeaturedPlayListIcon />,
  },
];
