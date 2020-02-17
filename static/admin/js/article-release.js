//给文件控件注册change事件
$('#exampleInputFile').on('change', function () {
    var file = this.files[0]
    var imgURL = URL.createObjectURL(file)
    //设置img的src属性
    $('#preview').prop('src', imgURL)
})
$('#articleForm').on('submit', function () {
    var formData = new FormData(this)
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/article/publish',
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            location.reload();
        },
        error: function (error) {
            alert('文章创建失败');
        }
    })
    //阻止表单默认提交行为
    return false;
})