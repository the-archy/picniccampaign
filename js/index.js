var j=["Mladým: víte, že dokážete rozhodnout volby?","Hnutí ano prostě chce žít v minulosti bez perspektivy.","Boj s korupcí, ne udávání lidí.","Investice do sportu a kultury jsou zárukou zdravé společnosti.","Potřebujeme obnovit rovnováhu přírody!","Byty je třeba stavět, ne danit.","Nejvyšší čas zastavit zadlužování naší země!","udělejme z česka sebevědomého spojence","Místo byrokratického pekla skutečná digitalizace","Staňme se digitálním tygrem!","Veřejné finance průhledně a čistě","Dítě potřebuje náruč jedné pečující osoby!","Politik má sloužit lidem a nutit stát, aby fungoval stejně","Podpořte finančně piráty a starosty","pojďme postavit ekonomiku na nohy","2 % z rozpočtu pro armádu vybojujeme!","kultura si zaslouží 1 % z rozpočtu","na šikaně živnostníků se podílet nebudeme","skutečně digitální stát, na co máme internet?","pojďme zreformovat školství. od základů.","finance řízené podle plánu","vraťme lesům jejich zdraví","1000 korun pro každého seniora z dotací Agrofertu. Ať si pan Babiš platí předvolební dárečky ze svého.","Máme už dost nekonečných korupčních kauz. Po volbách s nimi zatočíme.","Místo jednolitých polí pestrá krajina.","je čas vyrazit pomoci na jižní moravu!"],z=[{url:"https://picsum.photos/800",weight:5},{url:"https://source.unsplash.com/800x800",weight:10},{url:"https://source.unsplash.com/800x800/?communism",weight:3},{url:"https://source.unsplash.com/800x800/?cat",weight:1},{url:"https://source.unsplash.com/800x800/?puppy",weight:1},{url:"https://source.unsplash.com/800x800/?chicken",weight:1},{url:"https://source.unsplash.com/800x800/?angry",weight:3}];var w=(t,s)=>{let n=[];for(;t.length>s;){let o=t.substring(0,s).lastIndexOf(" ");o=o<=0?s:o,n.push(t.substring(0,o));let r=t.indexOf(" ",o)+1;(r<o||r>o+s)&&(r=o),t=t.substring(r)}return n.push(t),n},p=t=>t[Math.floor(Math.random()*t.length)];var L=z.flatMap(({url:t,weight:s})=>Array(s).fill(t)),I=new FileReader,E=new Image;E.src="public/logo.png";var i=new Image,g="Test text",h=async()=>{let t=await fetch(p(L));return new Promise(s=>{let n=new Image;n.addEventListener("load",()=>{i=n,s()}),n.crossOrigin="anonymous",n.src=t.url})},v=()=>{g=p(j)},a=document.getElementById("picture"),e=a.getContext("2d"),x=new FontFace("Bebas Neue","url(public/BebasNeue-Bold.ttf)"),M=async()=>{await x.load(),document.fonts.add(x)},B=t=>{!t.type.startsWith("image/")||I.readAsDataURL(t)};a.addEventListener("dragover",t=>t.preventDefault());a.addEventListener("drop",t=>{t.preventDefault(),!(!t.dataTransfer||t.dataTransfer.files.length<=0)&&B(t.dataTransfer.files[0])});var l=async()=>{e.fillStyle="black",e.fillRect(0,0,a.width,a.height);let t=a.width/i.width,s=a.height/i.height,n=Math.max(t,s);e.setTransform(n,0,0,n,0,0),e.drawImage(i,0,0),e.setTransform(),e.drawImage(E,525,20);let o=w(g,20).reverse(),r=o.length<5?60:40;e.font=`${r}px 'Bebas Neue'`,o.forEach((c,y)=>{let k=30,b=685,u=15,m=u+r;e.fillStyle="#f9dc4d",e.fillRect(k,b-y*m,e.measureText(c).width+2*u,m),e.textBaseline="top",e.fillStyle="black",e.fillText(c,k+u,b+u-y*m)}),I.addEventListener("load",c=>{i=new Image,i.addEventListener("load",()=>l()),i.src=c.target.result});let f=document.getElementById("save");f.setAttribute("download","PirStanKampan.jpg"),setTimeout(()=>{f.setAttribute("href",a.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"))},500)},D=document.getElementById("randomize");D.addEventListener("click",async()=>{v(),await h(),l()});var S=document.getElementById("randomize-img");S.addEventListener("click",async()=>{await h(),l()});var A=document.getElementById("randomize-text");A.addEventListener("click",()=>{v(),l()});var T=document.getElementById("customImage");T.addEventListener("change",t=>{t.preventDefault(),!(t.target.files.length<=0)&&B(t.target.files[0])});var F=document.getElementById("customImageBtn");F.addEventListener("click",()=>{T.click()});var d=document.getElementById("customText"),R=async t=>{(t.type==="input"||d.value)&&(g=d.value,l())};d.addEventListener("click",R);d.addEventListener("input",R);M();v();h().then(()=>l());
//# sourceMappingURL=index.js.map
