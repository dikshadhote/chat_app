import "./App.css";
import { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
  ]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);
//
useEffect(()=>{
  db.collection('messages').onSnapshot(snapshot=>{
    setMessage(snapshot.docs.map(doc => doc.data()))
  })
},[]);
  const sendMessage = (event) => {
    //...message appends text at the end of array
    event.preventDefault();
    setMessage([...message, { username: username, text: input }]);
    setInput("");
  };

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
        {message.map((message) => (
          <Message username={username} message={message} />
        ))}
      </header>
    </div>
  );
}

export default App;
