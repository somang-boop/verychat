FROM alpine:latest
RUN apk add --no-cache python3
WORKDIR /app
COPY . .
EXPOSE 8080
CMD ["python3", "-m", "http.server", "8080"]
