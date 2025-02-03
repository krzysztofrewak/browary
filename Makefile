DOCKER_COMPOSE_FILE = docker-compose.yml
CURRENT_USER_ID = $(shell id --user)
CURRENT_USER_GROUP_ID = $(shell id --group)

run:
	@docker compose --file ${DOCKER_COMPOSE_FILE} up --detach

stop:
	@docker compose --file ${DOCKER_COMPOSE_FILE} stop

restart: stop run

shell:
	@docker compose --file ${DOCKER_COMPOSE_FILE} exec --user "${CURRENT_USER_ID}:${CURRENT_USER_GROUP_ID}" php ash

shell-node:
	@docker compose --file ${DOCKER_COMPOSE_FILE} exec --user "${CURRENT_USER_ID}:${CURRENT_USER_GROUP_ID}" node ash

dev:
	@docker compose --file ${DOCKER_COMPOSE_FILE} exec --user "${CURRENT_USER_ID}:${CURRENT_USER_GROUP_ID}" node npm run serve

build:
	@docker compose --file ${DOCKER_COMPOSE_FILE} exec --user "${CURRENT_USER_ID}:${CURRENT_USER_GROUP_ID}" node npm run build

import:
	@docker compose --file ${DOCKER_COMPOSE_FILE} exec --user "${CURRENT_USER_ID}:${CURRENT_USER_GROUP_ID}" php composer build

.PHONY: run stop restart shell dev build import