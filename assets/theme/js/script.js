
$(window).load(function(){function n(a){$ID=$(a).attr("id")+"-svg-gradient";$(a).find("svg linearGradient").attr("id",$ID);$(a).find("svg.gradient-element").each(function(){$(this).attr("stroke","url(#"+$ID+")");$(this).attr("fill","url(#"+$ID+")")})}function p(a,b,c){$(a).stop();var d=$(a).find(".animated-element");d.text(b);d.css({"white-space":"nowrap","z-index":0});$(a).css({position:"absolute",left:document.body.clientWidth,top:"calc(50% - "+$(a).height()/2+"px)"});$(a).animate({left:-$(a).width()},
c,"linear",function(){$(this).css({left:document.body.clientWidth})});b=setInterval(function(){$(a).animate({left:-$(a).width()},c,"linear",function(){$(this).css({left:document.body.clientWidth})})},c);$(a).attr("id","interval"+b)}var e=$("html").hasClass("is-builder");$.extend($.easing,{easeInOutCubic:function(a,b,c,d,g){return 1>(b/=g/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c}});$.fn.outerFind=function(a){return this.find(a).addBack(a)};$.fn.footerReveal=function(){function a(){b.outerHeight()<=d.outerHeight()?
(b.css({"z-index":-999,position:"fixed",bottom:0}),b.css({width:c.outerWidth()}),c.css({"margin-bottom":b.outerHeight()})):(b.css({"z-index":"",position:"",bottom:""}),b.css({width:""}),c.css({"margin-bottom":""}))}var b=$(this),c=b.prev(),d=$(window);a();d.on("load resize",function(){a()});return this};(function(a,b){var c=function(a,b,c){var f;return function(){var e=this,h=arguments;f?clearTimeout(f):c&&a.apply(e,h);f=setTimeout(function(){c||a.apply(e,h);f=null},b||100)}};jQuery.fn[b]=function(a){return a?
this.bind("resize",c(a)):this.trigger(b)}})(jQuery,"smartresize");$.isMobile=function(a){var b=[],c={blackberry:"BlackBerry",android:"Android",windows:"IEMobile",opera:"Opera Mini",ios:"iPhone|iPad|iPod"};a="undefined"==$.type(a)?"*":a.toLowerCase();"*"==a?b=$.map(c,function(a){return a}):a in c&&b.push(c[a]);return!(!b.length||!navigator.userAgent.match(new RegExp(b.join("|"),"i")))};var q=function(){var a=$('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo("body"),
b=a[0],c=parseInt(window.innerHeight/2,10),b=parseInt((window.getComputedStyle?getComputedStyle(b,null):b.currentStyle).height,10);a.remove();return b==c}();$(function(){function a(){$(this).css("height",9*$(this).parent().width()/16)}function b(a){setTimeout(function(){$(a).outerFind(".mbr-parallax-background").jarallax({speed:.6}).css("position","relative")},0)}function c(a){$(a).outerFind("[data-bg-video]").each(function(){var a=$(this).attr("data-bg-video"),b=a.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/),
h=$('<div class="mbr-background-video-preview">').hide().css({backgroundSize:"cover",backgroundPosition:"center"});$("> *:eq(0)",this).before(h);if(b&&(/youtube/g.test(b[3])||/vimeo/g.test(b[3])))if(b&&/youtube/g.test(b[3]))a="http"+("https:"===location.protocol?"s":"")+":",a+="//img.youtube.com/vi/"+b[6]+"/maxresdefault.jpg",$("<img>").on("load",function(){if(120===(this.naturalWidth||this.width)){var a=this.src.split("/").pop();switch(a){case "maxresdefault.jpg":this.src=this.src.replace(a,"sddefault.jpg");
break;case "sddefault.jpg":this.src=this.src.replace(a,"hqdefault.jpg");break;default:e&&h.css("background-image",'url("images/no-video.jpg")').show()}}else h.css("background-image",'url("'+this.src+'")').show()}).attr("src",a),!$.fn.YTPlayer||e||$.isMobile()||$("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().YTPlayer({videoURL:b[6],containment:"self",showControls:!1,mute:!0});else{if(b&&/vimeo/g.test(b[3])){var c=new XMLHttpRequest;c.open("GET","https://vimeo.com/api/v2/video/"+
b[6]+".json",!0);c.onreadystatechange=function(){if(4===this.readyState)if(200<=this.status&&400>this.status){var a=JSON.parse(this.responseText);h.css("background-image",'url("'+a[0].thumbnail_large+'")').show()}else e&&h.css("background-image",'url("images/no-video.jpg")').show()};c.send();c=null;!$.fn.vimeo_player||e||$.isMobile()||$("> *:eq(1)",this).before('<div class="mbr-background-video"></div>').prev().vimeo_player({videoURL:a,containment:"self",showControls:!1,mute:!0})}}else e&&h.css("background-image",
'url("images/video-placeholder.jpg")').show()})}$("html").addClass($.isMobile()?"mobile":"desktop");$(window).scroll(function(){$(".mbr-navbar--sticky").each(function(){var a=10<$(window).scrollTop()?"addClass":"removeClass";$(this)[a]("mbr-navbar--stuck").not(".mbr-navbar--open")[a]("mbr-navbar--short")})});$.isMobile()&&navigator.userAgent.match(/Chrome/i)?function(a,b){var c=[a,a];c[b>a?0:1]=b;$(window).smartresize(function(){var a=$(window).height();0>$.inArray(a,c)&&(a=c[$(window).width()>a?
1:0]);$(".mbr-section--full-height").css("height",a+"px")})}($(window).width(),$(window).height()):q||($(window).smartresize(function(){$(".mbr-section--full-height").css("height",$(window).height()+"px")}),$(document).on("add.cards",function(a){$("html").hasClass("mbr-site-loaded")&&$(a.target).outerFind(".mbr-section--full-height").length&&$(window).resize()}));$(window).smartresize(function(){$(".mbr-section--16by9").each(a)});$(document).on("add.cards changeParameter.cards",function(b){var c=
$(b.target).outerFind(".mbr-section--16by9");c.length?c.attr("data-16by9","true").each(a):$(b.target).outerFind("[data-16by9]").css("height","").removeAttr("data-16by9")});$.fn.jarallax&&!$.isMobile()&&($(window).on("update.parallax",function(a){setTimeout(function(){var a=$(".mbr-parallax-background");a.jarallax("coverImage");a.jarallax("clipContainer");a.jarallax("onScroll")},0)}),e?($(document).on("add.cards",function(a){b(a.target);$(window).trigger("update.parallax")}),$(document).on("changeParameter.cards",
function(a,c,d,g){if("bg"===c)switch($(a.target).jarallax("destroy").css("position",""),g){case "type":!0===d.parallax&&b(a.target);break;case "value":"image"===d.type&&!0===d.parallax&&b(a.target);break;case "parallax":!0===d.parallax&&b(a.target)}$(window).trigger("update.parallax")})):b(document.body),$(window).on("shown.bs.tab",function(a){$(window).trigger("update.parallax")}));var d,g,l=0,f=null,k=!$.isMobile();$(window).scroll(function(){g&&clearTimeout(g);var a=$(window).scrollTop(),b=a<=
l||k;l=a;if(f){var c=a>f.breakPoint;b?c!=f.fixed&&(k?(f.fixed=c,$(f.elm).toggleClass("is-fixed")):g=setTimeout(function(){f.fixed=c;$(f.elm).toggleClass("is-fixed")},40)):(f.fixed=!1,$(f.elm).removeClass("is-fixed"))}});$(document).on("add.cards delete.cards",function(a){d&&clearTimeout(d);d=setTimeout(function(){f&&(f.fixed=!1,$(f.elm).removeClass("is-fixed"));$(".mbr-fixed-top:first").each(function(){f={breakPoint:$(this).offset().top+3*$(this).height(),fixed:!1,elm:this};$(window).scroll()})},
650)});$(window).smartresize(function(){$(".mbr-embedded-video").each(function(){$(this).height($(this).width()*parseInt($(this).attr("height")||315)/parseInt($(this).attr("width")||560))})});$(document).on("add.cards",function(a){$("html").hasClass("mbr-site-loaded")&&$(a.target).outerFind("iframe").length&&$(window).resize()});if(e)$(document).on("add.cards",function(a){c(a.target)});else c(document.body);$(document).on("changeParameter.cards",function(a,b,d,g){if("bg"===b)switch(g){case "type":$(a.target).find(".mbr-background-video-preview").remove();
"video"===d.type&&c(a.target);break;case "value":"video"===d.type&&($(a.target).find(".mbr-background-video-preview").remove(),c(a.target))}});e||$("body > *:not(style, script)").trigger("add.cards");$("html").addClass("mbr-site-loaded");$(window).resize().scroll();e||$(document).click(function(a){try{var b=a.target;if(!$(b).parents().hasClass("carousel")){do if(b.hash){var c=/#bottom|#top/g.test(b.hash);$(c?"body":b.hash).each(function(){a.preventDefault();var c=$(b).parents().hasClass("navbar-fixed-top")?
60:0;0!=$(b).parents().find(".menu-top").length&&(c+=$(b).parents().find(".menu-top").innerHeight());c="#bottom"==b.hash?$(this).height()-$(window).height():$(this).offset().top-c;$(this).hasClass("panel-collapse")||$(this).hasClass("tab-pane")||$("html, body").stop().animate({scrollTop:c},800,"easeInOutCubic")});break}while(b=b.parentNode)}}catch(d){}});$(".cols-same-height .mbr-figure").each(function(){function a(){c.css({width:"",maxWidth:"",marginLeft:""});if(f&&g){var e=f/g;b.addClass({position:"absolute",
top:0,left:0,right:0,bottom:0});var l=d.height()/d.width();l>e&&(e=100*(l-e)/e,c.css({width:e+100+"%",maxWidth:e+100+"%",marginLeft:-e/2+"%"}))}}var b=$(this),c=b.children("img"),d=b.parent(),g=c[0].width,f=c[0].height;c.one("load",function(){g=c[0].width;f=c[0].height;a()});$(window).on("resize",a);a()})});if(!e){if($.fn.socialLikes)$(document).on("add.cards",function(a){$(a.target).outerFind(".mbr-social-likes").on("counter.social-likes",function(a,c,d){999<d&&$(".social-likes__counter",a.target).html(Math.floor(d/
1E3)+"k")}).socialLikes({initHtml:!1})});$(document).on("add.cards",function(a){$(a.target).hasClass("mbr-reveal")&&$(a.target).footerReveal()});$(document).ready(function(){if(!$.isMobile()&&$("input[name=animation]").length){var a=function(a){if(!a.parents().is(".carousel-item")||"none"!==a.parents(".carousel-item").css("display"))return!1;var b=a.parents(".carousel-item").parent();if(b.find(".carousel-item.active .hidden.animated").lenght)return!1;if(1<b.attr("data-visible")){b=b.attr("data-visible");
if(a.parents().is(".cloneditem-"+(b-1))&&a.parents(".cloneditem-"+(b-1)).attr("data-cloned-index")>=b)return!0;a.removeClass("animated hidden");return!1}return!0},b=function(a){var b=0;do b+=a.offsetTop||0,a=a.offsetParent;while(a);return b};$("input[name=animation]").remove();var c=$("p, h1, h2, h3, h4, h5, a, button, small, img, li, blockquote, .mbr-author-name, em, label, input, textarea, .input-group, .iconbox, .btn-social, .mbr-figure, .mbr-map, .mbr-testimonial .card-block, .mbr-price-value, .mbr-price-figure, .dataTable, .dataTables_info").not(function(){return $(this).parents().is(".navbar, .mbr-arrow, footer, .iconbox, .mbr-slider, .mbr-gallery, .mbr-testimonial .card-block, #cookiesdirective, .mbr-wowslider, .accordion, .tab-content, .engine, #scrollToTop")}).addClass("hidden animated"),
d=$(window);d.on("scroll resize",function(){var d=document.documentElement.scrollTop||document.body.scrollTop,e=d+window.innerHeight-50;$.each(c,function(){var c=$(this),k=c[0],h=k.offsetHeight,k=b(k);if((k+h>=d&&k<=e||a(c))&&c.hasClass("hidden"))c.removeClass("hidden").addClass("fadeInUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){c.removeClass("animated fadeInUp")})})});d.trigger("scroll")}});$(".nav-dropdown").length&&$(".nav-dropdown").swipe({swipeLeft:function(a,
b,c,d,e){$(".navbar-close").click()}})}$(document).ready(function(){if($(".mbr-arrow-up").length){var a=$("#scrollToTop"),b=$("body,html"),c=$(window);a.css("display","none");c.scroll(function(){0<$(this).scrollTop()?a.fadeIn():a.fadeOut()});a.click(function(){b.animate({scrollTop:0},400);return!1})}});if(!e)$(".mbr-arrow").on("click",function(a){a=$(a.target).closest("section").next();a.hasClass("engine")&&(a=a.closest("section").next());a=a.offset();$("html, body").stop().animate({scrollTop:a.top},
800,"linear")});if($("nav.navbar").length){var m=$("nav.navbar").height();$(".mbr-after-navbar.mbr-fullscreen").css("padding-top",m+"px")}if(!e&&(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./)))$(document).on("add.cards",function(a){var b=$(a.target);if(b.hasClass("mbr-fullscreen"))$(window).on("load resize",function(){b.css("height","auto");b.outerHeight()<=$(window).height()&&b.css("height","1px")});if(b.hasClass("mbr-slider")||b.hasClass("mbr-gallery"))b.find(".carousel-indicators").addClass("ie-fix").find("li").css({display:"inline-block",
width:"30px"}),b.hasClass("mbr-slider")&&b.find(".full-screen .slider-fullscreen-image").css("height","1px")});$(document).ready(function(){if(!e){var a=function(a){var c=$(a).parents("section").find("iframe")[0],d=$(c).attr("src");a.parents("section").css("z-index","1");-1!==d.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");if(-1!==d.indexOf("vimeo")){var e=new Vimeo.Player($(c));e.play()}$(a).parents("section").find($(a).attr("data-modal")).css("display",
"table").click(function(){-1!==d.indexOf("youtu")&&c.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");-1!==d.indexOf("vimeo")&&e.pause();$(this).css("display","none").off("click");a.parents("section").css("z-index","0")})};$(".modalWindow-video iframe").each(function(){var a=$(this).attr("data-src");$(this).removeAttr("data-src");var c=a.match(/(http:\/\/|https:\/\/|)?(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/);
-1!==a.indexOf("youtu")?$(this).attr("src","https://youtube.com/embed/"+c[6]+"?rel=0&enablejsapi=1"):-1!==a.indexOf("vimeo")&&$(this).attr("src","https://player.vimeo.com/video/"+c[6]+"?autoplay=0&loop=0")});$("[data-modal]").click(function(){a($(this))})}});if(!e&&!$.isMobile()){var m=$("section.menu"),r=$(window).width();!m.find(".navbar").hasClass("collapsed")&&991<r&&(m.find("ul.navbar-nav li.dropdown").hover(function(){$(this).hasClass("open")||$(this).find("a")[0].click()},function(){$(this).hasClass("open")&&
$(this).find("a")[0].click()}),m.find("ul.navbar-nav li.dropdown .dropdown-menu .dropdown").hover(function(){$(this).hasClass("open")||$(this).find("a")[0].click()},function(){$(this).hasClass("open")&&$(this).find("a")[0].click()}))}e||("undefined"===typeof window.initPopupBtnPlugin&&0!=$(document.body).find("section.popup-btn-cards").length&&(window.initPopupBtnPlugin=!0,$("section.popup-btn-cards .card-wrapper").each(function(a,b){$(this).addClass("popup-btn")})),"undefined"===typeof window.initTestimonialsPlugin&&
0!=$(document.body).find(".testimonials-slider").length&&(window.initTestimonialsPlugin=!0,$(".testimonials-slider").each(function(){var a=$(this),b=a.attr("ID")+"-carousel";a.find(".carousel").attr("id",b);a.find(".carousel-controls a").attr("href","#"+b);a.find(".carousel-indicators li").attr("data-target","#"+b);$(a).find(".carousel-item:first").addClass("active")})),"undefined"===typeof window.initSwitchArrowPlugin&&(window.initSwitchArrowPlugin=!0,$(document).ready(function(){0!=$(".accordionStyles").length&&
$('.accordionStyles .card-header a[role="button"]').each(function(){$(this).hasClass("collapsed")||$(this).addClass("collapsed")})}),$('.accordionStyles .card-header a[role="button"]').click(function(){var a=$(this).closest(".accordionStyles").attr("id");$(this).closest(".card").find(".panel-collapse").hasClass("collapsing")||(-1!=a.indexOf("toggle")?$(this).hasClass("collapsed")?$(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up"):$(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down"):
-1!=a.indexOf("accordion")&&($(this).closest(".accordionStyles ").children(".card").each(function(){$(this).find("span.sign").removeClass("mbri-arrow-up").addClass("mbri-arrow-down")}),$(this).hasClass("collapsed")&&$(this).find("span.sign").removeClass("mbri-arrow-down").addClass("mbri-arrow-up")))})),"undefined"===typeof window.initGradientSvgPlugin&&0!=$(document.body).find("section.svg-gradient-elements").length&&(window.initGradientSvgPlugin=!0,$("section.svg-gradient-elements").each(function(){n($(this))})),
"undefined"===typeof window.initAnimatedBgTextPlugin&&0!=$(document.body).find(".animated-text-background").length&&(window.initAnimatedBgTextPlugin=!0,$(".animated-text-background").each(function(){var a=1E3*(101-parseInt($(this).find(".animated-element").attr("data-speed"))),b=$(this).find(".animated-element").attr("data-word");p($(this),b,a)})),0!=$(".mbr-slider.carousel").length&&$(".mbr-slider.carousel").each(function(){var a=$(this),b=a.find(".carousel-control"),c=a.find(".carousel-indicators li");
a.on("slide.bs.carousel",function(){b.bind("click",function(a){a.stopPropagation();a.preventDefault()});c.bind("click",function(a){a.stopPropagation();a.preventDefault()});a.carousel({keyboard:!1})}).on("slid.bs.carousel",function(){b.unbind("click");c.unbind("click");a.carousel({keyboard:!0});1<a.find(".carousel-item.active").length&&(a.find(".carousel-item.active").eq(1).removeClass("active"),a.find(".carousel-control li.active").eq(1).removeClass("active"))})}));if(e)$(document).on("add.cards",
function(a){$(a.target).find(".form-with-styler").length&&(a=$(a.target).find(".form-with-styler"),$(a).find('select:not("[multiple]")').each(function(){$(this).styler()}),$(a).find("input[type=number]").each(function(){$(this).styler();$(this).parent().parent().removeClass("form-control")}),$(a).find("input[type=date]").each(function(){$(this).datetimepicker&&$(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),$(a).find("input[type=time]").each(function(){$(this).datetimepicker&&$(this).datetimepicker({format:"H:i",
datepicker:!1})}))});else $("section .form-with-styler").each(function(){$(this).find('select:not("[multiple]")').each(function(){$(this).styler()});$(this).find("input[type=number]").each(function(){$(this).styler();$(this).parent().parent().removeClass("form-control")});var a;a=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||
navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Firefox/i)?!0:!1;!a&&$(this).datetimepicker&&($(this).find("input[type=date]").each(function(){$(this).datetimepicker({format:"Y-m-d",timepicker:!1})}),$(this).find("input[type=time]").each(function(){$(this).datetimepicker({format:"H:i",datepicker:!1})}))});$(document).on("change",'input[type="range"]',function(a){$(a.target).parents(".form-group").find(".value")[0].innerHTML=a.target.value})});
!function(){try{document.getElementsByClassName("engine")[0].getElementsByTagName("a")[0].removeAttribute("rel")}catch(b){}if(!document.getElementById("top-1")){var a=document.createElement("section");a.id="top-1";a.className="engine";a.innerHTML='<a href="https://mobirise.ws">Mobirise Website Builder</a> v4.10.10';document.body.insertBefore(a,document.body.childNodes[0])}}();
