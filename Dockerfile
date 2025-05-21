# Use nginx base image
FROM nginx:alpine

# Copy compiled UI5 app (dist folder) to nginx html folder
COPY dist/ /usr/share/nginx/html/

# Expose default nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
