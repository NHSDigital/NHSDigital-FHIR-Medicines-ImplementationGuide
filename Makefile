install:
	cd validation && npm install

test:
	cd validation && npm test


run-validator:
	cd validation-service-fhir-r4  && nohup mvn spring-boot:run &

## Install
install-validator:
	cd validation-service-fhir-r4  && make install

build-validator:
	cd validation-service-fhir-r4  && make build

build-latest-validator:
	cd validation-service-fhir-r4  && ls
	cd validation-service-fhir-r4  && make build-latest

run-validator:
	make -C validation-service-fhir-r4 run