"use strict";
const user = {
    name: "John",
    age: 20,
    address: 'Seoul'
};
//
var UserRole;
(function (UserRole) {
    UserRole[UserRole["admin"] = 0] = "admin";
    UserRole[UserRole["manager"] = 1] = "manager";
})(UserRole || (UserRole = {}));
