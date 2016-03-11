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

function clearLocalStorage(){
localStorage.clear();
}

var panel ="";
panel +="<div data-role='panel' id='mypanel' data-position='right' data-display='overlay' class='bwhite  pad0'><div class='bgyellow pad20 text-right fwhite'><a class='dinblock font120 lnr lnr-cross fwhite'  data-rel='close'><\/a></div>";
panel +="<div class='nolist fontn fyellow'><ul><li><a href='#obyekwisata'><span class='font100 lnr lnr-map-marker'><\/span><span class='font80'>Obyek Wisata<\/span><\/a><\/li>";
panel +="   <li><a href='#hotel'><span class='font100 lnr lnr-briefcase'><\/span><span class='font80'>Tour Package<\/span><\/a><\/li>";
panel +="   <li><a href='#hotel'><span class='font100 lnr lnr-apartment'><\/span><span class='font80'>Hotel \/ Penginapan<\/span><\/a><\/li>";
panel +="   <li><a href='#hotel'><span class='font100 lnr lnr-question-circle'><\/span><span class='font80'>FAQ<\/span><\/a><\/li>";
panel +="   <li><a href='#hotel'><span class='font100 lnr lnr-users'><\/span><span class='font80'>Tentang Kami<\/span><\/a><\/li>";
panel +="   <li><a onclick='Javascript:clearStorage()' class='curpon'><span class='font100 lnr lnr-warning'><\/span><span class='font80'>Syarat dan Ketentuan<\/span><\/a><\/li><\/ul>";

panel +="<\/div><\/div>";

$(document).one('pagebeforecreate', function () {
  $.mobile.pageContainer.prepend(panel);
  $("#mypanel").panel();
});

$(document).on("pagebeforeshow","#obyekwisata",function(){
$.getJSON("obyekwisata.json",
        function(data){
          $.each(data.posts, function(i,posts){
	    var id=posts.id;
		var title=posts.title_plain;
		var content=posts.content;
		var excerpt=posts.excerpt;
		var thumb=posts.thumbnail_images.mobile.url;

var poswrap="";
poswrap += "<a href='hasil.html?id="+id+"' class='dblock'><div class='wrapper'>";
poswrap += "<div class='img_wrapper'>";
poswrap += "<div class='diengload'><img src='"+thumb+"'\/><\/div>";
poswrap += "<div class='title_wrapper text-center width100'  >";
poswrap += "<h3 class='dinblock fontn pad10 text-center font90 caps bd-bdtopbot-bdwhite'>"+title+"<\/h3>";
poswrap += "<\/div>";
poswrap += "<\/div>";
poswrap += "<\/div><\/a>";
$('#data').append(poswrap);
                })});
  });



$(document).on("pagebeforeshow","#hotel",function(){
$.getJSON("hotel.json",
        function(hdata){
$.each(hdata.posts, function(i,hposts){
	    var hid=hposts.id;
		var htitle=hposts.title_plain;
		var hcontent=hposts.content;
		var hexcerpt=hposts.excerpt;
		var imghotel=hposts.thumbnail_images.mobile.url;

var hotelwrap="";
hotelwrap += "<a href='hotel.html?hid="+hid+"' class='dblock'><div class='wrapper'>";
hotelwrap += "<div class='img_wrapper bblack'><div class='diengload'>";
hotelwrap += "<img src='"+imghotel+"'\/>";
hotelwrap += "<\/div><div class='title_wrapper text-center width100'  >";
hotelwrap += "<h3 class='dinblock fontn pad10 text-center font100 caps bd-bdtopbot-bdwhite'>"+htitle+"<\/h3>";
hotelwrap += "<\/div>";
hotelwrap += "<\/div>";
hotelwrap += "<\/div><\/a>";
$('#datahotel').append(hotelwrap);

 })});
  });

$(document).on('pagebeforeshow',"#hasil", function (event, data) {
    var theid = $(this).data("url").split("?")[1];
    theid = theid.replace("id=","");
$.getJSON("obyekwisata.json",
        function(data){
          $.each(data.posts, function(i,posts){
  if(posts.id == theid)
  {
		var title=posts.title_plain;
		var content=posts.content;
		var excerpt=posts.excerpt;
		var thumb=posts.thumbnail_images.mobile.url;
var pagewrap="";
pagewrap += "<div class='pad0'>";
pagewrap += "<div class='img_wrapper'>";
pagewrap += "<div class='diengload'><img src='"+thumb+"'\/><\/div>";
pagewrap += "<\/div>";
pagewrap += "<div class='pad10 font80 fgrey'><h3>"+title+"</h3><p>"+content+"</p><\/div>";
pagewrap += "<\/div>";

$('#datahasil').html(pagewrap);
  }
  }); });});
  
$(document).on('pagebeforeshow',"#hasilhotel", function (event, data) {
    var hid = $(this).data("url").split("?")[1];
    hid = hid.replace("hid=","");

$.getJSON("hotel.json",
        function(hdata){
$.each(hdata.posts, function(i,hposts){
  if(hposts.id == hid)
  {
		var title=hposts.title_plain;
		var content=hposts.content;
		var excerpt=hposts.excerpt;
		var thumb=hposts.thumbnail_images.mobile.url;
var hwrap="";
hwrap += "<div class='pad0'>";
hwrap += "<div class='img_wrapper'>";
hwrap += "<div class='diengload'><img src='"+thumb+"'\/><\/div>";
hwrap += "<\/div>";
hwrap += "<div class='pad20 font90 fgrey'><h3>"+title+"</h3><p>"+content+"</p><br\/><br\/><\/div>";
hwrap += "<\/div>";
$('#datahasilhotel').html(hwrap);
  }
  }); });});


