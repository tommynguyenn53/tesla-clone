import React, { useState} from 'react'; // Import React and useState hook
import styled from 'styled-components'; // Import styled-components for styling
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu icon from Material UI
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon from Material UI
import { selectCars } from '../features/car/carSlice'; // Import selector function to get car data from the Redux store
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store's state

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false); // State to track the burger menu's visibility
    const cars = useSelector(selectCars); // Get car data from Redux store using the selectCars selector
    console.log(cars); // Log the cars data for debugging (optional)

    return (
        <Container>
            {/* Tesla Logo */}
            <a>
                <img src="/images/logo.svg" alt="Tesla Logo" />
            </a>

            {/* Menu for large screens */}
            <Menu>
                {/* Map over cars and display each one in the menu */}
                {cars && cars.map((car, index) => (
                    <a key={index} href="#">{car}</a>
                ))}
            </Menu>

            {/* Right side menu (Shop, Tesla Account, Burger menu) */}
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                {/* CustomMenu opens the burger menu when clicked */}
                <CustomMenu onClick={() => {setBurgerStatus(true)}} />
            </RightMenu>

            {/* Burger navigation (appears when burger menu is open) */}
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    {/* CustomClose closes the burger menu when clicked */}
                    <CustomClose onClick={() => {setBurgerStatus(false)}} />
                </CloseWrapper>
                {/* Map over cars and display each one in the burger menu */}
                {cars && cars.map((car, index) => (
                    <li key={index}><a href="#">{car}</a></li>
                ))}
                {/* Additional links for the burger menu */}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

// Styled-components for layout and styling

const Container = styled.div`
    min-height: 60px; // Set the minimum height of the header
    position: fixed; // Make the header fixed at the top of the page
    display: flex; // Use flexbox for layout
    align-items: center; // Vertically align items in the center
    justify-content: space-between; // Space out elements evenly
    padding: 0 20px; // Add padding on both sides
    top: 0; // Align to the top of the page
    left: 0;
    right: 0;
    z-index: 1; // Ensure it's always on top of other elements
`;

const Menu = styled.div`
    display: flex; // Use flexbox for layout
    align-items: center; // Vertically align items in the center
    justify-content: center; // Horizontally center items
    flex: 1; // Make this section flexible

    a {
        font-weight: 600; // Make text bold
        text-transform: uppercase; // Capitalize text
        padding: 0 10px; // Add padding between links
        flex-wrap: nowrap; // Prevent wrapping of text
    }

    @media (max-width: 768px) {
        display: none; // Hide the menu on small screens
    }
`;

const RightMenu = styled.div`
    display: flex; // Use flexbox for layout
    align-items: center; // Vertically align items in the center

    a {
        font-weight: 600; // Make text bold
        text-transform: uppercase; // Capitalize text
        margin-right: 10px; // Add spacing between items
    }
`;

const CustomMenu = styled(MenuIcon)`
    cursor: pointer; // Change cursor to pointer on hover
`;

const BurgerNav = styled.div`
    position: fixed; // Position it fixed on the screen
    top: 0; // Align to the top
    bottom: 0; // Align to the bottom
    right: 0; // Align to the right side
    background-color: white; // Set background color to white
    width: 300px; // Set width of the burger menu
    z-index: 16; // Ensure the burger menu is on top of other elements
    list-style: none; // Remove list style for the items
    padding: 20px; // Add padding inside the menu
    display: flex; // Use flexbox for layout
    flex-direction: column; // Stack items vertically
    text-align: start; // Align text to the left
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; // Slide in/out depending on state
    transition: transform 0.2s; // Add smooth transition effect

    li {
        padding: 15px 0; // Add padding around each item
        border-bottom: 1px solid rgba(0, 0, 0, .2); // Add a border between items

        a {
            font-weight: 600; // Make text bold
        }
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer; // Change cursor to pointer on hover
`;

const CloseWrapper = styled.div`
    display: flex; // Use flexbox for layout
    justify-content: flex-end; // Align the close icon to the right
`;

