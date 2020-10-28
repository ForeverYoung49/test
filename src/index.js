import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FadeIn from 'react-fade-in';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {letters: []};
      this.handleEvent = this.handleEvent.bind(this);
  }
  handleEvent(e) {
      if (e.key.toUpperCase() !== e.key.toLowerCase() && e.key.length === 1) {
          let newLetters = this.state.letters.slice();
          newLetters.push(e.key);
          this.setState({letters: newLetters});
      }
  }
  render() {
      return (
          <div class="root" onKeyDown={this.handleEvent} tabindex="0">
          {
              this.state.letters.map(letter => <FadeIn transitionDuration="3000" ><div class="letter">{letter}</div></FadeIn>)
          }
          </div>
      );
  }
}
ReactDOM.render(<App/>, document.getElementById("app"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
