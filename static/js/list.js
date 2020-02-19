
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


//获取文章分类
$.ajax({
    url: 'http://localhost:8080/api/v1/index/category',
    success: function (response) {
        // console.log(response);
        var html = template('categoryTpl', { data: response.data })
        // console.log(html);
        $('#categoryBox').html(html)
        $('#categorysBox').html(html)
    }
})

//根据id获取文章分类
$('#categoryBox').on('click', '.classify', function () {
    var id = $(this).attr('data-id');
    // alert(id)
    $.ajax({
        url: "http://localhost:8080/api/v1/index/search",
        data: { type: id },
        success: function (response) {
            // console.log(response);
            // console.log(response.data.data[0].cover);
            var category = {}
            category.title = response.data.data[0].category
            // console.log(category.title);
            var hh = template('titleTpl', category)
            $('#articleBox #titleBox').html(hh)

            var html = template('articleTpl', { data: response.data.data })
            // console.log(html);
            $('#articleBox').html(html)
        }
    })
})
$('#categorysBox').on('click', '.classify', function () {
    var id = $(this).attr('data-id');
    // alert(id)
    $.ajax({
        url: "http://localhost:8080/api/v1/index/search",
        data: { type: id },
        success: function (response) {
            // console.log(response);
            // console.log(response.data.data[0].cover);
            var category = {}
            category.title = response.data.data[0].category
            // console.log(category.title);
            var hh = template('titleTpl', category)
            $('#articleBox #titleBox').html(hh)

            var html = template('articleTpl', { data: response.data.data })
            // console.log(html);
            $('#articleBox').html(html)
        }
    })
})

// 别的页面点击分类跳转到列表页
//根据id获取文章分类
var id = getUrlParams('id');
// alert(id)
$.ajax({
    url: "http://localhost:8080/api/v1/index/search",
    data: { type: id },
    success: function (response) {
        // console.log(response);
        // console.log(response.data.data[0].cover);
        var category = {}
        category.title = response.data.data[0].category
        // console.log(category.title);
        var hh = template('titleTpl', category)
        $('#articleBox #titleBox').html(hh)

        var html = template('articleTpl', { data: response.data.data })
        // console.log(html);
        $('#articleBox').html(html)
    }
})

function getUrlParams(name) {
    var paramsAry = location.search.substr(1).split('&');
    for (var i = 0; i < paramsAry.length; i++) {
        var tmp = paramsAry[i].split('=');
        if (tmp[0] == name) {
            return tmp[1];
        }
    }
    // 参数不存在，则返回-1
    return -1;
}
$('#articleBox').on()