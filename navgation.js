$(document).ready(function(){
    //滚动条发生滚动
    $(window).scroll(function(){
        var top  = $(document).scrollTop();
        //console.log(top);
        let menu = $("#menu");
        let items = $("#content").find(".item");
        
        let currentId = "";             //当前所在页面id

        items.each(function(){
            let m = $(this);
            let  itemTop = m.offset().top;
            if(top > itemTop-100){
                currentId = '#'+m.attr("id");
            }else{
                return false;
            }
        });
        //给相应的楼层的a设置current，取消其他链接的current
        let currentLInk = menu.find(".current");
        if(currentId && currentLInk.attr("href")  != currentId){
            currentLInk.removeClass("current");
            menu.find("[href =\""+currentId+"\"]").addClass("current");
        }
    });
})