export const blockIds = ['#block1', '#block2', '#block3', '#block4', '#block5'];

// const $block1 = $(blockIds[0]);
// const block1Height = $block1.height();
// const $doc = $(document);
// const $navItems = $('#nav-list a');

// let blockTops = [];
// const halfHeight = $(window).height() * 0.4;
// for (let i in blockIds) {
//   let $block = $(blockIds[i]);
//   blockTops.push($block.offset().top - halfHeight);
// }
// const $topbar = $('.top-nav_box');

// $doc.on('scroll', function() {
//   const top = $doc.scrollTop();
//   if (top < blockTops[1]) {
//     $navItems.removeClass('active');
//     $topbar.removeClass('fixed');
//     return;
//   } else {
//     $topbar.addClass('fixed');
//   }
//   for (let i in blockTops) {
//     let index = parseInt(i);
//     if (top > blockTops[index] &&  blockTops[index+1] && top < blockTops[index+1]) {
//       $navItems.removeClass('active');
//       $navItems.eq(index).addClass('active');
//       break;
//     } else if (!blockTops[index+1]) {
//       $navItems.removeClass('active');
//       $navItems.eq(index).addClass('active');
//     }
//   }
// })

$('#case-nav li').unbind("click").on('click', function(e) {
  e.stopPropagation();
  let $el = $(e.target);
  let index = $el.data('index');
  gotoExample(index);
   return false;
})

$('#footer_wrap .goto_block p').on('click', (e) => {
  let value = $(e.target).data('value');
  gotoBlock(value);
});

$('#field-nav').on('click', (e) => {
  onClickContact();
  return false;
})

$('#example-nav p').on('click', function() {
  let $el = $(this);
  let index = $el.data('index');
  if (index == undefined) {
    return;
  }
  if (index == 'more') {
    onClickContact().bind(this);
    return;
  }
  gotoExample(index);
})

function gotoExample(index) {
  window.open('./example.html?eid=' + index);
}

function gotoBlock(index) {
  let $el = $(blockIds[index] || index);

  if (!$el.length) {
    gotoHomeBlock(index);
    return;
  }

  let $top = $('.top-nav_box').eq(0);
  let top = 1;
  if (!$el.length) {
   return;
  }
  top = $el.offset().top - ($top.height() - 30);
  if (window.isMinScreen) {
    top -= $top.height();
  }
  if (index == 0) {
    top = 1;
  }
  if (top) {
    $('html,body').animate({
        scrollTop: top
      }, 
      300
    );
  }
}

function onClickContact(val) {
  let $btn = $('.pc-new.pc-title-btn');
  let $win = $(window);
  let top = ($win.height() - 600) * 0.5;
  let left = ($win.width() - 800) * 0.5;
  if(typeof(val)=='string'){
    var pc = val.substring(0,val.length-3);
    if(val.indexOf("=PC") > -1){
      window.open (
        'https://tb.53kf.com/code/client/5d9af89780001db176d845a73837e25f7/1?custom_channel='+ pc,
        '_blank',
        'height=600,width=800,top='+top+',left='+left+',status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no'
      )
    }else{
      window.open (
        'https://tb.53kf.com/code/client/5d9af89780001db176d845a73837e25f7/1?custom_channel='+ val
      )
    }
  }else{
    if ($btn.length > 0) {
      window.open (
        'https://tb.53kf.com/code/client/5d9af89780001db176d845a73837e25f7/1',
        '_blank',
        'height=600,width=800,top='+top+',left='+left+',status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no'
      )
    } else {
      $('div[53kf_icon_versions]').click();
    }
  }
  
}


function gotoHomeBlock(label) {
  sessionStorage.setItem('blockName', label);
  window.location.href = './index.html';
}

window.onClickContact = onClickContact;


