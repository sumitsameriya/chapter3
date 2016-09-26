/*
MAPSTRACTION   v2.0.18   http://www.mapstraction.com

Copyright (c) 2012 Tom Carden, Steve Coast, Mikel Maron, Andrew Turner, Henri Bergius, Rob Moran, Derek Fowler, Gary Gale
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Neither the name of the Mapstraction nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
mxn.register("openspace",{Mapstraction:{init:function(a,b){var c=this;this.maps[b]=new OpenSpace.Map(a,{controls:[],centreInfoWindow:false});this.maps[b].addControl(new OpenLayers.Control.Navigation());this.maps[b].addControl(new OpenLayers.Control.KeyboardDefaults());this.maps[b].addControl(new OpenSpace.Control.CopyrightCollection());this.maps[b].events.register("click",this.maps[b],function(e){var d=this.getLonLatFromViewPortPx(e.xy);var f=new mxn.LatLonPoint();f.fromProprietary(this.api,d);c.clickHandler(f.lat,f.lon);return false});this.loaded[b]=true},applyOptions:function(){var a=this.maps[this.api]},resizeTo:function(b,a){this.currentElement.style.width=b;this.currentElement.style.height=a;this.maps[this.api].updateSize()},addControls:function(b){var d=this.maps[this.api];for(var c=d.controls.length;c>3;c--){d.controls[c-1].deactivate();d.removeControl(d.controls[c-1])}if(b.zoom=="large"){d.addControl(new OpenSpace.Control.LargeMapControl())}else{if(b.zoom=="small"||b.pan){d.addControl(new OpenSpace.Control.SmallMapControl())}}if(b.overview){var a=new OpenSpace.Control.OverviewMap();d.addControl(a);a.maximizeControl()}if(b.map_type){d.addControl(new OpenLayers.Control.LayerSwitcher())}},addSmallControls:function(){var a=this.maps[this.api];a.addControl(new OpenSpace.Control.SmallMapControl())},addLargeControls:function(){var a=this.maps[this.api];a.addControl(new OpenSpace.Control.LargeMapControl())},addMapTypeControls:function(){var a=this.maps[this.api]},setCenterAndZoom:function(a,c){var e=this.maps[this.api];var d=a.toProprietary(this.api);var b=c-6;if(b<0){b=0}else{if(b>10){b=10}}e.setCenter(d,b)},addMarker:function(b,a){var d=this.maps[this.api];var c=b.toProprietary(this.api);d.addOverlay(c);return c},removeMarker:function(a){var b=this.maps[this.api]},declutterMarkers:function(a){var b=this.maps[this.api]},addPolyline:function(b,a){var d=this.maps[this.api];var c=b.toProprietary(this.api);return c},removePolyline:function(a){var b=this.maps[this.api]},getCenter:function(){var a;var c=this.maps[this.api];var b=c.getCenter();a=new mxn.LatLonPoint();a.fromOpenSpace(b);return a},setCenter:function(a,b){var d=this.maps[this.api];var c=a.toProprietary(this.api);if(b&&b.pan){d.setCenter(c.toProprietary(this.api))}else{d.setCenter(c.toProprietary(this.api))}},setZoom:function(b){var c=this.maps[this.api];var a=b-6;if(a<0){a=0}else{if(a>10){a=10}}c.zoomTo(a)},getZoom:function(){var b=this.maps[this.api];var a;a=b.zoom+6;return a},getZoomLevelForBoundingBox:function(f){var e=this.maps[this.api];var d=f.getNorthEast();var a=f.getSouthWest();var c;var b=new OpenSpace.MapBounds();b.extend(new mxn.LatLonPoint(a.lat,a.lon).toProprietary(this.api));b.extend(new mxn.LatLonPoint(d.lat,d.lon).toProprietary(this.api));c=e.getZoomForExtent(b)+6;return c},setMapType:function(a){var b=this.maps[this.api];switch(a){case mxn.Mapstraction.ROAD:break;case mxn.Mapstraction.SATELLITE:break;case mxn.Mapstraction.HYBRID:break;default:}},getMapType:function(){var a=this.maps[this.api]},getBounds:function(){var e=this.maps[this.api];var c=e.calculateBounds().toArray();var f=new OpenSpace.MapPoint(c[0],c[1]);var b=new OpenSpace.MapPoint(c[2],c[3]);var a=new mxn.LatLonPoint();a.fromOpenSpace(f);var d=new mxn.LatLonPoint();d.fromOpenSpace(b);return new mxn.BoundingBox(a.lat,a.lon,d.lat,d.lon)},setBounds:function(c){var e=this.maps[this.api];var a=c.getSouthWest();var d=c.getNorthEast();var b=new OpenSpace.MapBounds();b.extend(new mxn.LatLonPoint(a.lat,a.lon).toProprietary(this.api));b.extend(new mxn.LatLonPoint(d.lat,d.lon).toProprietary(this.api));e.zoomToExtent(b)},addImageOverlay:function(c,a,e,i,f,g,d,h){var b=this.maps[this.api]},setImagePosition:function(e,b){var d=this.maps[this.api];var c;var a},addOverlay:function(a,b){var c=this.maps[this.api]},addTileLayer:function(f,a,b,d,e){var c=this.maps[this.api]},toggleTileLayer:function(b){var a=this.maps[this.api]},getPixelRatio:function(){var a=this.maps[this.api]},mousePosition:function(b){var c=this.maps[this.api];try{c.events.register("mousemove",c,function(g){var d=c.getLonLatFromViewPortPx(g.xy);var i=d.lon*(180/20037508.34);var f=d.lat*(180/20037508.34);f=(180/Math.PI)*(2*Math.atan(Math.exp(f*Math.PI/180))-(Math.PI/2));var h=numFormatFloat(f,4)+" / "+numFormatFloat(i,4);locDisp.innerHTML=h});locDisp.innerHTML="0.0000 / 0.0000"}catch(a){alert("Error: "+a)}}},LatLonPoint:{toProprietary:function(){var b=new OpenLayers.LonLat(this.lon,this.lat);var a=new OpenSpace.GridProjection();return a.getMapPointFromLonLat(b)},fromProprietary:function(c){var b=new OpenSpace.GridProjection();var a=b.getLonLatFromMapPoint(c);this.lon=a.lon;this.lat=a.lat}},Marker:{toProprietary:function(){var c,b,d;if(this.iconSize){c=new OpenLayers.Size(this.iconSize[0],this.iconSize[1])}else{c=new OpenLayers.Size(20,25)}if(this.iconAnchor){b=new OpenLayers.Pixel(this.iconAnchor[0],this.iconAnchor[1])}else{b=new OpenLayers.Pixel(-(c.w/2),-c.h)}if(this.iconUrl){d=new OpenSpace.Icon(this.iconUrl,c,b)}else{}OpenLayers.Marker.Label(this.location.toProprietary(this.api),d,this.labelText,{mouseOver:true,tooltipsFormat:true});var a=new OpenLayers.Marker(this.location.toProprietary(this.api),d);return a},openBubble:function(){},hide:function(){},show:function(){},update:function(){}},Polyline:{toProprietary:function(){var c;var b=[];for(var d=0,e=this.points.length;d<e;d++){var a=this.points[d].toProprietary(this.api);var f=new OpenLayers.Geometry.Point(a.getEasting(),a.getNorthing());b.push(f)}if(this.closed){c=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LinearRing(b),null,{fillColor:this.color,strokeColor:this.color,strokeOpacity:this.opacity,fillOpacity:this.opacity,strokeWidth:this.width})}else{c=new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString(b),null,{fillColor:0,strokeColor:this.color,strokeOpacity:this.opacity,fillOpacity:0,strokeWidth:this.width})}return c},show:function(){},hide:function(){}}});