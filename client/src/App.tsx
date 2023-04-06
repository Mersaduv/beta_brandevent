import { Routes, Route } from "react-router-dom";
import EventArchive from "./page/EventArchive";
import UpcomingEvents from "./page/UpcomingEvents";
import Layout from "./Layout/Layout";
import Home from "./page/Home";
import SettingsPage from "./page/SettingsPage";
import DashboardChat from "./page/Dashboard-Chat";

//TODO
// export const routes = {
//   HOME: "/",
//   //EVENT_ARCHIVE :
// }

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHeaderFooter={true}>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/event-archive"
        element={
          <Layout showHeaderFooter>
            <EventArchive />
          </Layout>
        }
      />
      <Route
        path="/upcoming-events"
        element={
          <Layout showHeaderFooter>
            <UpcomingEvents />
          </Layout>
        }
      />
      <Route
        path="/chat-event"
        element={
          <Layout>
            <DashboardChat />
          </Layout>
        }
      />
      <Route
        path="/account-management"
        element={
          <Layout>
            {" "}
            <SettingsPage />{" "}
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
