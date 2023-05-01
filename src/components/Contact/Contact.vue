<template>
    <div class="contact-area ptb-100">
        <div class="container">
            <div class="map-wrapper">
                <h2 v-if="province" class="province-title">{{province.state}}</h2>
                <div v-if="currentProvince" class="province-info">
                <h3 class="text-center">{{currentProvince.state}}</h3>
                <ul>
                    <li>cartodb_id: {{currentProvince.cartodb_id}}</li>
                    <li>slug: {{currentProvince.slug}}</li>
                </ul>
                </div>
                <svg></svg>
            </div>
            <div class="container">
                <p>Reference</p>
                <ul>
                <li><a href="https://bl.ocks.org/john-guerra/43c7656821069d00dcbc">https://bl.ocks.org/john-guerra/43c7656821069d00dcbc</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import d3 from '../../libs/d3.v3.min.js';

export default {
    name: 'Contact',
    data() {
        return {
            province: undefined,
            currentProvince: undefined,
            centered: undefined,
            mapCenter: {
                lat: 1.4,
                lng: 117.5
            },
            geoJsonUrl: 'https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia.geojson',
            mapLayer: undefined,
        }
    },
    computed: {
        size() {
            return {
                height: 700,
                width: d3.select('.map-wrapper').node().getBoundingClientRect().width,  
            }
        },
        color() {
            return d3.scale.linear()
            .domain([1, 20])
            .clamp(true)
            .range(['#08304b', '#08304b'])
        },
        projection(){
            return d3.geo.equirectangular()
            .scale(1400)
            .center([this.mapCenter.lng, this.mapCenter.lat])
            .translate([this.size.width / 2, this.size.height / 2])
        },
        path() {
            return d3.geo.path()
            .projection(this.projection);
        },
        svg() {
            console.log(d3.select('svg'))
            return d3.select('svg')
            .attr('width', this.size.width)
            .attr('height', this.size.height);
        },
    },
    mounted() {
        this.initMap();
    },
    methods: {
        selectProvince(province) {
            this.province = province;
        },
        openInfo(province) {
            this.currentProvince = province;
        },
        closeInfo() {
            this.currentProvince = undefined;
        },
        initMap() {
            this.svg.append('rect')
            .attr('class', 'background')
            .attr('width', this.size.width)
            .attr('height', this.size.height)
            .on('click', this.clicked);

            const g = this.svg.append('g');

            const effectLayer = g.append('g')
            .classed('effect-layer', true);
            const mapLayer = g.append('g')
            .classed('map-layer', true);
            this.mapLayer = mapLayer;
            
            d3.json(this.geoJsonUrl, (error, mapData) => {
                var features = mapData.features;

                // Update this.color scale domain based on data
                this.color.domain([0, d3.max(features, this.nameLength)]);

                // Draw each province as a path
                this.mapLayer.selectAll('path')
                    .data(features)
                    .enter().append('path') 
                    .attr('d', this.path)
                    .attr('vector-effect', 'non-scaling-stroke')
                    .style('fill', this.fillFn)
                    .on('mouseover', this.mouseover)
                    .on('mouseout', this.mouseout)
                    .on('click', this.clicked);
            });

        },
        clicked(d) {
            var x, y, k;

            // Compute centroid of the selected path
            if (d && this.centered !== d) {
                var centroid = this.path.centroid(d);
                x = centroid[0];
                y = centroid[1];
                k = 4;
                this.centered = d;
                this.openInfo(d.properties);
            } else {
                x = this.size.width / 2;
                y = this.size.height / 2;
                k = 1;
                this.centered = null;
                this.closeInfo();
            }

            // Highlight the clicked province
            this.mapLayer.selectAll('path')
                .style('fill', function(d){
                return this.centered && d===this.centered ? '#D5708B' : this.fillFn(d);
            });

            // Zoom
            g.transition()
                .duration(750)
                .attr('transform', 'translate(' + this.size.width / 2 + ',' + this.size.height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')');
        },
        mouseover(d){
            // Highlight hovered province
            d3.select(this).style('fill', '#1483ce');
            if(d) {
                this.selectProvince(d.properties);
            }
        },
        mouseout(d){
            this.selectProvince(undefined);
            // Reset province this.color
            this.mapLayer.selectAll('path')
                .style('fill', (d) => {
                return this.centered && d===this.centered ? '#D5708B' : this.fillFn(d);
                });
        },
        nameLength(d){
            const n = this.nameFn(d);
            return n ? n.length : 0;
        },
        nameFn(d){
            return d && d.properties ? d.properties.name : null;
        },
        fillFn(d){
            return this.color(this.nameLength(d));
        }
    },
};

</script>

<style lang="scss" scoped>
#app {
  height: 100%;
}

.map-wrapper {
  .province-title {
    position: absolute;
    top: 50px;
    left: 150px;
    color: white;
  }
  .province-info {
    background: white;
    position: absolute;
    top: 150px;
    right: 20px;
    height: 400px;
    width: 300px;
  }
  .background {
    fill: #021019;
    pointer-events: all;
  }
  .map-layer {
    fill: #08304b;
    stroke: #021019;
    stroke-width: 1px;
  }
}
</style>