<?php

//Base URL
define('cdnURL', 'https://cdn.music.keyjayhd.com/');
define('enURL','');
$baseURL='';

//Javascript Constants
echo 
'<script type="text/javascript">
const HOSTURL = "http://music.keyjayhd.com";
const CDN = ' . cdnURL .'
const YEAR = new Date().getFullYear();
</script>';



//Environment Switcher
//0 = CDN | 1 = LOCAL 
$i = 0;

switch ($i) {
    case 0:
        $baseURL = cdnURL;
        break;
    case 1:
        $baseURL = enURL;
        break;
};
?>



