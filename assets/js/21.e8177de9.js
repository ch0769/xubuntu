(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{439:function(r,t,a){"use strict";a.r(t);var e=a(14),n=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"安装armbian-5-77"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装armbian-5-77"}},[r._v("#")]),r._v(" 安装Armbian-5.77")]),r._v(" "),a("p",[r._v("https://www.right.com.cn/forum/thread-510423-1-1.html")]),r._v(" "),a("h2",{attrs:{id:"下载armbian-5-77写入u盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载armbian-5-77写入u盘"}},[r._v("#")]),r._v(" 下载Armbian-5.77写入U盘")]),r._v(" "),a("h2",{attrs:{id:"替换低负载的dtb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换低负载的dtb"}},[r._v("#")]),r._v(" 替换低负载的dtb")]),r._v(" "),a("p",[r._v("meson-gxl-s905d-phicomm-n1-xiangsm.dtb")]),r._v(" "),a("h2",{attrs:{id:"开启bbr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启bbr"}},[r._v("#")]),r._v(" 开启bbr")]),r._v(" "),a("p",[r._v("在/etc/sysctl.conf末尾添加下面两行:"),a("br"),r._v("\nnet.core.default_qdisc=fq\nnet.ipv4.tcp_congestion_control=bbr"),a("br"),r._v("\n然后执行"),a("br"),r._v("\nsudo sysctl -p")]),r._v(" "),a("h2",{attrs:{id:"写入emmc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入emmc"}},[r._v("#")]),r._v(" 写入emmc")]),r._v(" "),a("p",[r._v("./install.sh")]),r._v(" "),a("h2",{attrs:{id:"更换国内源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更换国内源"}},[r._v("#")]),r._v(" 更换国内源")]),r._v(" "),a("p",[r._v("如果有外国IP就不用更换源了"),a("br"),r._v("\nsudo nano /etc/apt/sources.list")]),r._v(" "),a("p",[r._v("修改源为国内源\ndeb http://mirrors.tuna.tsinghua.edu.cndebian stretch main contrib non-free"),a("br"),r._v("\ndeb http://mirrors.tuna.tsinghua.edu.cn/debian stretch-updates main contrib non-free"),a("br"),r._v("\ndeb http://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free"),a("br"),r._v("\ndeb http://mirrors.tuna.tsinghua.edu.cn/debian stretch-backports main")]),r._v(" "),a("p",[r._v("保存后，更新源"),a("br"),r._v("\n执行 apt-get update 命令即可更新源"),a("br"),r._v("\n执行 apt-get upgrade 更新软件")]),r._v(" "),a("h2",{attrs:{id:"安装docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[r._v("#")]),r._v(" 安装docker")]),r._v(" "),a("p",[r._v("输入 armbian-config"),a("br"),r._v("\n选择Software，回车确认 接着选择Softy，回车确认 最后选择docker，空格勾选，回车确认开始安装"),a("br"),r._v("\n然后，按tab键，选择OK，回车确认 最后等docker程序自动安装完成")]),r._v(" "),a("h2",{attrs:{id:"docker安装portainer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装portainer"}},[r._v("#")]),r._v(" docker安装portainer")]),r._v(" "),a("p",[r._v("docker pull portainer/portainer"),a("br"),r._v("\ndocker run -d -p 9888:9000 -v /var/run/docker.sock:/var/run/docker.sock --restart=always --name prtainer portainer/portainer"),a("br"),r._v("\n如果遇到安装失败一般都是源的问题，换IP可以解决")]),r._v(" "),a("h2",{attrs:{id:"挂载docker数据到数据盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载docker数据到数据盘"}},[r._v("#")]),r._v(" 挂载docker数据到数据盘")]),r._v(" "),a("p",[r._v("考虑到N1只有6G可用储存，我们可以将dockers安装到数据盘，接入U盘或者硬盘，输入"),a("br"),r._v("\ndf -i，比如查询硬盘为  /dev/sda1"),a("br"),r._v("\n将硬盘挂载到mnt （其他目录也可以）\n输入mount /dev/sda1 /mnt"),a("br"),r._v("\n输入 blkid /dev/sda1 查询 得到数据"),a("br"),r._v('\nUUID="a78e3c99-2754-034e-abd1-36后面省略'),a("br"),r._v("\n输入命令开机自动挂载"),a("br"),r._v("\necho 'UUID=a78e3c99-2754-034e-abd1-36后面省略 /mnt ext4 defaults 0 0' >> /etc/fstab"),a("br"),r._v("\n输入 mount -a"),a("br"),r._v("\n检查是否挂载好  df -h"),a("br"),r._v("\n备份docker数据"),a("br"),r._v("\ncp -r /var/lib/docker_data /var/lib/docker"),a("br"),r._v("\n移动docker数据到硬盘"),a("br"),r._v("\nmv /var/lib/docker /mnt/docker"),a("br"),r._v("\n把硬盘的目录发送到N1"),a("br"),r._v("\nln -s /mnt/docker /var/lib/docker")]),r._v(" "),a("h2",{attrs:{id:"docker安装openwrt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装openwrt"}},[r._v("#")]),r._v(" docker安装openwrt")]),r._v(" "),a("p",[r._v("docker pull unifreq/openwrt-aarch64:r20.04.08"),a("br"),r._v("\nip link set eth0 promisc on"),a("br"),r._v("\nmodprobe pppoe"),a("br"),r._v("\ndocker network create -d macvlan --subnet=192.168.123.0/24 --gateway=192.168.123.1 -o parent=eth0 macnet"),a("br"),r._v("\ndocker run --restart always -d --network macnet --privileged --ip=192.168.123.2 unifreq/openwrt-aarch64:r20.04.08 /sbin/init"),a("br"),r._v("\n大家根据自己的实际IP改下代码"),a("br"),r._v("\n再登录portainer管理页面，点container"),a("br"),r._v("\nvi /etc/config/network"),a("br"),r._v("\n按i改网关信息，op的ip要改成跟主路由同网关，比如192.168.123.2或者192.168.123.3，改好后依次按返回键，:wq保存退出。再点disconnect，在containers那勾选op 点restart重启op。 (部分op需手动复制粘贴以下两条"),a("br"),r._v("\n192.168.2.1改成你主路由ip。不复制进去就登陆不了op"),a("br"),r._v("\noption gateway '192.168.123.1'"),a("br"),r._v("\noption dns '114.114.114.114 223.5.5.5'"),a("br"),r._v("\n另外再教大家安装下载好的openwrt"),a("br"),r._v("\n导入本地编译好的rootfs.tar.gz并部署"),a("br"),r._v("\n随便导入一个文件夹  cd /到这个文件夹"),a("br"),r._v("\ndocker import openwrt-armvirt-64-default-rootfs.tar.gz openwrt:R9.9.15"),a("br"),r._v("\n再输入"),a("br"),r._v("\ndocker run --restart always -d --network macnet --privileged --ip=192.168.123.5 openwrt:R9.9.15 /sbin/init"),a("br"),r._v("\nvi /etc/config/network"),a("br"),r._v("\n设置网关为192.168.123.5"),a("br"),r._v("\n重启openwrt 输入192.168.123.5 就可以登陆了"),a("br"),r._v("\n默认的账号root 密码password")]),r._v(" "),a("h1",{attrs:{id:"安装home-assistant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装home-assistant"}},[r._v("#")]),r._v(" 安装Home Assistant")]),r._v(" "),a("p",[r._v('docker run -d --restart=always --name="home-assistant" -e TZ=Asia/Shanghai -v /var/lib/docker/homeassistant:/config -p 8123:8123 -v /etc/localtime:/etc/localtime:ro --net=host homeassistant/aarch64-homeassistant:0.88.1')]),r._v(" "),a("p",[r._v("具体参考另一篇文章"),a("br"),r._v("\nhttps://163168.xyz/posts/6.html")]),r._v(" "),a("h1",{attrs:{id:"安装宝塔搭建网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装宝塔搭建网站"}},[r._v("#")]),r._v(" 安装宝塔搭建网站")]),r._v(" "),a("p",[r._v("安装过程直接看这里"),a("br"),r._v("\nhttps://hub.docker.com/r/startwish/n1-bt-lnmp")]),r._v(" "),a("p",[r._v("默认的信息\n宝塔面板登录页面是")]),r._v(" "),a("p",[r._v("你的IP:8888/startwish\n账号startwish")]),r._v(" "),a("p",[r._v("密码startwish")]),r._v(" "),a("p",[r._v("系统root账户的密码是startwish"),a("br"),r._v("\n可以通过宝塔搭建自己的网站了！！！")])])}),[],!1,null,null,null);t.default=n.exports}}]);