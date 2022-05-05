$(document).ready(() => {


// preload the image for each link
$("#image_list a").each( (index, link) => 
{
        const image = new Image();
        image.src = link.href;

});

// set up the event handlers for each link
$("#image_list a").click( evt => 
{
        //get clicked <a> tag
        const link = evt.currentTarget;

        // get the image URL and caption for each image and animate the caption
        $("#image").attr("src", link.href);
        $("#caption").text(link.title);

        // cancel the default action of each link
        evt.preventDefault();
})






// move the focus to the first link
$("li:first-child a").focus;



}); // end ready