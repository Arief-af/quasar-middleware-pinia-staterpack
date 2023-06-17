export default function guestMiddleware({ next, store }) {
    let isLoggedIn = store.isLoggedIn;
    if (isLoggedIn) {
      return next({
        name: 'home',
      });
    }
  
    return next();
  }