import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Header from "./Header";
import modelS from "./assests/images/models.jpg";
import modelX from "./assests/images/model-x.jpg";
import modelY from "./assests/images/model-y.jpg";
import model3 from "./assests/images/model-3.jpg";
import solarPanel from "./assests/images/solar-panel.jpg";
import solarRoof from "./assests/images/solar-roof.jpg";
import accessories from "./assests/images/accessories.jpg";
function Home() {
    return (
        <Container>
            <Header />

            <Section
                title="Model S"
                description=" Order Online for Touching Delivery"
                backgroundImg={modelS}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model Y"
                description=" Order Online for Touching Delivery"
                backgroundImg={modelY}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                description=" Order Online for Touching Delivery"
                backgroundImg={model3}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model X"
                description=" Order Online for Touching Delivery"
                backgroundImg={modelX}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Solar and Powerwall"
                description="Power Everything"
                leftBtnText="Oder Now"
                rightBtnText="Learn More"
                backgroundImg={solarPanel}
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Costs Less Than a New Roof Plus Solar Panels"
                leftBtnText="Oder Now"
                rightBtnText="Learn More"
                backgroundImg={solarRoof}
            />
            <Section
                title="Accessories"
                description="Solar Costs Less Than a New Roof Plus Solar Panels"
                leftBtnText="Shop Now"
                backgroundImg={accessories}
            />
        </Container>
    );
}

export default Home;

const Container = styled.div`
    height: 100vh;
`;
