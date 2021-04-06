<?php
    $song1 = array('id'=>1, 'artist'=>'ABBA', 'title'=>'Dancing queen');
    $song2 = array('id'=>2, 'artist'=>'Wixkid', 'title'=>'Blow');
    $song3 = array('id'=>3, 'artist'=>'Davido', 'title'=>'30BG');
    $song4 = array('id'=>4, 'artist'=>'Zlatan', 'title'=>'Hallelu');
    $song5 = array('id'=>5, 'artist'=>'Oxlade', 'title'=>'Away');

    $arr_list = [$song1, $song2, $song3, $song4, $song5];

    header('Content-type: application/json');
    echo json_encode($arr_list);
?>