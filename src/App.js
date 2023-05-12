import './App.css';
import TodoList from "./components/todos/todo-list/TodoList";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {styled} from "@mui/material";

function App() {
  return (
      <Grid
          container
          spacing={2}
          justifyContent="center"
      >
          <Grid item xs={5}>
              <TodoList/>
          </Grid>
      </Grid>
  );
}

export default App;
