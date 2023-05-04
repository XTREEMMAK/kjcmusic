# Key Jay Music

This is the offical GitHub repository for the Key Jay Music website.
<br>
## Site Settings

### Environment Swticher

Almost all site settings are handled within the settings.php file.
Here is where you'd typically modify the HOST source path for images (connecting to the CDN). I've created a switch as an environment switcher for easy modifications between development mode and production mode.

<br>
```
//Environment Switcher
//0 = CDN | 1 = LOCAL
$i=0;
```

<br>
### Music Database

The Music Database is now (05/04/2023) being handled by the Key Jay Productions API.

### **Media Player Settings**

**The site's sticky media player settings can be edited within**`js/mp3-sticky-player/player_settings.js`**. You'll be able to edit the master playlist from that file. Inner playlists can be found within the**`content/playlist`**folder. Audio is referenced to the**`public/audio/[genre]`**folder within each XML playlist.**