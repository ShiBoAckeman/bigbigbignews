//获取统计数据数
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/data/info',
    success: function (res) {
        // console.log(res);
        var html = template('countTpl', res)
        $('#countBox').html(html);
    }
})