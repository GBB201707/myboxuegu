define(['jquery'],function($){
    function setmenu(url){
        $('.navs ul li a[href="'+url+'"]').addClass("active");
    }
    function getps(key,str){
            var obj = {};
            var arr = str.substr(1).split('&');
            arr.forEach(function(item) {
                var itemarr = item.split('=');
                obj[itemarr[0]] = itemarr[1];
            });
            return obj[key];
        };
        return {
            getps:getps,
            setmenu:setmenu
        }
})