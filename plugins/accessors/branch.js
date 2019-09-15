import { accessors } from "~/store/form/branch";

export default ({ store }, inject) => {
  inject("branch", accessors("form/branch", store));
};
