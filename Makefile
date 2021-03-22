setup:
	yarn install

migrate: setup
	yarn knex --cwd . migrate:latest

seed: setup
	yarn knex seed:run --specific=clean.ts
	yarn knex seed:run --specific=user.ts
	yarn knex seed:run --specific=organization.ts
	yarn knex seed:run --specific=user_organization.ts
	yarn knex seed:run --specific=event_location.ts
	yarn knex seed:run --specific=tag.ts
	yarn knex seed:run --specific=event.ts
	yarn knex seed:run --specific=facility.ts
	yarn knex seed:run --specific=event_duration.ts
	yarn knex seed:run --specific=user_event.ts
	yarn knex seed:run --specific=organization_permission.ts
