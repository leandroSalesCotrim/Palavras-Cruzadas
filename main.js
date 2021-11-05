function validar_1() {
    var input1 = inp_1.value;

    if (input1.toLowerCase() == 'cpu') {
        alert('Resposta Certa')
        $('.res1').css('opacity', '1')
        $('.res1').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#pergunta_1').css('display', 'none')
        $('#pergunta_2').css('display', 'block')

    }

    else {
        alert('Resposta Errada')
    }
}
function validar_2() {
    var input2 = inp_2.value;
 

    if (input2.toLowerCase() == 'pc') {
        alert('Resposta Certa')
        $('.res2').css('opacity', '1')
        $('.res2').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#pergunta_2').css('display', 'none')
        $('#pergunta_3').css('display', 'block')
    }

    else {
        alert('Resposta Errada')
    }
}
function validar_3() {
    var input3 = inp_3.value;
 

    if (input3.toLowerCase() == 'ula') {
        alert('Resposta Certa')
        $('.res3').css('opacity', '1')
        $('.res3').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#pergunta_3').css('display', 'none')
        $('#pergunta_4').css('display', 'block')
    }

    else {
        alert('Resposta Errada')
    }
}
function validar_4() {
    var input4 = inp_4.value;
 

    if (input4.toLowerCase() == 'arduino' || input4.toLowerCase() == 'arduíno') {
        alert('Resposta Certa')
        $('.res4').css('opacity', '1')
        $('.res4').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#pergunta_4').css('display', 'none')
        $('#pergunta_5').css('display', 'block')
    }

    else {
        alert('Resposta Errada')
    }
}
function validar_5() {
    var input5 = inp_5.value;
 

    if (input5.toLowerCase() == 'windows') {
        alert('Resposta Certa')
        $('.res5').css('opacity', '1')
        $('.res5').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#pergunta_5').css('display', 'none')
        $('#pergunta_6').css('display', 'block')
    }

    else {
        alert('Resposta Errada')
    }
}
function validar_6() {
    var input6 = inp_6.value;
 

    if (input6 == 'ubuntu') {
        alert('Resposta Certa')
        $('.res6').css('opacity', '1')
        $('.res6').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#pergunta_6').css('display', 'none')
        $('#pergunta_7').css('display', 'block')
    }

    else {
        alert('Resposta Errada')
    }
}
function validar_7() {
    var input7 = inp_7.value;
 

    if (input7.toLowerCase() == 'ram') {
        alert('Resposta Certa')
        $('.res7').css('opacity', '1')
        $('.res7').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#pergunta_7').css('display', 'none')
        $('#pergunta_8').css('display', 'block')
    }

    else {
        alert('Resposta Errada')
    }
}
function validar_8() {
    var input8 = inp_8.value;
 

    if (input8 == 'cmd') {
        alert('Resposta Certa, você acabou o questionário!!')
        $('.res8').css('opacity', '1')
        $('.res8').css('backgroundColor', 'rgb(85, 224, 125)')
        $('#resetar').css('display', 'block')
    }

    else {
        alert('Resposta Errada')
    }
}
function recomecar(){
    window.location.reload();
}