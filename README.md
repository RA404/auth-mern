# Auth MERN stack

https://user-images.githubusercontent.com/61162669/230776798-b8a73c17-3c65-45cb-9f22-7954ba8287bf.mp4

## About
MERN stack authentication. There is client and server part. 

The project has functionality:
- Login
- Registration
- Email confirmation by link
- Login using accessToken
- Update accessToken using refreshToken
- Getting users list (only for authorized users)

## Technology stack

### Backend
- express
- mongodb
- nodemailer
- JWT
- bcrypt

### Frontend
- React
- TypeScript
- MobX
- axios

## How to Install
Clone this repository
```sh
git clone git@github.com:RA404/auth-mern.git
```
### Server
Move to server folder
```sh
cd server
```
Install node packages and dependencies
```sh
npm install
```
Create ```.env``` file with next variables:
```sh
PORT=
DB_URL=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
API_URL=
SERVICE_NAME=
CLIENT_URL=
```
Run server
```sh
npm run dev
```
### Client
Install node packages and dependencies
```sh
npm install
```
Run app
```sh
npm run start
```
Also you can build app using command
```sh
npm run build
```

