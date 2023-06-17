## Welcome to Quasar Pinia Middleware Starter Pack

## Install the dependencies
```
npm install
```
### Start the app in development mode (hot-code reloading, error reporting, etc.)
``` 
quasar dev
```
### JSON SERVER
Install json server from here 
[json server ](https://www.npmjs.com/package/json-server)
Run with 
```
cd src/json-server && json-server db.json
```

### Documentation :
Available Middleware :
```
1. guestMiddleware 
   accessible only for guest visitor, who user state is null 
   and isLoggedIn state is false
2. authMiddleware
   accessible only for authenticated user, who have user state  
   and isLoggedIn state is true
3. userMiddleware
   accessible only for authenticated user, who have user state  
   and isLoggedIn state is true also user.role === "user"
4. adminMiddleware
   accessible only for authenticated user, who have user state  
   and isLoggedIn state is true also user.role === "admin"
```

How to Use middleware :
	go to some routes, add middleware: [nameRoute]
	example : 
```js
  {
        meta: {
          middleware: [userMiddleware],
        },
        name: 'home',
        path: "/home",
        component: () => import("pages/Home.vue"),
}	

```
