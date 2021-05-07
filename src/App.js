import "./App.css";
import { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [message, setmessage] = useState(["hi", "hello"]);

  console.log(input);
  console.log(message);

  const sendMessage = (event) => {
    //...message appends text at the end of array
    event.preventDefault();
    setmessage([...message, input]);
    setInput("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <h1>Messenger🕊️</h1>
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
        {message.map((message) => (
          <p>{message}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
