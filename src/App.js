import "./App.css";
import { useState, useEffect,useRef } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

useEffect(()=>{
  db.collection('messages').orderBy('timestamp','asc').onSnapshot(snapshot =>{
    setMessage(snapshot.docs.map(
      doc => ({id:doc.id,message:doc.data()})
      ))
  });  
},[]);


  const sendMessage = (event) => {
    //...message appends text at the end of array
    event.preventDefault();
    db.collection('messages').add({
      message : input ,
      username :username ,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
      
    
    setInput("");
    dummy.current.scrollIntoView({behavior : 'smooth',block: 'end'});
  };
  const dummy=useRef(null);
  return (
    
    <div className="App" >
      <header className="App-header">
        <div  style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} >
          <form >
            <h1>Messenger🕊️</h1>
            <h2>Welcome {username}</h2>
            <FormControl>
              <InputLabel>Enter a message...</InputLabel>
              <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <Button
                type="submit"
                disabled={!input}
                onClick={sendMessage}
                variant="contained"
                color="primary"
              >
                send message
              </Button>
            </FormControl>
          </form>
        </div>
        <FlipMove>
        {message.map(({id,message}) => (
          <Message key={id} username={username} message={message} />
        ))}
        </FlipMove>
        <div ref={dummy}></div>
      </header>
    </div>
  );
}

export default App;
