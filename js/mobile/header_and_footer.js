
let strlogin='';
if(user){
    strlogin=`<a class="imgboxlogin" href="/user/info">
        <img class="userimglogin img-responsive" src="/头像.jpg"/>
    </a>`;
}
else{
    strlogin=`<a href="/login" class="ma text-right">登录</a>`;
}

$("body").prepend(`<div class="container-fluid">


	<div class="navbartop row">
		<div class="navbar-header col-xs-4">
			<a href="/"><img src="/starsea.png" class="navimg img-responsive"></img></a>
		</div>
		<div class="navbar-right col-xs-2 text-right">
		`+strlogin+`  
		  </div>
            <div class="navbar-right col-xs-2 text-right">
			<a href="/work" class="ma text-right">作品</a> 
         </div>
		  <div class="navbar-right col-xs-2 text-right">
		  <a href="/activity"
				class="ma text-right">活动</a> 
				 </div>
		  <div class="navbar-right col-xs-2 text-right">
		  <a href="/mintro.html"
				class="ma text-right">关于</a>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 imgbarcontainer">
			<img class="imgbar" src="/手机 页首.png"></img>
		</div>
	</div>
</div>`);

$("body").append(`
<div class="container-fluid">
    <div class="mfoot text-center row">
		<p class="footp">互联网ICP备案：鲁ICP备17053445号</p>
	</div>
</div>
`);
