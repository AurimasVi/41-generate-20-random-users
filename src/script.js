import { displayInfo } from "./displayInfo.js";
import { loader } from "./loader.js";

const mainjs = async () => {
  try {
    setTimeout(() => {
      displayInfo();
      loader();
    }, 1000);
  } catch (error) {
    console.error(error);
  }
};

mainjs();
