$(function(){
$("#getyzm").click(function(event) {
    var phone = $("#phone").val();
    if (!phone) {
       alert('请输入手机号');
        return false;
    }
    var phone_re = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0-9]{1}\d{8}$|^18[\d]{9}$|^19[\d]{9}$/;
    if (!phone_re.test(phone)) {
       alert('请输入正确的手机号');
        return false;
    }
    $.ajax({
        url: 'http://zg99.offcn.com/index/biaodan/sendmsg?actid=3252&callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {phone: phone},
        success: function(data) {
            if (data.status=="1") {
                //alert('正在发送请稍后...');
               alert('正在发送请稍后...');
                var sec = 120;
                $("#getyzm").text(sec+'s后重试');
                var timer = setInterval(function (){
                    sec--;
                    $("#getyzm").text(sec+'s后重试');
                    if (sec<1) {
                        $("#getyzm").text('获取验证码');
                        clearInterval(timer);
                    }
                }, 1000);
            } else {
                //alert(data.msg);
               alert(data.msg);
            }
        }
    });
});
//表单提交
$("#dosubmit").click(function(event) {
    var name = $("#name").val();
    var phone = $("#phone").val();
    var fb = $("#xuexiao ").val();
    // console.log(fb )
    var yzm = $("#yzm").val();
    if (!name) {
        //alert('请输入姓名');
       alert('请输入姓名');
        return false;
    }
    var name_re = /^[\u4e00-\u9fa5]{0,}$/;
    if (!name_re.test(name)) {
        //alert('请输入正确的姓名');
       alert('请输入正确的姓名');
        return false;
    }
    if (!phone) {
        //alert('请输入手机号');
       alert('请输入手机号');
        return false;
    }
    var phone_re = /^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0-9]{1}\d{8}$|^18[\d]{9}$|^19[\d]{9}$/;
    if (!phone_re.test(phone)) {
        //alert('请输入正确的手机号');
       alert('请输入正确的手机号');
        return false;
    }
    if (!yzm) {
        //alert('请输入手机验证码');
       alert('请输入手机验证码');
        return false;
    }
    $.ajax({
        url: 'http://zg99.offcn.com/index/biaodan/register?actid=3252&callback=?',
        type: 'GET',
        dataType: 'jsonp',
        data: {name: name, phone: phone, yzm: yzm, fb : fb },
        success: function(data) {
            if (data.status=="1") {
               alert('预约成功');
            } else {
                //alert(data.msg);
               alert(data.msg);
                
            }
        }
    })
})
})