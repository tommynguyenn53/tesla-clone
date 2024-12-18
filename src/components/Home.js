import React from 'react';
import styled from "styled-components";
import Section from "../components/Section"; // Import the Section component for reusable sections

// Home component renders a collection of Section components with different props.
function Home() {
    return (
        // Container wraps all the sections in a full-height container
        <Container>
            {/* Each Section represents a different Tesla model or product */}
            <Section
                title="Model S" // Title for the section (e.g., car model)
                description="Order Online for Touchless Delivery" // Description for the section
                backgroundImg="model-s.jpg" // Image to be used as the background
                leftBtnText="Custom order" // Text for the left button
                rightBtnText="Existing Inventory" // Text for the right button
            />

            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />

            <Section
                title="Lowest Cost Solar Panels in America" // Title for solar panels section
                description="Money-back guarantee" // Description for the section
                backgroundImg="solar-panel.jpg" // Background image for solar panels
                leftBtnText="Order now" // Left button text for solar panels
                rightBtnText="Learn More" // Right button text for solar panels
            />

            <Section
                title="Acessories" // Title for Accessories section
                description="" // Description for the section
                backgroundImg="accessories.jpg" // Background image for Accessories
                leftBtnText="Shop now" // Left button text for Accessories
            />
        </Container>
    );
}

export default Home; // Exports the Home component for use elsewhere

// Container styled-component, which defines the full height of the section
const Container = styled.div`
    height: 100vh; // Full height of the viewport
    z-index: 10;
`;
