const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]");let o=null;e.addEventListener("click",(function(){o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disable=!0})),n.addEventListener("click",(function(){e.disable=!1,clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.5355c887.js.map
