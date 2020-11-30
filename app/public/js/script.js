$(document).ready(function () {

    // declare variables
    let fruit;
    let fruitTotal;
    let veg;
    let vegTotal;
    let carb;
    let carbTotal;
    let fat;
    let fatTotal;
    let protein;
    let proteinTotal;
    let finalTotal;

    // calcs fruit point total
    fruitCalc = () => {
        fruit = $("#fruits").val().trim();
        let multiplier = 2.5;
        fruitTotal = fruit * multiplier;
        console.log("fruit: " + fruitTotal);
        return fruitTotal;
    }
    
    // calcs veggie point total
    vegCalc = () => {
        veg = $("#veggies").val().trim();
        let multiplier = 5;
        vegTotal = veg * multiplier;
        console.log("veg: " + vegTotal);
        return vegTotal;
    }
    
    // calcs carb point total
    carbCalc = () => {
        carb = $("#carbs").val().trim();
        carb = parseInt(carb);

        if (carb <= 30) {
            carbTotal = carb * .25;
        } else if (carb > 30 && carb <= 60) {
            carbTotal = 7.5;
        } else if (carb > 60) {
            carbTotal = ((carb - 60) * -.25) + 7.5;
        };

          console.log("carbs: " + carbTotal);
          return carbTotal;
    }

    // calcs fat point total
    fatCalc = () => {
        fat = $("#fats").val().trim();
        fat = parseInt(fat);

        if (fat >= 60) {
            fatTotal = fat * -.25;
        } else {
            fatTotal = 0;
        };

        console.log("fat: " + fatTotal);
        return fatTotal;
    }

    // calcs protein point total
    proteinCalc = () => {
        protein = $("#proteins").val().trim();
        protein = parseInt(protein);

        if (protein <= 50) {
            proteinTotal = protein * .25;
        } else if (protein > 50 && protein <= 100) {
            proteinTotal = ((protein - 50) * .1) + 12.5;;
        } else if (protein > 100) {
            proteinTotal = 17.5;
        };

        console.log("protein: " + proteinTotal);
        return proteinTotal;

    }

    // calcs final point total
    totalCalc = () => {
        finalTotal = fruitTotal + vegTotal + carbTotal + fatTotal + proteinTotal;
        console.log("final total: " + finalTotal);
    }

    // disables calc button unless all fields are populated
    $(".inputs").keyup(function(){ 
    if ($("#fruits").val() === "" || $("#veggies").val() === "" || $("#carbs").val() === "" || $("#fats").val() === "" || $("#proteins").val() === "") {
            $("#calc").attr("disabled", true);
        } else {
            $("#calc").attr("disabled", false);
        }
    });

    // disables calc button by default
    $("#calc").attr("disabled","disabled");

    // runs calc functions on click
    $("#calc").on("click", function() {
        console.log("hello");
        fruitCalc();
        vegCalc();
        carbCalc();
        fatCalc();
        proteinCalc();
        totalCalc();

        // sets new point total on screen
        // $("#point-total").empty();
        $("#point-total").text(finalTotal);

    })
    
    $("#reset").on("click", function() {
        $("#fruits").val("");
        $("#veggies").val("");
        $("#carbs").val("");
        $("#fats").val("");
        $("#proteins").val("");
        $("#point-total").text("0");

    })

})