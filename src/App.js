import React,{Component} from 'react';
import Header from './Components/header';
import './App.css';
var TinyURL = require('tinyurl');
function myFunction() {
  console.log("in my function");
  var copyText = document.getElementById("shorturl");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
class App extends Component{
  constructor(props){
  super(props);
  this.state={
    value:"fsdfs"
  }
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    var url = document.getElementById("url").value;
    TinyURL.shorten(url, function(res, err) {
    if (err)
     document.getElementById("shorturl").setAttribute("value",err);    
    document.getElementById("shorturl").setAttribute("value",res);
    });
  }
  render(){
  return (
    <div>
      <Header/>
      <div className="background">
        <div className="body">
          <input type="text" id="url" className="url" placeholder="Enter the long url here!"/>
          <button className = "click" onClick={this.handleClick}>Short Url</button>
          <p>Short Url is:</p> 
          <input type="text" value="" id="shorturl"></input>

          <div className="tooltip">
            <button id="copyText" onClick={()=>myFunction()} onMouseOut={()=>outFunc()}>
            <span className="tooltiptext" id="myTooltip">Copy to clipboard</span> Copy text
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
