# Use the official Bun image as a base
# See https://hub.docker.com/r/oven/bun
# Use `debian` or `distroless` for production environments
# See https://bun.sh/docs/installation#docker
FROM oven/bun:1 as base
WORKDIR /app

# Install dependencies only when needed
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Rebuild the source code only when needed
FROM base AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN bun run build

# Production image, copy all the files and run next
FROM base AS runner
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=build /app/build ./build
COPY package.json .

# Set the command to start the app
CMD ["bun", "run", "start"]

# Expose the port the app runs on
EXPOSE 3000