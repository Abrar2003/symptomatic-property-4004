
//<-------------------------NavBar And Fotter export------------------------------------------>

import {navbar,navjs,cross,features}  from "../components/navbar.js"
console.log("hello")
// document.getElementById("navbar1").style.backgroundColor="red"
document.getElementById("navbar1").innerHTML = navbar()
navjs()
cross()
features()

import{footer} from "../components/footer.js"
// console.log("hello")
document.getElementById("footer").innerHTML = footer();



//<----------------- Backend Data for Append  ---------------->

let gallaryData={
    "Recovered_Sheet1": [
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/jaybird/",
            "id": "1",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/jaybird_v1-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"jaybird v1\" title=\"jaybird v1\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/jaybird_v1-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/jaybird_v1-538x778.jpg 2x\" />",
            "title": "Jaybird"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/rip-curl/",
            "id": "2",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ripcurl-1-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 ripcurl 1\" title=\"gallery 1076x1556 ripcurl 1\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ripcurl-1-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ripcurl-1-538x778.jpg 2x\" />",
            "title": "Rip Curl"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/sxsw/",
            "id": "3",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sxsw-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 sxsw\" title=\"gallery 1076x1556 sxsw\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sxsw-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sxsw-538x778.jpg 2x\" />",
            "title": "SXSW"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/on/",
            "id": "4",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_on-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 on\" title=\"gallery 1076x1556 on\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_on-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_on-538x778.jpg 2x\" />",
            "title": "On"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/flume/",
            "id": "5",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_foofighters-269x389.jpg",
      "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 flume\" title=\"gallery 1076x1556 flume\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_flume-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_flume-538x778.jpg 2x\" />",
            "title": "Flume"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/monica-vinader/",
            "id": "6",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_topshop-269x389.jpg",
          "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 monicavinader\" title=\"gallery 1076x1556 monicavinader\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_monicavinader-269x389.gif\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_monicavinader-538x778.gif 2x\" />",
            "title": "Monica Vinader"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/drake-hotel-properties/",
            "id": "7",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_jackdaniels-269x389.jpg",
      "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 drake\" title=\"gallery 1076x1556 drake\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_drake-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_drake-538x778.jpg 2x\" />",
            "title": "Drake Hotel Properties"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/chatbooks/",
            "id": "8",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fredperry-269x389.jpg",
        "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 chat\" title=\"gallery 1076x1556 chat\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_chat-269x389.gif\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_chat-538x778.gif 2x\" />",
            "title": "Chatbooks"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/glamcorner/",
            "id": "9",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lamer-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 glamcorner\" title=\"gallery 1076x1556 glamcorner\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_glamcorner-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_glamcorner-538x778.jpg 2x\" />",
            "title": "GlamCorner"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/birchbox/",
            "id": "10",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_adidas-269x389.jpg",
           "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 birchbox\" title=\"gallery 1076x1556 birchbox\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_birchbox-269x389.gif\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_birchbox-538x778.gif 2x\" />",
            "title": "Birchbox"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/royal-childrens-hospital-foundation/",
            "id": "11",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_converse-269x389.jpg",
         "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 royalchilderns\" title=\"gallery 1076x1556 royalchilderns\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_royalchilderns-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_royalchilderns-538x778.jpg 2x\" />",
            "title": "The Royal Children’s Hospital Foundation"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/nicki-minaj/",
            "id": "12",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sephora-269x389.jpg",
          "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 wonderfulunion\" title=\"gallery 1076x1556 wonderfulunion\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_wonderfulunion-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_wonderfulunion-538x778.jpg 2x\" />",
            "title": "Nicki Minaj"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/unicef-new-zealand/",
            "id": "13",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_showtime-269x389.jpg",
         "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 unicef\" title=\"gallery 1076x1556 unicef\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_unicef-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_unicef-538x778.jpg 2x\" />",
            "title": "UNICEF New Zealand"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/flight-centre/",
            "id": "14",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_pret-269x389.jpg",
             "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 flightcetnre\" title=\"gallery 1076x1556 flightcetnre\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_flightcetnre-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_flightcetnre-538x778.jpg 2x\" />",
            "title": "Flight Centre"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/resy/",
            "id": "15",
             "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ringly-269x389.jpg",
           "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 resy\" title=\"gallery 1076x1556 resy\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_resy-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_resy-538x778.jpg 2x\" />",
            "title": "Resy"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/rolling-stone-australia/",
            "id": "16",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rooftopcinema-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 rollingstone\" title=\"gallery 1076x1556 rollingstone\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rollingstone-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rollingstone-538x778.jpg 2x\" />",
            "title": "Rolling Stone Australia"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/parkrun/",
            "id": "17",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_teambelgium-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 parkrun\" title=\"gallery 1076x1556 parkrun\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_parkrun-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_parkrun-538x778.jpg 2x\" />",
            "title": "parkrun"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/whale-dolphin-conservation/",
            "id": "18",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_nau-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 whaledolphin\" title=\"gallery 1076x1556 whaledolphin\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_whaledolphin-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_whaledolphin-538x778.jpg 2x\" />",
            "title": "Whale and Dolphin Conservation"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/soho-house/",
            "id": "19",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_backtennessee-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 soho\" title=\"gallery 1076x1556 soho\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_soho-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_soho-538x778.jpg 2x\" />",
            "title": "Soho House"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/red-cross/",
            "id": "20",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_FRESH-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 redcross\" title=\"gallery 1076x1556 redcross\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_redcross-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_redcross-538x778.jpg 2x\" />",
            "title": "Red Cross"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/broadway-com/",
            "id": "21",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_diamondback-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 broadway\" title=\"gallery 1076x1556 broadway\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_broadway-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_broadway-538x778.jpg 2x\" />",
            "title": "Broadway.com"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/san-diego-chargers/",
            "id": "22",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_dolls-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 chargers\" title=\"gallery 1076x1556 chargers\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_chargers-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_chargers-538x778.jpg 2x\" />",
            "title": "San Diego Chargers"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/seafolly/",
            "id": "23",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fairline-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 seafolly\" title=\"gallery 1076x1556 seafolly\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_seafolly-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_seafolly-538x778.jpg 2x\" />",
            "title": "Seafolly"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/rapha/",
            "id": "24",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_protein-pouch-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 rapha\" title=\"gallery 1076x1556 rapha\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rapha-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rapha-538x778.jpg 2x\" />",
            "title": "Rapha"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/foo-fighters/",
            "id": "25",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_foofighters-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 foofighters\" title=\"gallery 1076x1556 foofighters\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_foofighters-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_foofighters-538x778.jpg 2x\" />",
            "title": "Foo Fighters"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/topshop/",
            "id": "26",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_topshop-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 topshop\" title=\"gallery 1076x1556 topshop\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_topshop-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_topshop-538x778.jpg 2x\" />",
            "title": "Topshop"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/jack-daniels/",
            "id": "27",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_jackdaniels-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 jackdaniels\" title=\"gallery 1076x1556 jackdaniels\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_jackdaniels-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_jackdaniels-538x778.jpg 2x\" />",
            "title": "Jack Daniel’s"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/fred-perry/",
            "id": "28",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fredperry-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 fredperry\" title=\"gallery 1076x1556 fredperry\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fredperry-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fredperry-538x778.jpg 2x\" />",
            "title": "Fred Perry"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/la-mer/",
            "id": "29",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lamer-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 lamer\" title=\"gallery 1076x1556 lamer\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lamer-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lamer-538x778.jpg 2x\" />",
            "title": "La Mer"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/adidas/",
            "id": "30",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_adidas-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 adidas\" title=\"gallery 1076x1556 adidas\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_adidas-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_adidas-538x778.jpg 2x\" />",
            "title": "Adidas"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/converse/",
            "id": "31",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_converse-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 converse\" title=\"gallery 1076x1556 converse\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_converse-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_converse-538x778.jpg 2x\" />",
            "title": "Converse"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/sephora/",
            "id": "32",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sephora-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 sephora\" title=\"gallery 1076x1556 sephora\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sephora-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sephora-538x778.jpg 2x\" />",
            "title": "Sephora"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/showtime/",
            "id": "33",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_showtime-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 showtime\" title=\"gallery 1076x1556 showtime\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_showtime-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_showtime-538x778.jpg 2x\" />",
            "title": "Showtime"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/pret/",
            "id": "34",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_pret-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 pret\" title=\"gallery 1076x1556 pret\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_pret-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_pret-538x778.jpg 2x\" />",
            "title": "Pret"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/ringly/",
            "id": "35",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ringly-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 ringly\" title=\"gallery 1076x1556 ringly\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ringly-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ringly-538x778.jpg 2x\" />",
            "title": "Ringly"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/oneill-clothing/",
            "id": "36",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_oneill-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"email on mobile mockup showing o'neill shorts with headline\" title=\"gallery 1076x1556 oneill\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_oneill-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_oneill-538x778.jpg 2x\" />",
            "title": "O’Neill Clothing"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/storq/",
            "id": "37",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_strorq-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 strorq\" title=\"gallery 1076x1556 strorq\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_strorq-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_strorq-538x778.jpg 2x\" />",
            "title": "Storq"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/chrome-industries/",
            "id": "38",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_chromeind-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 chromeind\" title=\"gallery 1076x1556 chromeind\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_chromeind-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_chromeind-538x778.jpg 2x\" />",
            "title": "Chrome Industries"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/fontshop/",
            "id": "39",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fontshop-269x389.gif",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 fontshop\" title=\"gallery 1076x1556 fontshop\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fontshop-269x389.gif\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fontshop-538x778.gif 2x\" />",
            "title": "FontShop"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/fruit-of-the-loom/",
            "id": "40",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fruitloom-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 fruitloom\" title=\"gallery 1076x1556 fruitloom\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fruitloom-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fruitloom-538x778.jpg 2x\" />",
            "title": "Fruit of the Loom"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/fiji-airways/",
            "id": "41",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fijiairways-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 fijiairways\" title=\"gallery 1076x1556 fijiairways\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fijiairways-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fijiairways-538x778.jpg 2x\" />",
            "title": "Fiji Airways"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/red-bull/",
            "id": "42",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_redbull-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 redbull\" title=\"gallery 1076x1556 redbull\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_redbull-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_redbull-538x778.jpg 2x\" />",
            "title": "Red Bull"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/beck/",
            "id": "43",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_beck-269x389.gif",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 beck\" title=\"gallery 1076x1556 beck\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_beck-269x389.gif\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_beck.gif 2x\" />",
            "title": "Beck"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/lacoste/",
            "id": "44",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lacoste-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 lacoste\" title=\"gallery 1076x1556 lacoste\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lacoste-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lacoste-538x778.jpg 2x\" />",
            "title": "Lacoste"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/ae-networks/",
            "id": "45",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_AE-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 AE\" title=\"gallery 1076x1556 AE\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_AE-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_AE-538x778.jpg 2x\" />",
            "title": "A&E Networks"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/living-spaces/",
            "id": "46",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_livingspaces-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 livingspaces\" title=\"gallery 1076x1556 livingspaces\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_livingspaces-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_livingspaces-538x778.jpg 2x\" />",
            "title": "Living Spaces"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/lincoln-motor-company/",
            "id": "47",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lincoln-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 lincoln\" title=\"gallery 1076x1556 lincoln\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lincoln-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_lincoln-538x778.jpg 2x\" />",
            "title": "Lincoln Motor Company"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/oribe/",
            "id": "48",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_oribe-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 oribe\" title=\"gallery 1076x1556 oribe\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_oribe-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_oribe-538x778.jpg 2x\" />",
            "title": "Oribe"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/chandon/",
            "id": "49",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/08/gallery_1076x1556_chandon-1-1076x1556-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"Chandon newsletter\" title=\"gallery_1076x1556_chandon-1-1076x1556\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/08/gallery_1076x1556_chandon-1-1076x1556-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/08/gallery_1076x1556_chandon-1-1076x1556-538x778.jpg 2x\" />",
            "title": "Chandon"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/ferrari/",
            "id": "50",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ferrari-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 ferrari\" title=\"gallery 1076x1556 ferrari\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ferrari-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ferrari-538x778.jpg 2x\" />",
            "title": "Ferrari"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/nissan/",
            "id": "51",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_nissan-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 nissan\" title=\"gallery 1076x1556 nissan\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_nissan-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_nissan-538x778.jpg 2x\" />",
            "title": "Nissan"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/de-beers/",
            "id": "52",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_debeers-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 debeers\" title=\"gallery 1076x1556 debeers\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_debeers-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_debeers-538x778.jpg 2x\" />",
            "title": "De Beers"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/philosophy/",
            "id": "53",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_philosophy-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 philosophy\" title=\"gallery 1076x1556 philosophy\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_philosophy-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_philosophy-538x778.jpg 2x\" />",
            "title": "Philosophy"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/harley-davidson/",
            "id": "54",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_harley-davidson-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 harley davidson\" title=\"gallery 1076x1556 harley davidson\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_harley-davidson-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_harley-davidson-538x778.jpg 2x\" />",
            "title": "Harley Davidson"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/pizza-hut/",
            "id": "55",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_pizzahut-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 pizzahut\" title=\"gallery 1076x1556 pizzahut\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_pizzahut-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_pizzahut-538x778.jpg 2x\" />",
            "title": "Pizza Hut"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/mazda/",
            "id": "56",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_mazda-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 mazda\" title=\"gallery 1076x1556 mazda\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_mazda-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_mazda-538x778.jpg 2x\" />",
            "title": "Mazda"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/deus-ex-machina/",
            "id": "57",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_deus-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 deus\" title=\"gallery 1076x1556 deus\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_deus-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_deus-538x778.jpg 2x\" />",
            "title": "Deus Ex Machina"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/hewlett-packard-enterprise/",
            "id": "58",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_hp-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 hp\" title=\"gallery 1076x1556 hp\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_hp-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_hp-538x778.jpg 2x\" />",
            "title": "Hewlett Packard Enterprise"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/legacy-box/",
            "id": "59",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_legacybox-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 legacybox\" title=\"gallery 1076x1556 legacybox\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_legacybox-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_legacybox-538x778.jpg 2x\" />",
            "title": "Legacy Box"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/speck-products/",
            "id": "60",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_speck-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 speck\" title=\"gallery 1076x1556 speck\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_speck-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_speck-538x778.jpg 2x\" />",
            "title": "Speck Products"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/guess/",
            "id": "61",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_guess-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 guess\" title=\"gallery 1076x1556 guess\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_guess-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_guess-538x778.jpg 2x\" />",
            "title": "GUESS"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/global-fund-women/",
            "id": "62",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_global-women-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 global women\" title=\"gallery 1076x1556 global women\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_global-women-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_global-women-538x778.jpg 2x\" />",
            "title": "Global Fund for Women"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/reddit/",
            "id": "63",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_reddit-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 reddit\" title=\"gallery 1076x1556 reddit\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_reddit-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_reddit-538x778.jpg 2x\" />",
            "title": "Reddit"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/callaway-golf/",
            "id": "64",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_callawaygolf-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 callawaygolf\" title=\"gallery 1076x1556 callawaygolf\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_callawaygolf-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_callawaygolf-538x778.jpg 2x\" />",
            "title": "Callaway Golf"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/litmus/",
            "id": "65",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_litmus-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 litmus\" title=\"gallery 1076x1556 litmus\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_litmus-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_litmus-538x778.jpg 2x\" />",
            "title": "Litmus"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/jersey-mikes-subs/",
            "id": "66",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_mikesjerseysubs-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 mikesjerseysubs\" title=\"gallery 1076x1556 mikesjerseysubs\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_mikesjerseysubs-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_mikesjerseysubs-538x778.jpg 2x\" />",
            "title": "Jersey Mike’s Subs"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/penguin-books/",
            "id": "67",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_penguin-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 penguin\" title=\"gallery 1076x1556 penguin\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_penguin-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_penguin-538x778.jpg 2x\" />",
            "title": "Penguin Books"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/hudson-ranch-vineyards/",
            "id": "68",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_Hudson-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 Hudson\" title=\"gallery 1076x1556 Hudson\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_Hudson-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_Hudson-538x778.jpg 2x\" />",
            "title": "Hudson Ranch and Vineyards"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/house-industries/",
            "id": "69",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_house-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 house\" title=\"gallery 1076x1556 house\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_house-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_house-538x778.jpg 2x\" />",
            "title": "House Industries"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/rooftop-cinema/",
            "id": "70",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rooftopcinema-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 rooftopcinema\" title=\"gallery 1076x1556 rooftopcinema\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rooftopcinema-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_rooftopcinema-538x778.jpg 2x\" />",
            "title": "Rooftop Cinema"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/belgium-olympic-team/",
            "id": "71",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_teambelgium-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 teambelgium\" title=\"gallery 1076x1556 teambelgium\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_teambelgium-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_teambelgium-538x778.jpg 2x\" />",
            "title": "Belgium Olympic Team"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/nau-clothing/",
            "id": "72",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_nau-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 nau\" title=\"gallery 1076x1556 nau\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_nau-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_nau-538x778.jpg 2x\" />",
            "title": "Nau Clothing"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/bank-of-tennessee/",
            "id": "73",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_backtennessee-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 backtennessee\" title=\"gallery 1076x1556 backtennessee\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_backtennessee-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_backtennessee-538x778.jpg 2x\" />",
            "title": "Bank of Tennessee"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/freshbooks/",
            "id": "74",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_FRESH-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 FRESH\" title=\"gallery 1076x1556 FRESH\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_FRESH-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_FRESH-538x778.jpg 2x\" />",
            "title": "Freshbooks"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/sommselect/",
            "id": "75",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sommselect-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 sommselect\" title=\"gallery 1076x1556 sommselect\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sommselect-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_sommselect-538x778.jpg 2x\" />",
            "title": "SommSelect"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/four-pillars-gin/",
            "id": "76",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fourpillars-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 fourpillars\" title=\"gallery 1076x1556 fourpillars\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fourpillars-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fourpillars-538x778.jpg 2x\" />",
            "title": "Four Pillars Gin"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/oh-joy/",
            "id": "77",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ohjoy-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 ohjoy\" title=\"gallery 1076x1556 ohjoy\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ohjoy-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_ohjoy-538x778.jpg 2x\" />",
            "title": "Oh Joy!"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/big-sea-design-agency/",
            "id": "78",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_bigsea-1-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 bigsea 1\" title=\"gallery 1076x1556 bigsea 1\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_bigsea-1-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_bigsea-1-538x778.jpg 2x\" />",
            "title": "Big Sea Design Agency"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/stumptown-coffee/",
            "id": "79",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_stumptown-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 stumptown\" title=\"gallery 1076x1556 stumptown\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_stumptown-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_stumptown-538x778.jpg 2x\" />",
            "title": "Stumptown Coffee"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/bmi/",
            "id": "80",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_bmi-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 bmi\" title=\"gallery 1076x1556 bmi\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_bmi-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_bmi-538x778.jpg 2x\" />",
            "title": "BMI"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/goorin-brothers/",
            "id": "81",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_goorin-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 goorin\" title=\"gallery 1076x1556 goorin\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_goorin-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_goorin-538x778.jpg 2x\" />",
            "title": "Goorin Brothers"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/homestyle-magazine/",
            "id": "82",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_livinghomestyle-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 livinghomestyle\" title=\"gallery 1076x1556 livinghomestyle\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_livinghomestyle-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_livinghomestyle-538x778.jpg 2x\" />",
            "title": "Homestyle Magazine"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/hotel-matilda/",
            "id": "83",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_hotelmatilda-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 hotelmatilda\" title=\"gallery 1076x1556 hotelmatilda\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_hotelmatilda-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_hotelmatilda-538x778.jpg 2x\" />",
            "title": "Hotel Matilda"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/smugmug/",
            "id": "84",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_smugmug-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 smugmug\" title=\"gallery 1076x1556 smugmug\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_smugmug-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_smugmug-538x778.jpg 2x\" />",
            "title": "SmugMug"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/css-conference/",
            "id": "85",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_cssconf-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 cssconf\" title=\"gallery 1076x1556 cssconf\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_cssconf-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_cssconf-538x778.jpg 2x\" />",
            "title": "CSS Conference"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/t2-tea-company/",
            "id": "86",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_T2-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 T2\" title=\"gallery 1076x1556 T2\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_T2-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_T2-538x778.jpg 2x\" />",
            "title": "T2 Tea Company"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/fxfactory/",
            "id": "87",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_Fxfactory-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 Fxfactory\" title=\"gallery 1076x1556 Fxfactory\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_Fxfactory-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_Fxfactory-538x778.jpg 2x\" />",
            "title": "FxFactory"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/tick/",
            "id": "88",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_tick-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 tick\" title=\"gallery 1076x1556 tick\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_tick-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_tick-538x778.jpg 2x\" />",
            "title": "TICK"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/disney-on-ice/",
            "id": "89",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/08/gallery_1076x1556_disney-1-1076x1556-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"Disney event email\" title=\"gallery_1076x1556_disney-1-1076x1556\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/08/gallery_1076x1556_disney-1-1076x1556-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/08/gallery_1076x1556_disney-1-1076x1556-538x778.jpg 2x\" />",
            "title": "Disney on Ice"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/diamond-back-truck-covers/",
            "id": "90",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_diamondback-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 diamondback\" title=\"gallery 1076x1556 diamondback\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_diamondback-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_diamondback-538x778.jpg 2x\" />",
            "title": "Diamond Back Truck Covers"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/bluefrog-agency/",
            "id": "91",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_dolls-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 dolls\" title=\"gallery 1076x1556 dolls\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_dolls-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_dolls-538x778.jpg 2x\" />",
            "title": "Bluefrog Agency"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/events/fairline-boats/",
            "id": "92",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fairline-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 fairline\" title=\"gallery 1076x1556 fairline\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fairline-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_fairline-538x778.jpg 2x\" />",
            "title": "Fairline Boats"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/announcements/protein-pouch/",
            "id": "93",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_protein-pouch-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 protein pouch\" title=\"gallery 1076x1556 protein pouch\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_protein-pouch-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_protein-pouch-538x778.jpg 2x\" />",
            "title": "Protein Pouch"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/marketing-offers/deliveroo/",
            "id": "94",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_deliveroo-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 deliveroo\" title=\"gallery 1076x1556 deliveroo\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_deliveroo-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_deliveroo-538x778.jpg 2x\" />",
            "title": "Deliveroo"
        },
        {
            "photo-grid href": "https://www.campaignmonitor.com/best-email-marketing-campaigns/newsletters/academy-american-poets/",
            "id": "95",
            "poster": "https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_americanpoets-1-269x389.jpg",
            "screen": "<img src=\"https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/gallery/blank.gif?ver=298\" alt=\"gallery 1076x1556 americanpoets 1\" title=\"gallery 1076x1556 americanpoets 1\" data-echo=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_americanpoets-1-269x389.jpg\" data-echo-srcset=\"https://www.campaignmonitor.com/wp-content/uploads/2017/02/gallery_1076x1556_americanpoets-1-538x778.jpg 2x\" />",
            "title": "Academy of American Poets"
        }
    ]
}



