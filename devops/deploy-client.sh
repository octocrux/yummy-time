#!/usr/bin/env bash

PROJ=$(pwd)

mkdir tmp
cd tmp

TMPD=$(pwd)

if [[ $TMPD == $PROJ ]]; then
  echo 'Failed to change the directory'
  exit 1
fi

if [[ ! $CLIENT_REPO ]]; then
  echo 'Heroku client repository not set'
  exit 1
fi

rm -rf client/
mkdir client

CLIENT=$PROJ/client
TMPCLIENT=$TMPD/client

cp -rf $CLIENT/app $TMPCLIENT/app
cp -rf $CLIENT/config $TMPCLIENT/config
cp -rf $CLIENT/public $TMPCLIENT/public
cp -f $CLIENT/ember-cli-build.js $TMPCLIENT
cp -f $CLIENT/bower.json $TMPCLIENT
cp -f $CLIENT/package.json $TMPCLIENT

cd $TMPCLIENT

git init
git add --all
git commit -m 'Deploy Client'
git remote add client $CLIENT_REPO
git push client master --force

exit
