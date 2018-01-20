import React from 'react';
import citations from '../citations'
import Citation from './Citation';

class App extends React.Component {
state = {
};

componentWillMount(){
  this.generCitation();
}

generCitation = event =>{
  const keyArray = Object.keys(citations);
  const randomKey = keyArray[Math.floor(Math.random()
    *keyArray.length)];
    if (this.state.citation=== citations[randomKey].citation) {
      this.generCitation();
      return;
    }
    this.setState(citations[randomKey]);
  };

  render() {
     return (
       <div>
        <p>
          <Citation details={this.state}/>
        </p>
        <button onClick={e => this.generCitation(e)}> Une autre citation </button>
        </div>
     )
  }
}

export default App;
