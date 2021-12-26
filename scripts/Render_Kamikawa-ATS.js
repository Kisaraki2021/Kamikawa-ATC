var renderClass = "jp.ngt.rtm.render.VehiclePartsRenderer";
importPackage(Packages.org.lwjgl.opengl);
importPackage(Packages.jp.ngt.rtm.render);

//##### オブジェクト定義 ####################
function init(par1, par2)
{
	//動かさないパーツ
	body = renderer.registerParts(new Parts("obj1", "obj2" ,"obj3", "obj4","obj5"));

	//ライト
	lightF = renderer.registerParts(new Parts("lightF"));//前照灯ONの時
	lightB = renderer.registerParts(new Parts("lightB"));//前照灯OFFの時

	//ドア
	door_LF = renderer.registerParts(new Parts("doorFL"));	//左側・前方向に開くドアのオブジェクト名
	door_RF = renderer.registerParts(new Parts("doorFR"));	//左側・後方向に開くドアのオブジェクト名
	door_LB = renderer.registerParts(new Parts("doorBL"));	//右側・前方向に開くドアのオブジェクト名
	door_RB = renderer.registerParts(new Parts("doorBR"));	//右側・後方向に開くドアのオブジェクト名
	
	//半透明
	alpha = renderer.registerParts(new Parts("alpha"));

	//半透明ドア
	door_LFa = renderer.registerParts(new Parts("doorFL1"));
	door_RFa = renderer.registerParts(new Parts("doorFR1"));
	door_LBa = renderer.registerParts(new Parts("doorBL1"));
	door_RBa = renderer.registerParts(new Parts("doorBR1"));

	//TTK+パンタグラフ
	pantabase = renderer.registerParts(new Parts("panta_AB1", "panta_AB2", "panta_A1", "panta_A2", "panta_B1", "panta_B2", "panta_C1", "panta_C2", "panta_D1", "panta_D2"));
	pantaA11 = renderer.registerParts(new Parts("panta_A1_1"));
	pantaA12 = renderer.registerParts(new Parts("panta_A1_2"));
	pantaA13 = renderer.registerParts(new Parts("panta_A1_3"));
	pantaA14 = renderer.registerParts(new Parts("panta_A1_4"));
	pantaA15 = renderer.registerParts(new Parts("panta_A1_5"));
	pantaA21 = renderer.registerParts(new Parts("panta_A2_1"));
	pantaA22 = renderer.registerParts(new Parts("panta_A2_2"));
	pantaA23 = renderer.registerParts(new Parts("panta_A2_3"));
	pantaA24 = renderer.registerParts(new Parts("panta_A2_4"));
	pantaA25 = renderer.registerParts(new Parts("panta_A2_5"));
	pantaB11 = renderer.registerParts(new Parts("panta_B1_1"));
	pantaB12 = renderer.registerParts(new Parts("panta_B1_2"));
	pantaB13 = renderer.registerParts(new Parts("panta_B1_3"));
	pantaB14 = renderer.registerParts(new Parts("panta_B1_4"));
	pantaB15 = renderer.registerParts(new Parts("panta_B1_5"));
	pantaB21 = renderer.registerParts(new Parts("panta_B2_1"));
	pantaB22 = renderer.registerParts(new Parts("panta_B2_2"));
	pantaB23 = renderer.registerParts(new Parts("panta_B2_3"));
	pantaB24 = renderer.registerParts(new Parts("panta_B2_4"));
	pantaB25 = renderer.registerParts(new Parts("panta_B2_5"));
	pantaC11 = renderer.registerParts(new Parts("panta_C1_1"));
	pantaC12 = renderer.registerParts(new Parts("panta_C1_2"));
	pantaC13 = renderer.registerParts(new Parts("panta_C1_3"));
	pantaC14 = renderer.registerParts(new Parts("panta_C1_4"));
	pantaC15 = renderer.registerParts(new Parts("panta_C1_5"));
	pantaC21 = renderer.registerParts(new Parts("panta_C2_1"));
	pantaC22 = renderer.registerParts(new Parts("panta_C2_2"));
	pantaC23 = renderer.registerParts(new Parts("panta_C2_3"));
	pantaC24 = renderer.registerParts(new Parts("panta_C2_4"));
	pantaC25 = renderer.registerParts(new Parts("panta_C2_5"));
	pantaD11 = renderer.registerParts(new Parts("panta_D1_1"));
	pantaD12 = renderer.registerParts(new Parts("panta_D1_2"));
	pantaD13 = renderer.registerParts(new Parts("panta_D1_3"));
	pantaD14 = renderer.registerParts(new Parts("panta_D1_4"));
	pantaD15 = renderer.registerParts(new Parts("panta_D1_5"));
	pantaD21 = renderer.registerParts(new Parts("panta_D2_1"));
	pantaD22 = renderer.registerParts(new Parts("panta_D2_2"));
	pantaD23 = renderer.registerParts(new Parts("panta_D2_3"));
	pantaD24 = renderer.registerParts(new Parts("panta_D2_4"));
	pantaD25 = renderer.registerParts(new Parts("panta_D2_5"));

	//Kamikawa-ATS
	ATS_PANEL = renderer.registerParts(new Parts("ATS_PANEL"));
	K_ATS = renderer.registerParts(new Parts("K_ATS"));
	ATS_B = renderer.registerParts(new Parts("ATS_B"));
	ATS_PA = renderer.registerParts(new Parts("ATS_PA"));
	NO_ATS = renderer.registerParts(new Parts("NO_ATS"));
	L0 = renderer.registerParts(new Parts("L0"));
	L15 = renderer.registerParts(new Parts("L15"));
	L25 = renderer.registerParts(new Parts("L25"));
	L35 = renderer.registerParts(new Parts("L35"));
	L45 = renderer.registerParts(new Parts("L45"));
	L55 = renderer.registerParts(new Parts("L55"));
	L65 = renderer.registerParts(new Parts("L65"));
	L75 = renderer.registerParts(new Parts("L75"));
	L85 = renderer.registerParts(new Parts("L85"));
	L95 = renderer.registerParts(new Parts("L95"));
	L100 = renderer.registerParts(new Parts("L100"));
	L110 = renderer.registerParts(new Parts("L110"));
	L120 = renderer.registerParts(new Parts("L120"));
	L130 = renderer.registerParts(new Parts("L130"));
	L140 = renderer.registerParts(new Parts("L140"));
	L150 = renderer.registerParts(new Parts("L150"));
	L160 = renderer.registerParts(new Parts("L160"));
}

