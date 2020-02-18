//文章编辑功能
$('#listBox').on('click', '.modify', function () {
    var id = $(this).attr('data-id');
    // console.log(id)
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/search',
        data: {
            id: id
        },
        success: function (response) {
            // alert('11')
            response = response.data;
            console.log(response)
            // location.href = "http://localhost:8080/admin/article_release.html";
            // var html = template('modifyTpl', response);
            // console.log(html)
        }
    })
})