export const createCard = () => {
  const wrapper = document.querySelector(".wrapper");
  const newDiv = document.createElement("div");

  // creating div1
  const div1 = newDiv.cloneNode();
  div1.classList.add("card");
  const cardElement = wrapper.appendChild(div1);

  const newImg = document.createElement("img");
  newImg.classList.add("img");

  const div2 = newDiv.cloneNode();
  div2.classList.add("fullName");

  const div3 = newDiv.cloneNode();
  div3.classList.add("location");

  const div4 = newDiv.cloneNode();
  div4.classList.add("email");

  const div5 = newDiv.cloneNode();
  div5.classList.add("mobile");

  const div6 = newDiv.cloneNode();
  div6.classList.add("gender");
  cardElement.append(newImg, div2, div6, div3, div4, div5);
};
