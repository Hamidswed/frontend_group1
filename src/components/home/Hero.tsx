import React from "react";

import Background from "../../images/background1.png";
import Model1 from "../../images/model1.png";
import Model2 from "../../images/Model2.png";
import "./Hero.css";

export default function Hero()
{
    return <div className="hero">
<img src={Background} alt ="Backgroudimgages" className="backgroundImage"></img>
<div className="Heading">
<h1> Choose our Latest Collections</h1>

</div>

<img src={Model1} alt ="Modelimgages" className="ModelImage display1"></img>
<img src={Model2} alt ="Modelimgages" className="ModelImage display2"></img> 
    </div>;
    
}
