(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{447:function(a,s,t){"use strict";t.r(s);var e=t(14),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"ubuntu安装hugo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu安装hugo"}},[a._v("#")]),a._v(" ubuntu安装hugo")]),a._v(" "),t("h3",{attrs:{id:"安装git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[a._v("#")]),a._v(" 安装git")]),a._v(" "),t("p",[a._v("官网 https://git-scm.com/download/linux")]),a._v(" "),t("p",[a._v("sudo apt-get install git")]),a._v(" "),t("h3",{attrs:{id:"安装go"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装go"}},[a._v("#")]),a._v(" 安装go")]),a._v(" "),t("p",[a._v("https://golang.org/dl/     （有可能被墙）")]),a._v(" "),t("p",[a._v("下载go1.15.8.linux-amd64.tar.gz")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo tar -C /usr/local -xzf go1.15.8.linux-amd64.tar.gz\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("export PATH=$PATH:/usr/local/go/bin\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("查看版本")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("go version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"下载hugo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载hugo"}},[a._v("#")]),a._v(" 下载hugo")]),a._v(" "),t("p",[a._v("https://github.com/gohugoio/hugo/releases")]),a._v(" "),t("p",[a._v("下载 hugo_extended_0.80.0_Linux-64bit.deb")]),a._v(" "),t("p",[a._v("终端输入")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo dpkg -i hugo_extended_0.80.0_Linux-64bit.deb\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("查看版本")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("hugo version\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("创建blog")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("hugo new site blog\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"安装主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装主题"}},[a._v("#")]),a._v(" 安装主题")]),a._v(" "),t("p",[a._v("去官网下载主题 https://themes.gohugo.io")]),a._v(" "),t("p",[a._v("我下载的是even https://themes.gohugo.io/hugo-theme-even")]),a._v(" "),t("p",[a._v("再推荐一个主题 https://github.com/uPagge/uBlogger")]),a._v(" "),t("p",[a._v("cd /blog")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git clone https://github.com/olOwOlo/hugo-theme-even themes/even\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在exampleSite目录找到config.toml和content 复制到D:\\blog目录下")]),a._v(" "),t("p",[a._v("在blog根目录下，终端输入下面代码")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('hugo --theme=even --baseUrl="http://waimao365.github.io/" --buildDrafts\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("#even改成你的主题")]),a._v(" "),t("h3",{attrs:{id:"本地预览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本地预览"}},[a._v("#")]),a._v(" 本地预览")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /blog\nhugo\nhugo server\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("http://localhost:1313")]),a._v(" "),t("h3",{attrs:{id:"建立本地和github仓库的连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立本地和github仓库的连接"}},[a._v("#")]),a._v(" 建立本地和github仓库的连接")]),a._v(" "),t("p",[a._v("输入github的帐户名和邮箱")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('git config --global user.name "waimao365"\ngit config --global user.email "88888@qq.com"\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("查看设置的用户名和密码")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git config --list\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("生成 SSH key 与 github 联系")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ssh-keygen -t rsa -C “888888@qq.com”\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("一路回车  ubuntu设置显示隐藏文件，在用户目录找到.ssh")]),a._v(" "),t("p",[a._v("打开id_rsa.pub，复制里面的内容。 然后登录github，如果没有就注册一个账号，登录后右上角 头像 -> Settings —> SSH nd GPG keys —> New SSH key。把公钥(id_rsa.pub)粘贴到 key 中，填好 title 并点击 Add SSH key")]),a._v(" "),t("p",[a._v("关联完之后可以在终端输入")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ssh git@github.com\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:""}},[t("a",{staticClass:"header-anchor",attrs:{href:"#"}},[a._v("#")])]),a._v(" "),t("h3",{attrs:{id:"上传到github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传到github"}},[a._v("#")]),a._v(" 上传到github")]),a._v(" "),t("p",[a._v("cd到 /public\n依次输入")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git init\ngit add .\ngit commit -m “yyyy/mm/dd-hh:mm”\ngit remote add origin git@github.com:waimao365/lubutu18.git\ngit push -u origin master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"自动部署脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动部署脚本"}},[a._v("#")]),a._v(" 自动部署脚本")]),a._v(" "),t("p",[a._v("https://www.dazhuanlan.com/2019/10/14/5da3e834e0c1d/")]),a._v(" "),t("p",[a._v("https://github.com/coderzh/coderzh-hugo-blog/blob/master/deploy.py")]),a._v(" "),t("h2",{attrs:{id:"常见错误处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见错误处理"}},[a._v("#")]),a._v(" 常见错误处理")]),a._v(" "),t("h3",{attrs:{id:"fatal-远程-origin-已经存在"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fatal-远程-origin-已经存在"}},[a._v("#")]),a._v(" fatal: 远程 origin 已经存在")]),a._v(" "),t("p",[a._v("此时只需要将远程配置删除，重新添加即可；")]),a._v(" "),t("p",[a._v("git remote rm origin")]),a._v(" "),t("h3",{attrs:{id:"rejected-master-master-non-fast-forward"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rejected-master-master-non-fast-forward"}},[a._v("#")]),a._v(" ! [rejected]        master -> master (non-fast-forward)")]),a._v(" "),t("p",[a._v("本地生成ReadMe文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git pull --rebase origin master \ngit push origin master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("如果不行，可以强制上传覆盖远程文件（慎用）")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("git push -f origin master\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),t("h3",{attrs:{id:"安装typora写文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装typora写文章"}},[a._v("#")]),a._v(" 安装typora写文章")]),a._v(" "),t("p",[a._v("https://www.typora.io/#linux")]),a._v(" "),t("h3",{attrs:{id:"安装visual-studio-code写文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装visual-studio-code写文章"}},[a._v("#")]),a._v(" 安装Visual Studio Code写文章")]),a._v(" "),t("p",[a._v("https://code.visualstudio.com/")]),a._v(" "),t("p",[a._v("https://code.visualstudio.com/")]),a._v(" "),t("p",[a._v("Visual Studio Code设置中文")]),a._v(" "),t("p",[a._v("打开进入软件，Ctrl + Shift + P，切入到命令行模式。输入“Configure Language”")]),a._v(" "),t("h3",{attrs:{id:"安装-notepad-编辑主题文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-notepad-编辑主题文件"}},[a._v("#")]),a._v(" 安装 Notepad++ 编辑主题文件")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo add-apt-repository ppa:notepadqq-team/notepadqq\nsudo apt-get update\nsudo apt-get install notepadqq\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("卸载方法:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo apt-get remove notepadqq\nsudo add-apt-repository --removeppa:notepadqq-team/notepadqq\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);