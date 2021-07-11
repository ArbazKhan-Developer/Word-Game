
let para=  document.getElementById('para');
// console.log(para);
let add = document.getElementById('add')
let input = document.querySelector('input');
// console.log(input.value);
let btn = document.getElementById('btn');
let play =false

function showwords(){
    let words = ['mangoes','banana','python','last','knock','know','market','guess','never','uncle','nice','video','view','victory','zone','quote','large','justice','quality','quit','yellow','year','weather','let','past','flag','river','drive','welth','toy','produce','popular','cool','type','please','people','eight','yard','week','judge','income','joy','under','forest','formal','height','home','link','wash','finger','hair','control','run','effect','profit','test','sick','sent','right','way','melt','buy','civil','else','holy','impact','knife','able','accept','after','before','ago','alive','alone','angry','beauty','below','big','born','boss','bright','busy','catch','center','desire','display','distance','effort','field','garden','grow','hang','honor','impress','journey','lady','leave','length','mental','mixture','notice','nose','opinion','order','over','owner','parent','permit','piece','relax','reply','save','score','smart','tall','thick','urban','value','virus','widely','wind','yield','wrong','total','shut','proper','monitor','inspire','glad','exist']
   let b= Math.floor(Math.random() * 125);
//    console.log(words[b].split(""));
   let arr = words[b].split("");
   for (let i = arr.length-1 ; i>=0 ; i--) {
       let temp= arr[i];
    //    console.log(temp);
       let j = Math.floor(Math.random() * i+1);
       arr[i]=arr[j];
       arr[j]=temp;
   }
    add.innerHTML = arr;
    let clk = document.getElementById('btn');
    clk.addEventListener('click',()=>{
        let input = document.querySelector('input');
        let word = words[b];
        let newpara=  document.getElementById('para');
        let hide = document.getElementById('hide')
        let str = input.value
        let globalRegex = new RegExp(word, 'i');
        // console.log(str,globalRegex);
        if (globalRegex.test(str)){
            newpara.innerHTML = "Great You win"
            input.style.display ="none"
            hide.innerHTML = words[b];
            // console.log('success');
            
        }else{
            newpara.innerHTML = "Sorry You lose"
            document.getElementById('demo').innerHTML ='you lose'
            input.style.display ="none"
            hide.innerHTML = words[b];
        }
        clk.innerHTML = 'Try next';
        next();

    })
    function next() {
        let butn = document.getElementById('btn');
        butn.addEventListener('click',()=>{
            location.reload();
            showwords()
            // if (input.value==words[b]) {
            //     btn.innerHTML ='Guess the word';
            //     para.style.display = "block"
            //     input.style.display= "block"
            //     input.value = "";
            //     showwords();
            // }else{
            //     location.reload();
            // }

        // let input = document.querySelector('input');
        // let newpara=  document.getElementById('para');
        // if (input.value==words[b]) {
        //     newpara.innerHTML = arr;
        //     input.style.display ="block"
        //     input.value = "";
        // }
        // location.reload();
        })
    }

}



btn.addEventListener('click',()=>{
    timer();
    if (!play) {
        play = true;
        btn.innerHTML ='Fix word';
        para.style.display = "block"
        input.style.display= "block"
        showwords();
        
    }
})

// setInterval(myTimer, 1000);

// function myTimer() {
//     let x =0;
//     for (let index = 0; index < 500; index++) {
//         x += index;
//         // console.log(x);
        
//     }
// //   const d = new Date();
// //   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }


function timer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('demo').innerHTML='00:'+sec +' sec';
        sec--;
        if (sec < 0) {
            document.getElementById('demo').innerHTML='You are too Slow';
            clearInterval(timer);
        }
    }, 1000);
}
