var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
var obyekwisata="obyekwisata.json";

$(document).on("mobileinit", function(){
$.mobile.defaultPageTransition = 'none';
});

$(document).on("pageinit","#obyekwisata",function(){

$.getJSON(obyekwisata,
        function(data){
          $.each(data.posts, function(i,posts){
		var title=posts.title_plain;
		var content=posts.content;
		var excerpt=posts.excerpt;
		var thumb=posts.attachments[0].images.large.url;

var poswrap="";
poswrap += "<a href='#page1"+i+"' class='dblock'><div class='wrapper'>";
poswrap += "<div class='img_wrapper'>";
poswrap += "<img src='"+thumb+"'\/>";
poswrap += "<div class='title_wrapper text-center width100'  >";
poswrap += "<h3 class='dinblock fontn pad10 text-center font150 caps bd-bdtopbot-bdwhite'>"+title+"<\/h3>";
poswrap += "<\/div>";
poswrap += "<\/div>";
poswrap += "<\/div><\/a>";

var pagewrap="";
pagewrap += "<div data-role='page' id='page1"+i+"'>";
pagewrap += "<div  class='zindex5 width100 bblack fwhite' data-role='header'><a class='mrg0 fwhite curpon floleft lnr lnr-arrow-left font120 mrg5' data-rel='back'></a><h3 class='fontn pad10 text-center font150 caps fwhite'>"+title+"<\/h3><\/div>";
pagewrap += "<div data-role='main' class='pad0'>";
pagewrap += "<div class='img_wrapper'>";
pagewrap += "<img src='"+thumb+"'\/>";
pagewrap += "<\/div>";
pagewrap += "<div class='pad10 font80 fgrey'><p>"+content+"</p><\/div>";
pagewrap += "<br\/><br\/><br\/><\/div>";
pagewrap += "<\/div>";

$('#data').append(poswrap);
$('#page1').after(pagewrap);

          });
        });

 });
