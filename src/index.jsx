import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teqsti: ''
    };
  }

  clicking = () => {
    this.setState({ teqsti: 'hello world!' }, () => {
      window.alert(`${this.state.teqsti}`);
    });
  }

  render() {
    return (
      <>
        <button onClick={this.clicking}>click me</button>
        <h1>{this.state.teqsti}</h1>
      </>
    );
  }
}

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);