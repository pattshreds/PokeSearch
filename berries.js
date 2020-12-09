$(() => {

  $('#berryBtn').on('click', (event) => {
    const userInput = $("input[type='text']").val();
    $('#modal_screen').css('display', 'block');

    $.ajax({
        url: `https://pokeapi.co/api/v2/berry/${userInput}/`,
      }).then(
        (data) => {
          console.log(data);

          // let img = $('<img id ="picture">');
          // img.attr('src', data.sprites.other.dream_world.front_default);
          // img.appendTo('#modal_screen');


          $('<h3>').html('Berry Name:').appendTo($('#modal_screen'));
          $('<p>').html(data.name).appendTo($('#modal_screen'));

          $('<h3>').html('Soil Dryness:').appendTo($('#modal_screen'));
          $('<p>').html(data.soil_dryness).appendTo($('#modal_screen'));

          $('<h3>').html('Growth Time:').appendTo($('#modal_screen'));
          $('<p>').html(data.growth_time).appendTo($('#modal_screen'));


          $('<h3>').html('Firmness:').appendTo($('#modal_screen'));
          $('<p>').html(data.firmness.name).appendTo($('#modal_screen'));

          $('<h3>').html('Size:').appendTo($('#modal_screen'));
          $('<p>').html(data.size).appendTo($('#modal_screen'));

          $('<h3>').html('Smoothness:').appendTo($('#modal_screen'));
          $('<p>').html(data.smoothness).appendTo($('#modal_screen'));

          $('<h3>').html('Flavors:').appendTo($('#modal_screen'));
          for(let i = 0; i < data.flavors.length; i++) {
            $('<p>').appendTo($('#modal_screen')).html(data.flavors[i].flavor.name);
          };
        });
          const closeModal = () => {
          $('#modal_screen').css('display', 'none');
          };
          $('.close').on('click', closeModal);
  });
});
