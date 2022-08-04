import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Header from "./Header"

function Home () {

    return (
    <Container>
        <Header/>
        <Section 
        title="Model S"
        description=" Order Online for Touching Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText= "Existing inventory"
        />
        <Section 
        title="Model Y"
        description=" Order Online for Touching Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText= "Existing inventory"/>
        <Section 
          title="Model 3"
          description=" Order Online for Touching Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText= "Existing inventory"
        />
        <Section 
          title="Model X"
          description=" Order Online for Touching Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText= "Existing inventory"
        />
        <Section 
          title= "Solar and Powerwall"
          description = "Power Everything"
          leftBtnText = "Oder Now"
          rightBtnText = "Learn More"
          backgroundImg = "solar-panel.jpg"

          />
        <Section 
          title= "Solar for New Roofs"
          description = "Solar Costs Less Than a New Roof Plus Solar Panels"
          leftBtnText = "Oder Now"
          rightBtnText = "Learn More"
          backgroundImg = "solar-roof.jpg"  
        />
        <Section 
          title= "Accessories"
          description = "Solar Costs Less Than a New Roof Plus Solar Panels"
          leftBtnText = "Shop Now"
          backgroundImg = "accessories.jpg"  
        />
        
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    `