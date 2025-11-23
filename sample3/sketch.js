function setup() {
  createCanvas(600, 400);
}

let ball1x = 34;
let ball1y = 110;

let ball2x = 542;
let ball2y = 296;

let ball3x = 532;
let ball3y = 20;

let sun = -140;

let start = 0;

let R1=200,G1=150,B1=30,N1=40;

function draw() {
  background(250,250,150);
  
  //배경
  
  strokeWeight(0);
  fill(R1,G1,B1, N1);
  ellipse(ball1x, ball1y, 200, 200);
  
  ellipse(ball2x, ball2y, 200, 200);

  ellipse(ball3x, ball3y, 100);
  
  
  
  //후드
  
  //몸통(몸통)
  strokeWeight(3);
  fill(255, 165, 0);
  ellipse(300,400, 200,340);
  
  //몸통(배)
  fill(250);
  ellipse(300,400, 150,240);
  
  //팔부분
  fill(255, 165, 0);
  ellipse(215, 328, 50, 100);
  
  ellipse(385, 328, 50, 100);
  
  // 팔
  fill(251,206,177);
  quad(220, 378,251, 391, 257, 372,234,362);
  quad(363,364,343, 379, 346,394,378,378);
  
  arc(223,368, 30, 20, radians(90), radians(330));
  arc(377,368, 30, 20, radians(200), radians(90));
  
  
  // 팔꿈치
  strokeWeight(0);
  ellipse(223,368, 28, 18);
  ellipse(377,368, 28, 18);
  strokeWeight(3);
  
  // 주머니
  fill(250);
  quad(260, 360, 340, 360, 350, 400, 250, 400);
  
  
  
  
  
  if(mouseX < 200) {
          // 귀 겉 
    strokeWeight(3);
    fill(255, 165, 0);
    arc(215, 67, 80,100, radians(266), radians(340));

  
  
    //귀 안 핑크
    fill(255, 165, 150);
    ellipse(210,80,40,120);

  
    // 귀 털
    fill(250);
    ellipse(220, 70, 20, 40);
  }
  
  if(400 < mouseX) {
          // 귀 겉 
    strokeWeight(3);
    fill(255, 165, 0);
    arc(385, 67, 80,100, radians(200), radians(273));
  
  
    //귀 안 핑크
    fill(255, 165, 150);
    ellipse(390, 80, 40, 120);
  
    // 귀 털
    fill(250);
    ellipse(380, 70, 20, 40);
  }
    
  if (200 < mouseX && mouseX < 400) {
      // 귀 겉 
    strokeWeight(3);
    fill(255, 165, 0);
    arc(215, 67, 80,100, radians(266), radians(340));
    arc(385, 67, 80,100, radians(200), radians(273));
  
  
    //귀 안 핑크
    fill(255, 165, 150);
    ellipse(210,80,40,120);
    ellipse(390, 80, 40, 120);
  
    // 귀 털
    fill(250);
    ellipse(380, 70, 20, 40);
    ellipse(220, 70, 20, 40);
  }
  
  

  
  
  
  
  
  
  // 웰시 머리
  fill(255, 165, 0);
  ellipse(300,170,260,250);
  
  fill(250);
  ellipse(300,195,240,210);
  ellipse(300,70,35,50);
  
  //후드 안쪽 어두운 회색
  fill(100);
  ellipse(300,190,210,190);
  
  

  //내머리 (베이스)
  strokeWeight(3);
  fill(251,206,177);
  ellipse(300,180,190,190);
  
  ellipse(300,235,160,90);
  strokeWeight(0);
  
  ellipse(300,180,185,175);
  

  //후드 앞머리

  fill(0);
  ellipse(300,170,200,130);
  
  fill(251,206,177);
  ellipse(300,180,160,160);
  
  fill(0);
  ellipse(300,155,170,110);
  
  fill(251,206,177);
  ellipse(300,180,120,130);
  
  fill(0);
  ellipse(300,150,120,90);
  
  fill(251,206,177);
  ellipse(300,180,50,60);

  
  
  //후드 주둥이
  
  //
  strokeWeight(3);
  fill(250);
  ellipse(300,120,160,80);
  fill(0);
  ellipse(300,100, 30, 20);
  
  // 입 uu
  noFill();
  strokeWeight(5);
  arc(282,95, 50, 50, radians(30), radians(120));
  arc(318,95, 50, 50, radians(60), radians(150));
 
  
  //후드 눈
  strokeWeight(5);
  
  noFill(0);

  arc(250,48, 50, 50, radians(50), radians(120));
  arc(346,48, 50, 50, radians(60), radians(130));
  
  
  
  // 내얼굴 (디테일)
  
  
  //속눈썹
  strokeWeight(0);
  fill(0);
  ellipse(260, 203, 35, 35);
  ellipse(340, 203, 35, 35);
  
  //흰자
  fill(250);
  ellipse(262, 206, 33, 35);
  ellipse(338, 206, 33, 35);

  //눈동자
  fill(0);
  ellipse(265, 206, 25, 30);
  ellipse(335, 206, 25, 30);
  
  //똘망똘망
  fill(250);
  ellipse(270, 197, 10, 8);
  ellipse(340, 197, 10, 8);
  
  
  //볼따구
  
    strokeWeight(0);
  fill(250,160,160);
  ellipse(250, 235, 30,20);
  ellipse(350, 235, 30,20);
  
  
  //안경
  
  
  noFill();
  strokeWeight(3);
  stroke(50);
  ellipse(262,205, 60,50);
  ellipse(338, 205, 60,50);
  
  strokeWeight(5);
  line(292, 197,308,197);
  
  
  //입
  stroke(0);
  strokeWeight(2);
  fill(250,50, 50);
  ellipse(300, 250, 40,20);
  

  
  
  if (mouseIsPressed) {
    strokeWeight(2);
    fill(250,50, 50);
    arc(300,115, 30, 60, radians(30), radians(150));
    line(300, 120, 300, 135);

    arc(300,245, 30, 60, radians(30), radians(150));
    line(300, 255, 300, 265);

    
  }

  
  if (keyIsPressed) {
    if (key == '1') {
      strokeWeight(0);
      fill(255, 165, 0);
      ellipse(252,69,35,20);
      ellipse(344,69,35,20);
    
      strokeWeight(5);
      line(350, 60,330,68);
      line(330,68,350,80);
      
      line(250, 60, 270, 68);
      line(270, 68, 250, 80);
      
    }
    
    if (key == '2') {
      ball1x += random(-5,5);
      ball1y += random(-5,5);
      ball2x += random(-5,5);
      ball2y += random(-5,5);
      ball3x += random(-5,5);
      ball3y += random(-5,5);
      
      
      R1 = random(0,255);
      G1 = random(0,255);
      B1 = random(0,255);
      N1 = random(40,100);
    }
    if (key == '3') {
      start = 1;
    }
  
    if (key == '4') {
      start = 0;
    }
  }
  
  
  
  if (start == 1) {
    sun += 4;
  }
  if (start == 0) {
    sun -= 4;
  }
  
  sun = constrain(sun, -140, 230);
  
  
  
    stroke(0);
  strokeWeight(0);
  fill(20);
  
  //sun = 230
  
  rect(sun, 60, 140, 5);
  rect(sun+5, 65, 50, 5);
  rect(sun+10, 70, 40, 5);
  rect(sun+15, 75, 30, 5);
  
  rect(sun+85, 65, 50, 5);
  rect(sun+90, 70, 40, 5);
  rect(sun+95, 75, 30, 5);

  fill(255);
  rect(sun+10, 65, 5, 5);
  rect(sun+15, 70, 5, 5);
  rect(sun+20, 65, 5, 5);
  rect(sun+25, 70, 5, 5);
  
  rect(sun+90, 65, 5, 5);
  rect(sun+95, 70, 5, 5);
  rect(sun+100, 65, 5, 5);
  rect(sun+105, 70, 5, 5);
  
  

}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 8.5);
  }
}