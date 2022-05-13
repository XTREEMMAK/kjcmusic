# Key Jay Music

This is the offical GitHub repository for the Key Jay Music website.
<br>
## Site Settings

### Environment Swticher

Almost all site settings are handled within the settings.php file.
Here is where you'd typically modify the HOST source path for images (connecting to the CDN). I've created a switch as an environment switcher for easy modifications between development mode and production mode.

<span class="colour" style="color:rgb(106, 153, 85)">`//Environment Switcher`</span>
<span class="colour" style="color:rgb(106, 153, 85)">`//0 = CDN | 1 = LOCAL`</span>
<span class="colour" style="color:rgb(156, 220, 254)">`$i`</span><span class="colour" style="color:rgb(212, 212, 212)">`=`</span><span class="colour" style="color:rgb(181, 206, 168)">`0`</span><span class="colour" style="color:rgb(212, 212, 212)">`;`</span>
<br>
### Music Database

#### Adding Albums to Homepage

The music database does not rely on any backend database technology like MySQL. Instead, the database is a culmination of JSON files that utilize AJAX, and Handlebars to retrieve and format what is needed.

To add new albums, you will first need to create a new entry in the **kjmbdb.json** within the `js/music_db` folder
Example:
<span class="colour" style="color: rgb(212, 212, 212);">`{`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Final Fantasy VIIR: Beneath a Stolen Sky"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"key"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"2020_pm_ff7bass"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"sort_as"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: [`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(206, 145, 120);">`"covers"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      ]`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`},`</span>
<br>
* **name**: The name of the album
* **key**: The physical folder to which the album art and **info.json** will reside.
* **sort\_as**: Used to filter the albums on the homepage.
    * *Options*: covers, singles, albums.

#### Adding Albums Info

Once the homepage entry is added, create a folder using the **key** from above as the folder name within the `js/music_db/albums/` folder. Navigate inside and insert your an image for the coverart naming it **front.jpg.**

Create an info.json file and copy this structure to is:
<span class="colour" style="color: rgb(212, 212, 212);">`{`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[INSERT ALBUM NAME]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"artist"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[NAME OF HEAD OF PROJECT]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"additional_credits"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[ADDITIONAL CREDITS (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"release"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[PROJECT RELEASE DATE]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"platforms"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: [`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    {`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"youtube"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[YOUTUBE URL (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"spotify"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[SPOTIFY URL (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"bandcamp"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[BANDCAMP URL (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"applemusic"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[APPLE MUSIC URL (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"amazonmusic"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[AMAZON MUSIC URL (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"direct_dl"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[DIRECT DOWNLOAD URL (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"weblink_1"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[OTHER WEBSITE URL (optional)]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"weblink_2"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[OTHER WEBSITE 2 URL (optional)]"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    }`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`  ],`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"general_description"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[GENERAL DESCRIPTION]`</span><span class="colour" style="color: rgb(206, 145, 120);">`"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"project_involvement"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"[PROJECT INVOLVEMENT INFO]"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"credits"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: [`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    [`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      {`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Key Jay"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"role"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Mixing/Composer/Production/Writer/Vocals"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      }`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    ],`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    [`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      {`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Ms.Blak (Hope Greene)"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"role"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Vocalist"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      },`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      {`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Mac Dog"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"role"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Rapper"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      }`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    ],`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    [`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      {`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Paolo A"`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"role"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Guitars"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      }`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    ],`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    [`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      {`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Danielle M."`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"role"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Voice Actor"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      }`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    ],`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    [`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      {`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"name"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Carlos H."`</span><span class="colour" style="color: rgb(212, 212, 212);">`,`</span>
<span class="colour" style="color: rgb(212, 212, 212);"></span><span class="colour" style="color: rgb(156, 220, 254);">`"role"`</span><span class="colour" style="color: rgb(212, 212, 212);">`: `</span><span class="colour" style="color: rgb(206, 145, 120);">`"Album Artwork"`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`      }`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`    ]`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`  ]`</span>
<span class="colour" style="color: rgb(212, 212, 212);">`}`</span>

As a note for credits, separate each major category as another array of objects. This adds a space in the credits list on the frontend.

Also note that the **description** and **project\_involvement fields can accept HTML. However, you need to escape double quotes and you need to make sure the HTML in question is on one line. To do both, use Visual Studio Code with extensions (press F1) that can handle both jobs (Ex. JSON Escaper).**
<br>
### **Media Player Settings**

**The site's sticky media player settings can be edited within**`js/mp3-sticky-player/player_settings.js`**. You'll be able to edit the master playlist from that file. Inner playlists can be found within the**`content/playlist`**folder. Audio is referenced to the**`public/audio/[genre]`**folder within each XML playlist.**