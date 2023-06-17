export default function adminMiddleware({ next, store }) {
  let isLoggedIn = store.isLoggedIn;
  let role = store.user.role;
  const isAdmin = (role) => {
    if (role === "admin") {
      return true;
    }
  };
  if (!isLoggedIn) {
    return next({
      name: "login",
    });
  } else if (!isAdmin(role)) {
    return next({
      name: "accessDenied",
    });
  }
  return next()
}
