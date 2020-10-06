import React from "react";

class Home extends React.Component {
  constructor(){
    super();
    this.state={
      isLoaded:false,
      items:{},
    };
  }
  // componentDidMount() {
  //
  // }
  render()
  {
    const {isLoaded, items} = this.state
    console.log("Home")
    // if(!isLoaded){
    //   return(<div>Loading...</div>)
    // }
    return (
      <div>
        <h1 className="title">Home Page</h1>
      </div>
    );
  }
}
export default Home
