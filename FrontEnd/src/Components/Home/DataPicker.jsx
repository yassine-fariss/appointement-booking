import React, { useEffect } from "react";
import Datepicker from "flowbite-datepicker/Datepicker";
import { useTranslation } from "react-i18next";

const DatePicker = ({ setSelectedDate }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const datepickerEl = document?.getElementById("datepickerId");
    
    const handleChangeDate = (e) => {
      // Flowbite datepicker updates the input value. We can grab it directly.
      setSelectedDate(datepickerEl.value);
    };

    if (datepickerEl) {
      new Datepicker(datepickerEl, {
        autohide: true,
        format: "yyyy-mm-dd",
      });
      
      // Add custom event listener for when date is selected via the calendar UI
      datepickerEl.addEventListener("changeDate", handleChangeDate);
    }
    
    // Cleanup listener to prevent memory leaks
    return () => {
      if (datepickerEl) {
        datepickerEl.removeEventListener("changeDate", handleChangeDate);
      }
    };
  }, [setSelectedDate]);

  return (
    <>
      <input
        datepicker="true"
        datepicker-autohide="true"
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-9 p-2"
        placeholder={t("DatePicker.Select_Date")}
        id="datepickerId"
        onSelect={(e) => setSelectedDate(e.target.value)}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </>
  );
};

export default DatePicker;
