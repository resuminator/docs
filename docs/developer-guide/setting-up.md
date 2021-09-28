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

- (_Optional_) PostHog Account. We use posthog for server-side analytics. You can either use [PostHog Cloud](https://posthog.com/) or set up your [own PostHog](https://github.com/PostHog/posthog) as it is also Open Source.

:::tip
For all cloud related resources, to have lower write latency select region closer to you.

_**eg**_. If you are in India

- For Firebase, Choose `asia-south1`.
- For MongoDB Atlas, Choose either `asia-south1` on **GCP**(_Recommended_) or `ap-south-1` on **AWS** or `centralindia` on **Azure**.
- For self-hosted PostHog, you can use same recommendation as that of MongoDB Atlas.

:::
