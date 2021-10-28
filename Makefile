install:
	cd validation && npm install

test:
	cd validation && npm test


run-validator:
	make -C validator run

## Install
install-validator:
	make -C validator install

build-validator:
	make -C validator build