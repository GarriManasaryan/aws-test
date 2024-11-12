#!/bin/sh

# Start nginx in the background
nginx -g "daemon off;" &

# Start the backend Java application
java -jar /app/backend/aws.jar
