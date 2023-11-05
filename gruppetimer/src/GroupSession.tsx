import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { SessionInfo } from "./types";
import { useState } from "react";

interface GroupSessionProps {
  sessionInfo: SessionInfo;
}

const GroupSession: React.FC<GroupSessionProps> = ({ sessionInfo }) => {
  const [updatedSessionInfo, setUpdatedSessionInfo] = useState(sessionInfo);

  const handleClick = () => {
    if (
      updatedSessionInfo.bookingInfo.memberBookingInfo.bookingState ===
      "NotBooked"
    ) {
      const newClassInfo = {
        ...updatedSessionInfo,
        bookingInfo: {
          ...updatedSessionInfo.bookingInfo,
          memberBookingInfo: {
            ...updatedSessionInfo.bookingInfo.memberBookingInfo,
            bookingState: "Booked",
          },
          bookedCount: updatedSessionInfo.bookingInfo.bookedCount + 1,
        },
      };
      setUpdatedSessionInfo(newClassInfo);
      console.log(newClassInfo.bookingInfo.memberBookingInfo.bookingState);
    } else {
      const newClassInfo = {
        ...updatedSessionInfo,
        bookingInfo: {
          ...updatedSessionInfo.bookingInfo,
          memberBookingInfo: {
            ...updatedSessionInfo.bookingInfo.memberBookingInfo,
            bookingState: "NotBooked",
          },
          bookedCount: updatedSessionInfo.bookingInfo.bookedCount - 1,
        },
      };
      setUpdatedSessionInfo(newClassInfo);
      console.log(newClassInfo.bookingInfo.memberBookingInfo.bookingState);
    }
  };
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
          <Text fontSize="2xl" mb={3}>
            {sessionInfo.name}
          </Text>
          <Text>w/ {sessionInfo.instructor}</Text>
          <Text>{sessionInfo.clubName}</Text>
        </Box>
        <Box>
          <Button
            mb={3}
            flex={1}
            fontSize={"sm"}
            onClick={handleClick}
            disabled={
              updatedSessionInfo.bookingInfo.memberBookingInfo.bookingState ===
                "NotBooked" &&
              updatedSessionInfo.bookingInfo.bookedCount ===
                updatedSessionInfo.bookingInfo.capacity
            }
          >
            {updatedSessionInfo.bookingInfo.memberBookingInfo.bookingState ===
            "NotBooked"
              ? "BOOK"
              : "UNBOOK"}
          </Button>
          <Text>
            Available spots:{" "}
            {updatedSessionInfo.bookingInfo.capacity -
              updatedSessionInfo.bookingInfo.bookedCount}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default GroupSession;
