
counter = 1;
var shirt_color_selected = 0;
var shirt_size_selected = 0;

var quantity = counter

function shirt_color() {
    var shirt_color_selected = document.getElementById("color").value

    if (shirt_color_selected == "600") {
        document.getElementById("img").src = '/img/blue.jpg'
        if (document.getElementById("size").value == "5") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(5)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(5)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
        if (document.getElementById("size").value == "10") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(10)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(10)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
        if (document.getElementById("size").value == "20") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(20)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(20)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
    }
    if (shirt_color_selected == "500") {
        document.getElementById("img").src = '/img/black.jpg'
        if (document.getElementById("size").value == "5") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(5)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(5)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
        if (document.getElementById("size").value == "10") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(10)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(10)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
        if (document.getElementById("size").value == "20") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(20)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(20)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
    }
    if (shirt_color_selected == "700") {
        document.getElementById("img").src = '/img/white.jpg'
        if (document.getElementById("size").value == "5") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(5)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(5)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
        if (document.getElementById("size").value == "10") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(10)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(10)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
        if (document.getElementById("size").value == "20") {
            var final_price = (parseInt(shirt_color_selected) + parseInt(20)) * quantity;
            if (counter >= 1) {
                var final_price = (parseInt(shirt_color_selected) + parseInt(20)) * counter;
                document.getElementById("price_of_item").innerHTML = final_price;
            }
        }
    }

    return shirt_color_selected
}

function shirt_size() {
    var shirt_size_selected = document.getElementById("size").value
    console.log(shirt_size_selected);



    var final_price = (parseInt(shirt_color()) + parseInt(shirt_size_selected)) * quantity;
    document.getElementById("price_of_item").innerHTML = final_price;

    return shirt_size_selected
}


function plus_counter() {
    counter += 1;
    document.getElementById("counter").innerHTML = counter

    var final_price = (parseInt(shirt_color()) + parseInt(shirt_size())) * counter;
    document.getElementById("price_of_item").innerHTML = final_price;
}

function minus_counter() {
    if (counter > 1) {
        counter -= 1;
        document.getElementById("counter").innerHTML = counter

        var final_price = (parseInt(shirt_color()) + parseInt(shirt_size())) * counter;
        document.getElementById("price_of_item").innerHTML = final_price;
    }
}

var quantity = parseInt(counter)

function bought() {
    var buy_price = document.getElementById("price_of_item").innerHTML

    if (buy_price < 10) {
        alert("Please select color, size and quantity of T-shirt")
    }
    else {
        alert("Your order has been successfully placed of Rs. " + buy_price.toString())
    }
}