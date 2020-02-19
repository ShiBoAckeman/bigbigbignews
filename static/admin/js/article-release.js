//请求所有文章类别
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/category/list',
    success: function (response) {
        console.log(response)
        var html = template('releaseTpl', response)
        $('#article_category').html(html)
    }
})
//给文件控件注册change事件
$('#exampleInputFile').on('change', function () {
    var file = this.files[0]
    var imgURL = URL.createObjectURL(file)
    //设置img的src属性
    $('#preview').prop('src', imgURL)
})
$('#articleForm').on('submit', function () {
    var formData = new FormData(this)
    console.log(formData);

    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/article/publish',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            console.log(response);

            // location.reload();
        },
        error: function (error) {
            alert('文章创建失败');
        }
    })
    //阻止表单默认提交行为
    return false;
})