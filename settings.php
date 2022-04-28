<?php
//Javascript Constants
echo 
'<script type="text/javascript">
const HOSTURL = "http://music.kjhd.test/";
const YEAR = new Date().getFullYear();
</script>';

//Base URL
define('cdnURL', 'https://cdn.music.keyjayhd.com/');
define('enURL','');
$baseURL='';

//Environment Switcher
//0 = CDN | 1 = LOCAL 
$i = 1;

switch ($i) {
    case 0:
        $baseURL = cdnURL;
        break;
    case 1:
        $baseURL = enURL;
        break;
};
?>


