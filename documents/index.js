module.exports = ( {bmizscore, resultWeight, musclemassindex, resultMuscle, mmiresult, food, physicalActivity, exercise, gender, age, weight, height, gripstrength, bmi}) => {
    
    const checkWeight = (weight) => {
        if(weight == "น้ำหนักเกิน,อ้วน") {
          return "red"
        } else if (weight == "น้ำหนักปกติ") {
          return "green"
        } else {
          return "dodgerBlue"
        }
      }
    return `
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com"> 
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300&display=swap" rel="stylesheet">
    <style>
        body{
            padding: 14px;
            font-size: 8px;
            font-family: 'Kanit', sans-serif;
        }
        .head {
            text-align: center;
            width: auto;
            height: 100px;
            font-size: 20px;
            padding: 5px 5px 20px 5px;
        }
        .box {
            width: auto;
            height: 155;
            text-align: center;
        }
        .contain {
            margin-lleft: 7px;
            margin-right: 7px;
            background-color: #F4F1F1;
            width: 260px;
            height: 100%;
            border-radius: 10px;
            display: inline-block;
        }
        .content {
            text-align: left;
            margin: 0 6px 0 6px;
        }
        th {
            border-bottom: 1px solid white;
        }
        p {
            word-break: break-all;
        }
        .headText {
            color: #FF892F;
            display: inline-block;
            font-size: 22px;
        }
        .headTextRed {
            color: #F31515;
            display: inline-block;
            font-size: 22px;
        }
        .headTextGreen {
            color: #49D646;
            display: inline-block;
            font-size: 22px;
        }
        .space {
            margin: 5px 0px 0px 0px;
        }
        .conclusion-head {
            display: inline;
        }
        .conclusion {
            color: orange;
            display: inline;
        }
    </style>
</head>
<body>
    <div class="head">
        <h2>ผลประเมิน</h2>
    </div>
    <div class='box'>
    <div class="contain">
        <div class="headText space">BMI-Zscore</div>
        <div>(ค่าดัชนีมวลกาย)</div>
        <br>
        <div class="headText space">${bmi.toFixed(2)}</div>
        <br>
        <div class="headText space" style='color:${checkWeight(resultWeight)};'>${resultWeight}</div>
    </div>
    <div class="contain">
        <div class='headText space'>MMI</div>
        <div>(ค่าดัชนีมวลกล้ามเนื้อ)</div>
        <br>
        <div class="headText space">${musclemassindex.toFixed(2)}</div>
        <br>
        <div class="headText space" style='color: ${resultMuscle=="มวลกล้ามเนื้อน้อย"? 'red':'green'}'>${resultMuscle}</div>
    </div>
    </div>
    <div style="
    text-align: left;
            background-color: white;
            width: auto;
            height:435px;
            margin:80px 0px 0px 0px;
            border-radius: 3px;
    ">
        <div style="float:left;width:49.5%;border: 1px solid lightgray;height:100%;padding: 1%;
        border-radius: 3px">
        <p style="padding-bottom: 7px;">คำแนะนำ</p>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกล้ามเนื้อ : <div class='conclusion'>${resultMuscle}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกาย : <div class='conclusion'>${resultWeight}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดังนีกล้ามเนื้อและดัชนีมวลกาย : <div class='conclusion'>${mmiresult}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-coffee" aria-hidden="true"></i> อาหาร : <div class='conclusion'>${food}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-male" aria-hidden="true"></i> กิจกรรมทางกาย : <div class='conclusion'>${physicalActivity}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-futbol-o" aria-hidden="true"></i> การออกกำลังกาย : <div class='conclusion'>${exercise}</div></div></br></br></div>
        <div style="display:inline-block;width:49.5%;
        border: 1px solid lightgray;
        height:100%;
        border-radius: 3px;
        padding: 1%;">
        <p style="padding-bottom: 7px;">สรุปผล</p>
        <div class='conclusion-head'><i class="fa fa-transgender" aria-hidden="true"></i> เพศ : <div class='conclusion'>${gender=="male"?'ชาย':'หญิง'}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-plus-square" aria-hidden="true"></i> อายุ : <div class='conclusion'>${age}</div> ปี</div></br></br>
        <div class='conclusion-head'><i class="fa fa-male" aria-hidden="true"></i> น้ำหนัก : <div class='conclusion'>${weight}</div> กิโลกรัม</div></br></br>
        <div class='conclusion-head'><i class="fa fa-male" aria-hidden="true"></i> ส่วนสูง : <div class='conclusion'>${height}</div> เซนติเมตร</div></br></br>
        <div class='conclusion-head'><i class="fa fa-hand-rock-o" aria-hidden="true"></i> แรงบีบมือ : <div class='conclusion'>${gripstrength==""?'ไม่พบข้อมูล':gripstrength}</div> กิโลกรัม</div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> ดัชนีมวลกล้ามเนื้อ : <div class='conclusion'>${musclemassindex.toFixed(2)}</div> กิโลกรัม/เมตร<sup>2</sup></div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกล้ามเนื้อ : <div class='conclusion'>${resultMuscle}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> ดัชนีมวลกาย(BMI) : <div class='conclusion'>${bmi.toFixed(2)}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> ดัชนีมวลกาย(Z-score) : <div class='conclusion'>${bmizscore.toFixed(2)}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีมวลกาย : <div class='conclusion'>${resultWeight}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-line-chart" aria-hidden="true"></i> การแปรผลดัชนีกล้ามเนื้อและดัชนีมวลกาย : <div class='conclusion'>${mmiresult}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-coffee" aria-hidden="true"></i> อาหาร : <div class='conclusion'>${food}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-male" aria-hidden="true"></i> กิจกรรมทางกาย : <div class='conclusion'>${physicalActivity}</div></div></br></br>
        <div class='conclusion-head'><i class="fa fa-futbol-o" aria-hidden="true"></i> การออกกำลังกาย : <div class='conclusion'>${exercise}</div></div></br></br>
        </div>
    </div>
</body>
</html>`
}