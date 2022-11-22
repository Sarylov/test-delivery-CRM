import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Orders from "./pages/Orders";
import Couriers from "./pages/Сouriers";
import Partners from "./pages/Partners";
import PartnersRates from "./pages/PartnersRates";
import CouriersRates from "./pages/СouriersRates";
import { postAPI } from "./services/PostService";
import { Button } from "antd";
import MapPage from "./pages/Map";

function App() {
  // const { data: records } = postAPI.useFetchAllPostsQuery(5, {
  //   pollingInterval: 3000,
  // });
  // const [addRecords, { isError }] = postAPI.useAddRecordsMutation();

  // const handleButton = () => {
  //   addRecords({ title: "new", time: "time", favorites: false, text: "text" });
  // };

  // useEffect(() => {
  //   console.log(records);
  // }, [records]);

  return (
    <div className="App">
      {/* <Button onClick={handleButton}>добавить запись</Button> */}
      <Switch>
        <Route path="/sign-in" exact component={SignIn} />
        <Main>
          <Route exact path="/home" component={MapPage} />
          <Route exact path="/orders" component={Orders} />
          <Route exact path="/сouriers" component={Couriers} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/partners/rates" component={PartnersRates} />
          <Route exact path="/сouriers/rates" component={CouriersRates} />
          <Redirect from="*" to="/home" />
          <Redirect from="/" to="/home" />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
