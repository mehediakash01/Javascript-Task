const groupBy = (arr, key) => {
  return arr.reduce((acc, obj) => {
    (acc[obj[key]] = acc[obj[key]] || []).push(obj);
    return acc;
  }, {});
};

const users = [
  { name: "Akash", role: "admin" },
  { name: "John", role: "user" },
  { name: "Sara", role: "admin" },
];

console.log(groupBy(users, "role"));
// { admin: [..], user: [..] }
