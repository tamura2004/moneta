import { accessors } from "~/store/form/bank";

export default ({ store }, inject) => {
  inject("bank", accessors("form/bank", store));
};
