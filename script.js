//writing a fuction with a variable
function check(){
    var a=0
    var q1=document.quiz.Question1.value;
    var q2=document.quiz.Question2.value;
    var q3=document.quiz.Question3.value;
    var q4=document.quiz.Question4.value;
    var q5=document.quiz.Question5.value;

    //writing if statements
    if (q1=="A tool that programmers use to record the output of their javascript programs."){a++}
    if (q2=="none of the choices"){a++}
    if (q3=="kiswahili"){a++}
    if (q4=="looping"){a++}
    if (q5=="iLoveMe"){a++}

        document.write(a);

}