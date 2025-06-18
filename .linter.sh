#!/bin/bash
cd /home/kavia/workspace/code-generation/flirtfusion-59767-8e3a5bc5/flirtfusion
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