//<----------------- For Filters Functinality  ---------------->

let gallary_main_div=document.getElementById("gallary-main-div-1")
let data=gallaryData.Recovered_Sheet1
let start=document.querySelectorAll(".gallary-filter")
// console.log('start:', start)
// console.log('data:', data)
for(let i=0;i<start.length;i++){
    start[i].addEventListener("click",function(event){ 
        if(i==0){
     gallary_main_div.innerHTML=null
        start[i].style.background = "#7856FF";
        start[i].style.color="aliceblue"
        start[i].style.borderRadius="10px"
        start[1].style.background = "rgba(230, 228, 228, 0.194)";
        start[1].style.color="#7856FF"
        start[1].style.borderRadius="10px"
        start[2].style.background = "rgba(230, 228, 228, 0.194)";
        start[2].style.color="#7856FF"
        start[2].style.borderRadius="10px"
        start[3].style.background = "rgba(230, 228, 228, 0.194)";
        start[3].style.color="#7856FF"
        start[3].style.borderRadius="10px"
        start[4].style.background = "rgba(230, 228, 228, 0.194)";
        start[4].style.color="#7856FF"
        start[4].style.borderRadius="10px"
            data.sort((a,b)=>{
                return b.id-a.id
                })
        
                gallaryDisplay(data)
        }else if(i==1){
            gallary_main_div.innerHTML=null
        start[i].style.background = "#7856FF";
        start[i].style.color="aliceblue"
        start[i].style.borderRadius="10px"
        start[0].style.background = "rgba(230, 228, 228, 0.194)";
        start[0].style.color="#7856FF"
        start[0].style.borderRadius="10px"
        start[3].style.background = "rgba(230, 228, 228, 0.194)";
        start[3].style.color="#7856FF"
        start[3].style.borderRadius="10px"
        start[2].style.background = "rgba(230, 228, 228, 0.194)";
        start[2].style.color="#7856FF"
        start[2].style.borderRadius="10px"
        start[4].style.background = "rgba(230, 228, 228, 0.194)";
        start[4].style.color="#7856FF"
        start[4].style.borderRadius="10px"
            gallary_main_div.innerHTML=null
            let ids = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].id >20 && data[i].id<40 ) {
                 ids.push(data[i]);
               
              }

            }
            console.log(ids);
            let filter=ids.filter((e)=>{
                return e.id>20;
            })
            gallaryDisplay(data)
        }else if(i==2){
            gallary_main_div.innerHTML=null
        start[i].style.background = "#7856FF";
        start[i].style.color="aliceblue"
        start[i].style.borderRadius="10px"
        start[1].style.background = "rgba(230, 228, 228, 0.194)";
        start[1].style.color="#7856FF"
        start[1].style.borderRadius="10px"
        start[3].style.background = "rgba(230, 228, 228, 0.194)";
        start[3].style.color="#7856FF"
        start[3].style.borderRadius="10px"
        start[0].style.background = "rgba(230, 228, 228, 0.194)";
        start[0].style.color="#7856FF"
        start[0].style.borderRadius="10px"
        start[4].style.background = "rgba(230, 228, 228, 0.194)";
        start[4].style.color="#7856FF"
        start[4].style.borderRadius="10px"
            gallary_main_div.innerHTML=null
            let ids = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].id >20 && data[i].id<40 ) {
                 ids.push(data[i]);
               
              }

            }
            console.log(ids);
            let filter=ids.filter((e)=>{
                return e.id>20;
            })
            gallaryDisplay(data)
        }else if(i==3){
            gallary_main_div.innerHTML=null
        start[i].style.background = "#7856FF";
        start[i].style.color="aliceblue"
        start[i].style.borderRadius="10px"
        start[1].style.background = "rgba(230, 228, 228, 0.194)";
        start[1].style.color="#7856FF"
        start[1].style.borderRadius="10px"
        start[2].style.background = "rgba(230, 228, 228, 0.194)";
        start[2].style.color="#7856FF"
        start[2].style.borderRadius="10px"
        start[4].style.background = "rgba(230, 228, 228, 0.194)";
        start[4].style.color="#7856FF"
        start[4].style.borderRadius="10px"
        start[0].style.background = "rgba(230, 228, 228, 0.194)";
        start[0].style.color="#7856FF"
        start[0].style.borderRadius="10px"
            gallary_main_div.innerHTML=null
            let ids = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].id >40 && data[i].id<50 ) {
                 ids.push(data[i]);
               
              }

            }
            console.log(ids);
            let filter=ids.filter((e)=>{
                return e.id>40;
            })
            gallaryDisplay(data)
        }else if(i==4){
        gallary_main_div.innerHTML=null
        start[i].style.background = "#7856FF";
        start[i].style.color="aliceblue"
        start[i].style.borderRadius="10px"
        start[1].style.background = "rgba(230, 228, 228, 0.194)";
        start[1].style.color="#7856FF"
        start[1].style.borderRadius="10px"
        start[2].style.background = "rgba(230, 228, 228, 0.194)";
        start[2].style.color="#7856FF"
        start[2].style.borderRadius="10px"
        start[3].style.background = "rgba(230, 228, 228, 0.194)";
        start[3].style.color="#7856FF"
        start[3].style.borderRadius="10px"
        start[0].style.background = "rgba(230, 228, 228, 0.194)";
        start[0].style.color="#7856FF"
        start[0].style.borderRadius="10px"
            gallary_main_div.innerHTML=null
            let ids = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].id >50 && data[i].id<94 ) {
                 ids.push(data[i]); 
              }

            }
            console.log(ids);
            let filter=ids.filter((e)=>{
                return e.id>50;
            })
            // console.log(filter)
            gallaryDisplay(data)
        }
        
    })
}



