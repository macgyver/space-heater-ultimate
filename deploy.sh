#!/usr/bin/env sh

# abort on errors
set -e

firsttwo="${1:0:2}"
if [ -z "$1" ] || [[ "$firsttwo" = "--" ]]; then
    echo 'ERROR: No season supplied - try specifiying a year, e.g. "./deploy.sh 2021"'
    exit 1
fi

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
	tagname=$(date -u +"%Y%m%dT%H%M%SZ")
	git add -A
	git commit -m "deploy $tagname"
	git tag "v$tagname"

	# if you are deploying to https://<USERNAME>.github.io
	# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

	# if you are deploying to https://<USERNAME>.github.io/<REPO>
	# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

	git push; git push --tags
fi

cd -
