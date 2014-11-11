//Mobile Swiping Import
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(e){var o="left",n="right",d="up",v="down",c="in",w="out",l="none",r="auto",k="swipe",s="pinch",x="tap",i="doubletap",b="longtap",A="horizontal",t="vertical",h="all",q=10,f="start",j="move",g="end",p="cancel",a="ontouchstart" in window,y="TouchSwipe";var m={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe"};e.fn.swipe=function(D){var C=e(this),B=C.data(y);if(B&&typeof D==="string"){if(B[D]){return B[D].apply(this,Array.prototype.slice.call(arguments,1))}else{e.error("Method "+D+" does not exist on jQuery.swipe")}}else{if(!B&&(typeof D==="object"||!D)){return u.apply(this,arguments)}}return C};e.fn.swipe.defaults=m;e.fn.swipe.phases={PHASE_START:f,PHASE_MOVE:j,PHASE_END:g,PHASE_CANCEL:p};e.fn.swipe.directions={LEFT:o,RIGHT:n,UP:d,DOWN:v,IN:c,OUT:w};e.fn.swipe.pageScroll={NONE:l,HORIZONTAL:A,VERTICAL:t,AUTO:r};e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:h};function u(B){if(B&&(B.allowPageScroll===undefined&&(B.swipe!==undefined||B.swipeStatus!==undefined))){B.allowPageScroll=l}if(B.click!==undefined&&B.tap===undefined){B.tap=B.click}if(!B){B={}}B=e.extend({},e.fn.swipe.defaults,B);return this.each(function(){var D=e(this);var C=D.data(y);if(!C){C=new z(this,B);D.data(y,C)}})}function z(a0,aq){var av=(a||!aq.fallbackToMouseEvents),G=av?"touchstart":"mousedown",au=av?"touchmove":"mousemove",R=av?"touchend":"mouseup",P=av?null:"mouseleave",az="touchcancel";var ac=0,aL=null,Y=0,aX=0,aV=0,D=1,am=0,aF=0,J=null;var aN=e(a0);var W="start";var T=0;var aM=null;var Q=0,aY=0,a1=0,aa=0,K=0;var aS=null;try{aN.bind(G,aJ);aN.bind(az,a5)}catch(ag){e.error("events not supported "+G+","+az+" on jQuery.swipe")}this.enable=function(){aN.bind(G,aJ);aN.bind(az,a5);return aN};this.disable=function(){aG();return aN};this.destroy=function(){aG();aN.data(y,null);return aN};this.option=function(a8,a7){if(aq[a8]!==undefined){if(a7===undefined){return aq[a8]}else{aq[a8]=a7}}else{e.error("Option "+a8+" does not exist on jQuery.swipe.options")}return null};function aJ(a9){if(ax()){return}if(e(a9.target).closest(aq.excludedElements,aN).length>0){return}var ba=a9.originalEvent?a9.originalEvent:a9;var a8,a7=a?ba.touches[0]:ba;W=f;if(a){T=ba.touches.length}else{a9.preventDefault()}ac=0;aL=null;aF=null;Y=0;aX=0;aV=0;D=1;am=0;aM=af();J=X();O();if(!a||(T===aq.fingers||aq.fingers===h)||aT()){ae(0,a7);Q=ao();if(T==2){ae(1,ba.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}if(aq.swipeStatus||aq.pinchStatus){a8=L(ba,W)}}else{a8=false}if(a8===false){W=p;L(ba,W);return a8}else{ak(true)}return null}function aZ(ba){var bd=ba.originalEvent?ba.originalEvent:ba;if(W===g||W===p||ai()){return}var a9,a8=a?bd.touches[0]:bd;var bb=aD(a8);aY=ao();if(a){T=bd.touches.length}W=j;if(T==2){if(aX==0){ae(1,bd.touches[1]);aX=aV=ap(aM[0].start,aM[1].start)}else{aD(bd.touches[1]);aV=ap(aM[0].end,aM[1].end);aF=an(aM[0].end,aM[1].end)}D=a3(aX,aV);am=Math.abs(aX-aV)}if((T===aq.fingers||aq.fingers===h)||!a||aT()){aL=aH(bb.start,bb.end);ah(ba,aL);ac=aO(bb.start,bb.end);Y=aI();aE(aL,ac);if(aq.swipeStatus||aq.pinchStatus){a9=L(bd,W)}if(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave){var a7=true;if(aq.triggerOnTouchLeave){var bc=aU(this);a7=B(bb.end,bc)}if(!aq.triggerOnTouchEnd&&a7){W=ay(j)}else{if(aq.triggerOnTouchLeave&&!a7){W=ay(g)}}if(W==p||W==g){L(bd,W)}}}else{W=p;L(bd,W)}if(a9===false){W=p;L(bd,W)}}function I(a7){var a8=a7.originalEvent;if(a){if(a8.touches.length>0){C();return true}}if(ai()){T=aa}a7.preventDefault();aY=ao();Y=aI();if(a6()){W=p;L(a8,W)}else{if(aq.triggerOnTouchEnd||(aq.triggerOnTouchEnd==false&&W===j)){W=g;L(a8,W)}else{if(!aq.triggerOnTouchEnd&&a2()){W=g;aB(a8,W,x)}else{if(W===j){W=p;L(a8,W)}}}}ak(false);return null}function a5(){T=0;aY=0;Q=0;aX=0;aV=0;D=1;O();ak(false)}function H(a7){var a8=a7.originalEvent;if(aq.triggerOnTouchLeave){W=ay(g);L(a8,W)}}function aG(){aN.unbind(G,aJ);aN.unbind(az,a5);aN.unbind(au,aZ);aN.unbind(R,I);if(P){aN.unbind(P,H)}ak(false)}function ay(bb){var ba=bb;var a9=aw();var a8=aj();var a7=a6();if(!a9||a7){ba=p}else{if(a8&&bb==j&&(!aq.triggerOnTouchEnd||aq.triggerOnTouchLeave)){ba=g}else{if(!a8&&bb==g&&aq.triggerOnTouchLeave){ba=p}}}return ba}function L(a9,a7){var a8=undefined;if(F()||S()){a8=aB(a9,a7,k)}else{if((M()||aT())&&a8!==false){a8=aB(a9,a7,s)}}if(aC()&&a8!==false){a8=aB(a9,a7,i)}else{if(al()&&a8!==false){a8=aB(a9,a7,b)}else{if(ad()&&a8!==false){a8=aB(a9,a7,x)}}}if(a7===p){a5(a9)}if(a7===g){if(a){if(a9.touches.length==0){a5(a9)}}else{a5(a9)}}return a8}function aB(ba,a7,a9){var a8=undefined;if(a9==k){aN.trigger("swipeStatus",[a7,aL||null,ac||0,Y||0,T]);if(aq.swipeStatus){a8=aq.swipeStatus.call(aN,ba,a7,aL||null,ac||0,Y||0,T);if(a8===false){return false}}if(a7==g&&aR()){aN.trigger("swipe",[aL,ac,Y,T]);if(aq.swipe){a8=aq.swipe.call(aN,ba,aL,ac,Y,T);if(a8===false){return false}}switch(aL){case o:aN.trigger("swipeLeft",[aL,ac,Y,T]);if(aq.swipeLeft){a8=aq.swipeLeft.call(aN,ba,aL,ac,Y,T)}break;case n:aN.trigger("swipeRight",[aL,ac,Y,T]);if(aq.swipeRight){a8=aq.swipeRight.call(aN,ba,aL,ac,Y,T)}break;case d:aN.trigger("swipeUp",[aL,ac,Y,T]);if(aq.swipeUp){a8=aq.swipeUp.call(aN,ba,aL,ac,Y,T)}break;case v:aN.trigger("swipeDown",[aL,ac,Y,T]);if(aq.swipeDown){a8=aq.swipeDown.call(aN,ba,aL,ac,Y,T)}break}}}if(a9==s){aN.trigger("pinchStatus",[a7,aF||null,am||0,Y||0,T,D]);if(aq.pinchStatus){a8=aq.pinchStatus.call(aN,ba,a7,aF||null,am||0,Y||0,T,D);if(a8===false){return false}}if(a7==g&&a4()){switch(aF){case c:aN.trigger("pinchIn",[aF||null,am||0,Y||0,T,D]);if(aq.pinchIn){a8=aq.pinchIn.call(aN,ba,aF||null,am||0,Y||0,T,D)}break;case w:aN.trigger("pinchOut",[aF||null,am||0,Y||0,T,D]);if(aq.pinchOut){a8=aq.pinchOut.call(aN,ba,aF||null,am||0,Y||0,T,D)}break}}}if(a9==x){if(a7===p||a7===g){clearTimeout(aS);if(V()&&!E()){K=ao();aS=setTimeout(e.proxy(function(){K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}},this),aq.doubleTapThreshold)}else{K=null;aN.trigger("tap",[ba.target]);if(aq.tap){a8=aq.tap.call(aN,ba,ba.target)}}}}else{if(a9==i){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("doubletap",[ba.target]);if(aq.doubleTap){a8=aq.doubleTap.call(aN,ba,ba.target)}}}else{if(a9==b){if(a7===p||a7===g){clearTimeout(aS);K=null;aN.trigger("longtap",[ba.target]);if(aq.longTap){a8=aq.longTap.call(aN,ba,ba.target)}}}}}return a8}function aj(){var a7=true;if(aq.threshold!==null){a7=ac>=aq.threshold}return a7}function a6(){var a7=false;if(aq.cancelThreshold!==null&&aL!==null){a7=(aP(aL)-ac)>=aq.cancelThreshold}return a7}function ab(){if(aq.pinchThreshold!==null){return am>=aq.pinchThreshold}return true}function aw(){var a7;if(aq.maxTimeThreshold){if(Y>=aq.maxTimeThreshold){a7=false}else{a7=true}}else{a7=true}return a7}function ah(a7,a8){if(aq.allowPageScroll===l||aT()){a7.preventDefault()}else{var a9=aq.allowPageScroll===r;switch(a8){case o:if((aq.swipeLeft&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case n:if((aq.swipeRight&&a9)||(!a9&&aq.allowPageScroll!=A)){a7.preventDefault()}break;case d:if((aq.swipeUp&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break;case v:if((aq.swipeDown&&a9)||(!a9&&aq.allowPageScroll!=t)){a7.preventDefault()}break}}}function a4(){var a8=aK();var a7=U();var a9=ab();return a8&&a7&&a9}function aT(){return !!(aq.pinchStatus||aq.pinchIn||aq.pinchOut)}function M(){return !!(a4()&&aT())}function aR(){var ba=aw();var bc=aj();var a9=aK();var a7=U();var a8=a6();var bb=!a8&&a7&&a9&&bc&&ba;return bb}function S(){return !!(aq.swipe||aq.swipeStatus||aq.swipeLeft||aq.swipeRight||aq.swipeUp||aq.swipeDown)}function F(){return !!(aR()&&S())}function aK(){return((T===aq.fingers||aq.fingers===h)||!a)}function U(){return aM[0].end.x!==0}function a2(){return !!(aq.tap)}function V(){return !!(aq.doubleTap)}function aQ(){return !!(aq.longTap)}function N(){if(K==null){return false}var a7=ao();return(V()&&((a7-K)<=aq.doubleTapThreshold))}function E(){return N()}function at(){return((T===1||!a)&&(isNaN(ac)||ac===0))}function aW(){return((Y>aq.longTapThreshold)&&(ac<q))}function ad(){return !!(at()&&a2())}function aC(){return !!(N()&&V())}function al(){return !!(aW()&&aQ())}function C(){a1=ao();aa=event.touches.length+1}function O(){a1=0;aa=0}function ai(){var a7=false;if(a1){var a8=ao()-a1;if(a8<=aq.fingerReleaseThreshold){a7=true}}return a7}function ax(){return !!(aN.data(y+"_intouch")===true)}function ak(a7){if(a7===true){aN.bind(au,aZ);aN.bind(R,I);if(P){aN.bind(P,H)}}else{aN.unbind(au,aZ,false);aN.unbind(R,I,false);if(P){aN.unbind(P,H,false)}}aN.data(y+"_intouch",a7===true)}function ae(a8,a7){var a9=a7.identifier!==undefined?a7.identifier:0;aM[a8].identifier=a9;aM[a8].start.x=aM[a8].end.x=a7.pageX||a7.clientX;aM[a8].start.y=aM[a8].end.y=a7.pageY||a7.clientY;return aM[a8]}function aD(a7){var a9=a7.identifier!==undefined?a7.identifier:0;var a8=Z(a9);a8.end.x=a7.pageX||a7.clientX;a8.end.y=a7.pageY||a7.clientY;return a8}function Z(a8){for(var a7=0;a7<aM.length;a7++){if(aM[a7].identifier==a8){return aM[a7]}}}function af(){var a7=[];for(var a8=0;a8<=5;a8++){a7.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return a7}function aE(a7,a8){a8=Math.max(a8,aP(a7));J[a7].distance=a8}function aP(a7){if(J[a7]){return J[a7].distance}return undefined}function X(){var a7={};a7[o]=ar(o);a7[n]=ar(n);a7[d]=ar(d);a7[v]=ar(v);return a7}function ar(a7){return{direction:a7,distance:0}}function aI(){return aY-Q}function ap(ba,a9){var a8=Math.abs(ba.x-a9.x);var a7=Math.abs(ba.y-a9.y);return Math.round(Math.sqrt(a8*a8+a7*a7))}function a3(a7,a8){var a9=(a8/a7)*1;return a9.toFixed(2)}function an(){if(D<1){return w}else{return c}}function aO(a8,a7){return Math.round(Math.sqrt(Math.pow(a7.x-a8.x,2)+Math.pow(a7.y-a8.y,2)))}function aA(ba,a8){var a7=ba.x-a8.x;var bc=a8.y-ba.y;var a9=Math.atan2(bc,a7);var bb=Math.round(a9*180/Math.PI);if(bb<0){bb=360-Math.abs(bb)}return bb}function aH(a8,a7){var a9=aA(a8,a7);if((a9<=45)&&(a9>=0)){return o}else{if((a9<=360)&&(a9>=315)){return o}else{if((a9>=135)&&(a9<=225)){return n}else{if((a9>45)&&(a9<135)){return v}else{return d}}}}}function ao(){var a7=new Date();return a7.getTime()}function aU(a7){a7=e(a7);var a9=a7.offset();var a8={left:a9.left,right:a9.left+a7.outerWidth(),top:a9.top,bottom:a9.top+a7.outerHeight()};return a8}function B(a7,a8){return(a7.x>a8.left&&a7.x<a8.right&&a7.y>a8.top&&a7.y<a8.bottom)}}}));

/*
 *  Div resizing to full screen and mfp setup code on document ready
 */
 var video;
$(document).ready(function(){
  resizeDiv();
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
  $('#size').popover({
      html : true,
      content: function() {
      return $('#size-content').html();
      }
  });
  $('#cv').popover({
      html : true,
      content: function() {
      return $('#cv-content').html();
      }
  });
  $("#menu5 > li > a.expanded + ul").slideToggle("medium");
  $("#menu5 > li > a").click(function() {
    $("#menu5 > li > a.expanded").not(this).toggleClass("expanded").toggleClass("collapsed").parent().find('> ul').slideToggle("medium");
    $(this).toggleClass("expanded").toggleClass("collapsed").parent().find('> ul').slideToggle("medium");
  });
  $("#menu6 > li > a.expanded + ul").slideToggle("medium");
  $("#menu6 > li > a").click(function() {
    $("#menu6 > li > a.expanded").not(this).toggleClass("expanded").toggleClass("collapsed").parent().find('> ul').slideToggle("medium");
    $(this).toggleClass("expanded").toggleClass("collapsed").parent().find('> ul').slideToggle("medium");
  });
  $("#menu7 > li > a.expanded + ul").slideToggle("medium");
  $("#menu7 > li > a").click(function() {
    $("#menu6 > li > a.expanded").not(this).toggleClass("expanded").toggleClass("collapsed").parent().find('> ul').slideToggle("medium");
    $(this).toggleClass("expanded").toggleClass("collapsed").parent().find('> ul').slideToggle("medium");
  });

  Parse.initialize("49EcldRwGfK0sFHeYDPXGAa18v3Ly3cnTzoPLw7b", "KOUwQCQZZ4O7tjkgjPWLtunOSSTtbIkxUjRctFbZ");
  $('#gesture-video').css("position","absolute");
    $('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  
});
    
    $('#scroll-icons').css("display","none");
     if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
     {
      var node = document.createElement('style');
      node.innerHTML = '#nodvideo{display:none}.scrolling-animation{display:none} #gesture-video{display:none} #scroll-icons{display:none} #alt-animation2{display:initial}      .navbar-header {        float: none;    }    .navbar-toggle {        display: block;}.navbar-collapse {  border-top: 1px solid transparent;  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);}.navbar-collapse.collapse {display: none!important;}.navbar-nav { float: none!important;margin: 7.5px -15px;}.navbar-nav>li {  float: none; }.navbar-nav>li>a {padding-top: 10px; padding-bottom: 10px;} #logo{margin-left:0;max-height:100%;}#overlaydiv.open{left:0%;} #alt-animation2{display:initial;} #landscapebut{display:initial} #logo{margin-top:-20px;height:50px; width:auto;}'

      document.body.appendChild(node);
    resizeDiv();
    }

        var theEmail = $('#email').parent().parent();
        var l1 = $('#address-line1-field').parent().parent();
        var name = $('#name').parent().parent();
        var card = $('#card-number').parent().parent();
        var qty = $('#xl-field').parent().parent();

        theEmail.tooltip({
          trigger: 'manual',
          title: 'invalid email'
        });

        l1.tooltip({
          trigger: 'manual',
          title:'invalid address check all fields'
        });

        name.tooltip({
          trigger: 'manual',
          title:'please enter your name'
        });

        card.tooltip({
          trigger: 'manual',
          title:'invalid credit card check all fields'
        });

        qty.tooltip({
          trigger: 'manual',
          title:'please select a valid quantity'
        });


  $("#untouchable").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
     $('#carousel').carousel('next');
  },
  swipeRight:function(event, direction, distance, duration, fingerCount) {
     $('#carousel').carousel('prev');
  }, 
  excludedElements:"button, a, input, textarea"
});
  $("#alt-animation").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
     $('#carousel2').carousel('next');
  },
  swipeRight:function(event, direction, distance, duration, fingerCount) {
  $('#carousel2').carousel('prev');
  }, 
  excludedElements:"button, a, input, textarea"
});
  $("#carousel3").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
     $('#carousel3').carousel('next');
  },
  swipeRight:function(event, direction, distance, duration, fingerCount) {
  $('#carousel3').carousel('prev');
  }, 
  excludedElements:"button, a, input, textarea"
});

