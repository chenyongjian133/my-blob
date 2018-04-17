new htmlwebpackplugin({
    template: './pages/index.html',  //html模版
    filename: './pages/index.html',  //生成的html存放路径,相对于path
    inject: true,   //js插入的位置 true插入到head,false插入到body
    hash: true,      //为静态资源生成hash值
    chunks: ['app'], //需要引入的chunk,不配置就会引入所有页面的资源
    minify: {
        removeComments: true,        //移除html中的注释
        collapseWhitespace: false,  //删除空白符和换行符
    }

})
// data-fns 一个比moment还好用的格式日期库