import { useEffect, useState } from "react";
import { SessionInfo } from "./types";

function GroupSessions() {
  const [sessions, setSessions] = useState<SessionInfo[]>([]);

  useEffect(() => {
    import("./response.json")
      .then((data) => {
        setSessions(data.results);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  return (
    <div>
      {sessions.map((session, index) => (
        <li key={index}>{session.name}</li>
      ))}
    </div>
  );
}

export default GroupSessions;
