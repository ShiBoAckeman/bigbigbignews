//注册搜索框表单提交事件
$('.header_bar form').on('submit', function () {
    //获取表单输入的内容
    var data = $(this).find('input').val();
    // console.log(data);
    //向服务器端发送文章搜索请求
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: {
            key: data,
            // type: "",
            // state: "",
            // page: 2,
            // perpage: 10,
        },
        success: function (response) {
            console.log(response)
            var html = template('articleTpl', response)
            $('#articleBox').html(html)
        }
    })
    //阻止表单默认提交事件
    return false;
})