

function changeFont()
{
    if (String(document.getElementById("page-top").style.fontFamily) == "Impact, Charcoal, sans-serif") 
    {
        document.getElementById("page-top").style.fontFamily = "Arial,Helvetica,sans-serif";
    } 
    else
    {
        document.getElementById("page-top").style.fontFamily = "Impact,Charcoal,sans-serif";
    }
}

function changeBackColor()
{
    if (String(document.body.style.background) == "red none repeat scroll 0% 0%") 
    {
        document.body.style.background = "grey";
    } 
    else
    {
        document.body.style.background = "red";
    }
}

$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });