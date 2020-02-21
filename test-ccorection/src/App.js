import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MePage from "./Me/MePage";
import HomePage from "./HomePage/HomePage";
import BarPage from "./Bar/BarPage";

function App() {
  const [bars, setBars] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch("https://control-server.now.sh/")
      .then(body => {
        return body.json();
      })
      .then(response => {
        setBars(response);
        setError(null);
      })
      .catch(() => {
        setError("Une erreur est survenue");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const addLikes = id => {
    // const newBars = bars.map(currentBar => {
    //   if (currentBar.id !== id) {
    //     return currentBar;
    //   }

    //   return {
    //     ...currentBar,
    //     nbLike: currentBar.nbLike + 1
    //   };
    // });

    // setBars(newBars);

    fetch("https://control-server.now.sh/likes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    })
      .then(body => body.json())
      .then(response => {
        setBars(response);
      });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage bars={bars} isLoading={isLoading} error={error} />
          </Route>
          <Route path="/me" exact>
            <MePage />
          </Route>
          <Route path="/bar/:barid" exact>
            <BarPage
              addLikes={addLikes}
              bars={bars}
              isLoading={isLoading}
              error={error}
            />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
