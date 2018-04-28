import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import MainContainer from './Components/MainContainer';
import $ from 'jquery';
import './App.css';

class App extends Component {

  componentWillMount(){

      let oldURL = encodeURI(document.referrer);
      let currentdate = new Date();
      let datetime = currentdate.getDate() + "/"
          + (currentdate.getMonth()+1)  + "/"
          + currentdate.getFullYear() + " - "
          + currentdate.getHours() + ":"
          + currentdate.getMinutes() + ":"
          + currentdate.getSeconds();
      datetime = encodeURI(datetime);
      $.get({
          url:"http://vipulkumarmahadik.co.nf/react/getUserDetails.php?p="+oldURL+"&time="+datetime,
          success:(res)=>{
              if (res.trim() === ""){
                  return;
              }
              $.post({
                  url:"https://vipulmahadikgithubio.firebaseio.com/user_stats.json",
                  dataType: 'json',
                  data: JSON.stringify(JSON.parse(res)),
                  success:()=>{
                      console.log("Welcome to console.");
                  }
              })
          }
      })
  }
  render() {
    return (
      <div className="section my-spacing">
          <MainContainer/>
      </div>
    );
  }
}

export default App;
