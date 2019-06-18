#!/usr/bin/env sh

# abort on errors
set -e

if [ -z "$1" ]; then
	echo "ERROR: No tag name supplied"
	exit 1
fi

git fetch
git checkout master
git rebase origin/master

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'spaceheaterultimate.com' > CNAME << instead, I just added a CNAME file to the public folder..

# git init << not sure what this is for
git add -A
git commit -m "deploy $1"

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

git push

cd -
