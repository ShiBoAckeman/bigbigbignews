// console.log(location.href);
var id = location.href.split('?')[1];
// alert(id)
//发送请求 
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/search',
    data: id,
    success: function (response) {
        // alert('11')
        response = response.data;
        // console.log(response)
        $.ajax({
            url: 'http://localhost:8080/api/v1/admin/category/list',
            success: function (categories) {
                // alert('11')
                // console.log(categories);
                response.categories = categories.data
                // console.log(categories);
                // console.log(response);
                //拼接编辑模板
                var html = template('modifyTpl', response)
                // console.log(html);
                $('#modifyBox').html(html)

            }
        })

    }
})

$('#modifyBox').on('change', '#exampleInputFile', function () {
    // alert('11')
    var file = this.files[0];
    var imgURL = URL.createObjectURL(file);
    $('#preview').prop('src', imgURL);
    // var formData = new FormData()

})

$('#modifyBox').on('submit', '#modifyForm', function () {
    var formData = new FormData($('#modifyForm')[0])
    var id = $('#modifyForm').attr('data-id');
    // console.log(id);
    formData.append('id', id)
    // console.log(formData.get('id'));

    $.ajax({
        url: 'http://localhost:8080/api/v1/admin/article/edit',
        type: 'post',
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            // console.log(res);
            // location.reload()
            location.href = 'article_list.html'
        }
    })
    return false
})