$(() => {

  $('#about').on('click', (event) => {
    $('#modal_screen').css('display', 'block');
      let img = $('<img id ="picture">');
      img.attr('src', 'me.jpg');
      img.appendTo('#modal_screen');
      $('<h3>').text('About myself:').appendTo($('#modal_screen'));
      $('<p>').text(
        "Hey. My name's Patrick, and this project marks my first full month of software engineering. I'm a developer living in Colorado, but have lived all over the country. Coding has always been something I had interest in but never thought I could persue learning because of how difficult it is. This summer (2020) I decided to finally commit and go to school to become a software engineer / fullstack developer! Outside of coding, I like mountain biking, rock climbing, hiking, playing video games, and all sorts of other fun activites that would take too long to list. I'm excited to continue learning and developing, and I can't wait to look at this project 5 years down the line to see how far I will have come!"
      ).appendTo($('#modal_screen'));

        const closeModal = () => {
        $('#modal_screen').css('display', 'none');
        };
        $('#close').on('click', closeModal);
    });
});
