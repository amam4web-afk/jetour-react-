
$(document).ready(function () {
    var afterScrollTop ;
    var opendMenu=false;
	var beforScrollTop =$(window).scrollTop;
	    var littleTop,dalta
	    if($('#anchor-pc-point').length>0){
	          littleTop=$('#anchor-pc-point').offset().top;
	    }
	    if($('#anchor-mb-point').length>0){
	         littleTop=$('#anchor-mb-point').offset().top;
	    }
	    // console.log("littleTop",littleTop)   
		 // alert("测试2"+littleTop)
    // function handleAction(this){
    	 
    // }
	function debounce(fn, wait) {
	    let timeout = null;
	    return function() {
	        let context = this;
	        let args = arguments;
	        if (timeout) clearTimeout(timeout);
	        let callNow = !timeout;
	        timeout = setTimeout(() => {
	            timeout = null;
	        }, wait);
	        if (callNow) fn.apply(context, args);
	    };
	}
	function pp(tar){
		afterScrollTop=tar.scrollTop()
	}
	
    var menuData=[];
    var littleData=[];
	var isMobile;
    let path = window.location.pathname;
    // console.log("path",path)
    var spain=path.indexOf('/spain/')!=-1;
    var arabic=path.indexOf('/arabic/')!=-1;
    var json='';
    var lName='';
    var locationN='';
    // var str = path.replace("/", "/spain");
    if(spain)
    {
        json='/data/tms/website/html/json/spain/menu.json'
        lName='ES'
        locationN="/spain/"
    }
    else if(arabic)
    {
        json='/data/tms/website/html/json/arabic/menu.json'
        lName='AR'
        locationN="/arabic/"
    }
    else
    {
        json='/data/tms/website/html/json/menu.json' 
        lName='EN'
        locationN="/"
    }
    //  console.log("spain",spain,"arabic",arabic)
	
 function setStart(){
	 isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	 if (isMobile) {
	     // 如果是手机，执行相应操作
	     // console.log("访问来自手机");
	 } else {
	     // 如果不是手机，执行相应操作
	     // console.log("访问来自桌面设备");
	 }
	 
	 
	 $.getJSON(json, function(data) {
    // 处理获取的数据

    var html = '<div class="level-menu">'
        html += '<div class="centerCon">'
            html +=' <div class="leftMemu">'
            
            html += '</div>'
            html +='<a class="logo" href="'+locationN+'"><img class="logo" src="/data/tms/website/html/images/logo.png" alt=""></a>'
            html +='<div class="rightMemu">'
            html +='<div class="language">'+lName+'<div class="languageMenu"></div></div>'
            html +='<a class="world"><img src="/data/tms/website/html/images/common/world.png" alt=""></a>'
            html +='<a class="location" href='+data.location+'><img src="/data/tms/website/html/images/common/world_p2.png" alt=""></a>'
            html +='<a class="database" target="_blank" href="https://global-brandhub.jetourauto.com/"><img src="/data/tms/website/html/images/common/database.png" alt=""></a>'
            html +='</div>'
        html += '</div>'
        html += '<div class="seBg"></div>'
    html += '</div>';

    $('#header-box').append(html);

     console.log("menu",data,data.menu.length);
     if(isMobile){
         addClick()
     }
     for(var i=0;i<data.menu.length;i++)
     {
        var d=data.menu[i];
        console.log(d.name)
        if(!isMobile)
        {
            setLevel(d,i)
        }
        else
        {
           
            mobileSm(d,i)
        }
     }
     for(var i=0;i<data.languages.length;i++){
        var l=data.languages[i];
        setLittleM(l.name,l.more)
     }
     $(".languageMenu .level").click(function(){
        var text=$(this).text();
        //console.log("text",text)
        var origin=window.location.origin 
        if(lName!=text && location.href.indexOf('/news/detail-') == -1){
            if(text=='EN')
            {
                var str = path.replace(locationN, "/");
                 window.location.href = origin + str;
            }
            else if(text=='ES')
            {
                var str = path.replace(locationN, "/spain/");
                var isFaq = path.indexOf('faq')
                console.log("isFaq",isFaq)
                if(isFaq == -1){
                    window.location.href = origin + str;
                }
            }
            else
            {
                var str = path.replace(locationN, "/arabic/");
                // console.log(window.location)
                var isFaq = path.indexOf('faq')
                console.log("isFaq",isFaq)
                if(isFaq == -1){
                    window.location.href = origin + str;
                }
            }
        }
       
     })
     if(!isMobile)
     {
       
        $('.level-menu .leftMemu .level').mouseleave(function(e){
            console.log("dddd")
            $('.level-menu .seBg').removeClass("on");
            $('.level-menu .leftMemu .level .sm').removeClass("on");
            $('.level-menu .vehiclesMenu ul li').removeClass("on");
        })

        $('.level-menu .leftMemu .vehiclesMenu .secondLevel a').mouseenter(function(e){
            var index=$(this).index();
            // console.log(index)
            $('.level-menu .leftMemu .vehiclesMenu .secondLevel a').removeClass("on");
            $(this).addClass("on");
            $('.level-menu .vehiclesMenu ul li').removeClass("on");
            $('.level-menu .vehiclesMenu ul li').eq(index).addClass("on");
            })
          
		$(".level-menu .language").mouseenter(function(e){
			if(location.href.indexOf('/news/detail-') == -1){
				$(this).addClass('on');
			}
		})
		$(".level-menu .language").mouseleave(function(e){
			if(location.href.indexOf('/news/detail-') == -1){
				$(this).removeClass('on');
			}
		})
        $('.level-menu .leftMemu .level').mouseenter(function(e){
            // console.log("ppppppppppppppppp",$(this).index(),$(this).find(".sm a").length!=0)
            $('.level-menu .leftMemu .level .sm').removeClass("on");
            $(this).find(".sm").addClass("on");
            
            if($(this).index()!=0&&$(this).find(".sm a").length!=0)
            {
                $('.level-menu .seBg').addClass("on");
            }
            else
            {
                $('.level-menu .seBg').removeClass("on");
                $('.level-menu .leftMemu .vehiclesMenu .secondLevel a').eq(0).mouseenter()	
            }
        })
    }
    else{
        $('.level-menu .leftMemu .menu-button').click(function(e){
			if($(this).hasClass('cross'))
			{
				$(this).removeClass("cross");
                opendMenu=false;
				$(".level-menu .mobileCon").removeClass("on");
                
			}
			else
			{
                opendMenu=true;
				$(this).addClass("cross");
				$(".level-menu .mobileCon").addClass("on");
			}
            
        })
        $('.level-menu .mobileCon li .m span').click(function(){
            var p=$(this).parent().parent()
			console.log("p",p,p.index(),p.hasClass('on'))
			if(p.hasClass('on'))
			{
				p.removeClass('on');
			}
			else
			{
				p.addClass('on');
			}
			
        })
        $(".level-menu .language").click(function(e){
			if($(this).hasClass('on'))
			{
				$(this).removeClass('on');
			}
			else
			{
				$(this).addClass('on');
			}
        })
    }
    $(".level-menu .rightMemu .world").click(function(e){
        console.log($(".change-country-box"))
       $(".change-country-box").addClass('on');
    })

 
    
            $(window).scroll(function(){
				debounce(pp($(this)),250);
				 // var afterScrollTop = debounce($(this).scrollTop(), 250);
				//  if($('.level-menu .mobileCon').hasClass("on"))
				 // console.log(afterScrollTop)
                dalta=afterScrollTop - beforScrollTop;
                if(dalta != 0 &&!opendMenu){
					var scrollP=  dalta >0 ? true :false
                    if(scrollP)
                    {
                        if(afterScrollTop<20)
                        {
                            $(".level-menu").removeClass('out')
                        }
                        else
                        {
                             $(".level-menu").addClass('out') 
                        }
                       
                    }
                    else
                    {
                        if(littleTop)
                        {
                            console.log(afterScrollTop,littleTop)
                            if(afterScrollTop>=littleTop)
                            {
                                $(".level-menu").hide()
								
                            }
							else
							{
								$(".level-menu").show()
								$(".level-menu").removeClass('out')
							}
                               
                        }
                        else
                        {
                            $(".level-menu").removeClass('out')
                        }
                        
                    }
               
            
                beforScrollTop=afterScrollTop;
				}
                

            });

    });
 }
    

    

function fM(content){
    var vehicles='<div class="vehiclesMenu sm">'
    vehicles +='<div class="secondLevel">'
    vehicles +='</div>'
    vehicles +='<ul class="con">' 
    vehicles +='</ul>'
    vehicles +='</div>'
    $('.level-menu .leftMemu .level').append(vehicles);
    // console.log(content)
    for(var i=0;i<content.length;i++)
        {
           var d=content[i];
           var b='<a class="m" href='+d.more+'>'
           b +=d.name
           b +='</a>'
           $('.level-menu .leftMemu .secondLevel').append(b); 
           var con='<li>'
                con +='<div class="pic">' 
                con +='<img src='+d.pic+'>'
                con +='</div>'
                con +='<div class="word">'
                con +='<div class="wordCon">'
                  con +='<div class="logoW">'
                     con +='<img src='+d.title+'>'
                  con +='</div>'
                  con +='<div class="url">'
                    con +='<a class="a" href='+d.drive+'>'+d.driveName+'</a>'+'|'+'<a class="b" href='+d.fD+'>'+d.fDName+'</a>'
                  con +='</div>'
                  con +='<div class="more">'
                    con +='<a class="blue_btn" href='+d.more+'>'+d.moreName+'</a>'
                  con +='</div>'
                con +='</div>'
             con +='</div>'
          
           con +='</li>'
           $('.level-menu .leftMemu .vehiclesMenu .con').append(con); 
        }
    
}
    
function sM(content,con){
    for(var i=0;i<content.length;i++)
    {
        var d=content[i];
        var seM='<a class="m" href='+d.more+'>'
        seM +=d.name
        seM +='</a>'
        con.append(seM); 
    }
   
}

    function setLevel(data,index){
        var leftMenu0='<div class="level">'
            leftMenu0 += '<a  href='+data.more+'>'+data.name+'</a>'
            leftMenu0 +='</div>'

        var leftMenu1 ='<div class="level">'
            leftMenu1 += data.name
            leftMenu1 +='<div class="seM sm">'
            leftMenu1 +='</div>'
            leftMenu1 +='</div>'

        var content= data.content
        if(index!=0)
        {
            $('.level-menu .leftMemu').append(leftMenu1);
            // console.log($('.level-menu .leftMemu .level').eq(index))
            sM(content, $('.level-menu .leftMemu .level').eq(index).find(".seM"))
        }
        else
        {
            $('.level-menu .leftMemu').append(leftMenu0);
            fM(content) 
        }
    }
    function setLittleM(name,more){
        var language='<a class="level" >'+name+'</a>'
         $('.level-menu .languageMenu').append(language);
    }


    // $('.level-menu .leftMemu .level').click(function(){
    //     // $(this).find(".sm")
    // })
//  function showTime(){
// 	 console.log("ddddddd")
// 		$('.level-menu .leftMemu .level').mouseenter(function(e){
// 			console.log($(this))
// 			$(this).find(".sm").addClass("on");
// 		})
// 	}
// 	setTimeout(showTime(), 1000);
	
	  function addClick(){
        var menuButton ='<div class="menu-button">' 
        menuButton +=	'<div class="bar"></div>'
        menuButton +=	'<div class="bar"></div>'
        menuButton +=	'<div class="bar"></div>'
        menuButton +=	'</div>'
        $('.level-menu .leftMemu').append(menuButton); 
        var htmlCon ='<div class="mobileCon">' 
        htmlCon +=	'<ul>'
        htmlCon +=	'</ul>'
        htmlCon +=	'</div>'
        $('.level-menu').append(htmlCon); 
      }

      function mobileSm(data,index){
        // console.log("data",data)
            var html ='<li>'
                html +='<div class="m">'
                    html += '<a href='+data.more+'>'
                    html += data.name
                    html +='</a>'
                    html +='<span><img class="arrow" src="/data/tms/website/html/images/header/close_b.png"></span>'
                html +=	'</div>'
                html +='<div class="mobilecontent">'
                html +=	'</div>'
            html +=	'</li>'
            $('.mobileCon ul').append(html);

            if(index==0)
            {
                // console.log(index,data.content.length)
                for(var i=0;i<data.content.length;i++)
                {
                    var d=data.content[i]
                    var a0 ='<a class="mBtn" href='+d.more+'>'
                    a0 +='<img class="pic" src='+d.mPic+'>'
                    a0 +='<span><img class="title" src='+d.title_m+'></span>'
                    a0+= '</a>'
                    $('.mobileCon ul li').eq(index).find(".mobilecontent").append(a0);
                }
            }
            else
            {
                // console.log(index,data.content.length)
                for(var i=0;i<data.content.length;i++)
                {
                    var d=data.content[i]
                    var a ='<a class="mBtn1" href='+d.more+'>'
                    a += d.name
                    a += '</a>'
                    $('.mobileCon ul li').eq(index).find(".mobilecontent").append(a);
                }
            }
            


      }
	  setStart()
	//    window.addEventListener('resize', function() {
	// 	   // console.log("dddddd")
	// 	   $('.level-menu .leftMemu').empty();
	// 	    $('.level-menu .languageMenu').empty();
	//       setStart() 
	//    })
})

