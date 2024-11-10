# Use Node.js base image in container
FROM node:18

# Set working directory for container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies to container
RUN npm install

# Copy source files to container
COPY ./src ./src

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
