$(() => {

  $('#compare').on('click', (event) => {
    const userInput = $("input[type='text']").val();
    $('#modal_screen').css('display', 'block');

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${userInput}/`,
    }).then(
      (data) => {
        console.log(data);

        let img = $('<img id ="picture">');
        img.attr('src', data.sprites.other.dream_world.front_default);
        img.appendTo('#modal_screen');


        $('<h3>').html('Pokemon Name:').appendTo($('#modal_screen'));
        $('<p>').html(data.name).appendTo($('#modal_screen'));

        for(let i = 0; i < data.types.length; i++) {
        $('<h3>').html('Type:').appendTo($('#modal_screen'));
        $('<p>').html(data.types[i].type.name).appendTo($('#modal_screen'));
        }

        $('<h3>').html('Height:').appendTo($('#modal_screen'));
        $('<p>').html(data.height).appendTo($('#modal_screen'));

        $('<h3>').html('Weight:').appendTo($('#modal_screen'));
        $('<p>').html(data.weight).appendTo($('#modal_screen'));

        $('<h3>').html('Base Stats:').appendTo($('#modal_screen'));
        for(let i = 0; i < data.stats.length; i++) {
          $('<h4>').appendTo($('#modal_screen')).html(data.stats[i].stat.name);
          $('<p>').appendTo($('#modal_screen')).html(data.stats[i].base_stat);
        };

      });
        const closeModal = () => {
        $('#modal_screen').css('display', 'none');
        };
        $('.close').on('click', closeModal);
    });

//==================Modal Two====================================

    $('#compare').on('click', (event) => {
      const userInput = $("input[id='textbox2']").val();
      $('#modal_screen2').css('display', 'block');

      $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${userInput}/`,
      }).then(
        (data) => {
          console.log(data);

          let img = $('<img id ="picture">');
          img.attr('src', data.sprites.other.dream_world.front_default);
          img.appendTo('#modal_screen2');


          $('<h3>').html('Pokemon Name:').appendTo($('#modal_screen2'));
          $('<p>').html(data.name).appendTo($('#modal_screen2'));

          for(let i = 0; i < data.types.length; i++) {
          $('<h3>').html('Type:').appendTo($('#modal_screen2'));
          $('<p>').html(data.types[i].type.name).appendTo($('#modal_screen2'));
          }

          $('<h3>').html('Height:').appendTo($('#modal_screen2'));
          $('<p>').html(data.height).appendTo($('#modal_screen2'));

          $('<h3>').html('Weight:').appendTo($('#modal_screen2'));
          $('<p>').html(data.weight).appendTo($('#modal_screen2'));

          $('<h3>').html('Base Stats:').appendTo($('#modal_screen2'));
          for(let i = 0; i < data.stats.length; i++) {
            $('<h4>').appendTo($('#modal_screen2')).html(data.stats[i].stat.name);
            $('<p>').appendTo($('#modal_screen2')).html(data.stats[i].base_stat);
          };

        });

          const closeModal = () => {
          $('#modal_screen2').css('display', 'none');
          };
          $('.close').on('click', closeModal);

      });

});
