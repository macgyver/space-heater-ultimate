#!/usr/bin/env sh

# abort on errors
set -e

# todo: check it does not have -- in front
if [ -z "$1" ]; then
    echo 'ERROR: No season supplied - Try specifiying a year "./deploy.sh 2021" or all "./deploy.sh all"'
    exit 1
fi

echo "doing git stuff"
git fetch
git checkout master
git rebase origin/master

# build pages
git clean -fdX "docs/$1"
if [ "$1" = "2019" ]; then
	cd 2019
	npm run build
	cd -
fi
if [ "$1" = "2021" ]; then
	cd 2021
	npx svelte-kit build
	cd -
fi

# navigate into the build output directory
cd docs
# nojekyll file so github doesn't ignore the svelte _app directory??!!
touch .nojekyll
# deploying to a custom domain (jz registered through dreamhost)
echo 'spaceheaterultimate.com' > CNAME

if [[ $* == *"--dryrun"* ]]; then
	echo "not committing during dryrun"
else
	isodate=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
	git add -A
	git commit -m "deploy $isodate"
	git tag $isodate

	# if you are deploying to https://<USERNAME>.github.io
	# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

	# if you are deploying to https://<USERNAME>.github.io/<REPO>
	# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

	git push; git push --tags
fi

cd -
