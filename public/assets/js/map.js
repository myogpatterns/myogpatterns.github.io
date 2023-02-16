/*
    Displays vendors from CSV on leaflet.js map
    CSV from Google Sheets. For LearnMYOG.com.
*/


// https://github.com/risan/country-flag-emoji-json
const CountryFlagEmojiJSON = "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"

const map = L.map('map', {worldCopyJump: true, center: [40,-53], zoom: 3});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


const markers = Papa.parse("assets/db/vendormap.csv", {
    header: true,
    download: true,
    dynamicTyping: true,
    complete: function(results) {
        // console.log("Markers loaded:", results.data)
        getFlagEmoji( CountryFlagEmojiJSON, results.data )
    }
});

async function getFlagEmoji( array, data ) {
    const response = await fetch(array);
    const countries = await response.json();

    data.forEach(marker => {
        // console.log(marker.country);
        try{ 
            const found = countries.find(country => country.code == marker.country);
            marker["flag"] = found.emoji;
        } catch (TypeError) {
            marker["flag"] = "🏴‍☠️";
        }
    })
    drawMarkers( data )
}

function drawMarkers( data ) {
    data.sort((a,b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));

    data.forEach(marker => {
        let star = (marker.friend) ? "⭐️" : "";
        L.marker([marker.lat, marker.long], {
            icon: marker.friend == true ? yellowIcon : blueIcon
        }).addTo(map)
        .bindPopup(`<a href="${marker.website}" target="_blank">${star + " " + marker.name}</a>`)

        const stores = $('ul#store-shelf');
        let store = document.createElement('li');
        store.className = 'no-deco';
        store.innerHTML = `${marker.flag} <a href="${marker.website}" target="_blank">${marker.name + " " + star}</a>`
        stores.append(store)
    });
}


var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [25, 41],
      iconAnchor: [10, 41],
      popupAnchor: [2, -40]
    }
});

var greenIcon = new LeafIcon({ iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png"  }),
    yellowIcon = new LeafIcon({iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png"  }),
    redIcon = new LeafIcon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png"   });
    blueIcon = new LeafIcon({iconUrl:"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png" });

