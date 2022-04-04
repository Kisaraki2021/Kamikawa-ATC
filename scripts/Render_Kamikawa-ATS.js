var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);
importPackage(Packages.jp.ngt.ngtlib.math);

//##### オブジェクト定義 ####################
function init(par1, par2)
{
	//Kamikawa-ATS
	//パネル
	ATS_PANEL = renderer.registerParts(new Parts("ATS_PANEL")); //bodyに組み込んだほうがいいかも

	// 1段目
	K_ATS = renderer.registerParts(new Parts("K_ATS"));
	NO_ATS = renderer.registerParts(new Parts("NO_ATS"));

	// 2段目
	L0 = renderer.registerParts(new Parts("L0"));
	L5 = renderer.registerParts(new Parts("L5"));
	L10 = renderer.registerParts(new Parts("L10"));
	L15 = renderer.registerParts(new Parts("L15"));
	L20 = renderer.registerParts(new Parts("L20"));
	L25 = renderer.registerParts(new Parts("L25"));
	L30 = renderer.registerParts(new Parts("L30"));
	L35 = renderer.registerParts(new Parts("L35"));
	L40 = renderer.registerParts(new Parts("L40"));
	L45 = renderer.registerParts(new Parts("L45"));
	L50 = renderer.registerParts(new Parts("L50"));
	L55 = renderer.registerParts(new Parts("L55"));
	L60 = renderer.registerParts(new Parts("L60"));
	L65 = renderer.registerParts(new Parts("L65"));
	L70 = renderer.registerParts(new Parts("L70"));
	L75 = renderer.registerParts(new Parts("L75"));
	L80 = renderer.registerParts(new Parts("L80"));
	L85 = renderer.registerParts(new Parts("L85"));
	L90 = renderer.registerParts(new Parts("L90"));
	L95 = renderer.registerParts(new Parts("L95"));
	L100 = renderer.registerParts(new Parts("L100"));
	L105 = renderer.registerParts(new Parts("L105"));
	L110 = renderer.registerParts(new Parts("L110"));
	L115 = renderer.registerParts(new Parts("L115"));
	L120 = renderer.registerParts(new Parts("L120"));
	L125 = renderer.registerParts(new Parts("L125"));
	L130 = renderer.registerParts(new Parts("L130"));
	L135 = renderer.registerParts(new Parts("L135"));
	L140 = renderer.registerParts(new Parts("L140"));
	L145 = renderer.registerParts(new Parts("L145"));
	L150 = renderer.registerParts(new Parts("L150"));
	L155 = renderer.registerParts(new Parts("L155"));
	L160 = renderer.registerParts(new Parts("L160"));

	// 3段目
	ATS_PA = renderer.registerParts(new Parts("ATS_PA"));
	ATS_B = renderer.registerParts(new Parts("ATS_B"));

}

//Kamikawa-ATS
function render_Monitor_1(entity){
	if(entity == null){
		return
	}

	var signal = entity.getSignal();
	var speed = Math.ceil(entity.getSpeed() * 72);

//1段目
if (1 <= signal && signal <= 34){
	K_ATS.render(renderer);
} 
else {
	NO_ATS.render(renderer);
}

//2段目
switch (signal) {
	case 1 : L0.render(renderer); break;
	case 2 : L5.redner(renderer); break;
	case 3 : L10.redner(renderer); break;
	case 4 : L15.render(renderer); break;
	case 5 : L20.render(renderer); break;
	case 6 : L25.render(renderer); break;
	case 7 : L30.render(renderer); break;
	case 8 : L35.render(renderer); break;
	case 9 : L40.render(renderer); break;
	case 10 : L45.render(renderer);break;
	case 11 : L50.render(renderer); break;
	case 12 : L55.render(renderer); break;
	case 13 : L60.render(renderer); break;
	case 14 : L65.render(renderer); break;
	case 15 : L70.redner(renderer); break;
	case 16 : L75.render(renderer); break;
	case 17 : L80.render(renderer); break;
	case 18 : L85.render(renderer); break;
	case 19 : L90.render(renderer); break;
	case 20 : L95.render(renderer); break;
	case 21 : L100.render(renderer); break;
	case 22 : L105.render(renderer); break;
	case 23 : L110.redner(renderer); break;
	case 24 : L115.render(renderer); break;
	case 25 : L120.render(renderer); break;
	case 26 : L125.render(renderer); break;
	case 27 : L130.render(renderer); break;
	case 28 : L135.render(renderer); break;
	case 29 : L140.render(renderer); break;
	case 30 : L145.render(renderer); break;
	case 31 : L150.render(renderer); break;
	case 32 : L155.render(renderer); break;
	case 33 : L160.render(renderer); break;
}

//3段目
if ((signal == 1 && speed > 0) ||
	(signal == 2 && speed > 5) || 
	(signal == 3 && speed > 10) || 
	(signal == 4 && speed > 15) || 
	(signal == 5 && speed > 20) || 
	(signal == 6 && speed > 25) || 
	(signal == 7 && speed > 30) || 
	(signal == 8 && speed > 35) || 
	(signal == 9 && speed > 40) || 
	(signal == 10 && speed > 45) || 
	(signal == 11 && speed > 50) || 
	(signal == 12 && speed > 55) || 
	(signal == 13 && speed > 60) ||
	(signal == 14 && speed > 65) ||
	(signal == 15 && speed > 70) ||
	(signal == 16 && speed > 75) ||
	(signal == 17 && speed > 80) ||
	(signal == 18 && speed > 85) ||
	(signal == 19 && speed > 90) ||
	(signal == 20 && speed > 95) ||
	(signal == 21 && speed > 100) ||
	(signal == 22 && speed > 105) ||
	(signal == 23 && speed > 110) ||
	(signal == 24 && speed > 115) ||
	(signal == 25 && speed > 120) ||
	(signal == 26 && speed > 125) ||
	(signal == 27 && speed > 130) ||
	(signal == 28 && speed > 135) ||
	(signal == 29 && speed > 140) ||
	(signal == 30 && speed > 145) ||
	(signal == 31 && speed > 150) ||
	(signal == 32 && speed > 155) ||
	(signal == 33 && speed > 160))
	{
		ATS_B.render(renderer);
	}
if (signal == 34) {
	ATS_PA.render(renderer);
    }
}