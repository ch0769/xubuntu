#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# Set CNAME for "gh-pages" branch
echo 'ch0769.tk' > CNAME  # 改成你要绑定的域名

msg='deploy'
githubUrl=git@github.com:ch0769/xubunt.git   # 按你的代码仓库信息进行修改

git init
git add -A
git commit -m “tuisong”s
git remote add origin git@github.com:ch0769/xubuntu.git
git push -f -u origin master
cd - # 退回开始所在目录
rm -rf docs/.vuepress/dist
