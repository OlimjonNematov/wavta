ROOT_DIR=/home/generic/team_1_virtual_TA/wavta
MOUNTED_APP_DIR=/var/www/ui

# switching to the root directory
cd $ROOT_DIR

# stop nginx server
echo "stopping the current nginx server"
sudo systemctl stop nginx

# install npm dependencies
echo "installing npm dependencies"
npm install

# build webpack
echo "building webpack"
npm run build

# remove old app
echo "removing old app"
sudo rm -rf $MOUNTED_APP_DIR/*

# add in the new app
echo "adding new app"
sudo cp -r $ROOT_DIR/build/* $MOUNTED_APP_DIR

# start nginx web server
echo "restarting the server"
sudo systemctl start nginx