start-development:
	docker compose -f ./docker-compose.yml up

stop-development:
	docker compose -f ./docker-compose.yml down

start-local:
	npm run dev -- -p 3002
