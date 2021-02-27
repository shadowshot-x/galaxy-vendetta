import React, { Component } from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Application from '../components/sections/Application';

// const Home = () => {

//   return (
//     <div>
//       <Hero className="illustration-section-01" />
//       <Application style={{marginLeft:"400px"}}/>
//     </div>
//   );
// }

// export default Home;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { startGame:false }
  }
  render() { 
    return (<div>
             <Hero className="illustration-section-01" />
             {this.state.startGame? <Application style={{marginLeft:"400px"}}/>:<div style={{marginLeft:"200px",marginRight:"200px"}}>
               <div style={{paddingBottom:"30px"}}>
               <div class="w3-container">
                <div class="w3-panel w3-pale-blue w3-leftbar w3-rightbar w3-border-blue" style={{padding:"20px"}}>
                  <p>
                    Universe is an Infinitely Complex Place. There is an immense Availability of Resources but species tend to wage wars on trivial existential grounds.
                     After Some Aliens Destroyed a part of our Galaxy, We have chosen you as our Supreme Leader to take control of the Spaceship and help travel through the Universe and Save our Galaxy.
                     Our Spaceship is handled via supreme sensors and Gestures you perform activate utilities of the Spaceship. Use these Gestures to guide us through the Galaxy.
                  </p>
                </div>
              </div>
               </div>
               <div style={{display:"flex"}}>
             <div class="w3-card-4 w3-blue" style={{width:"20%",paddingLeft:"5px"}}>
              <img src="shield.png" alt="Alps" style={{width:"100%",height:"300px"}}></img>
              <div class="w3-container w3-center">
                <p>Shield Your Spaceship</p>
              </div>
            </div>
            <div class="w3-card-4 w3-blue" style={{width:"20%",flexGrow:1,paddingLeft:"5px"}}>
              <img src="attack.png" alt="Alps" style={{width:"100%",height:"300px"}}></img>
              <div class="w3-container w3-center">
                <p>Attack Aliens</p>
              </div>
            </div>
            <div class="w3-card-4 w3-blue" style={{width:"20%",flexGrow:1,paddingLeft:"5px"}}>
              <img src="stop.png" alt="Alps" style={{width:"100%",height:"300px"}}></img>
              <div class="w3-container w3-center">
                <p>Stop your Spaceship</p>
              </div>
            </div>
            <div class="w3-card-4 w3-blue" style={{width:"20%",flexGrow:1,paddingLeft:"5px"}}>
              <img src="speed.png" alt="Alps" style={{width:"100%",height:"300px"}}></img>
              <div class="w3-container w3-center">
                <p>Burst your Spaceship's Speed</p>
              </div>
            </div>
            </div>
               <button style={{marginLeft:"600px",marginTop:"100px",padding:"10px"}} onClick={()=>{this.setState({startGame:true})}}>Initiate the Console</button>
             </div>}
            
           </div>  );
  }
}
 
export default Home;