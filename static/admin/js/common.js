$('.header_bar').on('click', '#inconfont', function () {
    var key = $('#search_form').serialize();
    location.href = "/admin/article_list.html?" + key;
    // console.log(key);

    // $.ajax({
    //     url: "http://localhost:8080/api/v1/admin/article/query",
    //     data: key,
    //     success: function (response) {
    //         console.log(response);
    //         // var html = template()

    //     }
    // })
})
