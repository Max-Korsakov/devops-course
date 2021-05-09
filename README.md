# DevOps course application

Install Docker for you operation system

## Run server

Navigate to server folder `cd server` then run `npm run start`. Server will run on `http://localhost:8080`.

## Run app

Run `cd ngQuote` then `npm run build`. 
Navigate to root folder and run  `docker build -t devops .` 
Run  `docker run --name devops -p 80:80 -d devops` to launch application

Navigate to `http://localhost`.


- Implement Nginx configuration to serve the Quote SPA - done
- Remove all code related to serving static assets and SPA from Node server - done
- Implement Nginx configuration which will proxy requests from Quote app to REST API - done
- Add gzip compression  - done
- Add https - that's optional for 5 pounts mark (..In addition to previous work gzip compression and/or https connection..). Implemented gzip for 5 mark.