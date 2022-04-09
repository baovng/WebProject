const { faker } = require("@faker-js/faker");
const fs = require("fs");

const genCustomersData = (n) => {
  let customers = [];
  k = 0;
  while (n != 0) {
    const customer = {
      id: k,
      name: faker.name.firstName() + " " + faker.name.lastName(),
      email: faker.internet.email(),
      role: faker.lorem.word(),
      inactive: faker.datatype.boolean(),
    };
    customers.push(customer);
    k++;
    n--;
  }
  return customers;
};

let obj = {
  users: genCustomersData(10),
};

let json = JSON.stringify(obj);
fs.writeFile("db.json", json, "utf8", function (err) {
  if (err) throw err;
  console.log("complete");
});
