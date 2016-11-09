$(document).ready(function() {
  $('#home-content').fadeIn("slow")
  $('#home-content').append(`<h1>Lala</h1>
  <p>Welcome to Lala, this is a place for quality food. We invite you to patronize whenever you are hungry</p>
  <p>We have many types of dishes here.We have African, Asian and even Australian dishes here. Patronize us and you will be blessed</p>`)
  $('#content').after(`<footer>Lala, Feeding the world<br>&copy; EngineerLash</footer>`)

  $('.tabs li a').on("click", function(event) {
    event.preventDefault()
    $('.tabs li a').removeClass("active")
    loadContent(this)
  })

  $("button").on("click", goNext)
})

function getId(element) {
  return $(element).attr("id")
}

function goNext() {
  var listItems = $('.tabs li a')
  listItems.each(function(index, link) {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active")
      loadContent(listItems.eq((index + 1) % listItems.length))
      return false
    }
  })
}

function loadContent(element) {
  $(element).addClass("active")
  $("#" + getId(element) + "-content").siblings(".tabcontent").css("display", "none")
  $("#" + getId(element) + "-content").fadeIn("slow")
}