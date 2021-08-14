<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-08-13 16:23:21
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-08-13 17:25:49
 * @FilePath: \cnblogs-pink\docs\guide\start.md
-->

# 项目目录

1. 拉取项目后打开文件夹将css,svg,js文件上传到博客园文件里
  ![An image](./../.vitepress/public/img1.jpg)

2. 博客皮肤设置为Custom
3. 打开 <a href="https://github.com/songdaochuanshu/cnblogs-pink/blob/55d2ee7b7caca049214a33ffbf3fd1aefebb170b/css/cnblogs-pink.css">cnblogs-pink.css</a> 将样式复制到页面定制css代码里,禁用模板默认css
4. 复制sidebar.html内容到博客侧边栏公告
   ```js
    <div class="sideSideBar"></div>
    <h3 class="catListTitle">
    个人信息
    </h3>
    <div id="u_msg">
    <div>
        <img
            class="uAvatar"
            src="https://pic.cnblogs.com/avatar/2363688/20210719101509.png" //头像链接[可以复制博客园个人资料的]
            alt=""
            />
    </div>
    <div>
        <p>松岛川树</p> //昵称
        <p>许多人来来去去相聚又别离</p> // 个人简介之类的
    </div>
    </div>
    <h3 class="catListTitle">
    日历
    </h3>
   ```
5. 复制header.html内容到页首HTML代码

```js
    <link rel="stylesheet" href="https://blog-static.cnblogs.com/files/blogs/694881/animate.min.css" /> 
    <link rel="stylesheet" href="https://blog-static.cnblogs.com/files/blogs/694881/APlayer.min.css" />    <!-- 音乐播放器样式 -->
   
    <div id="menu"></div>
    <!-- loading动画 -->
    <div id="loading">
    <div class="loader">
        <div class="loading">
        <i></i>
        <i></i>
        <i></i>
        </div>
    </div>
    </div>

    <!-- 音乐播放器标签 -->
    <meting-js
        server="netease"
        type="playlist"
        fixed="true"
        mini="true"
        order="random"
        id="6792682878">
    </meting-js>
    <!-- 动画效果 -->
    <script src="https://blog-static.cnblogs.com/files/blogs/694881/dabaoAnimate.js"></script>
    
    <script src="https://blog-static.cnblogs.com/files/blogs/694881/APlayer.min.js"></script>
    <!-- 音乐播放器插件 不喜欢的可以注释或者删掉 -->
    <script src="https://blog-static.cnblogs.com/files/blogs/694881/Meting.min.js"></script> 
    <!-- 音乐播放器插件 不喜欢的可以注释或者删掉 -->
    
    <script src="https://blog-static.cnblogs.com/files/blogs/694881/moveTo.min.js"></script>
    <script src="https://blog-static.cnblogs.com/files/blogs/694881/cnblogs-pink.js"></script>
```
千万要记得把文件链接改成自己链接!!! (口误Star )


 ok!🙃以上搞完之后就可以保存查看效果了 
 求求给个一键三连叭!虽然很烂!! 