function render(entity, pass, par3)
{
	var doorMove = 0.64, //ドアの動く距離
		pantaDistance = 7.0, //パンタ中心の前後位置(m)
		pantaType = "Normal"; //パンタ高(Normal:標準-格納 / W51:W51-格納 / Compatible:標準-W51)
		
	GL11.glPushMatrix();
	
	//通常描画
	if(pass==0){
		body.render(renderer);
		ATS_PANEL.render(renderer);
		render_door(entity, doorMove);
		render_light(entity);
		render_panta(entity, pantaDistance, pantaType);
		render_Monitor_1(entity);
	}
	
	//半透明描画
	if(pass==1){
		alpha.render(renderer);
		render_door_a(entity, doorMove);
		render_Monitor_1(entity);
	}
	
	//発光部描画
	if(pass>=2){
		body.render(renderer);
		render_light(entity);
		render_door(entity, doorMove);
		render_Monitor_1(entity);
	}

	GL11.glPopMatrix();
}

//########## render_ライト(特殊発光) #########
function render_light(entity){

	var lightMove = 0;

	try{
		lightMove = (entity.seatRotation)/ 45;
	}catch(e){}

	 if(lightMove < 0){
	  GL11.glPushMatrix();
	  lightF.render(renderer);
	  GL11.glPopMatrix();
	 }else{
	  GL11.glPushMatrix();
	  lightB.render(renderer);
	  GL11.glPopMatrix();
	 }
}

