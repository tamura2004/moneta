import { accessors } from "~/store/form/login";

export default ({ store }, inject) => {
  inject("login", accessors("form/login", store));
};
