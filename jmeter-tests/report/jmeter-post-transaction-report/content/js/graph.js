/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 674.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 2.0], [0.3, 2.0], [0.4, 3.0], [0.5, 3.0], [0.6, 3.0], [0.7, 3.0], [0.8, 4.0], [0.9, 4.0], [1.0, 4.0], [1.1, 4.0], [1.2, 4.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 5.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 8.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 9.0], [3.8, 9.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 10.0], [5.4, 10.0], [5.5, 11.0], [5.6, 11.0], [5.7, 11.0], [5.8, 11.0], [5.9, 11.0], [6.0, 11.0], [6.1, 11.0], [6.2, 11.0], [6.3, 11.0], [6.4, 11.0], [6.5, 12.0], [6.6, 12.0], [6.7, 12.0], [6.8, 12.0], [6.9, 12.0], [7.0, 12.0], [7.1, 12.0], [7.2, 12.0], [7.3, 12.0], [7.4, 12.0], [7.5, 13.0], [7.6, 13.0], [7.7, 13.0], [7.8, 13.0], [7.9, 13.0], [8.0, 13.0], [8.1, 13.0], [8.2, 13.0], [8.3, 13.0], [8.4, 13.0], [8.5, 14.0], [8.6, 14.0], [8.7, 14.0], [8.8, 14.0], [8.9, 14.0], [9.0, 14.0], [9.1, 14.0], [9.2, 14.0], [9.3, 14.0], [9.4, 14.0], [9.5, 14.0], [9.6, 15.0], [9.7, 15.0], [9.8, 15.0], [9.9, 15.0], [10.0, 15.0], [10.1, 15.0], [10.2, 15.0], [10.3, 15.0], [10.4, 15.0], [10.5, 15.0], [10.6, 15.0], [10.7, 16.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 16.0], [11.8, 16.0], [11.9, 17.0], [12.0, 17.0], [12.1, 17.0], [12.2, 17.0], [12.3, 17.0], [12.4, 17.0], [12.5, 17.0], [12.6, 17.0], [12.7, 17.0], [12.8, 17.0], [12.9, 17.0], [13.0, 17.0], [13.1, 18.0], [13.2, 18.0], [13.3, 18.0], [13.4, 18.0], [13.5, 18.0], [13.6, 18.0], [13.7, 18.0], [13.8, 18.0], [13.9, 18.0], [14.0, 18.0], [14.1, 18.0], [14.2, 18.0], [14.3, 19.0], [14.4, 19.0], [14.5, 19.0], [14.6, 19.0], [14.7, 19.0], [14.8, 19.0], [14.9, 19.0], [15.0, 19.0], [15.1, 19.0], [15.2, 19.0], [15.3, 19.0], [15.4, 19.0], [15.5, 20.0], [15.6, 20.0], [15.7, 20.0], [15.8, 20.0], [15.9, 20.0], [16.0, 20.0], [16.1, 20.0], [16.2, 20.0], [16.3, 20.0], [16.4, 20.0], [16.5, 20.0], [16.6, 20.0], [16.7, 20.0], [16.8, 21.0], [16.9, 21.0], [17.0, 21.0], [17.1, 21.0], [17.2, 21.0], [17.3, 21.0], [17.4, 21.0], [17.5, 21.0], [17.6, 21.0], [17.7, 21.0], [17.8, 21.0], [17.9, 21.0], [18.0, 22.0], [18.1, 22.0], [18.2, 22.0], [18.3, 22.0], [18.4, 22.0], [18.5, 22.0], [18.6, 22.0], [18.7, 22.0], [18.8, 22.0], [18.9, 22.0], [19.0, 22.0], [19.1, 22.0], [19.2, 22.0], [19.3, 23.0], [19.4, 23.0], [19.5, 23.0], [19.6, 23.0], [19.7, 23.0], [19.8, 23.0], [19.9, 23.0], [20.0, 23.0], [20.1, 23.0], [20.2, 23.0], [20.3, 23.0], [20.4, 23.0], [20.5, 23.0], [20.6, 24.0], [20.7, 24.0], [20.8, 24.0], [20.9, 24.0], [21.0, 24.0], [21.1, 24.0], [21.2, 24.0], [21.3, 24.0], [21.4, 24.0], [21.5, 24.0], [21.6, 24.0], [21.7, 24.0], [21.8, 24.0], [21.9, 24.0], [22.0, 24.0], [22.1, 25.0], [22.2, 25.0], [22.3, 25.0], [22.4, 25.0], [22.5, 25.0], [22.6, 25.0], [22.7, 25.0], [22.8, 25.0], [22.9, 25.0], [23.0, 25.0], [23.1, 25.0], [23.2, 25.0], [23.3, 25.0], [23.4, 25.0], [23.5, 25.0], [23.6, 25.0], [23.7, 26.0], [23.8, 26.0], [23.9, 26.0], [24.0, 26.0], [24.1, 26.0], [24.2, 26.0], [24.3, 26.0], [24.4, 26.0], [24.5, 26.0], [24.6, 26.0], [24.7, 26.0], [24.8, 26.0], [24.9, 26.0], [25.0, 26.0], [25.1, 26.0], [25.2, 26.0], [25.3, 26.0], [25.4, 26.0], [25.5, 27.0], [25.6, 27.0], [25.7, 27.0], [25.8, 27.0], [25.9, 27.0], [26.0, 27.0], [26.1, 27.0], [26.2, 27.0], [26.3, 27.0], [26.4, 27.0], [26.5, 27.0], [26.6, 27.0], [26.7, 27.0], [26.8, 27.0], [26.9, 27.0], [27.0, 27.0], [27.1, 27.0], [27.2, 27.0], [27.3, 27.0], [27.4, 28.0], [27.5, 28.0], [27.6, 28.0], [27.7, 28.0], [27.8, 28.0], [27.9, 28.0], [28.0, 28.0], [28.1, 28.0], [28.2, 28.0], [28.3, 28.0], [28.4, 28.0], [28.5, 28.0], [28.6, 28.0], [28.7, 28.0], [28.8, 28.0], [28.9, 28.0], [29.0, 28.0], [29.1, 28.0], [29.2, 28.0], [29.3, 28.0], [29.4, 28.0], [29.5, 28.0], [29.6, 28.0], [29.7, 29.0], [29.8, 29.0], [29.9, 29.0], [30.0, 29.0], [30.1, 29.0], [30.2, 29.0], [30.3, 29.0], [30.4, 29.0], [30.5, 29.0], [30.6, 29.0], [30.7, 29.0], [30.8, 29.0], [30.9, 29.0], [31.0, 29.0], [31.1, 29.0], [31.2, 29.0], [31.3, 29.0], [31.4, 29.0], [31.5, 29.0], [31.6, 29.0], [31.7, 29.0], [31.8, 29.0], [31.9, 29.0], [32.0, 29.0], [32.1, 29.0], [32.2, 29.0], [32.3, 30.0], [32.4, 30.0], [32.5, 30.0], [32.6, 30.0], [32.7, 30.0], [32.8, 30.0], [32.9, 30.0], [33.0, 30.0], [33.1, 30.0], [33.2, 30.0], [33.3, 30.0], [33.4, 30.0], [33.5, 30.0], [33.6, 30.0], [33.7, 30.0], [33.8, 30.0], [33.9, 30.0], [34.0, 30.0], [34.1, 30.0], [34.2, 30.0], [34.3, 30.0], [34.4, 30.0], [34.5, 30.0], [34.6, 30.0], [34.7, 30.0], [34.8, 30.0], [34.9, 30.0], [35.0, 30.0], [35.1, 30.0], [35.2, 30.0], [35.3, 30.0], [35.4, 30.0], [35.5, 30.0], [35.6, 30.0], [35.7, 30.0], [35.8, 30.0], [35.9, 30.0], [36.0, 31.0], [36.1, 31.0], [36.2, 31.0], [36.3, 31.0], [36.4, 31.0], [36.5, 31.0], [36.6, 31.0], [36.7, 31.0], [36.8, 31.0], [36.9, 31.0], [37.0, 31.0], [37.1, 31.0], [37.2, 31.0], [37.3, 31.0], [37.4, 31.0], [37.5, 31.0], [37.6, 31.0], [37.7, 31.0], [37.8, 31.0], [37.9, 31.0], [38.0, 31.0], [38.1, 31.0], [38.2, 31.0], [38.3, 31.0], [38.4, 31.0], [38.5, 31.0], [38.6, 31.0], [38.7, 31.0], [38.8, 31.0], [38.9, 31.0], [39.0, 31.0], [39.1, 31.0], [39.2, 31.0], [39.3, 31.0], [39.4, 31.0], [39.5, 31.0], [39.6, 31.0], [39.7, 31.0], [39.8, 31.0], [39.9, 31.0], [40.0, 31.0], [40.1, 31.0], [40.2, 31.0], [40.3, 31.0], [40.4, 31.0], [40.5, 31.0], [40.6, 31.0], [40.7, 31.0], [40.8, 31.0], [40.9, 31.0], [41.0, 31.0], [41.1, 31.0], [41.2, 31.0], [41.3, 31.0], [41.4, 31.0], [41.5, 31.0], [41.6, 31.0], [41.7, 31.0], [41.8, 31.0], [41.9, 31.0], [42.0, 31.0], [42.1, 31.0], [42.2, 31.0], [42.3, 31.0], [42.4, 31.0], [42.5, 31.0], [42.6, 31.0], [42.7, 31.0], [42.8, 31.0], [42.9, 31.0], [43.0, 31.0], [43.1, 31.0], [43.2, 31.0], [43.3, 31.0], [43.4, 31.0], [43.5, 31.0], [43.6, 31.0], [43.7, 31.0], [43.8, 31.0], [43.9, 31.0], [44.0, 31.0], [44.1, 31.0], [44.2, 31.0], [44.3, 31.0], [44.4, 31.0], [44.5, 31.0], [44.6, 31.0], [44.7, 31.0], [44.8, 31.0], [44.9, 31.0], [45.0, 31.0], [45.1, 31.0], [45.2, 31.0], [45.3, 31.0], [45.4, 31.0], [45.5, 31.0], [45.6, 31.0], [45.7, 31.0], [45.8, 31.0], [45.9, 31.0], [46.0, 31.0], [46.1, 31.0], [46.2, 31.0], [46.3, 31.0], [46.4, 31.0], [46.5, 31.0], [46.6, 31.0], [46.7, 31.0], [46.8, 31.0], [46.9, 31.0], [47.0, 31.0], [47.1, 31.0], [47.2, 31.0], [47.3, 32.0], [47.4, 32.0], [47.5, 32.0], [47.6, 32.0], [47.7, 32.0], [47.8, 32.0], [47.9, 32.0], [48.0, 32.0], [48.1, 32.0], [48.2, 32.0], [48.3, 32.0], [48.4, 32.0], [48.5, 32.0], [48.6, 32.0], [48.7, 32.0], [48.8, 32.0], [48.9, 32.0], [49.0, 32.0], [49.1, 32.0], [49.2, 32.0], [49.3, 32.0], [49.4, 32.0], [49.5, 32.0], [49.6, 32.0], [49.7, 32.0], [49.8, 32.0], [49.9, 32.0], [50.0, 32.0], [50.1, 32.0], [50.2, 32.0], [50.3, 32.0], [50.4, 32.0], [50.5, 32.0], [50.6, 32.0], [50.7, 32.0], [50.8, 32.0], [50.9, 32.0], [51.0, 32.0], [51.1, 32.0], [51.2, 32.0], [51.3, 32.0], [51.4, 32.0], [51.5, 32.0], [51.6, 32.0], [51.7, 32.0], [51.8, 32.0], [51.9, 32.0], [52.0, 32.0], [52.1, 32.0], [52.2, 32.0], [52.3, 32.0], [52.4, 32.0], [52.5, 32.0], [52.6, 32.0], [52.7, 32.0], [52.8, 32.0], [52.9, 32.0], [53.0, 32.0], [53.1, 32.0], [53.2, 32.0], [53.3, 32.0], [53.4, 32.0], [53.5, 32.0], [53.6, 32.0], [53.7, 32.0], [53.8, 32.0], [53.9, 32.0], [54.0, 32.0], [54.1, 32.0], [54.2, 32.0], [54.3, 32.0], [54.4, 32.0], [54.5, 32.0], [54.6, 32.0], [54.7, 32.0], [54.8, 32.0], [54.9, 32.0], [55.0, 32.0], [55.1, 32.0], [55.2, 32.0], [55.3, 32.0], [55.4, 32.0], [55.5, 32.0], [55.6, 32.0], [55.7, 32.0], [55.8, 32.0], [55.9, 32.0], [56.0, 32.0], [56.1, 32.0], [56.2, 32.0], [56.3, 32.0], [56.4, 32.0], [56.5, 32.0], [56.6, 32.0], [56.7, 32.0], [56.8, 32.0], [56.9, 32.0], [57.0, 32.0], [57.1, 32.0], [57.2, 32.0], [57.3, 32.0], [57.4, 32.0], [57.5, 32.0], [57.6, 32.0], [57.7, 32.0], [57.8, 32.0], [57.9, 32.0], [58.0, 32.0], [58.1, 32.0], [58.2, 32.0], [58.3, 32.0], [58.4, 32.0], [58.5, 32.0], [58.6, 32.0], [58.7, 32.0], [58.8, 32.0], [58.9, 32.0], [59.0, 32.0], [59.1, 32.0], [59.2, 32.0], [59.3, 32.0], [59.4, 32.0], [59.5, 32.0], [59.6, 32.0], [59.7, 32.0], [59.8, 32.0], [59.9, 32.0], [60.0, 32.0], [60.1, 32.0], [60.2, 32.0], [60.3, 32.0], [60.4, 32.0], [60.5, 32.0], [60.6, 32.0], [60.7, 32.0], [60.8, 32.0], [60.9, 32.0], [61.0, 32.0], [61.1, 32.0], [61.2, 32.0], [61.3, 32.0], [61.4, 32.0], [61.5, 32.0], [61.6, 32.0], [61.7, 32.0], [61.8, 32.0], [61.9, 32.0], [62.0, 32.0], [62.1, 33.0], [62.2, 33.0], [62.3, 33.0], [62.4, 33.0], [62.5, 33.0], [62.6, 33.0], [62.7, 33.0], [62.8, 33.0], [62.9, 33.0], [63.0, 33.0], [63.1, 33.0], [63.2, 33.0], [63.3, 33.0], [63.4, 33.0], [63.5, 33.0], [63.6, 33.0], [63.7, 33.0], [63.8, 33.0], [63.9, 33.0], [64.0, 33.0], [64.1, 33.0], [64.2, 33.0], [64.3, 33.0], [64.4, 33.0], [64.5, 33.0], [64.6, 33.0], [64.7, 33.0], [64.8, 33.0], [64.9, 33.0], [65.0, 33.0], [65.1, 33.0], [65.2, 33.0], [65.3, 33.0], [65.4, 33.0], [65.5, 33.0], [65.6, 33.0], [65.7, 33.0], [65.8, 33.0], [65.9, 33.0], [66.0, 33.0], [66.1, 33.0], [66.2, 33.0], [66.3, 33.0], [66.4, 33.0], [66.5, 33.0], [66.6, 33.0], [66.7, 33.0], [66.8, 33.0], [66.9, 33.0], [67.0, 33.0], [67.1, 33.0], [67.2, 33.0], [67.3, 33.0], [67.4, 33.0], [67.5, 33.0], [67.6, 33.0], [67.7, 33.0], [67.8, 33.0], [67.9, 33.0], [68.0, 33.0], [68.1, 33.0], [68.2, 33.0], [68.3, 33.0], [68.4, 33.0], [68.5, 33.0], [68.6, 33.0], [68.7, 33.0], [68.8, 33.0], [68.9, 33.0], [69.0, 33.0], [69.1, 33.0], [69.2, 33.0], [69.3, 33.0], [69.4, 33.0], [69.5, 33.0], [69.6, 33.0], [69.7, 33.0], [69.8, 33.0], [69.9, 33.0], [70.0, 33.0], [70.1, 33.0], [70.2, 33.0], [70.3, 33.0], [70.4, 33.0], [70.5, 33.0], [70.6, 33.0], [70.7, 33.0], [70.8, 33.0], [70.9, 33.0], [71.0, 33.0], [71.1, 33.0], [71.2, 33.0], [71.3, 33.0], [71.4, 33.0], [71.5, 33.0], [71.6, 33.0], [71.7, 33.0], [71.8, 33.0], [71.9, 33.0], [72.0, 33.0], [72.1, 33.0], [72.2, 33.0], [72.3, 33.0], [72.4, 33.0], [72.5, 33.0], [72.6, 33.0], [72.7, 33.0], [72.8, 33.0], [72.9, 33.0], [73.0, 33.0], [73.1, 33.0], [73.2, 33.0], [73.3, 33.0], [73.4, 33.0], [73.5, 33.0], [73.6, 33.0], [73.7, 33.0], [73.8, 33.0], [73.9, 33.0], [74.0, 33.0], [74.1, 33.0], [74.2, 33.0], [74.3, 33.0], [74.4, 33.0], [74.5, 33.0], [74.6, 33.0], [74.7, 33.0], [74.8, 33.0], [74.9, 33.0], [75.0, 33.0], [75.1, 33.0], [75.2, 33.0], [75.3, 33.0], [75.4, 34.0], [75.5, 34.0], [75.6, 34.0], [75.7, 34.0], [75.8, 34.0], [75.9, 34.0], [76.0, 34.0], [76.1, 34.0], [76.2, 34.0], [76.3, 34.0], [76.4, 34.0], [76.5, 34.0], [76.6, 34.0], [76.7, 34.0], [76.8, 34.0], [76.9, 34.0], [77.0, 34.0], [77.1, 34.0], [77.2, 34.0], [77.3, 34.0], [77.4, 34.0], [77.5, 34.0], [77.6, 34.0], [77.7, 34.0], [77.8, 34.0], [77.9, 34.0], [78.0, 34.0], [78.1, 34.0], [78.2, 34.0], [78.3, 34.0], [78.4, 34.0], [78.5, 34.0], [78.6, 34.0], [78.7, 34.0], [78.8, 34.0], [78.9, 34.0], [79.0, 34.0], [79.1, 34.0], [79.2, 34.0], [79.3, 34.0], [79.4, 34.0], [79.5, 34.0], [79.6, 34.0], [79.7, 34.0], [79.8, 34.0], [79.9, 34.0], [80.0, 34.0], [80.1, 34.0], [80.2, 34.0], [80.3, 34.0], [80.4, 34.0], [80.5, 34.0], [80.6, 34.0], [80.7, 34.0], [80.8, 34.0], [80.9, 34.0], [81.0, 34.0], [81.1, 34.0], [81.2, 34.0], [81.3, 34.0], [81.4, 34.0], [81.5, 34.0], [81.6, 34.0], [81.7, 34.0], [81.8, 34.0], [81.9, 34.0], [82.0, 34.0], [82.1, 34.0], [82.2, 34.0], [82.3, 34.0], [82.4, 34.0], [82.5, 34.0], [82.6, 34.0], [82.7, 34.0], [82.8, 34.0], [82.9, 34.0], [83.0, 34.0], [83.1, 34.0], [83.2, 34.0], [83.3, 34.0], [83.4, 34.0], [83.5, 34.0], [83.6, 34.0], [83.7, 35.0], [83.8, 35.0], [83.9, 35.0], [84.0, 35.0], [84.1, 35.0], [84.2, 35.0], [84.3, 35.0], [84.4, 35.0], [84.5, 35.0], [84.6, 35.0], [84.7, 35.0], [84.8, 35.0], [84.9, 35.0], [85.0, 35.0], [85.1, 35.0], [85.2, 35.0], [85.3, 35.0], [85.4, 35.0], [85.5, 35.0], [85.6, 35.0], [85.7, 35.0], [85.8, 35.0], [85.9, 35.0], [86.0, 35.0], [86.1, 35.0], [86.2, 35.0], [86.3, 35.0], [86.4, 35.0], [86.5, 35.0], [86.6, 35.0], [86.7, 35.0], [86.8, 35.0], [86.9, 35.0], [87.0, 35.0], [87.1, 35.0], [87.2, 35.0], [87.3, 35.0], [87.4, 35.0], [87.5, 35.0], [87.6, 35.0], [87.7, 35.0], [87.8, 35.0], [87.9, 35.0], [88.0, 35.0], [88.1, 35.0], [88.2, 36.0], [88.3, 36.0], [88.4, 36.0], [88.5, 36.0], [88.6, 36.0], [88.7, 36.0], [88.8, 36.0], [88.9, 36.0], [89.0, 36.0], [89.1, 36.0], [89.2, 36.0], [89.3, 36.0], [89.4, 36.0], [89.5, 36.0], [89.6, 36.0], [89.7, 36.0], [89.8, 36.0], [89.9, 36.0], [90.0, 36.0], [90.1, 36.0], [90.2, 36.0], [90.3, 36.0], [90.4, 36.0], [90.5, 36.0], [90.6, 36.0], [90.7, 36.0], [90.8, 37.0], [90.9, 37.0], [91.0, 37.0], [91.1, 37.0], [91.2, 37.0], [91.3, 37.0], [91.4, 37.0], [91.5, 37.0], [91.6, 37.0], [91.7, 37.0], [91.8, 37.0], [91.9, 37.0], [92.0, 37.0], [92.1, 37.0], [92.2, 37.0], [92.3, 37.0], [92.4, 37.0], [92.5, 37.0], [92.6, 38.0], [92.7, 38.0], [92.8, 38.0], [92.9, 38.0], [93.0, 38.0], [93.1, 38.0], [93.2, 38.0], [93.3, 38.0], [93.4, 38.0], [93.5, 38.0], [93.6, 38.0], [93.7, 38.0], [93.8, 39.0], [93.9, 39.0], [94.0, 39.0], [94.1, 39.0], [94.2, 39.0], [94.3, 39.0], [94.4, 39.0], [94.5, 39.0], [94.6, 39.0], [94.7, 39.0], [94.8, 40.0], [94.9, 40.0], [95.0, 40.0], [95.1, 40.0], [95.2, 40.0], [95.3, 40.0], [95.4, 40.0], [95.5, 41.0], [95.6, 41.0], [95.7, 41.0], [95.8, 41.0], [95.9, 41.0], [96.0, 41.0], [96.1, 42.0], [96.2, 42.0], [96.3, 42.0], [96.4, 42.0], [96.5, 42.0], [96.6, 43.0], [96.7, 43.0], [96.8, 43.0], [96.9, 43.0], [97.0, 44.0], [97.1, 44.0], [97.2, 44.0], [97.3, 44.0], [97.4, 45.0], [97.5, 45.0], [97.6, 45.0], [97.7, 46.0], [97.8, 46.0], [97.9, 47.0], [98.0, 47.0], [98.1, 48.0], [98.2, 49.0], [98.3, 50.0], [98.4, 50.0], [98.5, 51.0], [98.6, 52.0], [98.7, 54.0], [98.8, 55.0], [98.9, 57.0], [99.0, 59.0], [99.1, 62.0], [99.2, 66.0], [99.3, 71.0], [99.4, 78.0], [99.5, 87.0], [99.6, 99.0], [99.7, 132.0], [99.8, 176.0], [99.9, 254.0], [100.0, 674.0]], "isOverall": false, "label": "POST Create Transaction", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 478238.0, "series": [{"data": [[0.0, 478238.0], [600.0, 41.0], [300.0, 182.0], [100.0, 1127.0], [200.0, 497.0], [400.0, 27.0], [500.0, 31.0]], "isOverall": false, "label": "POST Create Transaction", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 72.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 430839.0, "series": [{"data": [[0.0, 49232.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 72.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 430839.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 43.07356583167544, "minX": 1.75112916E12, "maxY": 50.0, "series": [{"data": [[1.7511294E12, 50.0], [1.75112922E12, 50.0], [1.75112934E12, 50.0], [1.75112916E12, 43.07356583167544], [1.75112946E12, 49.98903653973483], [1.75112928E12, 50.0]], "isOverall": false, "label": "POST /transactions Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112946E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 6.350877192982457, "minX": 1.0, "maxY": 144.8541666666666, "series": [{"data": [[2.0, 6.350877192982457], [33.0, 103.06043956043963], [34.0, 14.264516129032259], [35.0, 37.83854166666668], [36.0, 24.567857142857154], [37.0, 24.35714285714286], [38.0, 80.44166666666668], [39.0, 17.14814814814814], [40.0, 30.672932330827074], [41.0, 21.28732394366197], [42.0, 67.91999999999997], [43.0, 32.44402985074626], [44.0, 37.6318181818182], [45.0, 33.92673992673992], [46.0, 26.991354466858787], [47.0, 144.8541666666666], [3.0, 9.36206896551724], [49.0, 112.29687500000004], [50.0, 29.89694927467194], [4.0, 9.61728395061728], [5.0, 16.57142857142857], [6.0, 11.633663366336632], [7.0, 10.880952380952381], [8.0, 12.741666666666664], [9.0, 17.96938775510204], [10.0, 20.330188679245285], [11.0, 12.76510067114094], [12.0, 24.009523809523813], [13.0, 33.06250000000001], [14.0, 29.91397849462367], [15.0, 23.875968992248072], [1.0, 9.222222222222223], [16.0, 21.639097744360914], [17.0, 27.873873873873872], [18.0, 31.14569536423841], [19.0, 21.190476190476208], [20.0, 58.725806451612904], [21.0, 25.46031746031745], [22.0, 14.469750889679721], [23.0, 15.441947565543073], [24.0, 38.59701492537312], [25.0, 25.973958333333332], [26.0, 17.283737024221455], [27.0, 19.0443686006826], [28.0, 22.509615384615387], [29.0, 29.906862745098028], [30.0, 22.51807228915663], [31.0, 30.517241379310345]], "isOverall": false, "label": "POST Create Transaction", "isController": false}, {"data": [[49.64319588122795, 29.885121724152583]], "isOverall": false, "label": "POST Create Transaction-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 80.38333333333334, "minX": 1.75112916E12, "maxY": 3665131.85, "series": [{"data": [[1.7511294E12, 3534481.933333333], [1.75112922E12, 3662374.1666666665], [1.75112934E12, 3665131.85], [1.75112916E12, 480296.85], [1.75112946E12, 2517929.2], [1.75112928E12, 3343086.8666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7511294E12, 72637.66666666667], [1.75112922E12, 80.38333333333334], [1.75112934E12, 133.96666666666667], [1.75112916E12, 73790.76666666666], [1.75112946E12, 120.58333333333333], [1.75112928E12, 73626.95]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112946E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 27.820388940765646, "minX": 1.75112916E12, "maxY": 30.887119487532146, "series": [{"data": [[1.7511294E12, 28.33187963366759], [1.75112922E12, 30.887119487532146], [1.75112934E12, 30.842242792912145], [1.75112916E12, 27.820388940765646], [1.75112946E12, 30.75287559860163], [1.75112928E12, 29.576909789257787]], "isOverall": false, "label": "POST Create Transaction", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112946E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.005071734872147823, "minX": 1.75112916E12, "maxY": 16.97515326214937, "series": [{"data": [[1.7511294E12, 2.489082715510983], [1.75112922E12, 0.005071734872147823], [1.75112934E12, 0.011816979635017015], [1.75112916E12, 16.97515326214937], [1.75112946E12, 0.012795836348798285], [1.75112928E12, 2.9797081716016125]], "isOverall": false, "label": "POST Create Transaction", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112946E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 9.862977548617607, "minX": 1.75112916E12, "maxY": 30.85464556090855, "series": [{"data": [[1.7511294E12, 25.80429325967941], [1.75112922E12, 30.85464556090855], [1.75112934E12, 30.799449880983524], [1.75112916E12, 9.862977548617607], [1.75112946E12, 30.71111590163682], [1.75112928E12, 26.39289125530946]], "isOverall": false, "label": "POST Create Transaction", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112946E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.75112916E12, "maxY": 674.0, "series": [{"data": [[1.7511294E12, 589.0], [1.75112922E12, 75.0], [1.75112934E12, 120.0], [1.75112916E12, 674.0], [1.75112946E12, 87.0], [1.75112928E12, 645.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7511294E12, 1.0], [1.75112922E12, 4.0], [1.75112934E12, 14.0], [1.75112916E12, 1.0], [1.75112946E12, 6.0], [1.75112928E12, 0.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7511294E12, 21.0], [1.75112922E12, 66.00000000000001], [1.75112934E12, 90.50000000000001], [1.75112916E12, 40.0], [1.75112946E12, 83.6], [1.75112928E12, 28.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7511294E12, 166.95999999999913], [1.75112922E12, 75.0], [1.75112934E12, 120.0], [1.75112916E12, 242.0], [1.75112946E12, 87.0], [1.75112928E12, 154.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7511294E12, 12.0], [1.75112922E12, 48.0], [1.75112934E12, 59.5], [1.75112916E12, 19.0], [1.75112946E12, 48.0], [1.75112928E12, 14.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7511294E12, 28.0], [1.75112922E12, 75.0], [1.75112934E12, 109.54999999999998], [1.75112916E12, 60.54999999999927], [1.75112946E12, 86.6], [1.75112928E12, 44.399999999999636]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112946E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 5.0, "minX": 259.0, "maxY": 188.5, "series": [{"data": [[537.0, 12.0], [545.0, 17.0], [586.0, 20.0], [855.0, 15.0], [925.0, 22.0], [973.0, 38.5], [1043.0, 15.0], [1061.0, 17.0], [1260.0, 16.0], [1256.0, 26.0], [1253.0, 16.0], [1339.0, 19.0], [1312.0, 17.0], [1447.0, 15.0], [1513.0, 47.0], [1532.0, 44.0], [1497.0, 79.0], [1473.0, 68.0], [1523.0, 60.0], [1492.0, 15.0], [1541.0, 59.0], [1595.0, 19.0], [1594.0, 53.0], [1590.0, 61.5], [1591.0, 78.0], [1576.0, 61.0], [1598.0, 79.5], [1596.0, 62.5], [1566.0, 39.0], [1567.0, 70.0], [1536.0, 13.0], [1540.0, 62.0], [1539.0, 44.0], [1554.0, 60.0], [1582.0, 43.0], [1581.0, 41.0], [1579.0, 64.5], [1580.0, 85.0], [1560.0, 71.0], [1587.0, 34.0], [1589.0, 35.0], [1655.0, 59.0], [1616.0, 65.0], [1647.0, 59.0], [1601.0, 50.0], [1626.0, 60.0], [1623.0, 188.5], [1605.0, 59.0], [1608.0, 53.0], [1654.0, 36.5], [1634.0, 33.0], [1632.0, 19.0], [1657.0, 33.0], [1622.0, 65.0], [1620.0, 64.0], [1674.0, 52.0], [1709.0, 16.0], [1665.0, 32.0], [1726.0, 14.0], [1671.0, 22.0], [1691.0, 17.0], [1666.0, 18.0], [1712.0, 155.0], [1696.0, 58.0], [1707.0, 56.0], [1756.0, 27.5], [1731.0, 16.0], [1736.0, 34.0], [1841.0, 8.0], [1911.0, 19.0], [1869.0, 16.0], [1890.0, 5.0], [1946.0, 19.0], [1945.0, 9.0], [2004.0, 21.0], [2136.0, 12.0], [2093.0, 9.0], [2155.0, 10.0], [2088.0, 14.0], [2140.0, 15.0], [2249.0, 13.0], [2192.0, 12.0], [2345.0, 19.0], [2357.0, 10.0], [2425.0, 10.0], [2738.0, 10.0], [2885.0, 9.0], [3046.0, 10.0], [3129.0, 15.0], [3319.0, 13.0], [259.0, 8.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[973.0, 32.0], [1061.0, 45.0], [1186.0, 32.0], [1195.0, 34.0], [1253.0, 45.0], [1314.0, 33.0], [1312.0, 34.0], [1363.0, 33.0], [1445.0, 33.0], [1450.0, 33.0], [1418.0, 32.0], [1447.0, 23.0], [1416.0, 33.0], [1468.0, 33.0], [1469.0, 32.0], [1439.0, 33.0], [1524.0, 33.0], [1495.0, 32.0], [1492.0, 33.0], [1497.0, 33.0], [1513.0, 33.0], [1512.0, 33.0], [1515.0, 33.0], [1517.0, 33.0], [1535.0, 33.0], [1505.0, 32.0], [1510.0, 32.0], [1509.0, 32.0], [1511.0, 32.0], [1533.0, 32.0], [1526.0, 33.0], [1525.0, 33.0], [1530.0, 32.0], [1529.0, 33.0], [1485.0, 33.0], [1521.0, 32.0], [1523.0, 33.0], [1499.0, 33.0], [1502.0, 32.0], [1477.0, 32.0], [1475.0, 33.0], [1473.0, 33.0], [1531.0, 32.0], [1532.0, 32.0], [1584.0, 32.0], [1553.0, 32.0], [1552.0, 32.0], [1557.0, 32.0], [1556.0, 32.0], [1558.0, 32.5], [1560.0, 32.0], [1559.0, 32.0], [1554.0, 32.0], [1576.0, 32.0], [1574.0, 32.0], [1575.0, 33.0], [1572.0, 32.0], [1571.0, 32.0], [1570.0, 32.0], [1582.0, 32.0], [1583.0, 32.0], [1578.0, 32.0], [1579.0, 32.0], [1577.0, 32.0], [1580.0, 32.0], [1581.0, 32.0], [1561.0, 33.0], [1590.0, 32.0], [1591.0, 32.0], [1563.0, 32.0], [1562.0, 32.0], [1564.0, 32.0], [1565.0, 32.0], [1566.0, 32.0], [1547.0, 32.0], [1548.0, 32.0], [1549.0, 32.0], [1551.0, 33.0], [1545.0, 33.0], [1541.0, 32.0], [1540.0, 32.0], [1539.0, 33.0], [1538.0, 33.0], [1536.0, 31.0], [1567.0, 32.0], [1592.0, 32.0], [1589.0, 32.0], [1586.0, 32.0], [1585.0, 32.0], [1587.0, 31.0], [1588.0, 32.0], [1568.0, 32.0], [1594.0, 32.0], [1593.0, 32.0], [1597.0, 32.0], [1595.0, 32.0], [1596.0, 32.0], [1599.0, 32.0], [1598.0, 32.0], [1606.0, 32.0], [1600.0, 32.0], [1625.0, 32.0], [1631.0, 31.0], [1628.0, 33.0], [1627.0, 31.0], [1626.0, 32.0], [1623.0, 32.0], [1616.0, 32.0], [1617.0, 32.0], [1618.0, 31.0], [1619.0, 32.0], [1620.0, 32.0], [1622.0, 32.0], [1650.0, 32.0], [1654.0, 32.0], [1649.0, 31.0], [1614.0, 32.0], [1615.0, 32.0], [1613.0, 32.0], [1611.0, 32.0], [1610.0, 32.0], [1607.0, 32.0], [1608.0, 32.0], [1601.0, 32.0], [1603.0, 32.0], [1602.0, 33.0], [1635.0, 32.0], [1640.0, 31.0], [1639.0, 31.0], [1647.0, 32.0], [1643.0, 31.0], [1604.0, 31.0], [1605.0, 32.0], [1655.0, 32.0], [1658.0, 32.0], [1657.0, 32.0], [1634.0, 31.0], [1633.0, 32.0], [1632.0, 32.0], [1678.0, 31.0], [1684.0, 32.0], [1665.0, 31.0], [1695.0, 32.0], [1666.0, 16.0], [1691.0, 17.0], [1670.0, 31.0], [1707.0, 31.0], [1709.0, 31.0], [1674.0, 32.0], [1671.0, 29.0], [1721.0, 29.0], [1726.0, 31.0], [1696.0, 32.0], [1720.0, 31.0], [1713.0, 31.0], [1712.0, 31.0], [1756.0, 28.0], [1731.0, 15.0], [1742.0, 31.0], [1736.0, 31.0], [1841.0, 31.0], [1869.0, 24.0], [1890.0, 29.0], [1946.0, 14.0], [1945.0, 30.0], [2136.0, 33.0], [2093.0, 33.0], [2155.0, 26.0], [2088.0, 22.0], [2140.0, 18.0], [2249.0, 24.0], [2192.0, 32.0], [2357.0, 31.0], [2425.0, 32.0], [2738.0, 19.0], [2885.0, 32.0], [3046.0, 33.0], [3129.0, 26.0], [3319.0, 18.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3319.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 259.0, "maxY": 174.5, "series": [{"data": [[537.0, 10.0], [545.0, 15.0], [586.0, 11.0], [855.0, 13.0], [925.0, 20.0], [973.0, 24.0], [1043.0, 12.0], [1061.0, 16.0], [1260.0, 13.0], [1256.0, 24.0], [1253.0, 14.0], [1339.0, 18.0], [1312.0, 13.0], [1447.0, 13.0], [1513.0, 29.5], [1532.0, 34.0], [1497.0, 56.0], [1473.0, 33.0], [1523.0, 38.0], [1492.0, 4.0], [1541.0, 32.0], [1595.0, 19.0], [1594.0, 31.0], [1590.0, 35.5], [1591.0, 41.0], [1576.0, 34.0], [1598.0, 57.5], [1596.0, 34.5], [1566.0, 38.0], [1567.0, 38.0], [1536.0, 12.0], [1540.0, 32.0], [1539.0, 25.0], [1554.0, 39.0], [1582.0, 32.5], [1581.0, 17.5], [1579.0, 33.0], [1580.0, 52.0], [1560.0, 41.0], [1587.0, 33.0], [1589.0, 33.0], [1655.0, 37.0], [1616.0, 31.0], [1647.0, 33.0], [1601.0, 28.0], [1626.0, 31.0], [1623.0, 174.5], [1605.0, 32.0], [1608.0, 29.0], [1654.0, 25.0], [1634.0, 32.0], [1632.0, 3.0], [1657.0, 33.0], [1622.0, 32.0], [1620.0, 32.0], [1674.0, 31.0], [1709.0, 15.0], [1665.0, 32.0], [1726.0, 13.0], [1671.0, 14.0], [1691.0, 17.0], [1666.0, 17.0], [1712.0, 145.0], [1696.0, 36.0], [1707.0, 38.5], [1756.0, 12.0], [1731.0, 16.0], [1736.0, 22.0], [1841.0, 7.0], [1911.0, 18.0], [1869.0, 15.0], [1890.0, 5.0], [1946.0, 18.0], [1945.0, 8.0], [2004.0, 20.0], [2136.0, 11.0], [2093.0, 9.0], [2155.0, 10.0], [2088.0, 13.0], [2140.0, 14.0], [2249.0, 12.0], [2192.0, 12.0], [2345.0, 19.0], [2357.0, 10.0], [2425.0, 9.0], [2738.0, 9.0], [2885.0, 9.0], [3046.0, 9.0], [3129.0, 14.0], [3319.0, 12.0], [259.0, 7.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[973.0, 0.0], [1061.0, 0.0], [1186.0, 0.0], [1195.0, 0.0], [1253.0, 0.0], [1314.0, 0.0], [1312.0, 0.0], [1363.0, 0.0], [1445.0, 0.0], [1450.0, 0.0], [1418.0, 0.0], [1447.0, 0.0], [1416.0, 0.0], [1468.0, 0.0], [1469.0, 0.0], [1439.0, 0.0], [1524.0, 0.0], [1495.0, 0.0], [1492.0, 0.0], [1497.0, 0.0], [1513.0, 0.0], [1512.0, 0.0], [1515.0, 0.0], [1517.0, 0.0], [1535.0, 0.0], [1505.0, 0.0], [1510.0, 0.0], [1509.0, 0.0], [1511.0, 0.0], [1533.0, 0.0], [1526.0, 0.0], [1525.0, 0.0], [1530.0, 0.0], [1529.0, 0.0], [1485.0, 0.0], [1521.0, 0.0], [1523.0, 0.0], [1499.0, 0.0], [1502.0, 0.0], [1477.0, 0.0], [1475.0, 0.0], [1473.0, 0.0], [1531.0, 0.0], [1532.0, 0.0], [1584.0, 0.0], [1553.0, 0.0], [1552.0, 0.0], [1557.0, 0.0], [1556.0, 0.0], [1558.0, 0.0], [1560.0, 0.0], [1559.0, 0.0], [1554.0, 0.0], [1576.0, 0.0], [1574.0, 0.0], [1575.0, 0.0], [1572.0, 0.0], [1571.0, 0.0], [1570.0, 0.0], [1582.0, 0.0], [1583.0, 0.0], [1578.0, 0.0], [1579.0, 0.0], [1577.0, 0.0], [1580.0, 0.0], [1581.0, 0.0], [1561.0, 0.0], [1590.0, 0.0], [1591.0, 0.0], [1563.0, 0.0], [1562.0, 0.0], [1564.0, 0.0], [1565.0, 0.0], [1566.0, 0.0], [1547.0, 0.0], [1548.0, 0.0], [1549.0, 0.0], [1551.0, 0.0], [1545.0, 0.0], [1541.0, 0.0], [1540.0, 0.0], [1539.0, 0.0], [1538.0, 0.0], [1536.0, 0.0], [1567.0, 0.0], [1592.0, 0.0], [1589.0, 0.0], [1586.0, 0.0], [1585.0, 0.0], [1587.0, 0.0], [1588.0, 0.0], [1568.0, 0.0], [1594.0, 0.0], [1593.0, 0.0], [1597.0, 0.0], [1595.0, 0.0], [1596.0, 0.0], [1599.0, 0.0], [1598.0, 0.0], [1606.0, 0.0], [1600.0, 0.0], [1625.0, 0.0], [1631.0, 0.0], [1628.0, 0.0], [1627.0, 0.0], [1626.0, 0.0], [1623.0, 0.0], [1616.0, 0.0], [1617.0, 0.0], [1618.0, 0.0], [1619.0, 0.0], [1620.0, 0.0], [1622.0, 0.0], [1650.0, 0.0], [1654.0, 0.0], [1649.0, 0.0], [1614.0, 0.0], [1615.0, 0.0], [1613.0, 0.0], [1611.0, 0.0], [1610.0, 0.0], [1607.0, 0.0], [1608.0, 0.0], [1601.0, 0.0], [1603.0, 0.0], [1602.0, 0.0], [1635.0, 0.0], [1640.0, 0.0], [1639.0, 0.0], [1647.0, 0.0], [1643.0, 0.0], [1604.0, 0.0], [1605.0, 0.0], [1655.0, 0.0], [1658.0, 0.0], [1657.0, 0.0], [1634.0, 0.0], [1633.0, 0.0], [1632.0, 0.0], [1678.0, 0.0], [1684.0, 0.0], [1665.0, 0.0], [1695.0, 0.0], [1666.0, 0.0], [1691.0, 0.0], [1670.0, 0.0], [1707.0, 0.0], [1709.0, 0.0], [1674.0, 0.0], [1671.0, 0.0], [1721.0, 0.0], [1726.0, 0.0], [1696.0, 0.0], [1720.0, 0.0], [1713.0, 0.0], [1712.0, 0.0], [1756.0, 0.0], [1731.0, 0.0], [1742.0, 0.0], [1736.0, 0.0], [1841.0, 0.0], [1869.0, 0.0], [1890.0, 0.0], [1946.0, 0.0], [1945.0, 0.0], [2136.0, 0.0], [2093.0, 0.0], [2155.0, 0.0], [2088.0, 0.0], [2140.0, 0.0], [2249.0, 0.0], [2192.0, 0.0], [2357.0, 0.0], [2425.0, 0.0], [2738.0, 0.0], [2885.0, 0.0], [3046.0, 0.0], [3129.0, 0.0], [3319.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 3319.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 411.35, "minX": 1.75112916E12, "maxY": 1719.7166666666667, "series": [{"data": [[1.7511294E12, 1719.7166666666667], [1.75112922E12, 1574.0666666666666], [1.75112934E12, 1575.4166666666667], [1.75112916E12, 411.35], [1.75112946E12, 1081.6], [1.75112928E12, 1640.2333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112946E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.75112916E12, "maxY": 1574.9166666666667, "series": [{"data": [[1.7511294E12, 270.8333333333333], [1.75112922E12, 0.3], [1.75112934E12, 0.5], [1.75112916E12, 275.1333333333333], [1.75112946E12, 0.45], [1.75112928E12, 274.51666666666665]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.7511294E12, 1448.9166666666667], [1.75112922E12, 1573.7833333333333], [1.75112934E12, 1574.9166666666667], [1.75112916E12, 135.38333333333333], [1.75112946E12, 1081.9333333333334], [1.75112928E12, 1365.7166666666667]], "isOverall": false, "label": "Non HTTP response code: java.net.BindException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112946E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.75112916E12, "maxY": 1574.9166666666667, "series": [{"data": [[1.7511294E12, 270.8333333333333], [1.75112922E12, 0.3], [1.75112934E12, 0.5], [1.75112916E12, 275.1333333333333], [1.75112946E12, 0.45], [1.75112928E12, 274.51666666666665]], "isOverall": false, "label": "POST Create Transaction-success", "isController": false}, {"data": [[1.7511294E12, 1448.9166666666667], [1.75112922E12, 1573.7833333333333], [1.75112934E12, 1574.9166666666667], [1.75112916E12, 135.38333333333333], [1.75112946E12, 1081.9333333333334], [1.75112928E12, 1365.7166666666667]], "isOverall": false, "label": "POST Create Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112946E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.3, "minX": 1.75112916E12, "maxY": 1574.9166666666667, "series": [{"data": [[1.7511294E12, 270.8333333333333], [1.75112922E12, 0.3], [1.75112934E12, 0.5], [1.75112916E12, 275.1333333333333], [1.75112946E12, 0.45], [1.75112928E12, 274.51666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7511294E12, 1448.9166666666667], [1.75112922E12, 1573.7833333333333], [1.75112934E12, 1574.9166666666667], [1.75112916E12, 135.38333333333333], [1.75112946E12, 1081.9333333333334], [1.75112928E12, 1365.7166666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112946E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 28800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

