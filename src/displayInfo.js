import { selectors } from "./selectors.js";
import { getData, allUsers } from "./getData.js";
import { createCard } from "./createCard.js";

export const displayInfo = async () => {
  try {
    console.log(allUsers);

    await getData();

    allUsers.forEach((user) => {
      createCard();
      const {
        profileImage,
        userFullName,
        userlocation,
        email,
        mobile,
        gender,
      } = selectors();
      profileImage.src = user.picture.large;
      userFullName.textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
      userlocation.textContent = `${user.location.country} ${user.location.city} ${user.location.street.name} ${user.location.street.number}`;
      email.textContent = `${user.email}`;
      mobile.textContent = `${user.phone} `;
      gender.textContent = `${user.gender}`;
    });
  } catch (error) {
    console.error(error);
  }
};