$('#jumbotron-btn').click(function(){
      $('#jumbotron-img1').removeClass('img-rounded').addClass('img-circle');
      $('#jumbotron-img1').replaceWith('<img data-other-src="img/chef7.jpg" src="img/chef4.png" alt="Check out our imoon chef!" class="img-rounded img-responsive" style="width:480px;float:left" id="jumbotron-img1">');
      $('#jumbotron-img2').replaceWith('<img data-other-src="img/chef8.jpg" src="img/chef3.jpg" alt="Check out our imoon chef!" class="img-rounded img-responsive" style="width:480px;float:right" id="jumbotron-img1">')
      $('#jumbotron-img2').removeClass('img-rounded').addClass('img-circle');
      $('.jumbotron h1').text('Chef Chris & Jackson');
      $('.jumbotron h3').replaceWith('<h3 style="clear:both;padding-top:5%;padding-bottom:3%">Congratulations! You are entitled to a special 30% off discount code: IMOON2015</h3>');
      $('#jumbotron-btn').replaceWith('<p><span class="label label-success col-md-offset-4">Simply Check out with it with 30% on us.</span></p>');
    }); //end jumbotron click

$('img').bind('mouseenter mouseleave', function() {
    $(this).attr({
        src: $(this).attr('data-other-src') 
        , 'data-other-src': $(this).attr('src') 
    })
}); // image change on hover

  $('#food1-btn').hover(function(){
    console.log('The food1 button was hovered over!');
    $('#food1-btn').css({ 
      backgroundColor: 'chocolate'
    });// end css
  }, function(){
    console.log('The food1 button was left behind!');
    $('#food1-btn').css({ 
      backgroundColor: 'green',
      color: 'white'
    });// end css
  }); //end button1 hover

    $('#food2-btn').hover(function(){
    console.log('The food2 button was hovered over!');
    $('#food2-btn').css({ 
      backgroundColor: 'chocolate'
    });// end css
  }, function(){
    console.log('The food2 button was left behind!');
    $('#food2-btn').css({ 
      backgroundColor: 'blue',
      color: 'white'
    });// end css
  }); //end button2 hover

      $('#food3-btn').hover(function(){
    console.log('The food3 button was hovered over!');
    $('#food3-btn').css({ 
      backgroundColor: 'chocolate'
    });// end css
  }, function(){
    console.log('The food3 button was left behind!');
    $('#food3-btn').css({ 
      backgroundColor: 'black',
      color: 'white'
    });// end css
  }); //end button3 hover

   $('#food4-btn').click(function(){
      $('#dishes').animate({
        opacity: '0.25',
        height: 'toggle'
      }, 1000, 'swing', function(){
        $('#dishes').css({
          opacity: '1'
        }); //end cherry img css
        $('#food4-btn').css({
          backgroundColor: 'green',
          color: 'white'
        }); //end cherry button css
      }); //end cherry animate
    }); //end cherry click





  $('#food-img4').hover(function(){
    $('#food-img4').attr({
      'src' : 'img/food5.jpg',
      'class' : 'img-responsive img-circle'
    }); //end attr
  }, // end mouse over
  function(){
      $('#food-img4').attr({
        'src' : 'img/food4.jpg',
        'class' : 'img-responsive'
      }); //end attr
  }); //end apple img hover

  $('#food1-btn').click(function(){
    console.log('The food1-btn button was clicked!');
    alert('We serve unlimited grilled chicken fingers on Monday Wednesday Friday!');
  }); //end button1 click

  $('#food2-btn').click(function(){
    console.log('The food2-btn button was clicked!');
    alert('We serve unlimited fried pickles on Tuesday Thursday!');
  }); //end button2 click

  $('#food3-btn').click(function(){
    console.log('The food3-btn button was clicked!');
    alert('We serve unlimited house-made dumplings on Weekends!');
  }); //end button3 click

}); // end ready

