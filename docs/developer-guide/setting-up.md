---
sidebar-position: 3
---

# Setting Up

This is a guide for setting up Resuminator for local Development.

## Backend

### Pre-Requisites

- [Node.js](https://nodejs.org/en/download/) version >= 14.17 or above (which can be checked by running node -v). You can use nvm for managing multiple Node versions on a single machine installed.

- MongoDB version = 4.4.9. You can either spun a local/docker instance or can use [MongoDB Atlas](https://www.mongodb.com/)(Recommended). We highly use MongoDB Atlas at Resuminator for all of our MongoDB needs.

- [Firebase](https://firebase.google.com/) Account, We use firebase for authentication and storing media files. So, It is required to have a firebase account ready.

- [SendGrid](https://sendgrid.com/) is used for sending email on signup and account deletion.

- (_Optional_) PostHog Account. We use posthog for server-side analytics. You can either use [PostHog Cloud](https://posthog.com/) or set up your [own PostHog](https://github.com/PostHog/posthog) as it is also Open Source.

:::tip
For all cloud related resources, to have lower write latency select region closer to you.

_**eg**_. If you are in India

- For Firebase, Choose `asia-south1`.
- For MongoDB Atlas, Choose either `asia-south1` on **GCP**(_Recommended_) or `ap-south-1` on **AWS** or `centralindia` on **Azure**.
- For self-hosted PostHog, you can use same recommendation as that of MongoDB Atlas.

:::

### Configuration

Follow the below steps to have a working backend.

1. Clone the Repository.

   ```bash
   git clone https://github.com/resuminator/resuminator-server.git
   ```

1. Navigate to Repository.

   ```bash
   cd resuminator-server
   ```

1. Install the dependencies.

   ```bash
   npm install
   ```

1. Create `.env` file and start adding following environment variable in the file.

   - `DB_URI` is the mongodb connection string. eg. `mongodb+srv://username:password@address/dbname`.
   - Below mentioned firebase values are required and can be find in your service account credentinal. If You don't have firebase service account, Navigate to _Project Settings > Service accounts > Generate new private key_.

     - `FIREBASE_TYPE`
     - `FIREBASE_PROJECT_ID`
     - `FIREBASE_PRIVATE_KEY_ID`
     - `FIREBASE_PRIVATE_KEY`
     - `FIREBASE_CLIENT_EMAIL`
     - `FIREBASE_CLIENT_ID`
     - `FIREBASE_AUTH_URI`
     - `FIREBASE_TOKEN_URI`
     - `FIREBASE_AUTH_PROVIDER_X509_CERT_URL`
     - `FIREBASE_CLIENT_X509_CERT_URL`

   - `SG_API` is the API key provided by SendGrid.
   - `SG_EMAIL` is the email from which you want to send notification email.
   - `SG_DEL_ACC` is the unique dynamic template id for Account Deletion Email.
   - `SG_NEW_ACC` is the unique dynamic template id for Account Creation Email.
     :::tip
     Find Dynamic Template for Account Creation & Deletion [here](https://github.com/resuminator/resuminator-server/tree/main/templates).
     :::

   - _(Optional)_ `NODE_ENV` specifies the node environment. Default is `development`.
   - _(Optional)_ `PORT`, At which port you want to run application. Default is `8080`.
   - _(Optional)_ `POSTHOG_API_KEY` is required to send server side analytics to PostHog.
   - _(Optional)_ `POSTHOG_HOST` is required if you have added `POSTHOG_API_KEY`. You can put self-hosted or PostHog Cloud URL here. Default is `https://app.posthog.com`.
   - _(Optional)_ `RESUME_COUNT` specifies number of max allowed resumes on platform. Deafult is `3`.
   - _(Optional)_ `EDUCATION_COUNT` specifies number of max allowed education section on platform. Default is `10`.
   - _(Optional)_ `EXPERIENCE_COUNT` specifies number of max allowed experience section on platform. Default is `10`.
   - _(Optional)_ `PROJECT_COUNT` specifies number of max allowed project section on platform. Default is `10`.
   - _(Optional)_ `CERTIFICATION_COUNT` specifies number of max allowed certification section on platform. Default is `10`.
   - _(Optional)_ `PUBLICATION_COUNT`specifies number of max allowed publication section on platform. Default is `10`.
   - _(Optional)_ `SKILL_COUNT` specifies number of max allowed skill section on platform. Default is `10`.
   - _(Optional)_ `CUSTOM_SECTION_COUNT`pecifies number of max allowed custom section on platform. Default is `3`.
     :::tip
     You can find a basic `.env` file [here](https://github.com/resuminator/resuminator-server/blob/main/templates/.env.template)
     :::

1. Now, You can start the development server.

   ```bash
   npm run dev
   ```

   Server should be running on PORT specified in env file.

1. Hit `localhost:PORT/v0.2.0` in your browser and following output should appear.

   ```json
   {
     "message": "Welcome to Resuminator Backend",
     "version": "0.2.0",
     "license": "GPLv3"
   }
   ```
