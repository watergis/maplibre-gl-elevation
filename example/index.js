import maplibregl from 'maplibre-gl';
import MaplibreElevationControl from '../lib/index';
import '../css/styles.css';

(() => {
    const map = new maplibregl.Map({
        container: 'map',
        style:'https://wasac.github.io/mapbox-stylefiles/unvt/style.json',
        center: [29.898, -2.054],
        zoom: 9,
        hash:true,
    });
    map.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.addControl(new MaplibreElevationControl(
        'https://wasac.github.io/rw-terrain/tiles/{z}/{x}/{y}.png',
        { 
            font: ['Roboto Medium'],
            fontSize: 12,
            fontHalo: 1,
            mainColor: '#263238',
            haloColor: '#fff',
        }
    ), 'top-right');
})();