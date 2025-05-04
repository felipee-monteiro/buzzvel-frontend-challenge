FROM node:22.15.0

ENV NODE_ENV=production
ENV NPM_CONFIG_LOGLEVEL=info

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .
COPY --chown=node:node src src
COPY --chown=node:node index.html .
COPY --chown=node:node public public
COPY --chown=node:node vite.config.mjs .    

RUN apt-get update -q -y \
    && apt-get upgrade -y \
    && chown node:node .  

USER node

RUN npx is-my-node-vulnerable \
    && npm ic \
    && npm run build 

EXPOSE 4173

CMD [ "npm", "run", "preview", "--", "--host"]
