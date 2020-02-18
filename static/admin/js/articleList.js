//获取文章列表
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    success: function (res) {
        // console.log(res);
        var html = template('articleTpl', {
            res: res.data.data
        })
        // console.log(html);
        $('#articleBox').html(html)
    }
});



//文章删除功能
$('#articleBox').on('click', '.del', function () {
    if (confirm('确定删除么')) {
        var id = $(this).arrt('data-id')
        $.ajax({
            type: 'post',
            data: {
                id: id
            },
            url: 'http://localhost:8080/api/v1/admin/article/delete',
            success: function (res) {
                location.reload();
            }
        });
    }
})