//获取修改文章内容
var id = getUrlParams('articleId');
$.ajax({
    type: 'get',
    data: {
        id: id
    },
    url: 'http://localhost:8080/api/v1/admin/article/search',
    success: function (res) {
        // console.log(res);
        //获取文章类别信息
        $.ajax({
            type: 'get',
            url: 'http://localhost:8080/api/v1/admin/category/list',
            success: function (categories) {
                // console.log(categories);
                res.data.categories = categories.data;
                // console.log(res);
                //渲染文章信息
                // console.log(res.data);
                var html = template('modifyTpl', res.data)
                // console.log(html);
                $('#modifyBox').html(html)

            }
        })
    }
});



//获取参数id
function getUrlParams(name) {
    var paramsStr = location.search.substr(1);
    var paramsAry = paramsStr.split('&');
    for (var i = 0; i < paramsAry.length; i++) {
        var tmp = paramsAry[i].split('=');
        if (tmp[0] == name) {
            return tmp[1]
        }
    }
    //没有找到参数
    return -1
}


//文件上传功能
$('#modifyBox').on('change', '#exampleInputFile', function () {

    var file = this.files[0];
    var imgURL = URL.createObjectURL(file);

    $('#preview').prop('src', imgURL)
    $('#hiddenCover').val(imgURL)
})




//表单修改注册提交事件
$('#modifyBox').on('submit', '#modifyForm', function () {
    var data = $(this).serialize();
    // console.log(data);
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/article/edit',
        data: data,
        processData: false,
        contentType: false,
        success: function (res) {
            console.log(res);

            // location.href = '/admin/article_edit.html';
        }
    })
    return false;
})