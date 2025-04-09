FROM ghcr.io/codesandbox/devcontainers/universal:latest

ADD . .
RUN chmod +x ./setup.sh

RUN apt-get update && apt-get install -y curl wget jq libsdl2-dev libsdl2-image-dev libsdl2-mixer-dev libsdl2-ttf-dev
RUN apt-get install -y libnss3 libnspr4 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxkbcommon0 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2
RUN bash ./setup.sh
