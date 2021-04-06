$(function(){
    console.log("jquery is running");

    $("#get-songs-from-api").click(function(){
        console.log("clicked, waiting for button to show up information");
        $.ajax({
            dataType: "Json",
            url: "getsongs.php",
            success: function(songs){
                console.log("Here is the list of songs I just received");
                console.log(songs);
                $.each(songs, function(i, song) {
                    var songString='<li>Artist: ' + song.artist + ' Title: ' + song.title + '</li>';
                    console.log(songString);
                    $(songString).appendTo("#songs").hide().fadeIn(500);
                });
            },
        });
    });

    $("#add-song").click(function(){

        var song = {
            artist:$("#artist").val(),
            title:$("#title").val()
        };
        console.log("clicked, waiting for button to show up information");
        $.ajax({
            type:"GET",
            dataType: "Json",
            data: song,
            url: "putsong.php",
            success: function(newsong){
                console.log("Here is the new song created");
                console.log(newsong);
                
                    var songString='<li>Artist: ' + newsong.artist + ' Title: ' + newsong.title + '</li>';
                    console.log(songString);
                    $(songString).appendTo("#songs").hide().fadeIn(500);
                
            },
        });
    });
});