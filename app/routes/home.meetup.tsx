import { styled, useTheme } from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function Meetup_page() {
  const theme = useTheme();
  return (
    <>
      <Offset
        style={{
          backgroundColor: theme.palette.secondary.light,
        }}
      />
      <iframe
        title="meetup-scheduler"
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1HcZFo0HQbrYIBQGQ14S4ROAU78Ikj68YbpVcv_27BBhDbp5fVWq4D1V1Z3DNidWw-obN5OCe0?gv=true"
        style={{ border: 0, height: "100%" }}
        width="100%"
        height="600"
        frameborder="0"
      />
    </>
  );
}
