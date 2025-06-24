import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import BleachDashboard from "./BleachDashboard";
import ClassComponent from "./Component LifeCycle/classComponent";
import RefDemo from "./Refs/RefDemo";
import ClickEvent from "./Events/clickEvent";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
        {mode === "light" ? "Dark" : "Light"}
      </Button>
      <BleachDashboard></BleachDashboard>
      <ClassComponent></ClassComponent>
      <RefDemo></RefDemo>
      <ClickEvent></ClickEvent>
    </ThemeProvider>
  );
}

export default App;
