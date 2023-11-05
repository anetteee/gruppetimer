import { useEffect, useState } from "react";
import { SessionInfo } from "./types";
import GroupSession from "./GroupSession";
import { Container, SimpleGrid } from "@chakra-ui/react";

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
    <Container maxW="container.lg">
      <SimpleGrid columns={1} spacing={4}>
        {sessions.map((sessionInfo) => (
          <GroupSession key={sessionInfo.id} sessionInfo={sessionInfo} />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default GroupSessions;
