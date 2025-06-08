# Run CentaurOps


## Docker compose
To run CentaurOps with Docker compose, you need to have Docker and Docker compose installed on your machine. You can install Docker and Docker compose by following the instructions on the [official Docker documentation](https://docs.docker.com/get-docker/).

The docker-compose file uses `latest` tag; it's recommended to pull the latest version of the images before running the docker-compose file.

```bash
docker compose pull
```

To start the CentaurOps services, run the following command:

```bash
docker compose up
```

After running the command, you can access the CentaurOps services at the following url: http://localhost:80.

Edit the `.env` file to change the port or other configurations.