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
        img.appendTo('#modal_screen_data');


        $('<h3>').html('Pokemon Name:').appendTo($('#modal_screen_data'));
        $('<p>').html(data.name).appendTo($('#modal_screen_data'));

        for(let i = 0; i < data.types.length; i++) {
        $('<h3>').html('Type:').appendTo($('#modal_screen_data'));
        $('<p>').html(data.types[i].type.name).appendTo($('#modal_screen_data'));
        }

        $('<h3>').html('Height:').appendTo($('#modal_screen_data'));
        $('<p>').html(data.height).appendTo($('#modal_screen_data'));

        $('<h3>').html('Weight:').appendTo($('#modal_screen_data'));
        $('<p>').html(data.weight).appendTo($('#modal_screen_data'));

        $('<h3>').html('Pokemon ID (Number in Pokedex)').appendTo($('#modal_screen_data'));
        $('<p>').html(data.id).appendTo($('#modal_screen_data'));

        $('<h3>').html('Featured In These Game Versions:').appendTo($('#modal_screen_data'));
        for(let i = 0; i < data.game_indices.length; i++) {
          $('<p>').appendTo($('#modal_screen_data')).html(data.game_indices[i].version.name);
        };
      });
        const closeModal = () => {
          $('#modal_screen_data').empty();  
          $('#modal_screen').css('display', 'none');
          userInput = $("input[type='text']").val('');
        };
        $('#close').on('click', closeModal);
    });
});
