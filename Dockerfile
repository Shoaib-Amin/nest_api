# Use an official lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@10.3.0 --activate

# Copy package and lock files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the app
RUN pnpm run build

# Expose the port NestJS uses
EXPOSE 3000

# Start the app
CMD ["node", "dist/main"]
