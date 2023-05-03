<template>
    <div class="container pt-100 pb-100 map-cotainer">
        <div ref="mapContainer" style="height: 500px; width: 100%"></div>
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
import { ref, watchEffect, computed, onMounted } from "vue";
import { Icon } from "leaflet";
import { LMap, LTileLayer } from "vue3-leaflet";

export default {
    name: "Map",
    components: { LMap, LTileLayer },
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
    setup(props) {
        const ptsp = ref(null);
        const kl = ref(null);
        const mapContainer = ref(null);
        const isShowPTSP = ref(true);
        const isShowKL = ref(true);
        let mapInstance = null;
        let markerKl = ref(null);
        let markerPtsp = ref(null);

        const convertLatitude = (latStr) => {
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
        };
        const convertLongitude = (longStr) => {
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
        };

        const ptspFiltered = computed(() => {
            const JSONData = JSON.stringify(ptsp.value, null, 2);
            const arrayData = JSON.parse(JSONData);
            const validateLtLg =
                /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

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
                            latitude: convertLatitude(item.latitude),
                            longtitude: convertLongitude(item.longtitude),
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
                    item.latitude !== "undefined" &&
                    validateLtLg.test(`${item.latitude}, ${item.longtitude}`)
            );
        });

        const ptspIcon = new Icon({
            iconUrl: "marker-icon-ptsp.png",
            iconSize: [20, 20],
            iconAnchor: [20, 20],
            popupAnchor: [0, -20],
        });
        const klIcon = new Icon({
            iconUrl: "marker-icon-kl.png",
            iconSize: [20, 20],
            iconAnchor: [20, 20],
            popupAnchor: [0, -20],
        });

        watchEffect(() => {
            kl.value = props.kl;

            if (isShowKL.value) {
                markerKl.value = kl.value.map((e) =>
                    L.marker([e.latitude, e.longtitude], {
                        icon: klIcon,
                    }).addTo(mapInstance)
                );
            } else {
                markerKl.value.forEach((mark) => mark.remove());
            }
        });

        watchEffect(() => {
            ptsp.value = props.ptsp;

            if (isShowPTSP.value) {
                markerPtsp.value = ptspFiltered.value.map((e) =>
                    L.marker([e.latitude, e.longtitude], {
                        icon: ptspIcon,
                    }).addTo(mapInstance)
                );
            } else {
                markerPtsp.value.forEach((mark) => mark.remove());
            }
        });

        onMounted(() => {
            if (mapContainer.value) {
                mapInstance = L.map(mapContainer.value).setView(
                    [-0.490821, 116.987921],
                    4
                );
                L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ).addTo(mapInstance);
            }
        });

        const mapKey = () => {
            if (mapInstance) {
                mapInstance.invalidateSize();
            }
        };

        return {
            mapContainer,
            mapKey,
            ptspFiltered,
            isShowPTSP,
            isShowKL,
            markerKl,
        };
    },
};
</script>
