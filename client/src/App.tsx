import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventArchive from "./page/EventArchive";
import UpcomingEvents from "./page/UpcomingEvents";
import Layout from "./Layout/Layout";
import Home from "./page/Home";


//TODO
export const routes = {
  HOME: "/",
  //EVENT_ARCHIVE : 
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path="/event-archive" element={<EventArchive />} />
        <Route path="/upcoming-events" element={<UpcomingEvents />} />
      </Routes>
    </Layout>
  );
}

export default App;
