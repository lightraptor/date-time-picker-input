import { useState } from "react";
import "./App.css";
import DateTimePickerInput from "./components/date-time-picker-input";

function App() {
  const [dateTime, setDateTime] = useState<string | undefined>(
    "2024-11-28T17:48:03.883Z"
  );
  return (
    <div>
      <h1 className="mb-4">Custom Date Time Input</h1>
      <DateTimePickerInput
        value={dateTime}
        onChange={(value) => {
          setDateTime(value);
          console.log("New DateTime:", value);
        }}
      />
    </div>
  );
}

export default App;
