import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, PageError, Register, States, Tasks, Users } from "pages";
import { SecurityContextProvider } from "providers/SecurityProvider";
import { UserContextProvider } from "providers/UserProvider";
import { StateContextProvider } from "providers/StateProvider";
import { TaskContextProvider } from "providers/TaskProvider";

function App() {
  return (
    <SecurityContextProvider>
      <UserContextProvider>
        <StateContextProvider>
          <TaskContextProvider>
            <Router>
              <Switch>
                <Route path="/" exact component={Users} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
                <Route path="/tasks" exact component={Tasks} />
                <Route path="/states" exact component={States} />
                <Route component={PageError} />
              </Switch>
            </Router>
          </TaskContextProvider>
        </StateContextProvider>
      </UserContextProvider>
    </SecurityContextProvider>
  );
}

export default App;
