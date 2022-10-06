---

sidebar-position: 3
---

# Setting Up

This is a guide for setting up Resuminator for local Development.
Our complete application (frontend + backend + website) is built using TypeScript.
You can have a look at the whole [tech stack](/docs/developer-guide/tech-stack) to understand the internal components.

## Pre-requisites

- [Node.js](https://nodejs.org/en/download/) version >= 14 or above (which can be checked by running `node -v`).
You can use nvm for managing multiple Node versions on a single machine installed.

   ```bash
   $ node -v
   v14.15.1
   ```

- [Firebase](https://firebase.google.com/) Account, We use firebase for authentication and storing media files.
So, It is required to have a firebase account ready.

## Frontend

The repository found at [resuminator/resuminator](https://github.com/resuminator/resuminator)
serves as the codebase for the primary application and also the website at <https://www.resuminator.in>.

### Setting up the repository

1. Fork the repository at - [resuminator/resuminator](https://github.com/resuminator/resuminator) to your GitHub account.

2. Then clone the forked repository, by typing the following line in your local terminal/powershell.
Remember to replace `<your-username>` with your actual GitHub username.

   ```bash
   git clone https://github.com/<your-username>/resuminator.git
   ```

3. Navigate to the cloned repository on your local system

   ```bash
   cd resuminator
   ```

4. Add remotes to the parent repository. This will help you fetch the code from the parent repo to avoid any merge
conflicts later.

   ```bash
   git remote add upstream https://github.com/resuminator/resuminator.git
   ```

   To verify, use the command `git remote -v` to check if you have two remotes - origin and upstream set up.

   ```bash
   origin  https://github.com/<your-username>/resuminator.git (fetch)     
   origin  https://github.com/<your-username>/resuminator.git (push)      
   upstream        https://github.com/resuminator/resuminator.git (fetch)
   upstream        https://github.com/resuminator/resuminator.git (push) 
   ```

5. Finally, fetch the upstream's latest code from the main branch.

   ```bash
   git fetch upstream main
   ```

### Configuring the project

Now that you have setup the repository correctly, the next thing we will focus on is how to configure
your frontend for it to be up and running and ready to receive requests from the backend server.

1. Install all the dependencies on your local system using the command given below.

   :::note
   It might take some time depending on your system's speed and internet connection.
   :::

   ```bash
   npm install
   ```

2. We now need to configure the local environment variables which are required for external services Resuminator uses
(like Firebase)

   For that in your root folder create a new file named `.env.local`
   and copy the configuration below to it. Replace the required values with your own account configurations.

:::note
The `PORT` in "http://localhost:PORT" is the port at which your backend service is running.

If you have a hosted server then enter the link of the hosted server instead of "http://localhost:PORT"
:::

   ```txt title=".env.local"
   NEXT_PUBLIC_API_BASE_URL="http://localhost:PORT"

   NEXT_PUBLIC_API_KEY='YOUR_FIREBASE_API_KEY'
   NEXT_PUBLIC_AUTH_DOMAIN='YOUR_FIREBASE_AUTH_DOMAIN'
   NEXT_PUBLIC_PROJECT_ID='YOUR_FIREBASE_PROJECT_ID'
   NEXT_PUBLIC_STORAGE_BUCKET='YOUR_FIREBASE_STORAGE_BUCKET_ADDRESS'
   NEXT_PUBLIC_MESSAGING_SENDER_ID='YOUR_FIREBASE_MESSAGING_SENDER_ID'
   NEXT_PUBLIC_FIREBASE_ID='YOUR_FIREBASE_APP_ID'

   NEXT_PUBLIC_APP_PROD=Resuminator's Hosted Instance Address (Optional)
   NEXT_PUBLIC_MIXPANEL=Mixpanel API Key (Optional) 
   NEXT_PUBLIC_PAPERCUPS=Papercups Account Key (Optional)
   NEXT_PUBLIC_PAPYRUS=Papyrus Server Instance Address (Optional)
   ```

:::info
`NEXT_PUBLIC_MIXPANEL`, `NEXT_PUBLIC_PAPERCUPS`, `NEXT_PUBLIC_PAPYRUS`, and `NEXT_PUBLIC_APP_PROD` are optional
configurations which are needed for a production level setup but can be ignored for the development setup.
:::

### Optional Services

- [Mixpanel](https://mixpanel.com) - For performance analytics and collecting other usage statistics.
You can setup a new Mixpanel account using the instructions here.
Then use your API key as value for `NEXT_PUBLIC_MIXPANEL` environment variable.

- [Papercups](https://papercups.io/) - For the in-app chat module. Create a new Papercups account
and use your account key as the value for `NEXT_PUBLIC_PAPERCUPS` to setup an in-app chat.

- [Papyrus](https://papyrus.resuminator.in/) - For PDF generation and printing the Resume.
This is only needed if you wish to download PDFs in a local setup.
Once you host your own Papyrus instance on AWS Lambda or Vercel's Serverless Functions, paste the link as the value for `NEXT_PUBLIC_PAPYRUS`

### Starting the dev instance

Finally once you have your `.env.local` configurations file in place, you can start the frontend using the following command.

```bash
npm run dev
```

This will by default start the server at `http://localhost:3000` where you can find Resuminator's landing page.

**Congratulations!** Your frontend setup is now complete 🎉

:::info
Next, you need to setup the backend server if you wish to contribute to the main app.

You may not need to setup the backend server if you only wish to contribute to the website and NOT the main application.
:::info

## Backend

The repository found at [resuminator/resuminator-server](https://github.com/resuminator/resuminator-server) serves as the
codebase for the API server which connects to a MongoDB instance to store and retrieve user data.

### Required Services

- **MongoDB** version = 4.4.9. You can either spin up a local/Docker instance or can use
[MongoDB Atlas](https://www.mongodb.com/) (Recommended).
We personally use MongoDB Atlas at Resuminator for all of our MongoDB needs.

### Optional Services

- [**PostHog**](https://posthog.com/) Account. We use posthog for server-side analytics. You can either use
[PostHog Cloud](https://posthog.com/) or set up your [own PostHog](https://github.com/PostHog/posthog)
as it is also Open Source.

- [**SendGrid**](https://sendgrid.com/) is used for sending email on signup and account deletion.

:::tip
For all cloud related resources, to have lower write latency select region closer to you.

_**eg**_. If you are in India

- For Firebase, Choose `asia-south1`.
- For MongoDB Atlas, Choose either `asia-south1` on **GCP** (_Recommended_) or `ap-south-1` on **AWS** or `centralindia`
on **Azure**.
- For self-hosted PostHog, you can use same recommendation as that of MongoDB Atlas.

:::

### Setting up the repository

1. Fork the repository at - [resuminator/resuminator-server](https://github.com/resuminator/resuminator-server)
to your GitHub account.

2. Then clone the forked repository, by typing the following line in your local terminal/powershell.
Remember to replace `<your-username>` with your actual GitHub username.

   ```bash
   git clone https://github.com/<your-username>/resuminator-server.git
   ```

3. Navigate to the cloned repository on your local system

   ```bash
   cd resuminator-server
   ```

4. Add remotes to the parent repository. This will help you fetch the code from the parent repo to avoid
any merge conflicts later.

   ```bash
   git remote add upstream https://github.com/resuminator/resuminator-server.git
   ```

   To verify, use the command `git remote -v` to check if you have two remotes - origin and upstream set up.

   ```bash
   origin  https://github.com/<your-username>/resuminator-server.git (fetch)     
   origin  https://github.com/<your-username>/resuminator-server.git (push)      
   upstream        https://github.com/resuminator/resuminator-server.git (fetch)
   upstream        https://github.com/resuminator/resuminator-server.git (push) 
   ```

5. Finally, fetch the upstream's latest code from the main branch.

   ```bash
   git fetch upstream main
   ```

### Configuration

Now that you have setup the backend repository correctly, the next thing we will focus on is how to configure
project to start sending requests to the frontend instance.

1. Install all the dependencies on your local system using the command given below.

   ```bash
   npm install
   ```

2. Create `.env` file in your root folder and start adding following environment variable in the file.

- `DB_URI` is the mongodb connection string. eg. `mongodb+srv://username:password@address/dbname`.

   ```txt title=".env"
   NODE_ENV='development'
   PORT=8080
   DB_URI=mongodb+srv://username:password@address/dbname
   ```

- Add the following configurations in your `.env` to connect your Firebase account.
These values can be found in your Service Account Credential.
If You don't have a Firebase Service Account,
Navigate to _Project Settings > Service accounts > Generate new private key_.

   ```txt title=".env"
   ...
   FIREBASE_TYPE=
   FIREBASE_PROJECT_ID=
   FIREBASE_PRIVATE_KEY_ID=
   FIREBASE_PRIVATE_KEY=
   FIREBASE_CLIENT_EMAIL=
   FIREBASE_CLIENT_ID=
   FIREBASE_AUTH_URI=
   FIREBASE_TOKEN_URI=
   FIREBASE_AUTH_PROVIDER_X509_CERT_URL=
   FIREBASE_CLIENT_X509_CERT_URL=
   ```

### Optional Configuration

- There are some optional configurations which you can specify to have even more control over your backend instance.
Add any (or all) of the required configurations in your `.env` file.

   ```txt title=".env"
   NODE_ENV=specifies the node environment. Default is `development`.
   PORT=At which port you want to run application. Default is `8080`.
   ```

- `POSTHOG_API_KEY` is required to send server side analytics to PostHog.
`POSTHOG_HOST` is required if you have added `POSTHOG_API_KEY`.
You can put self-hosted or PostHog Cloud URL here. Default is `https://app.posthog.com`.

   ```txt title=".env"
   ...
   POSTHOG_API_KEY=is required to send server side analytics to PostHog.
   POSTHOG_HOST=is required if you have added `POSTHOG_API_KEY`.
   ```

- Setup a Send Grid account and use add the following configurations to connect to Send Grid.

   ```txt title=".env"
   ...
   SG_API=API key provided by SendGrid
   SG_DEL_ACC=Email from which you want to send notification email.
   SG_EMAIL=Unique dynamic template id for Account Deletion Email.
   SG_NEW_ACC=Unique dynamic template id for Account Creation Email.
   ```

:::tip

Find Dynamic Template for Account Creation & Deletion [here](https://github.com/resuminator/resuminator-server/tree/main/templates).

:::

- You can also alter the limits imposed on the count of objects in the database using the following config values

   | Config Key             | Specifies                                               | Default Value |
   | ---------------------- | ------------------------------------------------------- | ------------- |
   | `RESUME_COUNT`         | number of max allowed resumes on platform.              | 3             |
   | `EDUCATION_COUNT`      | number of max allowed education section on platform.    | 10            |
   | `EXPERIENCE_COUNT`     | number of max allowed experience section on platform    | 10            |
   | `PROJECT_COUNT`        | number of max allowed project section on platform       | 10            |
   | `CERTIFICATION_COUNT`  | number of max allowed certification section on platform | 10            |
   | `PUBLICATION_COUNT`    | number of max allowed publication section on platform   | 10            |
   | `SKILL_COUNT`          | number of max allowed skill section on platform         | 10            |
   | `CUSTOM_SECTION_COUNT` | number of max allowed custom section on platform        | 3             |

:::tip
You can find a basic `.env` file [here](https://github.com/resuminator/resuminator-server/blob/main/templates/.env.template)
:::

### Starting the dev instance

Finally once you have your `.env` configurations file in place, you can start the backend using the following command.

```bash
npm run dev
```

Server should be running on `PORT` specified in env file (or `8080` by default)

To test, type `localhost:PORT/v0.2.0` in your browser and following output should appear.

```json
{
"message": "Welcome to Resuminator Backend",
"version": "0.2.0",
"license": "GPLv3"
}
```

**Congratulations!** Your backend is now setup and you are ready to create resumes on your local system
 (or contribute to Resuminator) 🎉

## Documentation

The repository found at [resuminator/docs](https://github.com/resuminator/docs) serves as the
codebase for documentation of Resuminator and its products. The current line is also written in the same codebase.

### Setting up the repository

1. Fork the repository at - [resuminator/docs](https://github.com/resuminator/docs)
to your GitHub account.

2. Then clone the forked repository, by typing the following line in your local terminal/powershell.
Remember to replace `<your-username>` with your actual GitHub username.

   ```bash
   git clone https://github.com/<your-username>/docs.git
   ```

3. Navigate to the cloned repository on your local system

   ```bash
   cd docs
   ```

4. Add remotes to the parent repository. This will help you fetch the code from the parent repo to avoid
any merge conflicts later.

   ```bash
   git remote add upstream https://github.com/resuminator/docs.git
   ```

   To verify, use the command `git remote -v` to check if you have two remotes - origin and upstream set up.

   ```bash
   origin  https://github.com/<your-username>/docs.git (fetch)     
   origin  https://github.com/<your-username>/docs.git (push)      
   upstream        https://github.com/resuminator/docs.git (fetch)
   upstream        https://github.com/resuminator/docs.git (push) 
   ```

5. Finally, fetch the upstream's latest code from the main branch.

   ```bash
   git fetch upstream main
   ```

### Starting the dev instance

Once your repo is ready and configured, install all the required dependencies by running the following command
in your terminal

```bash
npm install
```

And when the install finishes, run the local instance by using

```bash
npm start
```

This will start a local instance to serve the docs in your browser. Here you can monitor your changes live when
you make them.
