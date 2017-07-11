define(['jquery','cookie','bootstrap'],function($){
$('#submit').click(function(){
            $.ajax({
                url:"/api/login",
                type:"post",
                dataType:"json",
                data:$('#login_form').serialize(),
                success:function(data){
                    if(data.code ==200){
                         $.cookie("loginInfo",JSON.stringify(data.result),{path:'/'});
                        location.href ="index/index";
                    }
                },
                error:function(e){
                }
            });
            return false;
        })
    })