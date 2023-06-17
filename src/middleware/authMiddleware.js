export default function authMiddleware({ next, store }) {
    let isLoggedIn = store.isLoggedIn;
    if (!isLoggedIn) {
      return next({
        name: 'login',
      });
    }
  
    return next();
  }