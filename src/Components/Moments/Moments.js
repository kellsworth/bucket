import { Component } from 'react';
import './Moments.css';

class Moments extends Component {
  constructor(props) {
    super(props)
    this.state = {
      momentInput: '',
    }
  }
  render() {
    return (
      <section>
        <h2>Moments List</h2>
        <div>
          moments
      </div>
      </section>
    )
  }
}

export default Moments


