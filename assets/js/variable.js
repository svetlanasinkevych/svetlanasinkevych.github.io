//
// config file
// --------------------------------------------------
// customize the template function via this file
//

//
// countdown
// --------------------------------------------------
//

// [true, false] - enable / disable countdown
var _countdown_toggle =                           true;

// 2018[year] - 12[month] - 01[day]
var _countdown_date =                             [2018, 12, 1];

// [true, false] - enable / disable utc time
var _countdown_utc =                              false;

//
// overlay
// --------------------------------------------------
//
// overlay color doesnt mean home section bckground color
//

// [true, false] - enable / disable overlay
var _site_bg_overlay_toggle =                     true;

// overlay color, rgba format
var _site_bg_overlay_color =                      'rgba(22, 22, 27, 0.85)';

//
// background
// --------------------------------------------------
// choose background version for both desktop and mobile :)
//

//////////////////////////////////////////////////
// for desktop
//////////////////////////////////////////////////

var _bg_style_desktop =                           8;
                                                    // 0 = flat color
                                                    // 1 = flat color     (mp3 audio)          - audio place at /audio/audio.mp3
                                                    // 2 = image
                                                    // 3 = image          (mp3 audio)          - audio place at /audio/audio.mp3
                                                    // 4 = slideshow
                                                    // 5 = slideshow      (mp3 audio)          - audio place at /audio/audio.mp3
                                                    // 6 = slideshow      (kenburn)
                                                    // 7 = slideshow      (kenburn, mp3 audio) - audio place at /audio/audio.mp3
                                                    // 8 = html5 video    (mute)               - video file place at /video/video.mp4
                                                    // 9 = html5 video    (video audio)        - video file place at /video/video.mp4
                                                    // 10 = html5 video   (mp3 audio)          - audio place at /audio/audio.mp3)
                                                    // 11 = youtube video (mute)
                                                    // 12 = youtube video (video audio)
                                                    // 13 = youtube video (youtube, mp3 audio) - audio place at /audio/audio.mp3

//////////////////////////////////////////////////
// for mobile
//////////////////////////////////////////////////

var _bg_style_mobile =                            2;
                                                    // 0 = flat color
                                                    // 1 = flat color (mp3 audio)          - audio place at /audio/audio.mp3
                                                    // 2 = image
                                                    // 3 = image      (mp3 audio)          - audio place at /audio/audio.mp3
                                                    // 4 = slideshow
                                                    // 5 = slideshow  (mp3 audio)          - audio place at /audio/audio.mp3)
                                                    // 6 = slideshow  (kenburn)
                                                    // 7 = slideshow  (kenburn, mp3 audio) - audio place at /audio/audio.mp3

//////////////////////////////////////////////////
// if _bg_style == 0 - 1 (flat color)
//////////////////////////////////////////////////

// background color
var _bg_color =                                   '#252733';

//////////////////////////////////////////////////
// if _bg_style == 4 - 7 (slideshow)
//////////////////////////////////////////////////

// slideshow image amount
var _bg_slideshow_image_amount =                  2;

// millisecond
var _bg_slideshow_duration =                      9000;

//////////////////////////////////////////////////
// if _bg_style_desktop == 11 - 13 (youtube video)
//////////////////////////////////////////////////

// youtube video url id - https://www.youtube.com/watch?v=sRhkIO1QzA4
var _bg_video_youtube_url =                       'sRhkIO1QzA4';

// hightres, hd1080, hd720, default - youtube video quality
var _bg_video_youtube_quality =                   'hightres';

// seconds - video start time
var _bg_video_youtube_start =                     1;

// seconds - video end time, 0 to ignored
var _bg_video_youtube_end =                       0;

// true, false - video loop
var _bg_video_youtube_loop =                      true;

//
// animation
// --------------------------------------------------
//

// 0 - disable, 1 - constellation, 2 - parallax star, 3 - cloud,  4 - particles
var _site_bg_animation =                          0;

//////////////////////////////////////////////////
// if `_site_bg_animation` == 1 (constellation)
//////////////////////////////////////////////////

// [rgba format] - constellation color
var _constellation_color =                        'rgba(255, 255, 255, 1)';

// [px] - constellation width
var _constellation_width =                        1.5;

//////////////////////////////////////////////////
// if `_site_bg_animation` == 2 (parallax star)
//////////////////////////////////////////////////

// [0.1 to 1] - parallax star opacity
var _parallax_star_opacity =                      1;

//////////////////////////////////////////////////
// if `_site_bg_animation` == 3 (cloud)
//////////////////////////////////////////////////

// [0.1 to 1] - cloud opacity
var _cloud_opacity =                              1;

//////////////////////////////////////////////////
// if `_site_bg_animation` == 4 (particles)
//////////////////////////////////////////////////

// [0.1 to 1] - particles opacity
var _particles_opacity =                          0.5;

// [0.1 to 1] - particles link opacity
var _particles_link_opacity =                     0.5;

// [none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left] - particles direction
var _particles_direction =                        'top-right';

// [0 to any number] - particles speed
var _particles_speed =                            3;




















