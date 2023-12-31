Game.registerMod("PizzaFaceMod",{
	init:function(){
		PizzaClick=function() {
			var list=['clot', 'lost', 'lost', 'lost'];
			var choice = choose(list);
			switch (choice) {
				case 'lost':
					var moni=Math.min(Game.cookies*0.05,Game.cookiesPs*60*10)+13;
					moni=Math.min(Game.cookies,moni);
					Game.Spend(moni);
					popup=loc("Ruin!")+'<br><small>'+loc("Lost %1!",loc("%1 cookie",LBeautify(moni)))+'</small>';
				case 'clot':
					buff=Game.gainBuff('clot',Math.ceil(13),0.5);
			}
		}
		var mod = App.mods["PizzaFaceMod"];
		var modDir;
		if(mod.dir.lastIndexOf('\\') == -1) {
			modDir =  '../mods/' + (mod.local ? 'local' : 'workshop') + '/' + mod.path;
		}
		else {
			modDir =  '../mods/' + mod.dir.substring(mod.dir.lastIndexOf('\\') + 1);
		}
		mod.context = this;
		mod.context.scrollPos = 0; 
		mod.context.modDirectory = modDir;
		var divElement = document.createElement('div');

        divElement.className = 'pizzaface';

        var styleElement = document.createElement('style');

        styleElement.type = 'text/css';

        let mystyle = `.pizzaface {position: fixed; transform: translate(-50%, -50%); width: 128px; z-index: 9999; transition: all .25s;}`+
        `.pizzaface img {width: 100%; height: 100%}`;

        styleElement.innerHTML = mystyle;

        var bodyElement = document.getElementsByTagName('body')[0];

        bodyElement.appendChild(divElement);
        bodyElement.appendChild(styleElement);

        var divElement = document.querySelector('.pizzaface');

        var imgElement = document.createElement('img');

        imgElement.id = "pizzimg";

        imgElement.src = modDir + '/Idle.gif';

        divElement.addEventListener('click', PizzaClick);

        divElement.appendChild(imgElement);

        PizzaLogic = function() {
            const pizzaface = document.querySelector(".pizzaface");
            document.body.addEventListener("mousemove", e => {
                pizzaface.style.left = `${e.clientX}px`;
                pizzaface.style.top = `${e.clientY}px`;
            });
        }

        PizzaLogic();
	},
});
