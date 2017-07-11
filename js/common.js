define(['jquery','template','cookie','bootstrap','nprogress','echarts'], function($,template) {
	// NProgress.start();

	// NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 实现退出功能
        $('#login_drop').click(function(){
            $.ajax({
                type : 'post',
                url : '/api/logout',
                dataType : 'json',
                success : function(data){
                    if(data.code == 200){
						$.removeCookie("loginInfo",{path:'/'});
                        location.href = '/';
                    }
                }
            });
        });
		var info = $.cookie('loginInfo');
		var tpl = '<div class="avatar img-circle">'
                +'<img src="{{tc_avatar}}">'
            +'</div>'
            +'<h4>{{tc_name}}</h4>';
			//template 一定需要加调用的template,否则无法使用
		var html = template.render(tpl,info?JSON.parse(info):{});
		$('.aside .profile').html(html);
		 if(!$.cookie('PHPSESSID') && location.pathname != '/' && location.href != '/login'){
    location.href = '/';
  }

});
	