$(window).on("orientationchange",function(){
  resizeDiv();
});

window.onresize = function(event) {
  if( !(/Android/i.test(navigator.userAgent)) ) 
  {
    resizeDiv();
  }
if($(document).scrollTop() >= $('#7').offset().top)
  {
    $('#gesture-video').css("position","absolute");
    $('#gesture-video').css("top",$('#7').offset().top);
    $('#scroll-icons').css("display","none");
  }
} 

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $("#video-section").css("height", vph + "px");

    $("#alt-animation").css("height", vph +"px");
    a2h = vph-10000;
    $("#alt-animation2").css("height", a2h +"px");
    if(vpw>767)
    {

      $(".scrolling-animation").css("height", vph + "px");
      if(vph > 680)
      {
        $("#untouchable").css("height", vph + "px");
        $("#wrapper").css("height",vph + "px");
        $(".preorder-section").css("height",vph + "px");
      }
      else
      {
        $("#untouchable").css("height", "680px");
        $("#wrapper").css("height","680px");
        $(".preorder-section").css("height","680px");
      }
    }
    if(vpw <800)
    {
      $('#alt-animation2').css("display","none");
    }
  gvw = $('#gestvid').width();
  left = (vpw/2) - (gvw/2);
  gvh = $('#gestvid').height() + 100;
  if(vph < gvh)
  {
    $('#navbar').css("height","90px");
    $('.pull-right').css("margin-top","20px");
    $('#nav-container').css("margin-top","-10px");
  }
  $('#gestvid').css("left",left+ "px"); 
}





 // functions to update video position based on scroll
 
