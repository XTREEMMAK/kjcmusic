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
    cssClass: ['kj_mods']
});
modal.addFooterBtn('Close', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});

//Waypoints.js
/*
 new Waypoint({
  element: document.getElementById('Music'),
  handler: function () {
      setURLtoHREF ("#Music");
  }
})

new Waypoint({
  element: document.getElementById('Radio'),
  handler: function () {
      setURLtoHREF ("#Radio");
  }
})

new Waypoint({
  element: document.getElementById('New-Release'),
  handler: function () {
      setURLtoHREF ("#New-Release");
  }
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
*/
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
            ``
            );
        modal.open();
}

function get_copyright(year){
var copyright = document.querySelector(".copyright");
var copytxt = "Website design by Jamaal Ephriam.</br>Copyright &copy; Jamaal Ephriam "+year+". All Rights Reserved."

copyright.innerHTML = copytxt;
}

window.onload = function(){    
    getRecordsList('/public/js/music_db/templates/home.hbs','/public/js/music_db/kjmdb.json','mix-container');
    get_copyright(YEAR);
};

            

