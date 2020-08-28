"use Strict";

$(document).ready(function(){

    $(".countries").hide();


    var background_change_colour = 1;

    $(".music_content").mouseenter(function(){
      $(".music_content").css({width:"120%"});
  });
    
   // Stop Animation On hover
    /*
      // Start Animation 
    $(".earth_outline").mouseleave(function(){
        $(".earth_outline img").css("animation-play-state", "running");
    });*/

    



   /*
// Getting data from google Api
    $.getJSON(url, function(data){
        var name = data.results;
        var photos = data.results.business_status;
        var html= "";
        for (var i = 0; i < (name.length); i++){
                html += "<h2>" + name[i].name + "</h2>"
                        + "<h3>" + name[i].business_status + "</h3>";
         }
         $(".resultt").html(html);
        console.log(html);
        });*/


          // Getting data from countries.json file
         // Searching Countries
        $("#search_bar").keyup(function (){

            $(".countries").html(" ");
            var searchField = $("#search_bar").val();
            var expression = new RegExp(searchField, 'gi');
            console.log(expression);

           $.getJSON("Json/countries.json", function(data){
                $.each(data, function(countries){
                     countries = data.countries;
                 for(var i=0; i<countries.length; i++){    

                     if(countries[i].name.search(expression) != -1){                 
                        $(".countries").append(
                             "<li>" + countries[i].name +"</li>" 
                        );                               
                     }  
                     console.log(searchField.length);  

                     if(searchField.length == 0){
                        $(".countries").hide();
                      } 
                      else if(searchField.length > 0){
                        $(".countries").show();
                      } 

                      
                 }    
                }) 
            });
        });

        
        
        //Gsap Animation 
       /*var FirstScroll = new TimelineMax();
       var FirstScroll_1 = new TimelineMax();
       var secon_scroll = new TimelineMax();
      

        FirstScroll
        .set('.sa', {scale:1 , transformOrigin:"center top", x:"-280%", y:"-100%"})
        .set('.sa_4', {scale:1 , transformOrigin:"center top", x:"-250%", y:"-100%"})
        .to('.sa', 1000, {scale:0.8, x:"0%",  y:"10%", display:"inline"})          
        .to('.sa', 1000, {scale:0,opacity:0})
        .to('.sa_4', 2000, {scale:0.8, x:"0%",  y:"0%", display:"inline"})          
        .to('.sa_4', 2000, {scale:0,opacity:0},"-=3")
        
        

        FirstScroll_1
        .set('.sa_2', {scale:1 , transformOrigin:"center top", x:"250%", y:"-100%"})
        .set('.sa_3', {scale:1 , transformOrigin:"center top", x:"280%", y:"-100%"})
        .to('.sa_2', 2000, {scale:0.8, x:"0%",  y:"10%", display:"inline"})          
        .to('.sa_2', 2000, {scale:0,opacity:0})
        .to('.sa_3', 2000, {scale:0.8, x:"0%",  y:"-10%", display:"inline"})          
        .to('.sa_3', 2000, {scale:0,opacity:0}, "-=3")
        .to('.earth_outline',20, {scale:0.5, display:'block', y:"10%"},"-=1000")
        .to('.moon', 20, {display:"block"})

        secon_scroll
        .to('.earth_outline',20, {scale:1.2})

       
        
        
          
        var controller = new ScrollMagic.Controller();
        var controller_1 = new ScrollMagic.Controller();
        
        // Left Continents
        var scene1 = new ScrollMagic.Scene({
            triggerElement:'.trigger1', 
            triggerHook:0,
            duration:"100%"
        })
        .setTween(FirstScroll)
        .addIndicators()
        .addTo(controller);
        // Right Continents
        var scene2 = new ScrollMagic.Scene({
            triggerElement:'.trigger1', 
            triggerHook:0,
            duration:"100%"
        })
        .setTween(FirstScroll_1)
        .setPin('.trigger1')
        .addIndicators()
        .addTo(controller_1);


        //Earth 
        var scene3 = new ScrollMagic.Scene({
            triggerElement:'.trigger1', 
            triggerHook:1,
            duration:"100%"
        })
        .setTween(secon_scroll)
        .addIndicators()
        .addTo(controller_1);


 */      // Earth Final Animation
          var FirstScroll = new TimelineMax();
          FirstScroll
          .set('.watch_now', { y:"-110%"})
          .set('.earth_outline', {scale:1,ease:Power3.easeOut,zIndex:-1})
          .to('.earth_outline', 1, {scale:1, y:"10%"})
          .to('.earth_outline', 1, {scale:1.3, y:"20%"})
          .to('.earth_outline', 1, {scale:1.6, y:"30%"},"-=2")
          .to('.earth_outline', 1, {scale:1.9, y:"40%"},"-=2")
          .to('.earth_outline', 1, {scale:2.2, y:"50%"},"-=2")
          .to('.earth_outline', 1, {scale:2.5, y:"60%"},"-=1")
          .to('.earth_outline', 1, {scale:2.8, y:"70%"},"-=1")
          .to('.earth_outline', 1, {scale:3.1, y:"80%", opacity:0.8},"-=1")
          .to('.earth_outline', 1, {scale:3.4, y:"90%", opacity:0.6},"-=1")
          .to('.earth_outline', 1, {scale:3.7, y:"100%", opacity:0.4},"-=1")
          .to('.earth_outline', 1, {scale:4.0, y:"120%", opacity:0.2},"-=1")
          .to('.earth_outline', 1, {scale:4.3, y:"140%", opacity:0},"-=1")
          .to('#myVideo',3.3, {display:'inline'})
          
          
          
          
          var controller = new ScrollMagic.Controller();
          var scene1 = new ScrollMagic.Scene({
            triggerElement:'.trigger1', 
            triggerHook:0.2,
            duration:"130%"
        })
        .setTween(FirstScroll)
        //.addIndicators()
        .addTo(controller);


        // Videos Resizing
        var SecondScroll = new TimelineMax();
          SecondScroll
         // .to('#myVideo',2, {xPercent:-50, yPercent:-50})
          //.to('#myVideo_2',2, {xPercent:-50, yPercent:-50})
          //.to('#myVideo_3',2, {scale:0.4, y:"30%",marginTop:"10%"})

          .to('#myVideo',2, {scale:0.4, y:"30%",marginTop:"10%"})
          .to('#myVideo_2',2, {display:'inline',scale:0.4, y:"40%",marginTop:"30%"},"-=1")
          .to('#myVideo_3',2, {display:'inline',scale:0.4, y:"50%",marginTop:"50%"},"-=1")
         // .to('body',1,   {backgroundColor:'#eeeeee'})
          //.to('.adhreline', 1, {backgroundColor:'#000000'})
          var controller_2 = new ScrollMagic.Controller();
          var scene2 = new ScrollMagic.Scene({
            triggerElement:'.trigger2', 
            triggerHook:0,
            duration:"100%"
        })
        .setTween(SecondScroll)
        //.addIndicators()
        .addTo(controller_2);

        //Music and Sports
        var ThirdScroll = new TimelineMax();
          ThirdScroll
          .set('.music_content', { transform:"skewY(10deg)"})
          .set('.music_content_1', {transform:"skewY(10deg)"})
          .set('.music_content_2', {transform:"skewY(10deg)"})
          .set('.music_content_3', {transform:"skewY(10deg)"})
          .set('.music_content_4', {transform:"skewY(10deg)"})
          .set('.music_content_5', {transform:"skewY(10deg)"})

          .to('.music_content',1, {transform:"skewY(0deg)"})
          .to('.music_content',1,{x:"260%"})
          .to('.music_content_1',1, {transform:"skewY(0deg)"})
          .to('.music_content_1',1,{x:"160%"})
          .to('.music_content_2',1, {transform:"skewY(0deg)"})
          .to('.music_content_2',1,{x:"60%"})
          .to('.music_content_3',1, {transform:"skewY(0deg)"})
          .to('.music_content_3',1,{x:"-40%"})
          .to('.music_content_4',1, {transform:"skewY(0deg)"})
          .to('.music_content_4',1,{x:"-140%"})
          .to('.music_content_5',1, {transform:"skewY(0deg)"})
          .to('.music_content_5',1,{x:"-240%"})

          //.to('body',10, {backgroundColor:"#687682"},"-=17")         
         // .to('body',1,   {backgroundColor:'#eeeeee'})
          //.to('.adhreline', 1, {backgroundColor:'#000000'})
          var controller_3 = new ScrollMagic.Controller();
          var scene3 = new ScrollMagic.Scene({
            triggerElement:'.music', 
            triggerHook:0,
            duration:"300%"
        })
        .setTween(ThirdScroll)
        //.addIndicators()
        .setPin('.music')
        .addTo(controller_3);

        var FourthScroll = new TimelineMax();
        FourthScroll
        
        .set('.music_content_6', { transform:"skewY(10deg)"})
        .set('.music_content_6', { transform:"skewY(10deg)"})
        .set('.music_content_7', {transform:"skewY(10deg)"})
        .set('.music_content_8', {transform:"skewY(10deg)"})
        .set('.music_content_9', {transform:"skewY(10deg)"})
        .set('.music_content_10', {transform:"skewY(10deg)"})
        .set('.music_content_11', {transform:"skewY(10deg)"})

        .to('.music_content_6',1, {transform:"skewY(0deg)"})
        .to('.music_content_6',1,{x:"260%"})
        .to('.music_content_7',1, {transform:"skewY(0deg)"})
        .to('.music_content_7',1,{x:"160%"})
        .to('.music_content_8',1, {transform:"skewY(0deg)"})
        .to('.music_content_8',1,{x:"60%"})
        .to('.music_content_9',1, {transform:"skewY(0deg)"})
        .to('.music_content_9',1,{x:"-40%"})
        .to('.music_content_10',1, {transform:"skewY(0deg)"})
        .to('.music_content_10',1,{x:"-140%"})
        .to('.music_content_11',1, {transform:"skewY(0deg)"})
        .to('.music_content_11',1,{x:"-240%"})
        //.to('body',10, {backgroundColor:"#687682"},"-=17")         
       // .to('body',1,   {backgroundColor:'#eeeeee'})
        //.to('.adhreline', 1, {backgroundColor:'#000000'})
        var controller_4 = new ScrollMagic.Controller();
        var scene4 = new ScrollMagic.Scene({
          triggerElement:'.music', 
          triggerHook:0,
          duration:"300%"
      })
      .setTween(FourthScroll)
      //.addIndicators()
      .setPin('.music_2')
      .addTo(controller_4);

      const flightPath = {
        curviness:1.25,
        autoRotate:true,
        values:[
          {x:100, y: -10},
          {x:400, y:0},
          {x:600, y:60},
          {x:800, y:25}
        ]
      }

      const tween = new TimelineLite();

      tween.add(
        TweenLite.to(".paper-plane", 1, {
          bezier:flightPath,
          ease:Power1.easeInOut 
        })
      )


      setTimeout(function(){
          $(".paper-plane").show();
      },100);

       


        
           
            


});


