$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    data: {

        perpage: 2
    },
    success: function (response) {
        // console.log(response)
        function creat_arr(pages) {
            let a = [];
            for (let i = 1; i <= pages; i++) {
                a.push(i)
            }
            return a;
        }
        response.pages = creat_arr(response.data.pages);
        response.page = response.data.page;
        // console.log(response)

        var hh = template('pageTpl', response)
        $('#pageBox').html(hh);
        var res = response.data.data;

        var html = template('listTpl', {
            data: res
        });
        $('#listBox').html(html)
    }
})

function changePage(page) {
    $.ajax({
        type: 'get',
        url: 'http://localhost:8080/api/v1/admin/article/query',
        data: {
            page: page,
            perpage: 2
        },
        success: function (response) {
            // console.log(response)
            function creat_arr(pages) {
                let a = [];
                for (let i = 1; i <= pages; i++) {
                    a.push(i)
                }
                return a;
            }
            response.pages = creat_arr(response.data.pages);
            response.page = response.data.page;
            // console.log(response)

            var hh = template('pageTpl', response)
            $('#pageBox').html(hh);
            var res = response.data.data;

            var html = template('listTpl', {
                data: res
            });
            $('#listBox').html(html)
        }
    })
}
// console.log(changePage(page))