//##### render_ドア ####################
function render_door(entity,doorMove){
	
	var doorMoveL = 0.0,
		doorMoveR = 0.0;
	
	try{
		doorMoveL = renderer.sigmoid(entity.doorMoveL / 60) * doorMove;
		doorMoveR = renderer.sigmoid(entity.doorMoveR / 60) * doorMove;
	}catch(e){}
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, doorMoveL);
	door_LF.render(renderer);
	GL11.glPopMatrix();
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, -doorMoveL);
	door_LB.render(renderer);
	GL11.glPopMatrix();
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, doorMoveR);
	door_RF.render(renderer);
	GL11.glPopMatrix();
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, -doorMoveR);
	door_RB.render(renderer);
	GL11.glPopMatrix();
}

//半透明ドア描画
function render_door_a(entity,doorMove){
	
	var doorMoveL = 0.0,
		doorMoveR = 0.0;
	
	try{
		doorMoveL = renderer.sigmoid(entity.doorMoveL / 60) * doorMove;
		doorMoveR = renderer.sigmoid(entity.doorMoveR / 60) * doorMove;
	}catch(e){}
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, doorMoveL);
	door_LFa.render(renderer);
	GL11.glPopMatrix();
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, -doorMoveL);
	door_LBa.render(renderer);
	GL11.glPopMatrix();
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, doorMoveR);
	door_RFa.render(renderer);
	GL11.glPopMatrix();
	
	GL11.glPushMatrix();
	GL11.glTranslatef(0.0, 0.0, -doorMoveR);
	door_RBa.render(renderer);
	GL11.glPopMatrix();
}

