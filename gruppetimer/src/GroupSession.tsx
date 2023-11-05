import { Box, Flex, Text } from "@chakra-ui/react";
import { SessionInfo } from "./types";

interface GroupSessionProps {
  sessionInfo: SessionInfo;
}

const GroupSession: React.FC<GroupSessionProps> = ({ sessionInfo }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} m={4} boxShadow="base">
      <Flex justifyContent="space-between">
        <Box>
          <Text fontSize="2xl">
            {" "}
            {new Date(sessionInfo.zonedStartTime.dateTime).toLocaleTimeString(
              [],
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </Text>
          <Text>{sessionInfo.durationInMinutes} min</Text>
        </Box>
        <Box flexBasis="50%">
          {" "}
          <Text fontSize="2xl">{sessionInfo.name}</Text>
          <Text>{sessionInfo.instructor}</Text>
          <Text>{sessionInfo.clubName}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GroupSession;
