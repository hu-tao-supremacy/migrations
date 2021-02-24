migrate:
	yarn knex --cwd . migrate:latest

seed-dev:
	export NODE_ENV=dev
	knex seed:run --specific=clean.ts
	knex seed:run --specific=user.ts
	knex seed:run --specific=organization.ts
	knex seed:run --specific=user_organization.ts
	knex seed:run --specific=event_location.ts
	knex seed:run --specific=tag.ts
	knex seed:run --specific=event.ts
	knex seed:run --specific=facility.ts
	knex seed:run --specific=event_duration.ts

seed-staging:
	export NODE_ENV=staging
	knex seed:run --specific=user.ts
	knex seed:run --specific=organization.ts
	knex seed:run --specific=user_organization.ts
	knex seed:run --specific=event_location.ts
	knex seed:run --specific=tag.ts
	knex seed:run --specific=event.ts
	knex seed:run --specific=facility.ts
	knex seed:run --specific=event_duration.ts
	knex seed:run --specific=user_event.ts
	knex seed:run --specific=event_feedback.ts
	knex seed:run --specific=user_event_feedback.ts
	knex seed:run --specific=event_registration.ts
	knex seed:run --specific=event_tag.ts
	knex seed:run --specific=facility_request.ts
	knex seed:run --specific=organization_permission.ts
	knex seed:run --specific=user_permission.ts
