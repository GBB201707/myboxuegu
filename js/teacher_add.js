define(['jquery','template','util','cookie','bootstrap','datepicker','language','validate','form'],function($,template,util){
     util.setmenu('/teacher/list');
    var tcid = (util.getps("tc_id",location.search))||"";
   if(tcid){
       $.ajax({
            url:'/api/teacher/edit',
            type:'get',
            data:{
                tc_id:tcid
            },
            dataType:'json',
            success:function(data){
               if(data.code == 200 && data.msg=="OK"){
                var html = template('teacher_add_list_id',data.result);
                $('.main .container-fluid .body').html(html);
                submitForm('/api/teacher/update');
               }  
            },
            error:function(e){
            }
       })
   }
   else{
        var html = template('teacher_add_list_id',{});
        $('.main .container-fluid .body').html(html);
        submitForm('/api/teacher/add');
   }
   function submitForm(url){
            $('#addform').validate({
                sendForm:false,
                onkeyup:true,
                valid:function(){
                    $('#addform').ajaxSubmit({
                    type : 'post',
                    url : url,
                    dataType : 'json',
                    success : function(data){
                        if(data.code == 200){
                        location.href = '/teacher/list';
                        }
                    }
                    });
    },
    description:{
        tc_name : {
          required : '用户名不能为空',
          pattern : '用户名中包括不可用字符'
        },
        tc_pass : {
          required : '密码不能为空',
          pattern : '密码只能是6位数字'
        },
        tc_join_date : {
          required : '入职日期必须选择'
        }
    }
})
   }
});