export const selectors = () => {
  const profileImages = document.querySelectorAll("img");
  const userFullNames = document.querySelectorAll(".fullName");
  const userLocations = document.querySelectorAll(".location");
  const emails = document.querySelectorAll(".email");
  const mobiles = document.querySelectorAll(".mobile");
  const genders = document.querySelectorAll(".gender");

  const profileImage = profileImages[profileImages.length - 1];
  const userFullName = userFullNames[userFullNames.length - 1];
  const userlocation = userLocations[userLocations.length - 1];
  const email = emails[emails.length - 1];
  const mobile = mobiles[mobiles.length - 1];
  const gender = genders[genders.length - 1];

  return {
    profileImage,
    userFullName,
    userlocation,
    email,
    mobile,
    gender,
  };
};
