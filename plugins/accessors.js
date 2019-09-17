import { accessors as account } from "~/store/form/account";
import { accessors as branch } from "~/store/form/branch";
import { accessors as bank } from "~/store/form/bank";
import { accessors as login } from "~/store/form/login";
import { accessors as nav } from "~/store/nav";
import { accessors as session } from "~/store/session";
import { accessors as transfer } from "~/store/form/transfer";

export default ({ store }, inject) => {
  inject("account", account("form/account", store));
  inject("branch", branch("form/branch", store));
  inject("bank", bank("form/bank", store));
  inject("login", login("form/login", store));
  inject("nav", nav("nav", store));
  inject("session", session("session", store));
  inject("transfer", transfer("form/transfer", store));
};
