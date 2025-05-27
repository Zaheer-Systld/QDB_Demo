# QDB Demo.

This repository contains two applications:
- **backendApp** (Backend server)
- **dashBoard_app** (Frontend application)

---

## Clone the Repository

```bash
https://github.com/Zaheer-Systld/QDB_Demo
cd YourRepoName
```
---
# Setup and Run
**Backend (backendApp)**

1 Navigate to the backend directory:
```bash
cd backendApp
```
2 Install dependencies:
```bash
npm install
```
3 Ensure your .env file is present in the backendApp folder (already added in repo)

4 Start the backend server:

```bash
npm start
```
The backend server will run on port 5000.

---
# Frontend (dashBoard_app)

1 Navigate to the frontend  directory:
```bash
cd dashBoard_app
```
2 Install dependencies
```bash
npm install --force
```
3 Ensure your .env file is present in the frontend  folder (already added in repo)

4 Start the frontend application:

```bash
npm start 
```
The frontend will be accessible on port 4000 
http://localhost:4000
---

**Notes**

Make sure both backend and frontend servers are running simultaneously in separate terminal windows/tabs.

Environment variables are managed through the .env file located in the repo.

If you want to customize ports or other settings, update the respective config files or environment variables.
