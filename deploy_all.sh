#!/bin/bash
HOST="iguane.o2switch.net"
USER="duel1944"
PASS="dNk3-mTfk-Ws3?"
REMOTE_DIR="public_html"
echo "Starting deployment..."
for file in *; do
    if [ -f "$file" ] && [ "$file" != "deploy_all.sh" ]; then
        echo "Uploading $file..."
        curl -s -u "$USER:$PASS" -T "$file" "ftp://$HOST/$REMOTE_DIR/$file"
    fi
done
echo "Uploading images..."
for img in images/*; do
    if [ -f "$img" ]; then
        filename=$(basename "$img")
        echo "Uploading images/$filename..."
        curl -s -u "$USER:$PASS" -T "$img" "ftp://$HOST/$REMOTE_DIR/images/$filename"
    fi
done
echo "Deployment finished!"
