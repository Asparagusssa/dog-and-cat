    window.onscroll = function () {
        var scrolled = window.pageYOffset;
        console.log(scrolled);
        if (scrolled > 60) {
            var ulti = document.getElementById('header');
            ulti.style.background = "black";
        }
        if (scrolled < 60) {
            var ulti = document.getElementById('header');
            ulti.style.background = "transparent";
        }
    }


    $("#Donate").submit(function () {
        let don = $("#sumDonate").val();
        localStorage.setItem("sumDonate", +don);
        console.log(don);
        if (don ?? Nan) {
            document.getElementById("don").innerHTML = don;

        }

    });

    // document.getElementById('mybutton').onclick = function () {
    //     window.location.href = 'redirect-url';
    // };



