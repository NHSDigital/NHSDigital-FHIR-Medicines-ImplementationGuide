install:
	cd validation && npm install

test:
	cd validation && npm test


run-validator:
	make -C validation-service-fhir-r4 run

## Install
install-validator:
	make -C validation-service-fhir-r4 install

build-validator:
	make -C validation-service-fhir-r4 build