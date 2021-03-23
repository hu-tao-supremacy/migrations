setup:
	yarn install

seed: setup
	yarn seed:run

all: migrate seed

sync: setup
	yarn typeorm schema:sync
