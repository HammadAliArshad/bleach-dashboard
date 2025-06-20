import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Users = [
  {
    id: 1,
    name: "Sōsuke Aizen",
    email: "aizen.sosuke@bleachmail.com",
    age: 250,
  },
  {
    id: 2,
    name: "Kisuke Urahara",
    email: "kisuke.urahara@bleachmail.com",
    age: 200,
  },
  {
    id: 3,
    name: "Shunsui Kyōraku",
    email: "shunsui.kyoraku@bleachmail.com",
    age: 300,
  },
  {
    id: 4,
    name: "Ichigo Kurosaki",
    email: "ichigo.kurosaki@bleachmail.com",
    age: 17,
  },
];

export default function BleachDashboard() {
  const [users, setUsers] = useState([]);
  const [detailedView, setDetailedView] = useState(false);

  const fetchUsers = () => {
    setUsers(Users);
  };

  const handleDetailedView = () => {
    setDetailedView((prev) => !prev);
  };
  return (
    <Container sx={{ width: "50%" }}>
      <Typography variant="h4" mt={3} mb={3}>
        Bleach Dashboard
      </Typography>

      <Box display={"flex"} gap={3} mb={3}>
        <Button variant="contained" color="secondary" onClick={fetchUsers}>
          Fetch Users
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDetailedView}
        >
          Toggled View
        </Button>
      </Box>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            {detailedView ? (
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <Typography variant="h6">{user.name}</Typography>
                  <Typography>Email : {user.email}</Typography>
                  <Typography>Age : {user.age}</Typography>
                </CardContent>
              </Card>
            ) : (
              <ListItemText primary={user.name} />
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
