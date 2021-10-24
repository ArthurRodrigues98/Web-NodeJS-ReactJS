import React, { Component } from 'react';
import './App.css';
 
class App extends Component {
 
  render(){
    return(
      <div>
        <Macgyver largura={300} altura={180}/>
        <Macgyver />
        <Macgyver />
      </div>
    );
  }
}
 
export default App;
 
function Macgyver(){
  let img = 'https://vejasp.abril.com.br/wp-content/uploads/2016/12/ads_macgyver1.jpg';
 
  return(
      <img src={img} width={250} height={180} />
  );
}