// 这个不知道是干啥的
var _hmt = _hmt || [];
(function() {
  if (document.getElementById('noknow')) {
    return;
  }
  var hm = document.createElement("script");
  hm.id = 'noknow';
  if (window.isMobile) {
    hm.src = "https://hm.baidu.com/hm.js?8e80f13627e5d5f6f7a072a1922950d8";
  } else {
    hm.src = "https://hm.baidu.com/hm.js?22529ccef34345b6256656557a8c00ec";
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

let stopTime
let source = '';
let urlPath = 'http://148.70.37.198:8808';
let userId = '';
// 打开页面，刷新页面
window.onpageshow = ()=>{
  stopTime = new Date().getTime();
  let url = window.location.href
   if(url.indexOf('#360') >-1){
      source = '360';
   }else if(url.indexOf('#sougou') >-1){
      source = '搜狗';
   }else if(url.indexOf('#baidu') >-1){
      source = '百度';
   }else if(url.indexOf('#SM') >-1){
      source = '神马';
  }else{
      source = '自然流量';
  }
  let id = sessionStorage.getItem('ids');
  if(id){
    userId = id;
  }else{
    $.ajax({
      url: urlPath + `/browse/add/${source}`,
      type: 'POST',
      data: '',
      success: (res) => {
        let id = res.data;
        sessionStorage.setItem('ids',JSON.stringify(id));
        sessionStorage.setItem('time',JSON.stringify(stopTime));
        pagehideHander(stopTime, id);
      }
    })
  }
 
}
// 关闭触发 ios和部分浏览器不兼容（可以通过socket来处理，除此之外目前没有找到其他好的方。要统计来源，不能使用 popstate 方法）
window.onpagehide = ()=>{
  let oldTime = sessionStorage.getItem('time');
  let data = record && JSON.parse(record) || [];
  let id = sessionStorage.getItem('ids');
  if(oldTime && id){
    stopTime = new Date().getTime() - oldTime;
  }else{
    stopTime = new Date().getTime() - stopTime;
    id = userId;
  }
  var second = Math.floor(stopTime / 1000);
  let record = sessionStorage.getItem('data');
  sessionStorage.setItem('data',JSON.stringify([...data,{id,path:window.location.href,second}]));
  $.ajax({
      url: urlPath + `/browse/${id}/${second}`,
      type: 'POST',
      data: '',
      async:false,
      success: (res) => {
      }
  })
}

function pagehideHander(stopTime, id) {
    let stopTimeT = new Date().getTime() - stopTime;
    var second = Math.floor(stopTimeT / 1000);
    var isPc = IsPC();
    var u = navigator.userAgent, app = navigator.appVersion;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
      let a = random(1, 20)
      // 解决部分安卓机点击关闭无法监听问题，先给默认值，后面关闭覆盖默认值
      $.ajax({
        url: urlPath + `/browse/${id}/${second + a}`,
        type: 'POST',
        data: '',
        async:false,
        success: (res) => {
        }
     })
    }
    else if (isIOS) {
      let a = random(1, 100)
      // 解决ios 点击关闭无法监听问题
      $.ajax({
            url: urlPath + `/browse/${id}/${second + a}`,
            type: 'POST',
            data: '',
            async:false,
            success: (res) => {
            }
        })
    }
    else if(isPc){
       let a = random(1, 10)
       // 防止机器人点击， 后面关闭页面自动覆盖最新的时间
       $.ajax({
        url: urlPath + `/browse/${id}/${second + a}`,
        type: 'POST',
        data: '',
        async:false,
        success: (res) => {
        }
     })
    }
    else{
      let a = random(1, 50)
      // 初始化时间
      $.ajax({
       url: urlPath + `/browse/${id}/${second + a}`,
       type: 'POST',
       data: '',
       async:false,
       success: (res) => {
       }
    })
   }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
 
}
//  判断是否为pc端
function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
　　　　if (userAgentInfo.indexOf(Agents[v]) > 0) {
　　　　　　 flag = false;
　　　　　　 break;
　　　　}
　　 }
　　 return flag;
}