"use client";
import Toolbar from "react-multi-date-picker/plugins/toolbar";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";

export function DatePickerInput({
  name,
  value,
  onChange,
  //   containerStyle = { display: "block", zIndex: 50 },
  //   className = "",
  //   inputClass = "form-input w-full",
  format = "YYYY/MM/DD",
  calendar = persian,
  locale = persian_fa,
  //   calendarPosition = "top-right",
  //   props = {},
}) {
  return (
    <DatePicker
      name={name}
      //   containerStyle={containerStyle}
      //   inputClass={inputClass}
      value={value}
      //   portal={true}
      onChange={(date) => {
        onChange(date?.isValid ? date : "");
      }}
      //   className={className}
      plugins={[
        <Toolbar
          key="toolbar"
          position="bottom"
          names={{
            today: "امروز",
            deselect: "پاک کردن",
            close: "بستن",
          }}
        />,
      ]}
      format={format}
      calendar={calendar}
      locale={locale}
      //   calendarPosition={calendarPosition}
      //   {...props}
    />
  );
}
