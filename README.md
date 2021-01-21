# Micro-frontends Demo

A local environment for a demo micro-frontends implementation. The app is composed by 4 micro-frontends: the app shell, the landing page, the auth and the catalog. Each micro-frontend runs on a separate container. Catalog requires authentication.

## Requirements

Make sure to have installed Docker 17.06.0+ and Docker Compose on your system.

## Getting started

Start developing running this command.

```shell
docker-compose up -d
```

For each micro-frontend, it will create a container, install dependencies and run webpack dev server. The first time this would probably take some minutes: you better have a coffee in the meantime.

When all containers are up and running, the app is available at http://localhost:3000.

Stop containers running this command.

```shell
docker-compose down
```

## Containers

- **App shell** (port:3000): it is responsible for routing and loading micro-frontends
- **Landing** (port:3001): the landing page micro-frontend
- **Auth** (port:3002): the login micro-frontend
- **Catalog** (port:3003): the authenticated catalog micro-frontend

**Note: This infrastructure relies on public port assigned to each micro-frontend, thus it cannot be deployed correctly on a server.**

## Future development

- Make micro-frontends deployable: update the webpack configuration in order to change the public path for each micro-frontend depending on some enviroment variable.
- Make global build script
- Make a deploy script/procedure
- Transitions and loading
- Lifecycle hooks
