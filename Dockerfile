# Use nginx to serve the static files
FROM nginx:alpine

# Copy the built static files to nginx html directory
COPY dist/ /usr/share/nginx/html/

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]