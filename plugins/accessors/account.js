import { accessors } from "~/store/form/account";

export default ({ store }, inject) => {
  inject("account", accessors("form/account", store));
};
