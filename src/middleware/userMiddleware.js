export default function userMiddleware({ next, store }) {
  let isLoggedIn = store.isLoggedIn;
  let role = store.user.role;
  const isUser = (role) => {
    if (role === "user") {
      return true;
    }
  };
  if (!isLoggedIn) {
    return next({
      name: "login",
    });
  } else if (!isUser(role)) {
    return next({
      name: "accessDenied",
    });
  }
  return next()
}
