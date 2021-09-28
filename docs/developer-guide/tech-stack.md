---
sidebar-position: 2
---

# Tech Stack

Resuminator from the outside may look like a simple piece of software but the machinery underneath it sophisticated enough to provide you a smooth user experience and seamleass resume building experience.

We develop and deploy our products with a variety of frameworks and tools. You can find the tech stack related to different repositories below.

## resuminator

Found at [resuminator/resuminator](https://github.com/resuminator/resuminator), this repository holds the code for the Resuminator webapp and its website.

**Programming Language** - TypeScript v4

|Technology/Framework|Version|Usage|
|-|-|-|
|[React](https://reactjs.org/)|^17|Primary development framework|
|[Next JS](https://nextjs.org/)|^11.1.2|Development Framework with React|
|[Chakra-UI](https://chakra-ui.com/)|^1.6|UI Component Library|
|[Firebase](https://firebase.google.com/)|^8.7.1|Authentication|
|[Framer Motion](https://www.framer.com/motion/)|^4.1.11|Animation Library|
|[Zustand](https://github.com/pmndrs/zustand)|^3.5.1|State Management Library|
|[Axios](https://github.com/axios/axios)|^0.21.3|HTTP Client for requests|

Apart from this primary tech stack, we use several other libraries to achieve specific functionality which you may find around the codebase.

* [Fontsource](https://fontsource.org/) - Font asset management
* [MUI](https://mui.com/) (formerly - Material UI) - Date-Time pickers
* [TipTap](https://tiptap.dev/) - Rich Text Editor
* [React Query](https://react-query.tanstack.com/) - Data synchronization & Caching
* [Papercups](https://papercups.io/) - In-app chat module
* [Mixpanel](https://mixpanel.com/) - Performance data analytics
* [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) - Drag and Drop functionality

## resuminator-server

Found at [resuminator/resuminator-server](https://github.com/resuminator/resuminator-server), serves as the primary backend API server for fetching and updating user data.

**Programming Language** - TypeScript v4

|Technology/Framework|Version|Usage|
|-|-|-|
|[Express JS](https://expressjs.com/)|^4.7.1|Node.js Framework|
|[Mongoose](https://mongoosejs.com/)|^5.13.2|MongoDB Object Data Modeling|
|[Firebase Admin](https://chakra-ui.com/)|^9.11.0|Server-side Authentication|
|[JOI](https://github.com/sideway/joi)|^17.4.0|Data Validation|

Apart from this we use two primary third-party services

* [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas) - Database Cloud Hosting Solution
* [Posthog](https://posthog.com/) - Server side analytics suite
* [SendGrid](https://sendgrid.com/) - Sending Email to Users

## docs

Found at [resuminator/docs](https://github.com/resuminator/docs), serves as the codebase for the documentation and Wiki for Resuminator and its products.

**Framework Used** - [Docusaurus v2](https://docusaurus.io/docs)

## Hosting

* Our frontend is completely hosted on [Vercel](https://vercel.com/), because it is hands down the best hosting solution for any Next JS website/app.

* Resuminator Server is currently hosted on [Heroku](http://www.heroku.com/), which provides a decent and free hosting solution for our needs.

* Docs are hosted on [Netlify](https://www.netlify.com/) which is another brilliant hosting solution for all the JAMStack websites and otherwise
