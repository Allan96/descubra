
// PERGUNTAS

var pergunta = 0;


//IR PARA AS SECTIONS
  $('.comecar').click(function () {
    if($('#email').val() != '' && $('#nome').val() != ''){
      $('section').fadeOut();
        $('#dificuldade').fadeIn(1000);
    }
    else{
      $('.error').addClass('c-red').fadeIn();
    }
  
  });

  $('.pronto').click(function () { 
    $('section').fadeOut();
    $('#message').fadeIn(1000);
    $("time").html('31');
    quest(pergunta)
    
  });

 //BOXSELECT
  $('.box').click(function (e) { 
    $('.box').removeClass('bdc-yellow');
    $(this).addClass('bdc-yellow');
    
  });
  $('.secondbox').click(function (e) { 
    $('.secondbox').removeClass('bdc-blue');
    $(this).addClass('bdc-blue');
    
  });



  $(document).ready(function() {
    setInterval(function() {
      var time = $("time").html();
      if(time == 0){
        $("pretime").html('00:');
        $("time").html('30');
        $('.chat').append('<p class="me">Affff! Presta atenção em mim! Por Favooooooor! =(</p>');
        quest(pergunta + 1)
        pergunta = pergunta + 1;
      }
      else{
        if(time <= 10){
          $("time").html(time-1);
          $("pretime").html('00:0');
        }
        else{
          $("pretime").html('00:');
          $("time").html(time-1);
        }
      }
            }, 1000);
    });



function quest(id){
  if(id ==  0){
    $('.chat').append('<p class="them">Qual foi a ultima peça escrita por Shakespeare?</p>');
    $('.resposta1').html('A tempestade');
    $('.resposta2').html('A Nevasca');
  }
  else if(id ==  1){
    $('.chat').append('<p class="them">Qual desses escreveu A Reunião dos Aqueus?</p>');
    $('.resposta1').html('Sófocles');
    $('.resposta2').html('Newton');
  }
  else if(id ==  2){
    $('.chat').append('<p class="them">Ser poeta é ser mais alto, é ser maior \ Do que os homens! Morder como quem beija!</p>');
    $('.resposta1').html('Florbela Espanca');
    $('.resposta2').html('Floribela');
  }
  else if(id ==  3){
    $('.chat').append('<p class="them">E se eu consito sem razão pranteio.\A tão contrário vento em frágil barca,\Eu vou para o alto mar e sem governo.</p>');
    $('.resposta1').html('Soneto XXII - Petrarca');
    $('.resposta2').html('Sono XXII - Pericles');
  }
  else if(id ==  4){
    $('.chat').append('<p class="them">Um bandido sequestra crianças e as leva para Amazonia, onde tira o sangue delas e exporta.</p>');
    $('.resposta1').html('Sangue fresco');
    $('.resposta2').html('Lorem ipsum fresco');
  }
  else if(id ==  5){
    $('.accordion').css('display', 'block');
    $('.parabens').css('display', 'block');
    $('.chat').css('margin-top', '0');
    $('.respostas').hide();
    $('.pergunta').hide();
  }
  
}


$('.clicouresposta').click(function () { 
  var respostaescolhida = $(this).text();
  $('.chat').append('<p class="me">'+respostaescolhida+'</p>');
  quest(pergunta + 1);
  pergunta = pergunta + 1;
  $("time").html('31');
});



$(document).ready(function (){
  $(".clicouresposta").click(function (){
      $('html, body').animate({
          scrollTop: $("#bottom").offset().top - 50
      }, 500);
  });
});

