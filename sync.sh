#!/usr/bin/env sh

git add "*" & git commit -m "$1" & git push origin main & git push cpanel main & git push