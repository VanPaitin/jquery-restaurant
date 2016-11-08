$(document).ready(function() {
  $('#home-content').fadeIn("slow")
  $('#home-content').append(`<h1>Lala</h1>
  <p>Welcome to Lala, this is a place for quality food. We invite you to patronize whenever you are hungry</p>
  <p>We have many types of dishes here.We have African, Asian and even Australian dishes here. Patronize us and you will be blessed</p>`)
  $('.tabs li a').on("click", function(event) {
    event.preventDefault()
    $('.tabs li a').removeClass("active")
    $(this).addClass("active")
    $("#" + getId(this) + "-content").siblings(".tabcontent").css("display", "none")
    $("#" + getId(this) + "-content").fadeIn("slow")
  })
})
function getId(element) {
  return $(element).attr("id")
}