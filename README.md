# Koa_Mongo_Redis_Socket_IO_Passport


Node.js, chat server

Technology:
Jade,
Bootstrap,
MongoDB,
Passport,
Mongoose,
Redis,
Websocket (socket.io),
gulp: [ fixtures, nodemon ],


Passport authorization: 
- Local:
 used Mongodb+Mongoose, password validation
- VK, facebook
*********

Instead you connect you should add fixtures for testing:
run in console:
"gulp load:db --from /fixtures/users"

After login you enter to chat server, which is running on Redis + socket.io
