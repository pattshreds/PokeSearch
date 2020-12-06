$(() => {

  $('button').on('click', (event) => {
    const userInput = $("input[type='text']").val();


    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${userInput}/`,
    }).then(
      (data) => {
        console.log(data);

        let img = $('<img id ="picture">');
        img.attr('src', data.sprites.other.dream_world.front_default);
        img.appendTo('body');


        $('<h3>').html('Pokemon Name:').appendTo($('body'));
        $('<p>').html(data.name).appendTo($('body'));

        for(let i = 0; i < data.types.length; i++) {
        $('<h3>').html('Type:').appendTo($('body'));
        $('<p>').html(data.types[i].type.name).appendTo($('body'));
        }

        $('<h3>').html('Height:').appendTo($('body'));
        $('<p>').html(data.height).appendTo($('body'));

        $('<h3>').html('Weight:').appendTo($('body'));
        $('<p>').html(data.weight).appendTo($('body'));

        $('<h3>').html('Pokemon ID (Number in Pokedex)').appendTo($('body'));
        $('<p>').html(data.id).appendTo($('body'));

        $('<h3>').html('Featured In These Game Versions:').appendTo($('body'));
        for(let i = 0; i < data.game_indices.length; i++) {
          $('<p>').appendTo($('body')).html(data.game_indices[i].version.name);
        // $('#games').html(data.game_indices[i].version.name);
        };
      });
  });


});
