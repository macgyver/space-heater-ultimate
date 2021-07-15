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

# build pages
rm -r docs/*
(cd 2019; npm run build)
(cd 2021; svelte-kit build; mv build ../docs/2021)

# navigate into the build output directory
cd docs

# if you are deploying to a custom domain
echo 'spaceheaterultimate.com' > CNAME

# git init << not sure what this is for
git add -A
git commit -m "deploy $1"

git tag $1

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

git push; git push --tags

cd -
