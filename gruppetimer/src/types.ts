export interface SessionInfo {
    id: string;
    durationInMinutes: number;
    instructor: string;
    clubName: string;
    name: string;
    bookingInfo: {
      capacity: number;
      bookedCount: number;
      memberBookingInfo: {
        bookingState: string;
      }
    };
    zonedStartTime: {
      timeZone: string;
      dateTime: string;
    };
  }