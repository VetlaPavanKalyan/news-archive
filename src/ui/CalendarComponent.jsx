import "react-calendar/dist/Calendar.css";
import CustomCalendar from "../components/CustomCalendar";
import { Link } from "react-router-dom";

const CalendarComponent = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-52">
      <h2 className="text-2xl bg-emrald-400 capitalize bg-teal-300 text-slate-900 px-5 py-3 rounded-lg">📅 Choose the date</h2>
      <CustomCalendar />
      <Link to='/' className="text-center text-lg block my-4 transition-transform hover:scale-105 bg-teal-300 text-slate-900 px-5 py-3 rounded-lg" >Home</Link>
    </div>
  );
};

export default CalendarComponent;