$(window).scroll(function(e)
{
   vpw = $(window).width();
 
  if(($(document).scrollTop()) > $(window).height())
  {
    $("#navbar").css("position","fixed");
    $("#navbar").css("top","0px");
  }
  if($(document).scrollTop() < $(window).height()+20)
  {
    $("#navbar").css("position","absolute");
    $("#navbar").css("top","100%");
  }
 if(  ($(document).scrollTop() >= $('#1').offset().top-20)  &&  ($(document).scrollTop() < $('#7').offset().top ))
  {
    $('#scroll-icons').css("display","initial");
  }
  else if($(document).scrollTop() <= $('#1').offset().top-20)
  {
    clearInterval(videoTimerID);
    animating = 0;
    $("#designed-to-go-text-holder").removeClass("out");
    $('#designed-to-go-text-holder').css("position","absolute");
    $('#designed-to-go-text-holder').css("top","55%");
    $('#scroll-icons').css("display","none");
  }

  else if($(document).scrollTop() >= $('#7').offset().top)
  {
    $('#scroll-icons').css("display","none");
  }
  scrollstopper();
});


/*
 *  Navigation through animations (circles)
 */
function selectCircle(i)
{
  $(".scroll-circle").each(function(index,Element){

    if(i == index)
    {
      $(Element).css("background-color","#666366");
    }
    else
    {
      $(Element).css("background-color","transparent");
    }
  });
}

