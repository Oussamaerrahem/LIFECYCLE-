import React  from 'react';



class  App extends React.Component {    
  componentDidMount() {
    setTimeout(function(){ alert("Hello message "); }, 3000)
  }
  componentWillMount() {
    alert("Goodbye")
  }
 
  render(){ 
  return (
    <div className="App">
      
        Hi
     
    </div>

  )
}}


export default App;
