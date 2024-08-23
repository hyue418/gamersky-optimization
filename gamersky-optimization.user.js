// ==UserScript==
// @name         游民星空宽屏+去广告
// @namespace    https://github.com/hyue418
// @version      1.0.0
// @description  游民星空宽屏+去广告
// @author       hyue418
// @match        https://www.gamersky.com/*
// @icon         https://www.gamersky.com/favicon.ico
// @grant        GM_addStyle
// @license      GPL-3.0
// ==/UserScript==

(function() {
    'use strict';
    // 屏蔽广告
    GM_addStyle('.Mid0 {display:none !important}');
    GM_addStyle('.Mid2_R {display:none !important}');
    GM_addStyle('.gs_ccs_appdown {display:none !important}');

    // 优化页面宽度
    GM_addStyle('.Mid2_L {width:auto !important; float:none !important}');
    GM_addStyle('.Mid2L_crumb {width:auto !important}');
    GM_addStyle('.Mid2L_tit {width:auto !important}');
    GM_addStyle('.Mid2L_tit h1 {width:auto !important}');
    GM_addStyle('.post_ding_top {width:auto !important}');
    GM_addStyle('.Mid2L_con {width:auto !important}');
    GM_addStyle('.detail {width:auto !important}');
    GM_addStyle('.Content_Paging {width:auto !important}');
    GM_addStyle('.bd {width:auto !important}');
    GM_addStyle('.Content_Paging .bd ul {width:auto !important}');
    GM_addStyle('.Relevant {width:auto !important}');
    GM_addStyle('.box {width:auto !important}');
    GM_addStyle('.box_game {width:auto !important}');
})();
