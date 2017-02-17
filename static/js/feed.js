
$(function() {

  var colors = ['163, 212, 242', '242, 244, 243'];
  var RSSUrl = encodeURIComponent('http://codepen.io/posts/feed');
  var $feedTitle = $('#header-title');
  var $posts = $('#posts');
  var $btnHori = $('#btn-hori');
  var $btnVert = $('#btn-vert');

  // get the posts
  $.ajax({
    url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q='+RSSUrl+'&num=3',
    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    success: createPosts
  });

  function createPosts(json) {
    $feedTitle.html(json.responseData.feed.title);
    var posts = json.responseData.feed.entries;
    var j = 0;

    // for each post in the feed create and append the HTML
    for(var i = 0; i < posts.length; i++) {
      var $post = $(document.createElement('div'));
      var $bg = $(document.createElement('div'));
      var $content = $(document.createElement('div'));
      $bg.css({background: 'rgba('+colors[j]+',1)'});
      $bg.addClass('bg');
      $bg.html('<a class="post-link" target="_blank" href="'+posts[i].link+'"></a>');
      $content.html('<h3>'+posts[i].title+'</h3>'+
                   '<p class="author">by '+posts[i].author+'</p>'+
                   '<p class="more">read more</p>');
      $content.addClass('content');

      $post.append($content);
      $post.append($bg);
      $post.addClass('post');
      $posts.append($post);
      j = j == 1 ? 0 : j+1;
    }
  }

  // add events for buttons
  $btnVert.on('click', function() {
     $btnVert.addClass('active');
     $btnHori.removeClass('active'); $posts.removeClass('horizontal').addClass('vertical');
  })

  $btnHori.on('click', function() {
     $btnHori.addClass('active');
     $btnVert.removeClass('active'); $posts.removeClass('vertical').addClass('horizontal');
  })


});
