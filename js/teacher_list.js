define(['jquery','template','util','cookie','bootstrap'],function($,template,util){
    util.setmenu(location.pathname);
    $.ajax({
        url:'/api/teacher',
        type:'get',
        dataType:'json',
        success:function(data){
            console.log(data);
            if(data.code == 200 && data.msg=="OK"){
                //此处必须是json格式的数据，否则渲染不出
                var html = template('teacher_list_id',data);
                $('#teacherlist tbody').html(html);
                //启用和注销
                 $('#teacherlist tbody .switchbtn').click(function(){
                     var tcid = $(this).parent().attr("data-id");
                     var tcstatus = $(this).parent().attr("data-status");
                     var that = this;
                      $.ajax({
                             url:'/api/teacher/handle',
                             type:'post',
                             dataType:'json',
                             data:{
                                 tc_id:tcid,
                                 tc_status:tcstatus
                             },
                             success:function(data){
                                 $(that).parent().attr("data-status",data.result['tc_status']);
                                 if(data.result['tc_status'] == 0){
                                     $(that).html("注 销");
                                 }
                                 else{
                                     $(that).html("启 用");
                                 }
                             },
                             error:function(e){
                             }
                         })
                 });
                 //查看
                $('#teacherlist tbody .mylist_btn_check').click(function(){
                     var tcid = $(this).parent().attr("data-id");
                         $.ajax({
                             url:'/api/teacher/view',
                             type:'get',
                             dataType:'json',
                             data:{
                                 tc_id:tcid
                             },
                             success:function(data){
                                 var html = template('teacher_detail',data.result);
                                 $('#teacherModal .table tbody').html(html);
                             },
                             error:function(e){
                             }
                         })
                })
            }
        },
        error:function(e){

        }
    })
})