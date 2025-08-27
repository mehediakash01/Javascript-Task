function calculateVAT(price) {
  if (typeof price !== "number") {
    return "Invalid";
  } else if (price <= 0) {
    return "Invalid";
  }
  let vat = (price * 7.5) / 100;
  return vat;
}

function validContact(contact) {
  if (typeof contact !== "string" || contact === true) {
    return "Invalid";
  } else if (contact.length !== 11) {
    return false;
  } else if (contact.slice(0, 2) !== "01") {
    return false;
  } else if (contact.includes(" ")) {
    return false;
  }

  for (let search of contact) {
    if (search < "0" || search > "9") {
      return false;
    }
  }
  return true;
}

function willSuccess(marks) {
  let pass = 0;
  let fail = 0;
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return false;
  }

  for (let check of marks) {
    if (typeof check !== "number") {
      return "Invalid";
    }
  }

  for (let mark of marks) {
    if (mark >= 50) {
      pass++;
    } else {
      fail++;
    }
  }
  if (pass > fail) {
    return true;
  } else {
    return false;
  }
}

function validProposal(person1, person2) {
  if (
    typeof person1 !== "object" ||
    typeof person2 !== "object" ||
    person1 === null ||
    person2 === null
  ) {
    return "Invalid";
  } else if (person1.gender === person2.gender) {
    return false;
  } else if (Math.abs(person1.age - person2.age) > 7) {
    return false;
  }
  return true;
}

function calculateSleepTime(times) {
  let totalTime = 0;

  for (let time of times) {
    if (typeof time !== "number") {
      return "Invalid";
    }
    totalTime += time;
  }
  const hour = Math.floor(totalTime / 3600);
  const remainSecOfhour = totalTime % 3600;
  const minute = Math.floor(remainSecOfhour / 60);
  const remainSecOfMin = remainSecOfhour % 60;
  const second = remainSecOfMin;
  return { hour: hour, minutes: minute, seconds: second };
}
