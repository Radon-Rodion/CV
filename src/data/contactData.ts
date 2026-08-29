import { IContact } from "@/models/contact";


export const contactDataRus: IContact = {
  name: "ПАВЕЛ РАФЕЕВ",
  phone: "+375 33 657-77-88",
  email: "pavel02rafeev@gmail.com",
  linkedIn: "",
  github: { name: "Radon-Rodion (Radius)", url: "https://github.com/Radon-Rodion" },
  location: "Минск"
};

export const contactDataEng: IContact = {
  ...contactDataRus,
  name: "PAVEL RAFEYEU",
  location: "Minsk"
};