//##### render_パンタ ####################
function render_panta(entity,pantaDistance,pantaType){
	
	var pantaState = 0.0,
		pDis = pantaDistance;
	
	try{
		pantaState = renderer.sigmoid(entity.pantograph_F / 40);
	}catch(e){}
	
	switch(pantaType){
		case "W51" :
			var pAro1 = pantaState * 18 + 15,
				pAro2 = pantaState * 37 + 26,
				pBro1 = pantaState * 15 + 12,
				pBro2 = pantaState * 39 + 27,
				pCro1 = pantaState * 15 + 14,
				pCro2 = pantaState * 35 + 24,
				pCro4 = pantaState * 36 + 24,
				pCro5 = pantaState * 38 + 28;
			break;
		case "Compatible" :
			var pAro1 = pantaState * 15,
				pAro2 = pantaState * 26,
				pBro1 = pantaState * 12,
				pBro2 = pantaState * 27,
				pCro1 = pantaState * 14,
				pCro2 = pantaState * 24,
				pCro4 = pantaState * 24,
				pCro5 = pantaState * 28;
			break;
		default :
			var pAro1 = pantaState * 33,
				pAro2 = pantaState * 63,
				pBro1 = pantaState * 27,
				pBro2 = pantaState * 66,
				pCro1 = pantaState * 29,
				pCro2 = pantaState * 59,
				pCro4 = pantaState * 60,
				pCro5 = pantaState * 66;
			break;
	}
	
	pantabase.render(renderer);
	
	//パンタA1
	GL11.glPushMatrix();
	renderer.rotate(pAro1, 'X', 0.0, 2.8784, pDis+0.5224);
	pantaA11.render(renderer);
		renderer.rotate(-pAro2, 'X', 0.0, 3.6729, pDis+1.5431);
		pantaA12.render(renderer);
			renderer.rotate(pAro2-pAro1, 'X', 0.0, 4.6101, pDis+0.0935);
			pantaA13.render(renderer);
	GL11.glPopMatrix();
	GL11.glPushMatrix();
	renderer.rotate(-pAro1, 'X', 0.0, 2.8784, pDis-0.5224);
	pantaA14.render(renderer);
		renderer.rotate(pAro2, 'X', 0.0, 3.6729, pDis-1.5431);
		pantaA15.render(renderer);
	GL11.glPopMatrix();
	
	//パンタA2
	GL11.glPushMatrix();
	renderer.rotate(pAro1, 'X', 0.0, 2.8784, -pDis+0.5224);
	pantaA21.render(renderer);
		renderer.rotate(-pAro2, 'X', 0.0, 3.6729, -pDis+1.5431);
		pantaA22.render(renderer);
			renderer.rotate(pAro2-pAro1, 'X', 0.0, 4.6101, -pDis+0.0935);
			pantaA23.render(renderer);
	GL11.glPopMatrix();
	GL11.glPushMatrix();
	renderer.rotate(-pAro1, 'X', 0.0, 2.8784, -pDis-0.5224);
	pantaA24.render(renderer);
		renderer.rotate(pAro2, 'X', 0.0, 3.6729, -pDis-1.5431);
		pantaA25.render(renderer);
	GL11.glPopMatrix();
	
	//パンタB1
	GL11.glPushMatrix();
	renderer.rotate(pBro1, 'X', 0.0, 2.8784, pDis-0.5224);
	pantaB11.render(renderer);
		renderer.rotate(-pBro2, 'X', 0.0, 3.8526, pDis+0.93);
		pantaB12.render(renderer);
			renderer.rotate(pBro2-pBro1, 'X', 0.0, 4.6227, pDis+0.0229);
			pantaB13.render(renderer);
	GL11.glPopMatrix();
	GL11.glPushMatrix();
	renderer.rotate(-pBro1, 'X', 0.0, 2.8784, pDis+0.5224);
	pantaB14.render(renderer);
		renderer.rotate(pBro2, 'X', 0.0, 3.8526, pDis-0.93);
		pantaB15.render(renderer);
	GL11.glPopMatrix();
	
	//パンタB2
	GL11.glPushMatrix();
	renderer.rotate(pBro1, 'X', 0.0, 2.8784, -pDis-0.5224);
	pantaB21.render(renderer);
		renderer.rotate(-pBro2, 'X', 0.0, 3.8526, -pDis+0.93);
		pantaB22.render(renderer);
			renderer.rotate(pBro2-pBro1, 'X', 0.0, 4.6227, -pDis+0.0229);
			pantaB23.render(renderer);
	GL11.glPopMatrix();
	GL11.glPushMatrix();
	renderer.rotate(-pBro1, 'X', 0.0, 2.8784, -pDis+0.5224);
	pantaB24.render(renderer);
		renderer.rotate(pBro2, 'X', 0.0, 3.8526, -pDis-0.93);
		pantaB25.render(renderer);
	GL11.glPopMatrix();
	
	//パンタC1
	GL11.glPushMatrix();
	renderer.rotate(pCro1, 'X', 0.0, 3.0118, pDis-0.314);
	pantaC11.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(-pCro4, 'X', 0.0, 3.6084, pDis+0.7523);
			pantaC14.render(renderer);
			GL11.glPopMatrix();
		renderer.rotate(-pCro2, 'X', 0.0, 3.7151, pDis+0.8641);
		pantaC12.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(pCro2-pCro1, 'X', 0.0, 4.5998, pDis-0.6186);
			pantaC13.render(renderer);
			GL11.glPopMatrix();
			renderer.rotate(pCro5, 'X', 0.0, 3.5258, pDis+0.9758);
			pantaC15.render(renderer);
	GL11.glPopMatrix();
	
	//パンタC2
	GL11.glPushMatrix();
	renderer.rotate(pCro1, 'X', 0.0, 3.0118, -pDis-0.314);
	pantaC21.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(-pCro4, 'X', 0.0, 3.6084, -pDis+0.7523);
			pantaC24.render(renderer);
			GL11.glPopMatrix();
		renderer.rotate(-pCro2, 'X', 0.0, 3.7151, -pDis+0.8641);
		pantaC22.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(pCro2-pCro1, 'X', 0.0, 4.5998, -pDis-0.6186);
			pantaC23.render(renderer);
			GL11.glPopMatrix();
			renderer.rotate(pCro5, 'X', 0.0, 3.5258, -pDis+0.9758);
			pantaC25.render(renderer);
	GL11.glPopMatrix();
	
	//パンタD1
	GL11.glPushMatrix();
	renderer.rotate(-pCro1, 'X', 0.0, 3.0118, pDis+0.3140);
	pantaD11.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(pCro4, 'X', 0.0, 3.6084, pDis-0.7523);
			pantaD14.render(renderer);
			GL11.glPopMatrix();
		renderer.rotate(pCro2, 'X', 0.0, 3.7151, pDis-0.8641);
		pantaD12.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(-pCro2+pCro1, 'X', 0.0, 4.5998, pDis+0.6186);
			pantaD13.render(renderer);
			GL11.glPopMatrix();
			renderer.rotate(-pCro5, 'X', 0.0, 3.5258, pDis-0.9758);
			pantaD15.render(renderer);
	GL11.glPopMatrix();
	
	//パンタD2
	GL11.glPushMatrix();
	renderer.rotate(-pCro1, 'X', 0.0, 3.0118, -pDis+0.314);
	pantaD21.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(pCro4, 'X', 0.0, 3.6084, -pDis-0.7523);
			pantaD24.render(renderer);
			GL11.glPopMatrix();
		renderer.rotate(pCro2, 'X', 0.0, 3.7151, -pDis-0.8641);
		pantaD22.render(renderer);
			GL11.glPushMatrix();
			renderer.rotate(-pCro2+pCro1, 'X', 0.0, 4.5998, -pDis+0.6186);
			pantaD23.render(renderer);
			GL11.glPopMatrix();
			renderer.rotate(-pCro5, 'X', 0.0, 3.5258, -pDis-0.9758);
			pantaD25.render(renderer);
	GL11.glPopMatrix();
}

