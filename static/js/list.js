
// 获取文章热门排行
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/rank',
    success: function (response) {
        // console.log(response);
        var html = template('hotlistTpl', response);
        $('#hotlistBox').html(html);
    }
})
// 获取最新评论
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/latest_comment',
    success: function (response) {
        // console.log(response);
        var html = template('comment_listTpl', response);
        $('#comment_listBox').html(html);
    }
})

// 焦点关注
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/index/attention',
    success: function (response) {
        // console.log(response);
        var html = template('guanzhu_listTpl', response);
        $('#guanzhu_listBox').html(html);
    }
})
