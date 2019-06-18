git fetch &&
git checkout master &&
git rebase origin/master &&
npm run build &&
git add -A
git commit &&
git push
