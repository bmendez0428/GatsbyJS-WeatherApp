import React from "react"
import Header from "../components/header"
import "../styles/global.css"

export default () => (
    <div id = "container">
    <Header class= "container" headerText="Gatsby Weather App" />
    <ul>
  <li><a class="active" href="/">Home</a></li>
  <li><a href="/about">DarkSky Information</a></li>
  <li><a href="/openweather">Weather</a></li>
</ul>
      <h3>Click above for weather and sky information</h3>
    <p> <img src = "https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif" alt = "sky"></img>
      </p><br/>
       </div>
) 
