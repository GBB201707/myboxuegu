<script src="../assets/require/require.js"></script>
<script>
require.config({
    baseUrl:'/assets',
    paths:{
        jquery:'jquery/jquery.min',
        bootstrap:'bootstrap/js/bootstrap.min',
        template:'artTemplate/template-web',
        login : '../js/login',
        nprogress:'nprogress/nprogress',
        echarts:'echarts/echarts.min',
        cookie:'jquery-cookie/jquery.cookie',
        common:'../js/common',
        util:'../js/util',
        datepicker:'bootstrap-datepicker/js/bootstrap-datepicker.min',
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate:'validate/jquery-validate.min',
        form:'form/jquery.form'
    },
    shim : {
    bootstrap : {
      deps : ['jquery']
    },
    language:{
      deps:['jquery','datepicker']
    },
    validate:{
      deps:['jquery']
    }
  }
});
</script>
