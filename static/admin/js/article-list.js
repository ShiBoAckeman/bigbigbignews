$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    data: {

        perpage: 20
    },
    success: (response) => {
        // console.log(response)
        function creat_arr(pages) {
            let a = [];
            for (let i = 1; i <= pages; i++) {
                a.push(i)
            }
            return a;
        }

        var res = response.data.data;

        var html = template('listTpl', { data: res });
        $('#listBox').html(html)
        response.pages = creat_arr(response.data.pages);
        // console.log(response.data.page)



        var hh = template('pageTpl', response)
        // console.log(response)
        $('#pageBox').html(hh);
    }
})
function changePage(page) {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: {
            page: page,
            perpage: 20
        },
        success: (response) => {
            // console.log(response)
            function creat_arr(pages) {
                let a = [];
                for (let i = 1; i <= pages; i++) {
                    a.push(i)
                }
                return a;
            }

            var res = response.data.data;

            var html = template('listTpl', { data: res });
            $('#listBox').html(html)
            response.pages = creat_arr(response.data.pages);
            // console.log(response.data.page)


            var hh = template('pageTpl', response)
            $('#pageBox').html(hh);
        }
    })
}

//文章删除功能
$('#listBox').on('click', '.delete', function () {
    if (confirm('确定删除么')) {
        var id = $(this).attr('data-id')
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


