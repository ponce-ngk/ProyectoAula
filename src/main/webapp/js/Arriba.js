/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('.arriba').click(function(){
        $('body,html').animate({
            scrollTop:'0px'
        }, 300);
    });
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $('.arriba').slideDown(300);
        }else{
            $('.arriba').slideUp(300);
        }
    });
});
