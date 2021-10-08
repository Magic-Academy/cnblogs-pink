
const removeArr = ["#sidebar_scorerank", "#profile_block", "#sidebar_search", "#blog_nav_contact", "#footer", "#blogCalendar"]
for (let i of removeArr) {
    $(i).remove();
}

let headerhtml = $("#blogTitle").html() + '<div id="chevronsDown" class="dabao animate__flash animate__infinite infinite animate__slow 3s"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="m12 15.586-4.293-4.293-1.414 1.414L12 18.414l5.707-5.707-1.414-1.414z"></path><path d="m17.707 7.707-1.414-1.414L12 10.586 7.707 6.293 6.293 7.707 12 13.414z"></path></svg></div>';
$("#blogTitle").html(headerhtml)
// ----------------------------自定义方法插件 start-----------------------------------
//暗黑模式
const options = {
    bottom: "44px", // default: '32px'
    right: "22px",
    time: "0.3s", // default: '0.3s'
    mixColor: "#fff", // default: '#fff'
    backgroundColor: "#fff", // default: '#fff'
    buttonColorDark: "#100f2c", // default: '#100f2c'
    buttonColorLight: "#fff", // default: '#fff'
    saveInCookies: true, // default: true,
    label: "🌗", // default: ''
    autoMatchOsTheme: true // default: true
};
const dabao = new DABAO({// 开启自定义动画
    boxClass: "dabao",
    animateClass: "animate__animated",
    offset: 100,
    mobile: true,
    live: true,
});
//刷新滚动到顶部
const moveTo = new MoveTo();
const target = document.querySelector("#header");
const darkmode = new Darkmode(options);


dabao.init();
darkmode.showWidget();
moveTo.move(target);

$("#chevronsDown svg").click(() => {
    moveTo.move(document.querySelector("#main"));
})

$(".toc a").click(function () {
    if ($(this).attr("href") != "#") {
        $(this).attr("data-duration", $(this).attr("href"))
        $(this).attr("href", "#");
    }
    const target = document.getElementById($(this).attr("data-duration").substr(1));
    moveTo.move(target);
})
// ----------------------------自定义方法插件 end-----------------------------------

// 页面资源加载完成后清除loading动画
const newList = [
    "<a id='blog_Links' href='https://www.cnblogs.com/songdaochuanshu/articles/links.html' class = 'menu'>友情链接</a>",
    "<a id='blog_message_board' href='https://www.cnblogs.com/songdaochuanshu/p/MessageBoard.html' class = 'menu'>留言板</a>",
]
$(document).ready(function () {
    setTimeout(() => {
        $("#loading").remove();
    }, 500);
    // 添加留言板功能
    const node = document.getElementById("navList");
    let newNode_js1 = document.createElement("li")
    let newNode_js2 = document.createElement("li")
    newNode_js1.innerHTML = newList[0];
    newNode_js2.innerHTML = newList[1];
    node.appendChild(newNode_js1);
    node.appendChild(newNode_js2);
});
// 判断是友情链接页面
if (location.pathname.match(/\/links/) != null ) {
    $(".postDesc").remove();
    $("#blog_post_info_block").remove();
    $("#comment_form").remove();
}

// 判断是否为随笔和文章详情页面 
if (location.pathname.match(/\/p/) != null || location.pathname.match(/\/articles/) != null) {
    // 根据页面删除博客标题
    $("#blogTitle").remove();
    // 设置文章标题样式
    $(".postTitle").css({
        width: "100%",
        height: "20vh",
        color: "#fff",
        "line-height": "20vh",
        "text-align": "center",
        position: "absolute",
        top: "0",
        left: "0",
        background: "pink",
    });
    $(".postTitle>a").css("color", "#fff");
}

// 留言板
if (location.pathname.match(/\/MessageBoard/)) {
    $("#commentform_title").html("发布留言");
    $(".feedback_area_title").html("留言列表");
    $("#commentbox_opt>input").val("提交留言");
    $("#blog_post_info_block").remove();
    $("#comment_nav").remove();
    $(".postDesc").remove();
}

// 点击侧边栏菜单按钮
$("#menu").click(() => {
    $("#sideBar").css("display", "block");// 显示侧边栏
    // 添加移入移出动画
    $("#sideBar").removeClass("animate__animated animate__fadeOutLeftBig");
    $("#sideBar").addClass("animate__animated animate__bounceInLeft");
})
//点击隐藏侧边栏
$(".sideSideBar").click(() => {
    // 添加移入移出动画
    $("#sideBar").removeClass("animate__animated animate__bounceInLeft");
    $("#sideBar").addClass("animate__animated animate__fadeOutLeftBig");
});

// 替换底部文字
$("#poweredby").html('');

// 添加头部 博客标题淡入动画
$("#header").addClass("dabao animate__fadeIn");

// 添加头部 添加文章淡入动画
$(".day").addClass("dabao animate__fadeIn");

//替换页面标签页title
document.title = "松岛川树";

// 替换导航栏图标

// 首页
$("#blog_nav_myhome").html(
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>`
);

// 添加随笔
$("#blog_nav_newpost").html(
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"></path></svg>`
);

//留言板
$("#blog_message_board").html(
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"></path><path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"></path></svg>`
);

// 友情链接
$("#blog_Links").html(
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z"></path><path d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z"></path></svg>`
);

// 管理
$("#blog_nav_admin").html(
    `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style="fill: rgba(255, 255, 255, 1);transform: ;msFilter:;"><path d="M19 4h-3V2h-2v2h-4V2H8v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM5 20V7h14V6l.002 14H5z"></path><path d="M7 9h10v2H7zm0 4h5v2H7z"></path></svg>`
);