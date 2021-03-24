setup:
	yarn install

seed: setup
	yarn seed:run

all: drop migrate seed

sync: setup
	yarn typeorm schema:sync

drop: setup
	yarn typeorm schema:drop
