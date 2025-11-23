

function setup() {
  createCanvas(600, 400);
  frameRate(18);
}

function draw() {
  background(240);
  
  
  let T = millis() / 1000;

  
  
  
  
  //배경 원
  
  //노란색
  strokeWeight(0);
  fill(250,250,150, 100);
  let yellowX = -50 + sin(T * 0.5) * 15;
  let yellowY = 450 + cos(T * 0.7) * 10;
  ellipse(yellowX, yellowY, 800, 450);
  
  //빨간색 -오른쪽
  fill(250,150,150, 150);
  let redRightX = 650 + sin(T * 0.6 + 1) * 12;
  let redRightY = 150 + cos(T * 0.8 + 1) * 8;
  ellipse(redRightX, redRightY, 400, 400);
  // 왼쪽
  fill(250,150,150, 100);
  let redLeftX = -50 + sin(T * 0.4 + 2) * 10;
  let redLeftY = 0 + cos(T * 0.5 + 2) * 12;
  ellipse(redLeftX, redLeftY, 600, 550);

  
  //초록색
  fill(150,250,150, 100);
  let greenX = 450 + sin(T * 0.55 + 3) * 14;
  let greenY = 350 + cos(T * 0.65 + 3) * 11;
  ellipse(greenX, greenY, 600, 550);
  
  //파란색
  fill(150,150,250, 100);
  let blueX = 330 + sin(T * 0.45 + 4) * 13;
  let blueY = 0 + cos(T * 0.75 + 4) * 9;
  ellipse(blueX, blueY, 600, 350);  
  
  // 밑에 네모도형들 
  let move1 = sin(T * 2) * 20;
  let move2 = sin(T * 2) * 20;
  
  //빨간네모
  fill(250,50,50, 200);
  quad(210, 400, 290 + move1, 250, 458 + move2, 279, 450, 480);
  
  //초록네모
  stroke(150,150,250);
  fill(50,250,50);
  strokeWeight(2);
  quad(190, 335, 280 + move1, 350, 260 + move2, 400, 190, 400);
  
  //노란네모
  fill(250,250,50);
  quad(70, 330, 190 + move1, 290, 220 + move2, 400, 90, 422);
  
  
  
  // 큰원 회전
  let angle1 = T * 0.5;
  push();
  translate(75, 75);
  rotate(angle1);
  strokeWeight(0);
  
  fill(250,250,50);
  arc(0, 0, 150, 150, radians(0), radians(90));
  
  fill(250,50,50);
  arc(0, 0, 150, 150, radians(90), radians(180));
  
  fill(50,50,250);
  arc(0, 0, 150, 150, radians(180), radians(270));
  
  fill(50,250,50);
  arc(0, 0, 150, 150, radians(270), radians(0));
  
  pop();
  
  // 중간 원 회전
  let angle2 = T * -0.8;
  push();
  translate(75, 75);
  rotate(angle2);
  
  fill(50,250,50);
  arc(0, 0, 100, 100, radians(0), radians(90));
  
  fill(50,50,250);
  arc(0, 0, 100, 100, radians(90), radians(180));
  
  fill(250,50,50);
  arc(0, 0, 100, 100, radians(180), radians(270));
  
  fill(250,250,50);
  arc(0, 0, 100, 100, radians(270), radians(0));
  
  pop();
  
  // 작은원 회전
  let angle3 = T * 1.2;
  push();
  translate(75, 75);
  rotate(angle3);
  
  fill(250,50,50);
  arc(0, 0, 50, 50, radians(0), radians(90));
  fill(50,250,50);
  arc(0, 0, 50, 50, radians(90), radians(180));
  fill(250,250,50);
  arc(0, 0, 50, 50, radians(180), radians(270));
  fill(50,50,250);
  arc(0, 0, 50, 50, radians(270), radians(0));
  
  pop();
  

  //노란네모 무늬
  strokeWeight(2);
  
  stroke(250,50,50);
  line(76, 354,151, 332);
  line(96, 348, 108, 390);
  line(160, 360, 171, 394);
  line(122, 340, 135,386);
  line(130, 369, 182,354);
  
  fill(50,50,250);
  ellipse(151, 332, 10, 10);
  ellipse(182,354, 10, 10);
  ellipse(108, 390, 10, 10);
  ellipse(137,390, 10, 10);
  ellipse(171, 394, 12, 12);
  
  
  
 // 가운대 선
  let color1 = (T * 30) % 360;
  let color2 = (T * 30 + 90) % 360;
  let color3 = (T * 30 + 180) % 360;
  let color4 = (T * 30 + 270) % 360;
  
  // 색 변환
  let r1 = 128 + 127 * sin(color1 * PI / 180);
  let g1 = 128 + 127 * sin((color1 + 120) * PI / 180);
  let b1 = 128 + 127 * sin((color1 + 240) * PI / 180);
  
  let r2 = 128 + 127 * sin(color2 * PI / 180);
  let g2 = 128 + 127 * sin((color2 + 120) * PI / 180);
  let b2 = 128 + 127 * sin((color2 + 240) * PI / 180);
  
  let r3 = 128 + 127 * sin(color3 * PI / 180);
  let g3 = 128 + 127 * sin((color3 + 120) * PI / 180);
  let b3 = 128 + 127 * sin((color3 + 240) * PI / 180);
  
  let r4 = 128 + 127 * sin(color4 * PI / 180);
  let g4 = 128 + 127 * sin((color4 + 120) * PI / 180);
  let b4 = 128 + 127 * sin((color4 + 240) * PI / 180);
  
  noFill();
  strokeWeight(7);
  
  //시작
  stroke(r1, g1, b1);
  arc(30, 230, 150, 150, radians(0), radians(180));
  
  //노란 곡선
  stroke(r2, g2, b2);
  arc(179, 218, 150, 150, radians(170), radians(270));
  
  //파란 직선
  stroke(r3, g3, b3);
  line(178, 145,182, 219);

  //초록 s자
  stroke(r4, g4, b4);
  arc(220, 185, 100, 100, radians(0), radians(140));
  arc(320, 185, 100, 100, radians(180), radians(-60));
  
  //빨간 직선
  stroke(r1, g1, b1);
  line(348, 145, 316, 199);
  
  //파란곡선
  stroke(r2, g2, b2);
  arc(410, 235, 200 ,200, radians(90), radians(200));
  
  //노란 직선
  stroke(r3, g3, b3);
  line(472,229, 412,335);
  
  //초록 직선
  stroke(r4, g4, b4);
  line(472,229, 622, 311);
  
  //선 접합부분 표현
  strokeWeight(2);
  
    // 빨 -> 노
  fill(r2, g2, b2);
  stroke(r1, g1, b1);
  ellipse(105,231,10, 10);
  
    //노 -> 파
  stroke(r2, g2, b2);
  fill(r3, g3, b3);
  ellipse(178, 145, 10, 10);
  
    // 파 -> 초
  stroke(r3, g3, b3);
  fill(r4, g4, b4);
  ellipse(182, 219, 10, 10);
  
    // 초 -> 빨
  fill(r1, g1, b1);
  stroke(r4, g4, b4);
  ellipse(348, 145, 10, 10);
  
    //빨 -> 파
  fill(r2, g2, b2);
  stroke(r1, g1, b1);
  ellipse(318, 196, 10, 10);
  

    // 파 -> 노
  fill(r3, g3, b3);
  stroke(r2, g2, b2);
  ellipse(412,335, 10 ,10);
  
    // 노 -> 초
  stroke(r3, g3, b3);
  fill(r4, g4, b4);
  ellipse(472,229, 10,10);
  
  
  // 크기 작아지는 원 4개 - 색깔 
  strokeWeight(10);
  noFill();
  
  let colorChange = floor((T * 2) % 4);
  
  if(colorChange == 0) {
    stroke(250, 50, 50);
    ellipse(250, 70, 100, 100);
    stroke(250, 250, 0);
    ellipse(300, 70, 75, 75);
    stroke(50, 250, 50);
    ellipse(350, 70, 50, 50);
    stroke(50, 50, 250);
    ellipse(380, 70, 25, 25);
  }
  
  if(colorChange == 1) {
    stroke(50, 50, 250);
    ellipse(250, 70, 100, 100);
    stroke(250, 50, 50);
    ellipse(300, 70, 75, 75);
    stroke(250, 250, 0);
    ellipse(350, 70, 50, 50);
    stroke(50, 250, 50);
    ellipse(380, 70, 25, 25);
  }
  
  if(colorChange == 2) {
    stroke(50, 250, 50);
    ellipse(250, 70, 100, 100);
    stroke(50, 50, 250);
    ellipse(300, 70, 75, 75);
    stroke(250, 50, 50);
    ellipse(350, 70, 50, 50);
    stroke(250, 250, 0);
    ellipse(380, 70, 25, 25);
  }
  
  if(colorChange == 3) {
    stroke(250, 250, 0);
    ellipse(250, 70, 100, 100);
    stroke(50, 250, 50);
    ellipse(300, 70, 75, 75);
    stroke(50, 50, 250);
    ellipse(350, 70, 50, 50);
    stroke(250, 50, 50);
    ellipse(380, 70, 25, 25);
  }
  
  
  //오른쪽 네모난 원들 굴러가게
  strokeWeight(3);
  
  let rotate1 = (T * 60) % 360;
  
  if(rotate1 >= 0 && rotate1 < 90) {
    fill(250,150,150);
    stroke(250,50, 50);
    ellipse(465,60, 20,100);
    
    fill(250,250,150);
    stroke(250,250,50);
    ellipse(510,17,100,20);
    
    fill(150,250,150);
    stroke(50,250,50);
    ellipse(551,60,20,100);
    
    fill(150,150,250);
    stroke(50,50,250);
    ellipse(510,106, 100,20);
  }
  
  if(rotate1 >= 90 && rotate1 < 180) {
    fill(150,150,250);
    stroke(50,50,250);
    ellipse(465,60, 20,100);
    
    fill(250,150,150);
    stroke(250,50, 50);
    ellipse(510,17,100,20);
    
    fill(250,250,150);
    stroke(250,250,50);
    ellipse(551,60,20,100);
    
    fill(150,250,150);
    stroke(50,250,50);
    ellipse(510,106, 100,20);
  }
  
  if(rotate1 >= 180 && rotate1 < 270) {
    fill(150,250,150);
    stroke(50,250,50);
    ellipse(465,60, 20,100);
    
    fill(150,150,250);
    stroke(50,50,250);
    ellipse(510,17,100,20);
    
    fill(250,150,150);
    stroke(250,50, 50);
    ellipse(551,60,20,100);
    
    fill(250,250,150);
    stroke(250,250,50);
    ellipse(510,106, 100,20);
  }
  
  if(rotate1 >= 270 && rotate1 < 360) {
    fill(250,250,150);
    stroke(250,250,50);
    ellipse(465,60, 20,100);
    
    fill(150,250,150);
    stroke(50,250,50);
    ellipse(510,17,100,20);
    
    fill(150,150,250);
    stroke(50,50,250);
    ellipse(551,60,20,100);
    
    fill(250,150,150);
    stroke(250,50, 50);
    ellipse(510,106, 100,20);
  }
  
  
  // 막대기들 움직임
  strokeWeight(5);
  
  
  let length1 = sin(T * 1.5) * 0.35 + 0.65;
  
  
  // 오른쪽 - 노랑
  stroke(250,250,50);
  
  let startX1 = 610;
  let startY1 = 136;
  let endX1 = 542;
  let endY1 = 201;
  let newX1 = startX1 + (endX1 - startX1) * length1;
  let newY1 = startY1 + (endY1 - startY1) * length1;
  line(startX1, startY1, newX1, newY1);
  
  let startX2 = 562;
  let startY2 = 221;
  let endX2 = 626;
  let endY2 = 161;
  let newX2 = startX2 + (endX2 - startX2) * (1 - length1);
  let newY2 = startY2 + (endY2 - startY2) * (1 - length1);
  line(newX2, newY2, endX2, endY2);
  
  let startX3 = 584;
  let startY3 = 241;
  let endX3 = 639;
  let endY3 = 190;
  let newX3 = startX3 + (endX3 - startX3) * (1 - length1);
  let newY3 = startY3 + (endY3 - startY3) * (1 - length1);
  line(newX3, newY3, endX3, endY3);
  
  // 오른쪽 밑 - 파랑
  stroke(50,50,250);
  
  startX1 = 488;
  startY1 = 367;
  endX1 = 502;
  endY1 = 412;
  newX1 = startX1 + (endX1 - startX1) * (1 - length1);
  newY1 = startY1 + (endY1 - startY1) * (1 - length1);
  line(newX1, newY1, endX1, endY1);
  
  startX2 = 503;
  startY2 = 341;
  endX2 = 526;
  endY2 = 412;
  newX2 = startX2 + (endX2 - startX2) * (1 - length1);
  newY2 = startY2 + (endY2 - startY2) * (1 - length1);
  line(newX2, newY2, endX2, endY2);
  
  startX3 = 517;
  startY3 = 317;
  endX3 = 551;
  endY3 = 412;
  newX3 = startX3 + (endX3 - startX3) * (1 - length1);
  newY3 = startY3 + (endY3 - startY3) * (1 - length1);
  line(newX3, newY3, endX3, endY3);
  
  let startX4 = 550;
  let startY4 = 342;
  let endX4 = 575;
  let endY4 = 411;
  let newX4 = startX4 + (endX4 - startX4) * (1 - length1);
  let newY4 = startY4 + (endY4 - startY4) * (1 - length1);
  line(newX4, newY4, endX4, endY4);
  
  // 왼쪽 - 빨강
  stroke(250,50,50);
  
  startX1 = 44;
  startY1 = 192;
  endX1 = 0;
  endY1 = 169;
  newX1 = startX1 + (endX1 - startX1) * (1 - length1);
  newY1 = startY1 + (endY1 - startY1) * (1 - length1);
  line(newX1, newY1, endX1, endY1);
  
  startX2 = 52;
  startY2 = 220;
  endX2 = 0;
  endY2 = 194;
  newX2 = startX2 + (endX2 - startX2) * (1 - length1);
  newY2 = startY2 + (endY2 - startY2) * (1 - length1);
  line(newX2, newY2, endX2, endY2);
  
  startX3 = 61;
  startY3 = 250;
  endX3 = 0;
  endY3 = 220;
  newX3 = startX3 + (endX3 - startX3) * (1 - length1);
  newY3 = startY3 + (endY3 - startY3) * (1 - length1);
  line(newX3, newY3, endX3, endY3);
  
  startX4 = 63;
  startY4 = 276;
  endX4 = 0;
  endY4 = 246;
  newX4 = startX4 + (endX4 - startX4) * (1 - length1);
  newY4 = startY4 + (endY4 - startY4) * (1 - length1);
  line(newX4, newY4, endX4, endY4);
  
  // 아래쪽 중간 - 초록
  stroke(50,250,50);
  
  startX1 = 311;
  startY1 = 317;
  endX1 = 273;
  endY1 = 404;
  newX1 = startX1 + (endX1 - startX1) * (1 - length1);
  newY1 = startY1 + (endY1 - startY1) * (1 - length1);
  line(newX1, newY1, endX1, endY1);
  
  startX2 = 325;
  startY2 = 338;
  endX2 = 298;
  endY2 = 403;
  newX2 = startX2 + (endX2 - startX2) * (1 - length1);
  newY2 = startY2 + (endY2 - startY2) * (1 - length1);
  line(newX2, newY2, endX2, endY2);
  
  startX3 = 345;
  startY3 = 348;
  endX3 = 322;
  endY3 = 403;
  newX3 = startX3 + (endX3 - startX3) * (1 - length1);
  newY3 = startY3 + (endY3 - startY3) * (1 - length1);
  line(newX3, newY3, endX3, endY3);
  
  startX4 = 370;
  startY4 = 354;
  endX4 = 350;
  endY4 = 400;
  newX4 = startX4 + (endX4 - startX4) * (1 - length1);
  newY4 = startY4 + (endY4 - startY4) * (1 - length1);
  line(newX4, newY4, endX4, endY4);
  
}

function keyPressed() {
  if(key == 's' || key == 'S') {
    saveGif('sketch', 9.5);
  }
}