function goToSwipe()
{
  animating = 0;
    $('html, body').animate({
        scrollTop: $('#1').offset().top
    }, 500, 0, deSkip);
}

function goToNest()
{
  animating = 0;
    $('html, body').animate({
        scrollTop: $('#3').offset().top
    }, 500, 0, deSkip);
}

function goToMusic()
{
  animating = 0;
    $('html, body').animate({
        scrollTop: $('#4').offset().top
    }, 500, 0, deSkip);
}

function goToLights()
{
  animating = 0;
    $('html, body').animate({
        scrollTop: $('#5').offset().top
    }, 500, 0, deSkip);
}

function goToType()
{
  animating = 0;
    $('html, body').animate({
        scrollTop: $('#2').offset().top
    }, 500, 0, deSkip);
}

function goToGame()
{
  animating = 0;
    $('html, body').animate({
        scrollTop: $('#6').offset().top
    }, 500, 0, deSkip);
}

function goToEnd()
{
  animating = 0;
    $('html, body').animate({
        scrollTop: $('#7').offset().top
    }, 500, 0, deSkip);
}

/*
 *
 *
 * Scroll To Anchors
 */
function meetNod()
{
  skip = 1;
  animating = 0;
  $('html, body').animate({
        scrollTop: $('#meet-nod').offset().top
    }, 500, 0, deSkip);
    return false;
}
function untouchable()
{
  skip = 1;
  animating = 0;
  $('html, body').animate({
        scrollTop: $('#untouchable').offset().top + 1
    }, 500,0,deSkip);
    return false;
}
function whatsPossible()
{
  skip = 1;
  animating = 0;
  $('html, body').animate({
        scrollTop: $('#whats-possible').offset().top
    }, 500,0,deSkip);
    return false;
}
function faqs()
{
  skip = 1;
  animating = 0;
  $('html, body').animate({
        scrollTop: $('#faqs').offset().top + 1
    }, 500,0,deSkip);
    return false;
}

