//获取评论列表
$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/comment/search',
    data: {

        perpage: 20
    },
    success: function (response) {
        // console.log(res);

        function creat_arr(pages) {
            let a = [];
            for (let i = 1; i <= pages; i++) {
                a.push(i)
            }
            return a;
        }
        response.pages = creat_arr(response.data.pages);
        response.page = response.data.page;
        console.log(response)


        //渲染分页列表
        var html = template('pageTpl', response)
        $('#pageBox').html(html)

        var res = response.data.data;
        //渲染评论列表
        var html = template('commentTpl', {
            data: res
        })
        $('#commentBox').html(html)
    }

})



//审核功能
$('#commentBox').on('click', '.status', function () {
    var id = $(this).siblings('a').attr('data-id');
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/comment/pass',
        data: {
            id: id
        },
        success: function (res) {
            alert(res.msg);
            location.reload();
        }
    })
})
//未批准
$('#commentBox').on('click', '.failed', function () {
    var id = $(this).siblings('a').attr('data-id');
    $.ajax({
        type: 'post',
        url: 'http://localhost:8080/api/v1/admin/comment/reject',
        data: {
            id: id
        },
        success: function (res) {
            alert(res.msg);
            location.reload();
        }
    })
})





//评论删除功能
$('#commentBox').on('click', '.del', function () {
    var id = $(this).attr('data-id');
    console.log(id);

    if (confirm('确定删除么')) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:8080/api/v1/admin/comment/delete',
            data: {
                id: id
            },
            success: function (res) {
                location.reload();
            }
        })
    }
})

//渲染分页数据
function changePage(page) {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/comment/search',
        data: {
            page: page,
            perpage: 20
        },
        success: function (response) {
            console.log(res);

            function creat_arr(pages) {
                let a = [];
                for (let i = 1; i <= pages; i++) {
                    a.push(i)
                }
                return a;
            }
            response.pages = creat_arr(response.data.pages);
            response.page = response.data.page;
            console.log(response)


            //渲染分页列表
            var html = template('pageTpl', response.data)
            $('#pageBox').html(html)

            var res = response.data.data;
            //渲染评论列表
            var html = template('commentTpl', {
                data: res
            })
            $('#commentBox').html(html)
        }

    })
}