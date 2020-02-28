document.getElementById('perevod2').onclick = function() {
    var m = document.getElementById('metr').value;
    var mm = 12;
    var p = 11.108333333333334;
    var result = m / mm + 'мм.рт.ст; ' + m * p + 'Па'; 

    document.getElementById('out_res2').innerHTML = result;
};

document.getElementById('perevod').onclick = function() {
    var mm = document.getElementById('mm_rt_st').value;
    var p = 133.3;
    var metr = 12;
    var result = mm * p + 'Па; ' + mm * metr + 'метров';

    document.getElementById('out_res').innerHTML = result;
};

document.getElementById('result_p_v').onclick = function() {
    var h_h = document.getElementById('h_h').value;
    var med_p = 101325;
    var mm_p = 133.3;
    var mm_m = 12;
    var result = med_p + ((h_h / mm_m) * mm_p);

    document.getElementById('out').innerHTML = "Давление = " + result + " Па"
};

document.getElementById('result_p_g').onclick = function() {
    var h_h = document.getElementById('h_h').value;
    var med_p = 101325;
    var mm_p = 133.3;
    var mm_m = 12;
    var result = med_p - ((h_h / mm_m) * mm_p);

    document.getElementById('out').innerHTML = "Давление = " + result + " Па"
};

document.getElementById('result_h').onclick = function() {
    var mm = document.getElementById('mm').value;
    var mm_m = 12;
    var result = mm * mm_m;

    document.getElementById('out').innerHTML = "Изменения на :" + result + " метров"
};

document.getElementById('result_mm_v').onclick = function() {
    var h = document.getElementById('h_h').value;
    var mm_m = 12;
    var med_mm_m = 760
    var result = med_mm_m + (h / mm_m);

    document.getElementById('out').innerHTML = result + ' миллиметров ртутного столба'
};

document.getElementById('result_mm_g').onclick = function() {
    var h = document.getElementById('h_h').value;
    var mm_m = 12;
    var med_mm_m = 760
    var result = med_mm_m - (h / mm_m);

    document.getElementById('out').innerHTML = result + ' миллиметров ртутного столба'
};