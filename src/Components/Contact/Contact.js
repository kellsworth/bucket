import { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contactInput: '',
    }
  }
  render() {
    return (
      <div>
        contact us
      </div>
    )
  }
}

export default Contact