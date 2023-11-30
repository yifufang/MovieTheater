import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Datetimepicker({onDateChange}) {
  const [v, setValue] = React.useState(dayjs('2023-12-15T15:00'));
  const handleDateChange = (date) => {
    setValue(date);
    onDateChange(v.format("YYYY-MM-DD HH:mm:ss"));
  };
  React.useEffect(() => {
    onDateChange(v.format("YYYY-MM-DD HH:mm:ss"));
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker onChange={handleDateChange} value={v}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}
