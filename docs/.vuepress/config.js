module.exports = {
    title: '我的前端技术栈',
    description: '记录前端技术积累笔记',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        displayAllHeaders: true,
        sidebar: [
            {
                title: 'JavaScript基础',
                children: ['/javascript-base/0']
            },
            {
                title: 'HTML和CSS',
                children: ['/html-css/0']
            },
            {
                title: '计算机基础',
                children: ['/computer-base/0']
            },
            {
                title: '数据结构和算法',
                children: ['/data-compute/0']
            },
            {
                title: '运行环境',
                children: ['/runtime/0']
            },
            {
                title: '框架和类库',
                children: ['/framework-lib/0']
            },
            {
                title: '前端工程',
                children: ['/web-cli/0']
            },
            {
                title: '项目和业务',
                children: ['/project/0']
            },
            {
                title: '学习提升',
                children: ['/study-up/0']
            },
            {
                title: '技术之外',
                children: ['/out-of-technology/0']
            },
            {
                title: '资源推荐',
                children: ['/source-recommended/0']
            },
            {
                title: '小结',
                children: ['/conclusion/0']
            }
        ]
    }
};
