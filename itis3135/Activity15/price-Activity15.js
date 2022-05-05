$(document).ready(function()
{
    $.ajax({
        type: "get",
        dataType: "json",
        url: "facultyList.json",
        error: function(xhr, status, error) 
        {
            alert("Error: " + xhr.status + " - " + error);
        },
        success: function(data)
        {
            $("#faculty").html("");
            $.each(data, function()
                {
                    $.each(this, function(key, value)
                    {
                        $("main").append
                        (
                            "<img src = " + value.image + ">" +
                            "<h2>" + value.full_name + "</h1>" + 
                            "<h3>" + value.department + "</h2>" + 
                            "<p>" + value.bio + "</p>" 
                        )
                    })
                }
            );
        }
    });
});