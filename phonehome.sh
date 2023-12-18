#!/bin/sh
SATELLITE="https://raw.githubusercontent.com/KCGD/phonehome_satellite/main/link"
INTERVAL=120

#pull endpoint from satellite
ENDPOINT=$(curl "$SATELLITE")

#start
watch -n $INTERVAL curl "$ENDPOINT"