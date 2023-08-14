const randomUserURL = "https://randomuser.me/api/?results=20";
const allUsers = [];
let data;

export const getData = async () => {
  try {
    const response = await fetch(randomUserURL);
    data = await response.json();

    for (let i = 0; i < 20; i++) {
      allUsers.push(data.results[i]);
    }
    return allUsers;
  } catch (error) {
    console.error(error);
  }
};
export { allUsers };
