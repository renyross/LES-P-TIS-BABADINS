#!/bin/bash
HOST="iguane.o2switch.net"
USER="duel1944"
PASS="dNk3-mTfk-Ws3?"
REMOTE_DIR="public_html"

echo "Starting targeted deployment (HTML + .htaccess)..."

# Upload .htaccess
    # Upload style.css
    if [ -f "style.css" ]; then
        echo "Uploading style.css..."
        curl -s -u "$USER:$PASS" -T "style.css" "ftp://$HOST/$REMOTE_DIR/style.css"
    fi
    if [ -f "hero.css" ]; then
        echo "Uploading hero.css..."
        curl -s -u "$USER:$PASS" -T "hero.css" "ftp://$HOST/$REMOTE_DIR/hero.css"
    fi
    if [ -f "main.js" ]; then
        echo "Uploading main.js..."
        curl -s -u "$USER:$PASS" -T "main.js" "ftp://$HOST/$REMOTE_DIR/main.js"
    fi
    echo "Uploading .htaccess..."
    curl -s -u "$USER:$PASS" -T ".htaccess" "ftp://$HOST/$REMOTE_DIR/.htaccess"

    # Upload Images
    echo "Uploading images..."
    for img in images/*; do
        if [ -f "$img" ]; then
            img_filename=$(basename "$img")
            echo "Uploading $img_filename..."
            curl -s -u "$USER:$PASS" -T "$img" "ftp://$HOST/$REMOTE_DIR/images/$img_filename"
        fi
    done


# Upload HTML files
for file in *.html; do
    if [ -f "$file" ]; then
        echo "Uploading $file..."
        curl -s -u "$USER:$PASS" -T "$file" "ftp://$HOST/$REMOTE_DIR/$file"
    fi
done

echo "Deployment of updates finished!"
