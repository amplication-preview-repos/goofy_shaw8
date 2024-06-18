import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VisitCounterList } from "./visitCounter/VisitCounterList";
import { VisitCounterCreate } from "./visitCounter/VisitCounterCreate";
import { VisitCounterEdit } from "./visitCounter/VisitCounterEdit";
import { VisitCounterShow } from "./visitCounter/VisitCounterShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Counter"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="VisitCounter"
          list={VisitCounterList}
          edit={VisitCounterEdit}
          create={VisitCounterCreate}
          show={VisitCounterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
