


  import moment from "moment";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { STATUS, userRole } from "../constants/AppConstants";
// import NoInternetPng from "../assets/images/noInter.png";


export const changesISODateToNormal = (date) => {
  let newdate = date;
  let dates = new Date(date);
  let year = dates.getFullYear();
  let month = dates.getMonth() + 1;
  let dt = dates.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  return `${dt}-${month}-${year}`;
};

export const formatDate = (date) => {
  return moment(date, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("DD-MM-YYYY");
};

export const truncateDescription = (description) => {
  if (description?.length > 30) {
    return description.substring(0, 30) + "" + "...";
  }
  return description;
};

export const truncateTitle = (title) => {
  if (title?.length > 30) {
    return title.substring(0, 30) + "" + "...";
  }
  return title;
};

export const handleTextInput = (event, size) => {
  const value = event.target.value;
  if (value.length >= size) {
    event.preventDefault();
    event.stopPropagation();
  }
};

export const onlyCharacters = (event) => {
  const regex = /^[A-Za-z\s\b]+$/;
  const key = String.fromCharCode(event.keyCode);
  if (!regex.test(key)) {
    event.preventDefault();
  }
};

export const onlyCaptilizeCharacters = (event) => {
  let inputValue = event.target.value;
  inputValue = inputValue.replace(/[^A-Za-z\s]/g, ""); // Added \s to include spaces
  inputValue = inputValue
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  event.target.value = inputValue;
};
export const onlyNumbers = (e) => {
  e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

export const getPdfUrl = (url) => {
  const refinedUrl = decodeURIComponent(url)
    ?.split("/")[4]
    ?.slice(
      decodeURIComponent(url)?.split("/")[4].indexOf("_") + 1,
      decodeURIComponent(url)?.split("/")[4].indexOf(".pdf")
    );
  return refinedUrl;
};
// export const restrictSpecialCharacters = (event) => {
//   const input = event.target.value;
//   const alphanumericRegex = /^[a-zA-Z0-9]*$/;
//   if (!alphanumericRegex.test(input)) {
//     event.target.value = input.slice(0, -1);
//   }
// };

export const commonHeaders = () => {
  let token = localStorage.getItem("ACESS_TOKEN");
  return token;
};
export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getUniqueDeviceId = () => {
  let deviceId = localStorage.getItem("deviceId");

  if (!deviceId) {
    deviceId = uuid();
    localStorage.setItem("deviceId", deviceId);
  }

  return deviceId;
};

// export function cleanObject(obj) {
//   const cleanedObj = { ...obj }; // create a copy of the object to avoid mutating the original object
//   for (let key in cleanedObj) {
//     if (
//       cleanedObj[key] === "" ||
//       cleanedObj[key] === " " ||
//       (Array.isArray(cleanedObj[key]) && cleanedObj[key].length === 0) ||
//       /^\s+$/.test(cleanedObj[key])
//     ) {
//       delete cleanedObj[key];
//     }
//   }
//   return cleanedObj;
// }

export function cleanObject(obj) {
  const cleanedObj = { ...obj }; // create a copy of the object to avoid mutating the original object
  for (let key in cleanedObj) {
    if (
      (cleanedObj[key] === "" && !Array.isArray(cleanedObj[key])) ||
      /^\s+$/.test(cleanedObj[key])
    ) {
      delete cleanedObj[key];
    } else if (Array.isArray(cleanedObj[key]) && cleanedObj[key].length > 0) {
      cleanedObj[key] = cleanedObj[key].filter((item) => {
        if (typeof item === "object") {
          const cleanedItem = cleanObject(item);
          return Object.keys(cleanedItem).length > 0;
        }
        return item !== "" && !/^\s+$/.test(item);
      });
    }
  }
  return cleanedObj;
}
export const dashRouteAccToRole = (id) => {
  switch (localStorage.getItem("roles")) {
    case userRole.ADMIN_PANEL:
      return "/garbage/dashboard";
    case userRole.PAA_PANEL:
      return "/garbage/paa-dashboard";
    case userRole.BDO_PANEL:
      return "/garbage/bdo-dashboard";
    case userRole.DO_PANEL:
      return "/garbage/do-dashboard";
    default:
      return "";
  }
};

export function parseDate(data) {
  let date;

  if (data) {
    date = new Date(data);

    if (isNaN(date.getTime())) {
      // Handle the case where the date is still invalid
      console.error("Invalid pickup_date:", data);
      date = new Date(); // Set to a default date or handle it as needed
    }
  } else {
    // Handle the case where pickup_date is null or undefined
    console.error("pickup_date is missing or undefined");
    date = new Date(); // Set to a default date or handle it as needed
  }

  return date;
}
export function statusApprovalFunction(status) {
  if (status == STATUS.PENDING) {
    return "Pending";
  } else if (status == STATUS.RESOLVED) {
    return "Approved";
  } else if (status == STATUS.ACTIVE) {
    return "Active";
  } else {
    return "Inactive";
  }
}
export default {
  getUniqueDeviceId,
};
