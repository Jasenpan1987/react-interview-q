// This is only a mock api, replace it with the actual data.
/**
 * userlist = {
 *  "123": {
 *    id: "123"
 *    firstName: "foo",
 *    lastName: "bar",
 *    phoneNumber: "1234567"
 *  }
 * ...
 * }
 *
 */
import uuid from "uuid/v1";

export const Api = {
  getUsers() {
    return new Promise(resolve => {
      const userlist = localStorage.getItem("userlist");
      resolve(userlist);
    });
  },

  addUser({ firstName, lastName, phoneNumber }) {
    const nextUserId = uuid();
    const newUser = {
      id: nextUserId,
      firstName,
      lastName,
      phoneNumber
    };

    try {
      const userlist = JSON.parse(localStorage.getItem("userlist"));
      const newUserlist = {
        ...userlist,
        [nextUserId]: newUser
      };
      localStorage.setItem("userlist", JSON.stringify(newUserlist));
      return new Promise(resolve => {
        resolve(newUser);
      });
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject({ error: "Unable to save user" });
      });
    }
  },

  updateUser({ id, firstName, lastName, phoneNumber }) {
    try {
      const userlist = JSON.parse(localStorage.getItem("userlist"));
      if (!userlist[id]) {
        return new Promise((resolve, reject) => {
          reject({ error: "User not found" });
        });
      }
      const newUser = { id, firstName, lastName, phoneNumber };
      const newUserlist = {
        ...userlist,
        [id]: newUser
      };

      localStorage.setItem("userlist", JSON.stringify(newUserlist));

      return new Promise(resolve => {
        resolve(newUser);
      });
    } catch (err) {
      return new Promise((resolve, reject) => {
        reject({ error: "Unable to save user" });
      });
    }
  }
};
