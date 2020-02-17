$.ajax({
    type: 'get',
    url: 'http://localhost:8080/api/v1/admin/article/query',
    data: {
        perpage: 2
    },
    success: function (response) {
        console.log(response)
        var hh = template('pageTpl', response.data)
        console.log(hh)
        var res = response.data.data
        console.log(res)
        var html = template('listTpl', { data: res });
        $('#listBox').html(html)
    }
})
