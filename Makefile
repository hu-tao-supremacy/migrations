migrate:
	yarn knex --cwd . migrate:latest

seed-dev:
	export NODE_ENV=dev
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

seed-staging:
	export NODE_ENV=staging
	yarn knex seed:run --specific=user.ts
	yarn knex seed:run --specific=organization.ts
	yarn knex seed:run --specific=user_organization.ts
	yarn knex seed:run --specific=event_location.ts
	yarn knex seed:run --specific=tag.ts
	yarn knex seed:run --specific=event.ts
	yarn knex seed:run --specific=facility.ts
	yarn knex seed:run --specific=event_duration.ts
	yarn knex seed:run --specific=user_event.ts
	yarn knex seed:run --specific=event_feedback.ts
	yarn knex seed:run --specific=user_event_feedback.ts
	yarn knex seed:run --specific=event_registration.ts
	yarn knex seed:run --specific=event_tag.ts
	yarn knex seed:run --specific=facility_request.ts
	yarn knex seed:run --specific=organization_permission.ts
	yarn knex seed:run --specific=user_permission.ts