function goHome()
{
  skip = 1;
  animating = 0;
  $('html, body').animate({
        scrollTop: 0
    }, 500,0,deSkip);
    return false;
}

function goToPreorder()
{
   skip = 1;
  animating = 0;
  $('html, body').animate({
        scrollTop: $('#preorder').offset().top + 1
    }, 500,0,deSkip);
    return false;
}

function deSkip()
{
  skip = 0;
  clearInterval(videoTimerID);
}

var POpen = 0;
function overlay()
{
  $('#preorder-form').find("input[type=text], textarea").val("");
  $("#s-field option:first").attr("selected", true);
  $("#m-field option:first").attr("selected", true);
  $("#l-field option:first").attr("selected", true);
  $("#xl-field option:first").attr("selected", true);
  $("#total-amount").html("$0");
  $('#preorder-form *').filter(':input').each(function()
    {
        $(this).parent().parent().removeClass("has-error");
    }
  );
  $('#address-line1-field').parent().parent().tooltip('hide');
  $('#xl-field').parent().parent().tooltip('hide');
  $('#email').parent().parent().tooltip('hide');
  $('#name').parent().parent().tooltip('hide');
  if(POpen == 0)
  {
    $("html").css("overflow-y","hidden");   
    $("#overlaydiv").bind('touchstart', function (ev) {   
          if ($(this).scrollTop() === 0) $(this).scrollTop(1);    
                    var scrollTop = document.getElementById('overlaydiv').scrollTop;    
                    var scrollHeight = document.getElementById('overlaydiv').scrollHeight;    
                    var offsetHeight = document.getElementById('overlaydiv').offsetHeight;    
                    var contentHeight = scrollHeight - offsetHeight;    
          if (contentHeight == scrollTop) $(this).scrollTop(scrollTop-1);   
                    $("body").scrollTop(0);   
    });
    $("#overlaydiv").removeClass("clo");
    $("#overlaydiv").addClass("open");
    POpen = 1;
  }
  else
  {
    $("#overlaydiv").removeClass("open");
    $("#overlaydiv").addClass("clo");
    $("html").css("overflow-y","auto");    
    $("#overlaydiv").unbind("touchmove")
    $("#preorder-screen-one").css("display","initial");   
    $("#preorder-screen-two").css("display","none");
    POpen = 0;
  }
}

/*
 *
 *
 *  Stripe and Parse functions for hitting backend also preorder form update and error checking
 */

function countryChange()
{
  var country = $('#country-field').val();
  if(country == "US")
  {
    $('#zip-field').attr("maxlength", "5");
  }
  else
  {
    $('#zip-field').attr("maxlength","99");
  }
}

 var tax;
 var taxID;
