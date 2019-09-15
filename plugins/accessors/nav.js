import { accessors } from "~/store/nav";

export default ({ store }, inject) => {
  inject("nav", accessors("nav", store));
};
