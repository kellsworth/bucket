import React from 'react';
// import './Contact.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleInput = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSend = () => {
    const { name, email, message, title ,image} = this.state
    axios.post('/api/email', { name, email, message }).then(res => {
      this.setState({
        name: '',
        email: '',
        message: ''
      })
    })
  }

  render() {
    const { name, email, message, title,image } = this.state
    return (
      <div style={styles.body}>
        <section className="hero">
          <div style={styles.form}>
            <h1 style={styles.header}>Email Us</h1>
          <input style={styles.input} placeholder='name' type="text" name='name' value={name} onChange={this.handleInput} />
          <input style={styles.input} placeholder='email' type="text" name='email' value={email} onChange={this.handleInput} />
          <input style={styles.input} placeholder='message' type="text" name='message' value={message} onChange={this.handleInput} />
          <button style={styles.button} onClick={this.handleSend}>Send</button>
        </div>
        </section>
      </div>
    )
  }
}

export default App;

const styles = {
  body:{
    background:'lightgrey',
    height:'100vh',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  form:{
    display:'flex',
    flexDirection:'column',
    background:'#00000090',
    width:500,
    alignItems:'center',
    height:500,
    justifyContent:'space-evenly',
    borderRadius:10
  },
  header:{
    fontSize:60,
    margin:0,
    color:'white',
    letterSpacing:'0.07em',
    fontWeight:'bold'
  },
  input:{
    width:450,
    height:50,
    fontSize:35,
    outline:'none'
  },
  button:{
    width:200,
    height:45,
    borderRadius:10,
    background:'green',
    fontSize:35,
    fontWeight:'bold',
    letterSpacing:'0.07em'
    
  },
 
}












