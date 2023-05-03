<template>
    <div class="container pt-100 pb-100">
        <div ref="mapContainer" style="height: 500px; width: 100%">
            <l-map
                :key="mapKey"
                :zoom="zoom"
                :center="center"
                :options="mapOptions"
                style="height: 80%"
                @update:center="centerUpdate"
                @update:zoom="zoomUpdate"
            >
                <l-tile-layer :url="url" :attribution="attribution" />
                <l-marker
                    v-if="isShowKL"
                    v-for="item in kl"
                    :lat-lng="[item.latitude, item.longtitude]"
                >
                    <l-popup>
                        <div @click="innerClick">
                            I am a popup
                            <p v-show="showParagraph">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque sed pretium nisl, ut
                                sagittis sapien. Sed vel sollicitudin nisi.
                                Donec finibus semper metus id malesuada.
                            </p>
                        </div>
                    </l-popup>
                </l-marker>
                <l-marker
                    v-if="isShowPTSP"
                    v-for="item in ptspFiltered"
                    :lat-lng="[item.latitude, item.longtitude]"
                    :icon="icon"
                >
                    <l-popup>
                        <div @click="innerClick">
                            I am a popup
                            <p v-show="showParagraph">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quisque sed pretium nisl, ut
                                sagittis sapien. Sed vel sollicitudin nisi.
                                Donec finibus semper metus id malesuada.
                            </p>
                        </div>
                    </l-popup>
                </l-marker>
            </l-map>
        </div>
        <div class="checkbox-wrapper">
            <div class="checkbox" @click="updateMap">
                <input
                    type="checkbox"
                    name="wp-comment-cookies-consent"
                    id="ptsp"
                    v-model="isShowPTSP"
                />
                <label for="ptsp"> PTSP </label>
            </div>
            <div class="checkbox" @click="updateMap">
                <input
                    type="checkbox"
                    name="wp-comment-cookies-consent"
                    id="kl"
                    v-model="isShowKL"
                />
                <label for="kl"> KL </label>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LIcon, LPopup } from "vue3-leaflet";

export default {
    name: "Map",
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup,
    },
    props: {
        ptsp: {
            type: Array,
            data: [],
        },
        kl: {
            type: Array,
            data: [],
        },
    },
    data() {
        return {
            zoom: 5,
            center: latLng(-0.490821, 116.987921),
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            withPopup: latLng(47.41322, -1.219482),
            withTooltip: latLng(47.41422, -1.250482),
            currentZoom: 5,
            currentCenter: latLng(47.41322, -1.219482),
            showParagraph: false,
            mapOptions: {
                zoomSnap: 0.5,
            },
            icon: icon({
                iconUrl: "../../assets/bkpm/location-pin.png",
                iconSize: [32, 37],
                iconAnchor: [16, 37],
            }),
            isShowPTSP: true,
            isShowKL: true,
        };
    },
    computed: {
        ptspFiltered() {
            const JSONData = JSON.stringify(this.ptsp, null, 2);
            const arrayData = JSON.parse(JSONData);

            const fixedData = arrayData.map((item) => {
                if (item.latitude && item.longtitude) {
                    if (item.latitude.includes(",")) {
                        return {
                            ...item,
                            latitude: item.latitude
                                .replace(/,(\d)$/g, ".$1")
                                .replace(/,/g, ""),
                            longtitude: item.longtitude
                                .replace(/,(\d)$/g, ".$1")
                                .replace(/,/g, ""),
                        };
                    }
                    if (
                        item.latitude.includes("°") ||
                        item.longtitude.includes("°")
                    ) {
                        return {
                            ...item,
                            latitude: this.convertLatitude(item.latitude),
                            longtitude: this.convertLongitude(item.longtitude),
                        };
                    }
                    if (
                        item.latitude.includes("(") ||
                        item.longtitude.includes("(")
                    ) {
                        return {
                            ...item,
                            latitude: item.latitude.replace(/[()]/g, "-"),
                            longtitude: item.longtitude.replace(/[()]/g, "-"),
                        };
                    }
                }
                return item;
            });

            return fixedData.filter(
                (item) =>
                    item.longtitude !== "undefined" &&
                    item.latitude !== "undefined"
            );
        },
    },
    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
        showLongText() {
            this.showParagraph = !this.showParagraph;
        },
        innerClick() {
            alert("Click!");
        },
        convertLatitude(latStr) {
            const [degStr, minStr, secStr, dir] = latStr.split(/°|'|"/);

            const deg = parseInt(degStr, 10);
            const min = parseInt(minStr, 10);
            const sec = parseFloat(secStr);
            const decimal = deg + min / 60 + sec / 3600;

            let sign = 1;
            if (dir === "S") {
                sign = -1;
            }

            return decimal * sign;
        },
        convertLongitude(longStr) {
            const [degStr, minStr, secStr, dir] = longStr.split(/°|'|"/);

            const deg = parseInt(degStr, 10);
            const min = parseInt(minStr, 10);
            const sec = parseFloat(secStr);
            const decimal = deg + min / 60 + sec / 3600;

            let sign = 1;
            if (dir === "W") {
                sign = -1;
            }

            return decimal * sign;
        },
        updateMap() {
            this.mapKey += 1;
            this.$forceUpdate();
        },
    },
    setup() {
        const mapKey = ref(0);

        return { mapKey };
    },
};
</script>
