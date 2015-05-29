$( document ).ready(function() {




    $('#tweet-controls').hide();
    $('.stats').hide();
    $('.reply').hide();
    $('.tweet-actions').css('visibility', 'hidden');


	// CLICK IN TO TWEET TEXT AREA ///////////////////////////////////////////////////////////////////////////////

    $('#tweet-content').on('click', function () {
    	$('#tweet-controls').show();
    	$('.tweet-compose').css('height', '5rem')
    })




	// CHANGE CHARACTER COUNT ///////////////////////////////////////////////////////////////////////////////

    $('.tweet-compose').keyup(function () {
    	var text = $(this).val();
    	var charsLeft = 140 - text.length;
    	$('#char-count').text(charsLeft);

    	// CHANGE COLOR OF CHARCOUNT
    	if (charsLeft < 11) {
    		$('#char-count').css('color', 'red');
    	} else {
    		$('#char-count').css('color', '#999');
    	};

    	// DISABLE / ENABLE BUTTON
    	if (charsLeft < 0) {
    		$('#tweet-submit').prop("disabled",true);
    	} else {
    		$('#tweet-submit').prop("disabled",false);
    	}
    });




	// POST NEW TWEET ///////////////////////////////////////////////////////////////////////////////

	$('#tweet-submit').click( function () {
		var text = $('.tweet-compose').val();
		$('#stream').prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" /><strong class="fullname">Jeff </strong><span class="username">@jms</span><p class="tweet-text">' + text + '</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats"><div class="retweets"><p class="num-retweets">0</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">0</p><p>FAVORITES</p></div><div class="users-interact"><div></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @jms"/></textarea></div></div></div><!-- .tweet -->');
	})





	// SHOW TWEET ACTIONS ON HOVER ///////////////////////////////////////////////////////////////////////////////

	$('.tweet').hover(
		(function () {
			$(this).find('.tweet-actions').css('visibility', 'visible');
		}), 
		(function () {
			$(this).find('.tweet-actions').css('visibility', 'hidden');
		})
	)




	// EXPAND TWEET ///////////////////////////////////////////////////////////////////////////////

	$('.tweet').click( function () {
			$(this).find('.stats').slideDown();
			$(this).find('.reply').slideDown();
		}
	)


});
