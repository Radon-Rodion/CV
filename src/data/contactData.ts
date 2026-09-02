import { IContact } from "@/models/contact";


export const contactDataRus: IContact = {
  name: "ПАВЕЛ РАФЕЕВ",
  phone: "+375 33 657-77-88",
  email: "pavel02rafeev@gmail.com",
  linkedIn: { name: 'Павел Рафеев', url: "https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%B5%D0%BB-%D1%80%D0%B0%D1%84%D0%B5%D0%B5%D0%B2-a6097a224?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  github: { name: "Radon-Rodion (Radius)", url: "https://github.com/Radon-Rodion" },
  location: "Минск"
};

export const contactDataEng: IContact = {
  ...contactDataRus,
  name: "PAVEL RAFEYEU",
  location: "Minsk"
};