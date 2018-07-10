/**
 * Created by sunqi on 2018/6/25.
 */
import helper from './helper'
export default function init() {
    //document.addEventListener('touchstart', function (e) {
    //    e.preventDefault()
    //}, false);

    history.pushState(null, null, document.URL);
    window.addEventListener('popstate', function () {
        history.pushState(null, null, document.URL);
    });

    const entry_url = 'http://sspjf.sinorusfocus.com/entry/';
    const cover_img = 'http://oojq4xaei.bkt.clouddn.com/WechatIMG171.jpeg';

    const title = '玩游戏，赢大奖！中俄头条邀您玩转世界杯'
    const subTitle = '拼图、接球、说出你的冠军球队……参与互动好礼拿不停！'

    var url = location.href


    $(function() {
        $.ajax({
            type: "post",
            url: '/',
            dataType: "json",
            async: false,
            data: {url: url},
            success: function (data) {
                wx.config({
                    debug: false,////生产环境需要关闭debug模式
                    appId: data.appId,//appId通过微信服务号后台查看
                    timestamp: data.timestamp,//生成签名的时间戳
                    nonceStr: data.nonceStr,//生成签名的随机字符串
                    signature: data.signature,//签名
                    jsApiList: [//需要调用的JS接口列表
                        'checkJsApi',//判断当前客户端版本是否支持指定JS接口
                        'onMenuShareTimeline',//分享给好友
                        'onMenuShareAppMessage'//分享到朋友圈
                    ]
                });
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        })
    })

    wx.ready(function () {
//            var link = window.location.href;
//            var protocol = window.location.protocol;
//            var host = window.location.host;
        //分享朋友圈

        wx.onMenuShareTimeline({
            title: title,
            link: entry_url,
            imgUrl: cover_img,// 自定义图标
            trigger: function (res) {
            },
            success: function (res) {
                //alert('shared success');
            },
            cancel: function (res) {
                //alert('shared cancle');
            },
            fail: function (res) {
                //alert(JSON.stringify(res));
            }
        });
        //分享给好友
        wx.onMenuShareAppMessage({
            title: title, // 分享标题
            desc: subTitle, // 分享描述
            link: entry_url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: cover_img, // 自定义图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.error(function (res) {
            alert(res.errMsg);
        });
    });
}
