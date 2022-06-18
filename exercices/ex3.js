  let S = "03:00 PM";


  let hour = S.substring(0, 2);
  let h = Number(hour);

  let result = S.substring(0, 5);


  if (S.includes("PM")) {
      if (h != 12) {
          h = h + 12;
      }
      result = result.replace(hour, h.toString());
  } else {
      if (h === 12) {
          h = "00";
          result = result.replace(hour, h.toString())
      }
  }
  console.log(result);