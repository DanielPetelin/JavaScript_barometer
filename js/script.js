document.getElementById('result_p_v').onclick = function() {
    var h_h = document.getElementById('h_h').value;
    var med_p = 101325;
    var mm_p = 133.3;
    var mm_m = 12;
    var result = med_p + ((h_h / mm_m) * mm_p);

    document.getElementById('out').innerHTML = "Давление = " + result + "Па"
};

document.getElementById('result_p_g').onclick = function() {
    var h_h = document.getElementById('h_h').value;
    var med_p = 101325;
    var mm_p = 133.3;
    var mm_m = 12;
    var result = med_p - ((h_h / mm_m) * mm_p);

    document.getElementById('out').innerHTML = "Давление = " + result + "Па"
};

document.getElementById('result_h').onclick = function() {
    var mm = document.getElementById('mm').value;
    var mm_m = 12;
    var result = mm * mm_m;

    document.getElementById('out').innerHTML = "Изменения на :" + result + "метров"
};
