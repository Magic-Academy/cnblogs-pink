#!/usr/bin/env sh
###
 # @Descripttion: 
 # @version: 
 # @Author: 松岛川树
 # @Date: 2021-10-20 00:38:22
 # @LastEditors: 松岛川树
 # @LastEditTime: 2021-10-22 21:44:16
 # @FilePath: \cnblogs-pink\deploy.sh
### 

# abort on errors
set -e

# build
npm run b

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io  填写你刚刚创建的仓库地址
git push -f git@github.com:songdaochuanshu/cnblogs-pink.git master:pages

cd -
