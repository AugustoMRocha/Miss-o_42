#!/bin/bash

if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    for i in "$1" "$2" "$3"; do
        [ -n "$i" ] && echo "$i"
    done
fi
