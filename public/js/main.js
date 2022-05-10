//Vanilla Lazyload
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});

//MixItUp 3
const containerEl = document.querySelector (".mix-container")
    var mixer = mixitup(containerEl, {
            animation: {
                effects: 'fade scale(0.5)'
            }
    });

//Tingle.js
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['kj_mods', 'sp_mods']
});
modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

var modal2 = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['album_win'],
    beforeClose: function() {
        var scroller = document.querySelector(".tingle-modal--overflow");
        scroller.scrollTo({
        top: 0,
        behavior: "smooth"
        });
        this.setContent('')
    return true
    }
});
modal2.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal2.close();
});



//Waypoints.js
new Waypoint({
  element: document.getElementById('New-Release'),
  handler: function () {
      var pagecheck = document.getElementById('Page-2').classList.contains('active_page');
      if (!pagecheck) {
      //setURLtoHREF ("#New-Release");
      clearNavSelect();
      document.querySelector(".latest_nav").classList.add("nav_a_clicked");
      }
  }
})

 new Waypoint({
  element: document.getElementById('Music'),
  handler: function () {
      var pagecheck = document.getElementById('Page-2').classList.contains('active_page');
      if (!pagecheck) {
      //setURLtoHREF ("#Music");
      clearNavSelect();
      document.querySelector(".music_nav").classList.add("nav_a_clicked");
      }
  },
  offset: 10
})

new Waypoint({
  element: document.getElementById('Radio'),
  handler: function () {
      var pagecheck = document.getElementById('Page-2').classList.contains('active_page');
      if (!pagecheck) {
      //setURLtoHREF ("#Radio");
      clearNavSelect();
      document.querySelector(".radio_nav").classList.add("nav_a_clicked");
      }
  },
  offset:10
})


//Navigation Anchor Updater
btns = document.getElementsByClassName("nav_a");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function (event) { 
            event.preventDefault();   
            const anchor = event.target.closest("a")              
			var href = anchor.getAttribute('href');
            setURLtoHREF (href)      
        });
    }

function setURLtoHREF (href) {
if(history.pushState) {
                history.pushState(null, null, href);
            }
            else {
                location.hash = href;
            }         
}

function clearNavSelect(){
      document.querySelector(".nav_a_clicked").classList.remove("nav_a_clicked");
}

function showStart(){
    window['player1'].showPlayer();
    window['player1'].stop();
    window['player1'].showPlaylist(setTimeout(function(){ 
        window['player1'].play(); 
        }, 2000))
    
}

function mixLink(key) {
    getRecordInfo ('/public/js/music_db/templates/info.hbs',key)
}

function recal_scroll(){
    ScrollTrigger.refresh();
    
}

function get_contact(){
        modal.setContent(
            `<iframe src="https://forms.keyjaycompound.com/app/form?id=2lyEsw&b=0" 
            style="border:0px #ffffff none;" 
            name="KJM Contact" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="600px" width="100%" allowfullscreen>
            </iframe>`);
        modal.open();
}

function get_support(){
        modal.setContent(
            `<div class="support_modal_wrapper">
                    <div class="sm_pic_box" style="width: 40%; margin-left: 5px; margin-right: 5px;"><img src="public/img/pc_supp_left.webp" style="width: 100%;"/></div>
                    <div class="sm_content_box">
                        <h1>More Key Jay, bigger Productions</h1>
                        <h3>Support the development of even larger KEY JAY PRODUCTIONS <br/> by:</h3>
                        <div class="sp_options_wrapper">
                            <div class="sp_option sp_option_rightb"><p>Directly supporting KEY JAY by becoming a POWER CREW VIP. Your support goes farther this way by avoiding unnecessary platform fees.</p><a class="pcsp_link" href="https://keyjayonline.com/powercrew.html" target="_blank"><img src="public/img/pc_logo_small.png" alt="Join the POWER CREW VIP"/></a></div>
                            <div class="sp_option"><p>Or by Supporting KEY JAY on these other fine platforms <br/>(One-Time or by Subscription options available)</p><img src="public/img/patreon-logo.jpg" style="width: 250px;" alt="KEY JAY's Patreon"/><a href="https://ko-fi.com/keyjayhd" target="_blank"><img src="public/img/kofi_logo.png" style="width: 289px;" alt="KEY JAY's Ko-Fi"/><img src="public/img/pp_logo.png" style="width: 289px;" alt="KEY JAY's Pay Pal"/></a>
                            
                            </div>
                        </div>
                    </div>
                </div>`
            );
        modal.open();
}

function get_copyright(year){
var copyright = document.querySelector(".copyright");
var copytxt = "Website design by Jamaal Ephriam.</br>Copyright &copy; Jamaal Ephriam "+year+". All Rights Reserved."

copyright.innerHTML = copytxt;
}



//Typing Text
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 40) || 4000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 500;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);

  getRecordsList('/public/js/music_db/templates/home.hbs','/public/js/music_db/kjmdb.json','mix-container');
    get_copyright(YEAR);
};
           

