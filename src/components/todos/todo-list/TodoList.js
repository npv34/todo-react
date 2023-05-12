import {
    Card,
    CardContent,
    CardHeader, Checkbox,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    TextField
} from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import {useState} from "react";
import RestoreIcon from '@mui/icons-material/Restore';

const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const data = [
    {
        name: "Hoc reactjs",
        status: false
    },
    {
        name: "Lam bai tap",
        status: false
    },
    {
        name: "Viet bao cao",
        status: true
    }
]

function TodoList() {

    const [tasks, setTasks] = useState(data)
    const [task, setTask] = useState({
        name: "",
        status: false
    })


    const addTask = (e) => {
        const name = e.target.value;
        setTask({...task, name: name})

        if (e.key === 'Enter') {
            console.log(name)
            setTasks([...tasks, {
                name: name,
                status: false
            }])
        }

    }

    const doneTask = (index) => {
        tasks[index].status = true;
        setTasks([...tasks])
    }
    return (
        <Card sx={{marginTop: "100px", backgroundColor: "#b3b3b3"}}>
            <CardHeader
                title="To Do"
            />
            <CardContent>
                <TextField onKeyUp={(e) => addTask(e)}
                           fullWidth
                           id="outlined-basic"
                           label="Task name" variant="outlined"
                           style={{ backgroundColor: "#ffffff"}}

                />
                <Box sx={{width: '100%', bgcolor: '#b3e5fc', marginTop: "10px"}}>
                    <nav aria-label="main mailbox folders">
                        <List>
                            {tasks.map((item, index) => (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <Checkbox
                                                {...label}
                                                disabled={item.status}
                                                checked={item.status}
                                                onClick={() => doneTask(index)}
                                            />
                                        </ListItemIcon>
                                        <ListItemText primary={item.name}
                                                      sx={item.status && {textDecoration: "line-through"}}/>
                                        <ListItemIcon>
                                            { item.status && <RestoreIcon/>}
                                            <DeleteIcon color="error"/>
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </nav>
                </Box>

            </CardContent>

        </Card>
    )
}

export default TodoList;