//<----------------- Main Posters Appending After giving a 1 sec  ---------------->


// let gallary_main_div=document.getElementById("gallary-main-div-1")




let gallaryDisplay=(data)=>{
    data.forEach((el)=>{
        
        let gallary_div=document.createElement("div")
        gallary_div.setAttribute("class","gallary-div")
        gallary_div.addEventListener("click",function(){
            newGallary(el)
        })
        let poster=document.createElement("img")
        poster.src=el.poster
        poster.setAttribute("class","poster")

        let title_div=document.createElement("div")
        
        
        let title=document.createElement("p")
        title.innerText=el.title
        title.setAttribute("class","title")


        let load_img=document.createElement("img")
        load_img.setAttribute("class","load-img")
        load_img.scr="https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif"
        gallary_div.append(load_img)
        gallary_main_div.append(gallary_div)
        setTimeout(function(){
            load_img.style.display="none"
            gallary_div.append(poster,title)
            gallary_main_div.append(gallary_div)
        },1000)
    })

    function newGallary(el){

        let GallaryData=el;
        localStorage.setItem("gallaryimg",JSON.stringify(GallaryData));
        // console.log('GallaryData:', GallaryData)
        window.location.href="gallaryview.html"
    }
}
gallaryDisplay(data)


//<----------------- For Event for Image Hover  ---------------->












