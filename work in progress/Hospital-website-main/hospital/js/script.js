let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



// Running Number Javascript (Numbers Speak for themselves)

$(document).ready(function () {
  var isCounterUpActivated = false;
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var elementOffset = $(".running-number").offset().top;
    var distance = elementOffset - scrollTop;

    if (distance < 600 && !isCounterUpActivated) {
      activateCounterUp();
      isCounterUpActivated = true;
    }
  });

  function activateCounterUp() {
    $(".counter").each(function () {
      var $this = $(this);
      var targetValue = parseInt($this.text());
      var suffix = $this.data("suffix");

      $({ Counter: 0 }).animate(
        { Counter: targetValue },
        {
          duration: 1200,
          easing: "swing",
          step: function () {
            var formattedValue = Math.ceil(this.Counter);

            if (suffix && suffix !== "+") {
              formattedValue += suffix;
            }

            $this.text(formattedValue);
          },
          complete: function () {
            if (suffix && suffix === "+") {
              $this.text($this.text() + suffix);
            }
          },
        }
      );
    });

    setInterval(function () {
      $(".counter").each(function () {
        var $this = $(this);
        var targetValue = parseInt($this.text().replace(/[^\d.-]/g, ""));
        var suffix = $this.data("suffix");

        $({ Counter: 0 }).animate(
          { Counter: targetValue },
          {
            duration: 1200,
            easing: "swing",
            step: function () {
              var formattedValue = Math.ceil(this.Counter);

              if (suffix && suffix !== "+") {
                formattedValue += suffix;
              }

              $this.text(formattedValue);
            },
            complete: function () {
              if (suffix && suffix === "+") {
                $this.text($this.text() + suffix);
              }
            },
          }
        );
      });
    }, 3000); // Repeat the animation every 3 seconds
  }
});
