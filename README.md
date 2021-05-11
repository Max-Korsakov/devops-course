# DevOps course application

Install Docker for you operation system

## Run server

Navigate to server folder `cd server` then run `npm run start`. Server will run on `http://localhost:8080`.

## Run app

Run `cd ngQuote` then `npm run build`. 
Navigate to root folder and run  `docker build -t devops .` 
Run  `docker run --name devops -p 80:80 -p 443:443 -d devops` to launch application

Navigate to `https://localhost`.


- Implement Nginx configuration to serve the Quote SPA - done
- Remove all code related to serving static assets and SPA from Node server - done
- Implement Nginx configuration which will proxy requests from Quote app to REST API - done
- Add gzip compression  - done
- Add https - done