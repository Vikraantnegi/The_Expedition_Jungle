$("#side").mouseenter(function() {
	openForm();
});
$("#empty").mouseenter(function() {
	closeForm(); 
});
$("#hidden").mouseleave(function() { 
	closeForm(); 
});

function openForm() {
    $("#sidebar").css("transform", "translate(-300px)");
    $("#sidebar").css("transition-delay", "0s");
    $("#sidebar").css("z-index", "100");
    
    $("#number").css("opacity", "0");
    $("#register").css("opacity", "0");
}

function closeForm() {
    $("#sidebar").css("transform", "translate(0)");
    $("#sidebar").css("z-index", "0");
    $("#number").css("opacity", "1");
    $("#register").css("opacity", "1");
}

(function manageusers(){

    let users = String(Random(10000,20000));
    users = comma(users);
    
    addto(users);

    function addto(value){
        let num2 = Number(value.replace(",",""))
        num2++;
        num2=String(num2);
        num2=comma(num2);
        $("#totalusers").html(num2);
        setTimeout(function(){
            addto(num2);
        },Random(2000,5000));
    }
        function Random(min, max){
        return Math.floor(Math.random()*(max-min)+min);
    }

    function comma(val){
        return val.slice(0,2) + "," + val.slice(2,5);
    }
})();

