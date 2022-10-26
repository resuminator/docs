# Resuminator Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/5ca085a8-ba97-40e7-b29d-2b649e51e029/deploy-status)](https://app.netlify.com/sites/r8-docs/deploys)
[![CI](https://github.com/resuminator/docs/actions/workflows/main.yml/badge.svg)](https://github.com/resuminator/docs/actions/workflows/main.yml)

This repository contains Resuminator Documentation hosted [here](https://docs.resuminator.in/). Documentation uses
[Docusaurus](https://docusaurus.io/) at its core. For basic functionality and work around, Do check out Docusaurus.

## Setting Up Local Environment

### Pre-requisities

- Node.js version >= 14 or above (which can be checked by running node -v).
  You can use nvm for managing multiple Node versions on a single machine installed.

  ```bash
      $ node -v
      v14.15.1
  ```

### Preparing for Contribution

- Fork this your GitHub account.
- Then clone the forked repository, by typing the following line in your local terminal/powershell.
  Remember to replace `<your-username>` with your actual GitHub username.

  ```bash
  git clone https://github.com/<your-username>/docs.git
  ```

- Navigate to the cloned repository on your local system

  ```bash
  cd docs
  ```

- Add remotes to the parent repository. This will help you fetch the code from the parent repo to
  avoid any merge conflicts later.

  ```bash
  git remote add upstream https://github.com/resuminator/docs.git
  ```

- Finally, fetch the upstream's latest code from the main branch.

  ```bash
  git fetch upstream main
  ```

### Local Configuration

Now that you have setup the docs repository correctly, the next thing we will focus on is how to configure project
to work on your machine and render that beautiful docs.

- Install all the dependencies on your local system using the command given below.

  ```bash
  npm install
  ```

- Run the setup.

  ```bash
  npm start
  ```

  It should be running at Port 3000.
  
### Creating a pull request  

- To create a pull request, check [this](https://opensource.com/article/19/7/create-pull-request-github) out

### Steps to check out the Markdownlinting issues

- To install as a npm package use `npm install -g markdownlint-cli`
- To run use `markdownlint '**/*.md'`

## Contributing

All the current issues are being tracked in an [Umbrella Issue](https://github.com/resuminator/resuminator/issues/99).
Read Instructions there
