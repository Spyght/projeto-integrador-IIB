FROM node:18-alpine AS base

# Instalar dependências apenas quando necessário
FROM base AS deps
# Verifique em https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine para entender por que libc6-compat pode ser necessário.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Instalar dependências com base no gerenciador de pacotes preferido
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
	if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
	elif [ -f package-lock.json ]; then npm ci; \
	elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
	else echo "Lockfile não encontrado." && exit 1; \
	fi

# O Next.js coleta dados de telemetria completamente anônimos sobre o uso geral.
# Saiba mais aqui: https://nextjs.org/telemetry
# Descomente a linha a seguir caso queira desabilitar a telemetria durante a compilação.
ENV NEXT_TELEMETRY_DISABLED 1

FROM base AS runner
WORKDIR /app

# Descomente a linha a seguir caso queira desabilitar a telemetria durante a execução.
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

ENV PORT 3000

CMD ["yarn", "dev"]