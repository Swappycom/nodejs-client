#!/usr/bin/env bash
rm -r swagger.json docs src test
wget --no-check-certificate https://api.swappy.com/swagger.json && \
java -jar swagger-codegen-cli.jar generate -l javascript -i ./swagger.json --instantiation-types array=array  -c ./codegen-config.json -o ./