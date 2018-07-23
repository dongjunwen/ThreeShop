
	$(function(){
		//通用头部搜索切换
		$('#search-hd .search-input').on('input propertychange',function(){
			var val = $(this).val();
			if(val.length > 0){
				$('#search-hd .pholder').hide(0);
			}else{
				var index = $('#search-bd li.selected').index();
				$('#search-hd .pholder').eq(index).show().siblings('.pholder').hide(0);
			}
		})
		$('#search-bd li').click(function(){
			var index = $(this).index();
			$('#search-hd .pholder').eq(index).show().siblings('.pholder').hide(0);
			$('#search-hd .search-input').eq(index).show().siblings('.search-input').hide(0);
			$(this).addClass('selected').siblings().removeClass('selected');
			$('#search-hd .search-input').val('');
		});


(function(){
	//首页分类导航
	
	var $subblock = $(".subpage"), $head=$subblock.find('h2'), $ul = $("#proinfo"), $lis = $ul.find("li"), inter=false;
	
	$head.click(function(e){
		e.stopPropagation();
		if(!inter){
			$ul.show();
		}else{
			$ul.hide();
		}
		inter=!inter;
	});
	
	$ul.click(function(event){
		event.stopPropagation();
	});
	
	// $(document).click(function(){
	// 	$ul.hide();
	// 	inter=!inter;
	// });

	$lis.hover(function(){
		if(!$(this).hasClass('nochild')){
			$(this).addClass("prosahover");
			$(this).find(".prosmore").removeClass('hide');
		}
	},function(){
		if(!$(this).hasClass('nochild')){
			if($(this).hasClass("prosahover")){
				$(this).removeClass("prosahover");
			}
			$(this).find(".prosmore").addClass('hide');
		}
	});
	
    })();

})
//PC轮播图js
$(document).ready(function(){
    var ali=$('#lunbonum li');
    var aPage=$('#lunhuanback p');
    var aslide_img=$('.lunhuancenter b');
    var iNow=0;
  
    ali.each(function(index){ 
        $(this).mouseover(function(){
            slide(index);
        })
    });
  
    function slide(index){  
        iNow=index;
        ali.eq(index).addClass('lunboone').siblings().removeClass();
        aPage.eq(index).siblings().stop().animate({opacity:0},600);
        aPage.eq(index).stop().animate({opacity:1},600);  
        aslide_img.eq(index).stop().animate({opacity:1,top:-10},600).siblings('b').stop().animate({opacity:0,top:-40},600);
    }
  
  function autoRun(){ 
        iNow++;
    if(iNow==ali.length){
      iNow=0;
    }
    slide(iNow);
  }
  
  var timer=setInterval(autoRun,4000);
    
    ali.hover(function(){
    clearInterval(timer);
  },function(){
    timer=setInterval(autoRun,4000);
    });
//鼠标移入登录后改变背景颜色
   $(function(){
          $('.login').hover(
      
                  function(){
                     $('.right_longing').css('opacity','0.7')
                  },function(){
                    $('.right_longing').css('opacity','0.6')
                  }
            )
        });
   //边框效果--移入
function biankuang(obj){
    $(obj).find('.biankuang_1').stop(true).animate({
        height:'145px'
    },300)
    $(obj).find('.biankuang_2').stop(true).delay(300).animate({
        width:'145px'
    },300)
    $(obj).find('.biankuang_3').stop(true).animate({
        height:'145px'
    },300)
    $(obj).find('.biankuang_4').stop(true).delay(300).animate({
        width:'145px'
    },300)
}
//边框效果--移出
function biankuang1(obj){

    $(obj).find('.biankuang_1').stop(true).delay(100).animate({
        height:'0px'
    },100)
    $(obj).find('.biankuang_2').stop(true).animate({
        width:'0px'
    },100)
    $(obj).find('.biankuang_3').stop(true).delay(100).animate({
        height:'0px'
    },100)
    $(obj).find('.biankuang_4').stop(true).animate({
        width:'0px'
    },100)
}
//触发
$('.spbq').hover(
  function () {
    var obj = $(this);
    //alert(111)
    
    biankuang(obj);
  },
  function () {
    var obj = $(this);

    biankuang1(obj);
  }
);

//自定义单选按钮样式
$('.eva_cont label').click(function(){
	var radioId = $(this).attr('name');
	 $('.eva_cont label').removeAttr('class')&& $(this).attr('class', 'checked');
	 $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
   //获取选中的值
	var val1 = $('input[type="radio"]:checked').attr('value')
  //alert(val1)
})
$('.eva_conto label').click(function(){
  var radioId = $(this).attr('name');
   $('.eva_conto label').removeAttr('class')&& $(this).attr('class', 'checked');
   $('input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
   //获取选中的值
  var val1 = $('input[type="radio"]:checked').attr('value')
  //alert(val1)
});

});
    var  WebOrder={
        //baseUrl:"http://47.91.209.22",
        baseUrl:"http://localhost:9007",
        getAjaxData: function (m_param) {
            /*
             * param{
             *   url :网址
             * , type：get/post/jsonp
             * , param:参数
             * }
             * */
            var self = this;
            var dateType = m_param.dateType || "jsonp",fnc= m_param.callback,param=m_param.param,async=m_param.async|| false,type=m_param.type;
            if (type=='get'){
                $.ajax({
                    url:WebOrder.baseUrl+m_param.url,
                    type:type,
                    data:param,
                    dateType:dateType,
                    jsonp:"callback",
                    async:async,
                    success:function (date) {
                        console.log(JSON.stringify(date));
                        fnc(date,m_param.param);
                    },
                    error:function () {
                    }
                });
            }
            if (type=='post'){
                $.ajax({
                    url:WebOrder.baseUrl+m_param.url,
                    type:type,
                    data:param,
                    dateType:dateType,
                    async:async,
                    contentType: "application/json; charset=utf-8",
                    success:function (date) {
                        fnc(date,m_param.param);
                    },
                    error:function () {

                    }
                });
            }

        }

    }
