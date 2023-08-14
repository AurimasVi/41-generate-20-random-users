const loader = async () => {
  const loaderElement = document.querySelector(".lds-grid");
  const center = document.querySelector(".center");
  const footer = document.querySelector(".footer");
  loaderElement.style.display = "none";
  center.style.display = "none";
  footer.style.display = "block";
};

export { loader };
