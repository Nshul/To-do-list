/**
 * Created by anshu on 6/13/2017.
 */
window.onload=function () {
    console.log('Hello');
    var button=document.getElementById("button");
    var word=document.getElementById("word");
    var list=document.getElementById("list");
    $(document).ready(function(){
        $('#word').keypress(function(e){
            if(e.keyCode==13){
                $('#button').click();
                word.value=" ";
            }
        });
    });
    button.onclick = function () {
        //var start=new Date().getTime();
        var t = document.createElement('li');
        t.innerHTML += word.value;
        list.insertAdjacentHTML("afterbegin"," "+t.outerHTML+" ")
        word.value=" ";
        //console.log(new Date().getTime()-start);
    }
    list.onclick=function(e){
        var target=e.target;
        console.log(target.innerHTML);
        target.remove();
    }
}

