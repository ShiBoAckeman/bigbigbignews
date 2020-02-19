//文章编辑功能
$('#listBox').on('click', '.modify', function () {
<<<<<<< HEAD
    // var id = $(this).attr('data-id');
    // console.log(location.href);

    // console.log(id)
=======
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
            // console.log(response)
            $.ajax({
                url: 'http://localhost:8080/api/v1/admin/category/list',
                success: function (categories) {
                    // console.log(categories);
                    response.categories = categories.data
                    // console.log(response);

                    var html = template('modifyTpl', response)
                    // console.log(html);
>>>>>>> 0000efd9a0709aec2a1981d11d988f17b499df27

})