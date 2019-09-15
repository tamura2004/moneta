import { accessors } from "~/store/session";

export default ({ store }, inject) => {
  inject("session", accessors("session", store));
};
