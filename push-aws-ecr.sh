#!/bin/bash
docker buildx build --platform linux/amd64 -t sclp/frontend -f Dockerfile .
aws ecr get-login-password --region eu-west-2 --profile scallop | docker login --username AWS --password-stdin 880887096417.dkr.ecr.eu-west-2.amazonaws.com
docker tag sclp/frontend:latest 880887096417.dkr.ecr.eu-west-2.amazonaws.com/scallop/frontend/scallopx.com:latest
docker push 880887096417.dkr.ecr.eu-west-2.amazonaws.com/scallop/frontend/scallopx.com:latest