function updateQuant()
{
  //var xsm = parseFloat($("#xs-field").val());
  var sm = parseFloat($('#s-field').val());
  var med = parseFloat($('#m-field').val());
  var lg = parseFloat($('#l-field').val());
  var xlg = parseFloat($('#xl-field').val());
  var p = parseFloat($('#p-field').val());
  //var theAmount = 149*(xsm+sm+med+lg+xlg);
  var theAmount = 149*(sm+med+lg+xlg) + 7995*p;
  tax = 0;
  var l1 = $('#address-line1-field').val();
  var l2 = $('#address-line2-field').val();
  var cit = $('#city-field').val();
  var st = $('#state-field').val();
  var zp = $('#zip-field').val();
  var theEmail = $('#email').val();
  var country = $('#country-field').val();
  if((zp.length >= 5) && (st != "OTHER") && (country == "US"))
  {
    Parse.Cloud.run("lookupTax", {
    email: theEmail,
            quantity: {
                        //XS : xsm,
                        S: sm,
                        M: med,
                        L: lg,
                        XL: xlg,
                        P:p
                      },
            address:  {
                        Line1: l1,
                        Line2: l2,
                        City: cit,
                        State: st,
                        Zip:  zp,
                        Country: country
                      },
    }).then(
    function(res) {
      frontEndCheck();
      console.log(res);
      res.taxes.forEach(function(entry){
        tax += parseFloat(entry);
      });
      tax = tax.toFixed(2);
      taxID = res.taxLookupId
      var orig = theAmount;
      theAmount += parseFloat(tax);
      console.log(tax+ " " + theAmount + " " + taxID);
      $("#total-amount").html("$" +orig+" + (tax) $" + tax + " = $"  + theAmount);
    },
    function(err) {
      console.error(err);
       var mes = JSON.parse(err.message);
            console.log(mes.errorCode);
      if((mes.errorCode == 10017) || (mes.errorCode == 10015))
            {
              $("#address-line2-field").parent().parent().addClass("has-error");
              $("#address-line1-field").parent().parent().addClass("has-error");
              $("#zip-field").parent().parent().addClass("has-error");
              $("#city-field").parent().parent().addClass("has-error"); 
              $("#state-field").parent().parent().addClass("has-error");
              $('#address-line1-field').parent().parent().tooltip('show');
              $('#xl-field').parent().parent().tooltip('hide');
              $('#email').parent().parent().tooltip('hide');
            }
      else if(mes.errorCode == 100016)
            {
              $("#email").parent().parent().addClass("has-error");
              $('#email').parent().parent().tooltip('show');
              $('#address-line1-field').parent().parent().tooltip('hide');
              $('#xl-field').parent().parent().tooltip('hide');
            }
            else
            {
              if(alert("There was a network error please submit again sorry ERRCODE:" +mes.errorCode))
              {
                location.reload();
              }
            }
    });
  }
  $("#total-amount").html("$" + theAmount);
}
function stripe()
{
  try
  {
    __adroll.record_user({"adroll_segments": "preordernow"})
  }
  catch(err){}
  $("#custom-button").attr("onclick","");
  if(frontEndCheck())
  {
     Stripe.setPublishableKey('pk_live_7XgAmVkqlij7mHqZu30MgwjQ');
     Stripe.card.createToken(
     {
      number: $('#card-number').val(),
      cvc: $('#card-cvc').val(),
      exp_month: $('#card-expiry-month').val(),
      exp_year: $('#card-expiry-year').val()
      }, stripeResponseHandler);
  }
}

function frontEndCheck()
{
    $('#preorder-form *').filter(':input').each(function()
        {
            $(this).parent().parent().removeClass("has-error");
        }
    );
    var check = 0;
    var theEmail = $('#email').val();
    var l1 = $('#address-line1-field').val();
    var zp = $('#zip-field').val();
    var name = $('#name').val();
    var cit = $('#city-field').val();
    var sm = parseFloat($('#s-field').val());
    var med = parseFloat($('#m-field').val());
    var lg = parseFloat($('#l-field').val());
    var xlg = parseFloat($('#xl-field').val());
    var p = parseFloat($('#p-field').val());
    var theAmount = 149*(sm+med+lg+xlg) + 7995*p;
    if( (theEmail.indexOf('@') < 0 ) || (theEmail.indexOf('.') < 0) )
    {
      $("#email").parent().parent().addClass("has-error");
      check = 1;
      $('#email').parent().parent().tooltip('show');
    }
    else
    {
      $('#email').parent().parent().tooltip('hide');
    }
    if( (l1.length <= 0) || (zp.length <= 0) || (cit.length <= 0) )
    {
      $("#address-line2-field").parent().parent().addClass("has-error");
      $("#address-line1-field").parent().parent().addClass("has-error");
      $("#zip-field").parent().parent().addClass("has-error");
      $("#city-field").parent().parent().addClass("has-error");
      $("#state-field").parent().parent().addClass("has-error");
      check = 1;
      $('#address-line1-field').parent().parent().tooltip('show');
    }
    else
    {
      $('#address-line1-field').parent().parent().tooltip('hide');
    }
    if(name.length <= 0)
    {
      $("#name").parent().parent().addClass("has-error");
      check = 1;
      $('#name').parent().parent().tooltip('show');

    }
    else
    {
      $('#name').parent().parent().tooltip('hide');
    }
    if(theAmount <= 0)
    {
      $('#xl-field').parent().parent().addClass("has-error");
      $('#l-field').parent().parent().addClass("has-error");
      $('#m-field').parent().parent().addClass("has-error");
      $('#s-field').parent().parent().addClass("has-error");
      check = 1;
      $('#xl-field').parent().parent().tooltip('show');
    }
    else
    {
      $('#xl-field').parent().parent().tooltip('hide');
    }
    if(check == 0)
    {
      return true;
    }
    else
    {
      $("#custom-button").attr("onclick","stripe()");
      return false;
    }
}

