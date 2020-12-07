$(() => {

  $('#openModal').on('click', (event) => {
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

        $('<h3>').html('Pokemon ID (Number in Pokedex)').appendTo($('#modal_screen'));
        $('<p>').html(data.id).appendTo($('#modal_screen'));

        $('<h3>').html('Featured In These Game Versions:').appendTo($('#modal_screen'));
        for(let i = 0; i < data.game_indices.length; i++) {
          $('<p>').appendTo($('#modal_screen')).html(data.game_indices[i].version.name);
        };
      });
        const closeModal = () => {
        $('#modal_screen').css('display', 'none');
        };
        $('#close').on('click', closeModal);
    });
  });
