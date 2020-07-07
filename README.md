# Raffle Grpc Services

## Requirement
* ```node -v ``` **13.12.0 or latter**
* ```yarn -v ``` **1.22.4 or latter**

## Deployement
* ``` yarn install ```
* ``` cp .env .env.example ```
* ``` yarn knex migrate:up ``` **Running migrations to create tables**
* ``` yarn knex seed:run ``` **Running seeders to create test data**
* ```yarn prod``` **Output gRPC services running**
