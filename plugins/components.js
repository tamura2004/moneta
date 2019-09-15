import Vue from "vue";
import monetaBankName from "~/components/ui/moneta-bank-name";
import monetaBranchName from "~/components/ui/moneta-branch-name";
import monetaAccountName from "~/components/ui/moneta-account-name";
import listToolbar from "~/components/ui/list-toolbar";
import listActions from "~/components/ui/list-actions";
import menuButton from "~/components/ui/menu-button";
import appDrawer from "~/components/layouts/app-drawer";

Vue.component("moneta-bank-name", monetaBankName);
Vue.component("moneta-branch-name", monetaBranchName);
Vue.component("moneta-account-name", monetaAccountName);
Vue.component("list-toolbar", listToolbar);
Vue.component("list-actions", listActions);
Vue.component("menu-button", menuButton);
Vue.component("app-drawer", appDrawer);
