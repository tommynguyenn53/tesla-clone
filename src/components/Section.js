// Importing necessary modules
import React from 'react';
import styled from 'styled-components';

// Functional component 'Section' that takes in props to render a section of a page
function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        // 'Wrap' is the main container that takes in a background image as a prop
        <Wrap bgImage={backgroundImg}>
            {/* 'ItemText' is a div for the title and description */}
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>

            {/* 'Buttons' contains the left and right buttons */}
            <Buttons>
                <ButtonGroup>
                    {/* Left button with text passed as a prop */}
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>

                    {/* Right button with text passed as a prop */}
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                </ButtonGroup>
                
                {/* Down arrow image with an animation applied */}
                <DownArrow src="images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section;

// Styled-components for styling the various parts of the section

// 'Wrap' styles the main section container with a full screen background image
const Wrap = styled.div`
    width: 100vw; // Full viewport width
    height: 100vh; // Full viewport height
    background-size: cover; // Cover the entire background area
    background-position: center; // Center the background image
    background-repeat: no-repeat; // Ensure the background image doesn't repeat
    display: flex;
    flex-direction: column; // Arrange children in a column
    justify-content: space-between; // Vertically space out items
    align-items: center; // Horizontally center the items
    background-image: ${props => `url("/images/${props.bgImage}")`}; // Set background image dynamically based on props
`

// 'ItemText' contains the title and description with some padding and centered text
const ItemText = styled.div`
    padding-top: 15vh; // Offset the text down the page by 15% of the viewport height
    text-align: center; // Center align the text
`

// 'ButtonGroup' is a flex container for the left and right buttons
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px; // Space below the button group
    @media (max-width: 768px) {
        flex-direction: column; // On smaller screens, stack the buttons vertically
    }
`

// 'LeftButton' styles the left button
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8); // Dark background with some transparency
    height: 40px; // Button height
    width: 256px; // Button width
    color: white; // Button text color
    display: flex;
    justify-content: center; // Center the text horizontally
    align-items: center; // Center the text vertically
    border-radius: 100px; // Rounded button corners
    opacity: 0.85; // Slight transparency
    text-transform: uppercase; // Uppercase text
    font-size: 12px; // Font size
    cursor: pointer; // Cursor changes to a pointer on hover
    margin: 8px; // Add margin around the button
`

// 'RightButton' extends 'LeftButton' with custom styles for the right button
const RightButton = styled(LeftButton)`
    background-color: white; // White background for the right button
    opacity: 0.65; // More transparency for the right button
    color: black; // Black text color
`

// 'DownArrow' styles the down arrow icon with an animation
const DownArrow = styled.img`
    height: 40px; // Set the height of the down arrow image
    overflow-x: hidden; // Hide overflow
    animation: animateDown infinite 1.5s; // Apply an animation to move the arrow down
`

// 'Buttons' wraps the button group and down arrow, but no specific styles
const Buttons = styled.div`
    
`
