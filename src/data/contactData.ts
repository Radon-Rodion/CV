import { IContact } from "@/models/contact";


export const contactDataRus: IContact = {
  name: "ПАВЕЛ РАФЕЕВ",
  phone: "+375 33 657-77-88",
  email: "pavel02rafeev@gmail.com",
  linkedIn: { name: 'Павел Рафеев', url: "http://www.linkedin.com/in/pavel-rafeyeu-a6097a224" },
  github: { name: "Radon-Rodion", url: "https://github.com/Radon-Rodion" },
  location: "Минск"
};

export const contactDataEng: IContact = {
  ...contactDataRus,
  linkedIn: { ...contactDataRus.linkedIn, name: 'Pavel Rafeyeu' },
  name: "PAVEL RAFEYEU",
  location: "Minsk"
};