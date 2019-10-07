import cuid from "cuid";
import md5 from "blueimp-md5";

export default ({ app }) => () => {
  const id = cuid();
  const password = md5(app.$signin.password);
  const kind = "普通";
  const num = 1000000 + Math.floor(Math.random() * 100000);
  const total = 100000;

  return {
    ...app.$signin.data,
    id,
    password,
    kind,
    num,
    total,
  };
};