//Kamikawa-ATS
function render_Monitor_1(entity){
	if(entity == null){
		return
	}

	var signal = entity.getSignal();
	var speed = Math.ceil(entity.getSpeed() * 72);

//1段目
if (1 <= signal && signal <= 16){
	K_ATS.render(renderer);
} 
else {
	NO_ATS.render(renderer);
}

//2段目
switch (signal) {
	case 1 : L0.render(renderer); break;
	case 2 : L15.render(renderer); break;
	case 3 : L25.render(renderer); break;
	case 4 : L35.render(renderer); break;
	case 5 : L45.render(renderer); break;
	case 6 : L55.render(renderer); break;
	case 7 : L65.render(renderer); break;
	case 8 : L75.render(renderer); break;
	case 9 : L85.render(renderer); break;
	case 10 : L95.render(renderer); break;
	case 11 : L100.render(renderer); break;
	case 12 : L110.render(renderer); break;
	case 13 : L120.render(renderer); break;
	case 14 : L130.render(renderer); break;
	case 15 : L140.render(renderer); break;
	case 16 : L150.render(renderer); break;
	case 17 : L160.render(renderer); break;
	default : L25.render(renderer); break;
}

//3段目
if ((signal == 1 && speed > 0) ||
	(signal == 2 && speed > 15) || 
	(signal == 3 && speed > 25) || 
	(signal == 4 && speed > 35) || 
	(signal == 5 && speed > 45) || 
	(signal == 6 && speed > 55) || 
	(signal == 7 && speed > 65) || 
	(signal == 8 && speed > 75) || 
	(signal == 9 && speed > 85) || 
	(signal == 10 && speed > 95) || 
	(signal == 11 && speed > 100) || 
	(signal == 12 && speed > 110) || 
	(signal == 13 && speed > 120) ||
	(signal == 14 && speed > 130) ||
	(signal == 15 && speed > 140) ||
	(signal == 16 && speed > 150) ||
	(signal == 17 && speed > 160))
	{
		ATS_B.render(renderer);
	}
if (signal == 15) {
	ATS_PA.render(renderer);
    }
}