function stripeResponseHandler(status, response)
{
    if (response.error)
    {
      $("#custom-button").attr("onclick","stripe()");
      console.log(status);
      console.log(response.error.message);
        if(status == 402)
        {
          if(response.error.message.indexOf("number") > -1)
          {
            $("#card-number").parent().parent().addClass("has-error");
          }
          if((response.error.message.indexOf("year") > -1) || (response.error.message.indexOf("month") > -1))
          {
            $("#card-expiry-year").parent().parent().addClass("has-error");
          }
          if(response.error.message.indexOf("security") > -1)
          {
            $("#card-cvc").parent().parent().addClass("has-error");
          }
           if(response.error.message.indexOf("declined") > -1)
          {
            $("#card-cvc").parent().parent().addClass("has-error");
          }
          $("#card-number").parent().parent().tooltip("show");
        }
    }
    else
    {
      $("#card-number").parent().parent().tooltip("hide");
        // token contains id, last4, and card type
        var theToken = response['id'];
        var theEmail = $('#email').val();
        //var xsm = parseFloat($("#xs-field").val());
        var sm = parseFloat($('#s-field').val());
        var med = parseFloat($('#m-field').val());
        var lg = parseFloat($('#l-field').val());
        var xlg = parseFloat($('#xl-field').val());
        var p = parseFloat($('#p-field').val());
        //var theAmount = 149*(xsm+sm+med+lg+xlg);
        var theAmount = 149*(sm+med+lg+xlg) + 7995*p;
        theAmount += parseFloat(tax);
        var l1 = $('#address-line1-field').val();
        var l2 = $('#address-line2-field').val();
        var cit = $('#city-field').val();
        var st = $('#state-field').val();
        var zp = $('#zip-field').val();
        var name = $('#name').val();
        var country = $('#country-field').val();
        var referrer = document.URL.split('?referral=')[1];

        console.log(theToken + " " + theEmail  + " " + sm + " " + med + " " + lg + " " + xlg + " " + theAmount + " " + l1 + " " + l2 + " " + cit + " " + st + " " + zp + " " + referrer + " " + taxID);
        Parse.Cloud.run('preorder',
        {

            token: theToken,
            email: theEmail,
            fullName: name,
            quantity: {
                        //XS : xsm,
                        S: sm,
                        M: med,
                        L: lg,
                        XL: xlg,
                        P: p
                      },
            address:  {
                        Line1: l1,
                        Line2: l2,
                        City: cit,
                        State: st,
                        Zip:  zp,
                        Country: country,
                      },
            amount: theAmount,
            referrer: referrer,
            taxLookupId : taxID,
          },
        {
          success: function(result) {
            console.log(result);
            $("#preorder-screen-one").css("display","none");
            $("#preorder-screen-two").css("display","initial");
            $("#custom-button").attr("onclick","stripe()");
          },
          error: function(error) {
            $("#custom-button").attr("onclick","stripe()");
            var mes = JSON.parse(error.message);
            console.log(mes.errorCode);
             if(mes.errorCode == 10004)
            {
              $("#email").parent().parent().addClass("has-error");
              $('#email').parent().parent().tooltip('show');
              $('#address-line1-field').parent().parent().tooltip('hide');
              $('#xl-field').parent().parent().tooltip('hide');
            }
            else if(mes.errorCode == 10015)
            {
              $("#address-line2-field").parent().parent().addClass("has-error");
              $("#address-line1-field").parent().parent().addClass("has-error");
              $("#city-field").parent().parent().addClass("has-error");
              $("#zip-field").parent().parent().addClass("has-error");
              $("#state-field").parent().parent().addClass("has-error");
              $('#address-line1-field').parent().parent().tooltip('show');
              $('#xl-field').parent().parent().tooltip('hide');
              $('#email').parent().parent().tooltip('hide');
            }
            else if( (mes.errorCode == 10014) || (mes.errorCode == 10013))
            {
              $('#xl-field').parent().parent().addClass("has-error");
              $('#l-field').parent().parent().addClass("has-error");
              $('#m-field').parent().parent().addClass("has-error");
              $('#s-field').parent().parent().addClass("has-error");
              $('#xl-field').parent().parent().tooltip('show');
              $('#email').parent().parent().tooltip('hide');
              $('#address-line1-field').parent().parent().tooltip('hide');
            }
            else if( (mes.errorCode == 10011))
            {
              $("#card-cvc").parent().parent().addClass("has-error");
              $("#card-number").parent().parent().tooltip("show");
            }
            else
            {
              if(alert("There was a network error please submit again sorry ERRCODE:" +mes.errorCode))
              {
                location.reload();
              }
            }
          }
        });
    }
}