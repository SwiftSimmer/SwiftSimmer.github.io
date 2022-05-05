$(document).ready(function() {
	$("#nav_list li").click(function(){
        $.ajax({
            dataType:"json",
            url:"json_files/" + $(this).children("a").attr("title") + ".json",
            beforeSend: function() 
            {
                $("main").html("Loading...");
            },
            timeout: 10000,
            error: function(xhr, status, error) 
            {
                alert("Error: " + xhr.status + " - " + error);
            },
            success: function(data)
            {
                $.each(data, function()
                {
                    $.each(this, function(key, value)
                    {
                        $("main").append
                        (
                        "<h1>" + value.title + "</h1>" +
                        "<h2>" + value.month + "</h2>" +
                        "<h3>" + value.speaker + "</h3>" +
                        "<img src = " + value.image + ">" +
                        "<p>" + value.text + "</p>"
                        )
                    })
                })
            }
        });
    });
}); // end ready