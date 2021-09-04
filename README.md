# Refriends - an Anonymous Post and Reply App

## About

Refriends is an app that allows you to create posts and share them with other users, while receiving anonymous replies! No accounts are needed and no personal data is required - just fun!

## How To Run

### Step 0) Pre-Notice

Depending on your operating system and multiple other factors, this app may be difficult to setup yourself. This app was not created to be fluctuating with multiple hosts, only myself. I apologize if the app setup does not work for yourself.

### Step 1) Download files

At the top of this repository, click the "Code" dropdown arrow, and select "Download Zip".
Once downloaded, extract all the files to a folder of your choosing.

## Step 2) Downloading Required Modules

For this app, NPM is used as the package manager. Inside of the `./src/` folder, open a terminal and type `npm install` to install all required modules. This may take a few minutes depending on internet speed.

## Step 3) Port Forwarding (Optional)

***If you wish to only use this for yourself, you may skip this step.***

This app is designed to be used across the internet, so port forwarding will allow other hosts or users to connect to your computer.

You should only port forward if you understand the security risks that come with it. The following is a list of ***DEFAULT*** ports you will need to open:

- MongoDB Port: 27017
- Node.JS Port: 3000
- REACT Port: 5000

## Step 4) Setting Local IP

This app will run off of your local IPv4 address, so you need to modify the code as such. Inside of `./src/components/PostBox` and `./src/components/Posts`, you will need to exchange all instances of `192.168.0.174` for your local IPv4 address.

## Step 5) Starting Servers

Follow the steps to run each server:

- REACT: In the `./src/` folder, open a terminal and type `npm start`.
- Node.JS: In the `./src/` folder, open a terminal and type `node ./src/backend/server.js`.
- MongoDB: Follow online instructions to install MongoDB for port 27017 for your system.

## Step 6) Connect and Enjoy!

After all servers are running properly, go to any browser and go to the URL `http://YOUR_LOCAL_IPV4_ADDRESS_HERE:5000`.
