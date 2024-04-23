$(() => {
    $('#berry-btn').on('click', (event) => {
        const userInput = $("input[type='text']").val();
        $('#modal_screen').css('display', 'block');
        $('#modal').css('z-index', '10');
        $.ajax({
            url: `https://pokeapi.co/api/v2/berry/${userInput}/`,
        }).then((data) => {
            console.log(data);

            // API has no images for berries that I have found yet.

            // let img = $('<img id ="picture">');
            // img.attr('src', data.sprites.other.dream_world.front_default);
            // img.appendTo('#modal_screen_data');

            $('<h3>').html('Berry Name:').appendTo($('#modal_screen_data'));
            $('<p>').html(data.name).appendTo($('#modal_screen_data'));

            $('<h3>').html('Soil Dryness:').appendTo($('#modal_screen_data'));
            $('<p>').html(data.soil_dryness).appendTo($('#modal_screen_data'));

            $('<h3>').html('Growth Time:').appendTo($('#modal_screen_data'));
            $('<p>').html(data.growth_time).appendTo($('#modal_screen_data'));

            $('<h3>').html('Firmness:').appendTo($('#modal_screen_data'));
            $('<p>').html(data.firmness.name).appendTo($('#modal_screen_data'));

            $('<h3>').html('Size:').appendTo($('#modal_screen_data'));
            $('<p>').html(data.size).appendTo($('#modal_screen_data'));

            $('<h3>').html('Smoothness:').appendTo($('#modal_screen_data'));
            $('<p>').html(data.smoothness).appendTo($('#modal_screen_data'));

            $('<h3>').html('Flavors:').appendTo($('#modal_screen_data'));
            for (let i = 0; i < data.flavors.length; i++) {
                $('<p>')
                    .appendTo($('#modal_screen_data'))
                    .html(data.flavors[i].flavor.name);
            }
        });
        const closeModal = () => {
            $('#modal_screen_data').empty();
            $('#modal_screen').css('display', 'none');
            $('#modal').css('z-index', '-10');
            userInput = $("input[type='text']").val('');
        };
        $('#close').on('click', closeModal);
    });
});
