import { loadHeaderFooter } from "./utils.mjs";
import Admin from "./admin.mjs";

loadHeaderFooter();

const myAdmin = new Admin("main");
myAdmin.showLogin();
