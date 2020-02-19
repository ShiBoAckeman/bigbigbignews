//请求所有文章类别
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/category/list',
    success: function (response) {
        // console.log(response)
        var html = template('releaseTpl', {
            data: response.data
        })
        $('#article_category').html(html)
    }
})
//给文件控件注册change事件

$('#exampleInputFile').on('change', function () {
    var file = this.files[0];

    var imgURL = URL.createObjectURL(file);
    //设置img的src属性
    $('#preview').prop('src', imgURL);
    $('#hiddenCover').val(imgURL);
    // console.log($('#hiddenCover').val());

})


$('#addForm').on('submit', function () {

    var code = $(this).find('.code').attr('data-id');
    var formData = new FormData(this)
    if (code == 1) {
        formData.append('state', '已发布');
    } else {
        formData.append('state', '草稿');
    }
    var text = tinymce.activeEditor.getContent();

    formData.append('content', text);


    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/article/publish',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            alert('提交成功');
            location.href = 'article_list.html';

        },
        error: function (response) {
            alert('提交失败');
        }
    })


    // 阻止表单默认提交行为
    return false;
})