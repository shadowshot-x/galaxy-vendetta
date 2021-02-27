import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';

class Application extends Component {
  constructor(){
    super();
    this.state = {poseLabel:'dunno',task:-1,spaceshipStatus:'SpaceShip Loaded',
  damage:0};
    this.handleLabel = this.handleLabel.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
  }
  componentDidMount(){
    setInterval(()=>{
      let num = this.getRandomInt(1,4);
      this.setState({task:num});
      setTimeout(()=>{
        if((this.state.poseLabel == 'x' && this.state.task == 1) || (this.state.poseLabel == 'i' && this.state.task == 2) || (this.state.poseLabel == 'l' && this.state.task == 3) || (this.state.poseLabel == 'a' && this.state.task == 4)){
          this.setState({spaceshipStatus:'Survived'})
        }
        else{
          this.setState({damage:this.state.damage+1});
          this.setState({spaceshipStatus:'Ship Damaged'})
        }
      },3000)
    },5000)
  }
  getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  handleLabel(label){
    this.setState({poseLabel:label});
  }
  render() {
    return (
      (this.state.damage<3)?
      <div style={{display:"flex",paddingLeft:"300px"}}>
        <div>
        <div style={{display:"flex"}}>
        <div class="w3-card-4 w3-center">
          <header class="w3-container w3-blue">
            <h1>Header</h1>
          </header>
          <div class="w3-white" style={{width:"300px",fontSize:"30px",height:"100px",fontWeight:"bold"}}>
          {(this.state.poseLabel=='x')?<div>SHIELD ACTIVATED</div>:(this.state.poseLabel=='i')?<div>Increase Speed and Move</div>:(this.state.poseLabel=='l')?<div>SPACESHIP STOPPED</div>:(this.state.poseLabel=='a')?<div>ROCKETS LAUNCHED</div>:<div>PLEASE WAIT</div>}
          </div>
        </div>

        <div class="w3-card-4 w3-center"  style={{flexGrow:1,marginLeft:"30px"}}>
          <header class="w3-container w3-blue">
            <h1>Header</h1>
          </header>
          <div style={{width:"300px",fontSize:"30px",height:"100px",fontWeight:"bold"}} class="w3-white">
          {(this.state.task==1)?<div>Asteroid Belt Approaching!</div>:(this.state.task==2)?<div>Move! Black Hole Ahead</div>:(this.state.task==3)?<div>Stop! Wormhole spilling matter</div>:(this.state.task==4)?<div>Attack! Aliens Approaching</div>:<div>LOADING TASKS</div>}
         </div>
        </div>
        </div>
        
        <div style={{display:"flex",marginTop:"5px"}}>
        <div class="w3-card-4 w3-center" >
          <header class="w3-container w3-red">
            <h1>DAMAGE</h1>
          </header>
          <div class="w3-red" style={{width:"300px",fontSize:"30px",height:"80px",color:"white",fontWeight:"bold"}}>
          {this.state.damage}
          </div>
        </div>

        <div class="w3-card-4 w3-center"  style={{flexGrow:1,marginLeft:"30px"}}>
          <header class="w3-container w3-red">
            <h1>STATUS</h1>
          </header>
          <div style={{width:"300px",fontSize:"30px",height:"80px",color:"white",fontWeight:"bold"}} class="w3-red">
          {this.state.spaceshipStatus}
         </div>
        </div>
        </div>
        </div>
        <div style={{flexGrow:1,marginLeft:"30px"}}>
          <P5Wrapper sketch={sketch} onLabelChange={this.handleLabel}></P5Wrapper>
        </div>
      </div>:<div class="w3-card-4 w3-center"  style={{flexGrow:1,marginLeft:"350px",width:"1200px",height:"500px"}}>
          <header class="w3-container w3-red">
            <h1>GAME OVER</h1>
          </header>
          <div style={{width:"1200px",fontSize:"30px",color:"white",fontWeight:"bold",padding:"50px"}} class="w3-red">
          Your Ship Couldnt Survive the Constant Dangers of the Galaxy. But Feel Free to Try Again and see how far you go.
         </div>
        </div>
    );
  }
}

export default Application;