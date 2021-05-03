import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';


function App(props) {

  const [stateInput, setStateInput] = useState({
    name: '',
    email: '',
    message: ''
  })

  
  const handleInput = (e) => {
    const { value, name } = e.target
    setStateInput({...stateInput, [name]: value })
  }

  const handleSend = () => {
    const { name, email, message} = stateInput 
    axios.post('/api/email', { name, email, message }).then(res => {
      setStateInput({
        name: '',
        email: '',
        message: ''
      })
    })
  }

  
  const { name, email, message } = stateInput
  return (
    <div style={styles.body}>
      <section className="hero">
        <div style={styles.form}>
          <h1 style={styles.header}>Email Us</h1>
        <input style={styles.input} placeholder='name' type="text" name='name' value={name} onChange={handleInput} />
        <input style={styles.input} placeholder='email' type="text" name='email' value={email} onChange={handleInput} />
        <input style={styles.input} placeholder='message' type="text" name='message' value={message} onChange={handleInput} />
        <button style={styles.button} onClick={handleSend}>Send</button>
      </div>
      </section>
    </div>
  )
  
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












