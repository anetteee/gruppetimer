import React from "react";
import GroupSessions from "./GroupSessions";
import Navbar from "./Navbar";
import { Heading } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <Navbar />
      <Heading marginLeft={13} p={4}>
        {" "}
        BOOK GRUPPETIME
      </Heading>{" "}
      <GroupSessions />
    </div>
  );
}

export default App;
