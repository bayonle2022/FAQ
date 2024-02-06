$(".head1").click(function(){

    $(".word1").toggle();
    $(".head1").css("color", "purple"),
    
    $(".word1").html("<p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. </p>")
})


$(".head2").click(function(){

    $(".word2").toggle();
    $(".head2").css("color", "purple"),
    
    $(".word2").html(" <p>Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels. </p>")
})


$(".head3").click(function(){

    $(".word3").toggle();
    $(".head3").css("color", "purple"),
    
    $(".word3").html(" <p> Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! </p>")
})


$(".head4").click(function(){

    if(this.src=="icon-minus.svg"){
        this.src="icon-plus.svg"
    }else if (this.src=="icon-plus.svg"){
        this.src="icon-minus.svg"
    }

    $(".word4").toggle();
    $(".head4").css("color", "purple"),
    
    $(".word4").html(" <p> The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members </p>")
})


    
    






