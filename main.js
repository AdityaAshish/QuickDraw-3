timer_counter = 0; 

timer_check = ""; 
drawn_sketch = ""; 
answer_holder = ""; 
score = 0;

//random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
//console.log(quick_draw_data_set[random_number]); 
//sketch = quick_draw_data_set[random_number]
//document.getElementById('sketch_name').innerHTML = 'Sketch to be drawn:'+sketch;
//The above code is commented because it kept returning as error, but i didnt want to delete it so i just commented it


function timerIncrement() {
timer_counter = timer_counter + 1;
    document.getElementById('time').innerHTML = 'Timer: ' + timer_counter;
    
}

setInterval(timerIncrement, 1000);

function setup() {
    canvas= createCanvas(280,280);
    canvas.center(); 
    background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis
}

function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}

function clearCanvas() {
    background("white");

}

function draw() {
    strokeweight(13);
    stroke (0)
    if (mouseIsPressed) {
    line (pmouseX, pmouseY, mouseX, mouseY)
    }
}

function classifycanvas() {
classifier.classsify(canvas, gotResult);
}


