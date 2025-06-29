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
        data: {"result": {"minY": 157.0, "minX": 0.0, "maxY": 3314.0, "series": [{"data": [[0.0, 157.0], [0.1, 185.0], [0.2, 192.0], [0.3, 195.0], [0.4, 201.0], [0.5, 205.0], [0.6, 208.0], [0.7, 212.0], [0.8, 214.0], [0.9, 215.0], [1.0, 219.0], [1.1, 220.0], [1.2, 222.0], [1.3, 223.0], [1.4, 225.0], [1.5, 228.0], [1.6, 229.0], [1.7, 231.0], [1.8, 232.0], [1.9, 233.0], [2.0, 235.0], [2.1, 236.0], [2.2, 237.0], [2.3, 238.0], [2.4, 239.0], [2.5, 240.0], [2.6, 240.0], [2.7, 242.0], [2.8, 243.0], [2.9, 245.0], [3.0, 247.0], [3.1, 247.0], [3.2, 247.0], [3.3, 248.0], [3.4, 248.0], [3.5, 249.0], [3.6, 250.0], [3.7, 250.0], [3.8, 251.0], [3.9, 251.0], [4.0, 253.0], [4.1, 254.0], [4.2, 254.0], [4.3, 255.0], [4.4, 256.0], [4.5, 257.0], [4.6, 257.0], [4.7, 258.0], [4.8, 259.0], [4.9, 259.0], [5.0, 259.0], [5.1, 260.0], [5.2, 260.0], [5.3, 261.0], [5.4, 262.0], [5.5, 263.0], [5.6, 263.0], [5.7, 264.0], [5.8, 264.0], [5.9, 265.0], [6.0, 265.0], [6.1, 265.0], [6.2, 266.0], [6.3, 267.0], [6.4, 267.0], [6.5, 268.0], [6.6, 268.0], [6.7, 268.0], [6.8, 269.0], [6.9, 270.0], [7.0, 270.0], [7.1, 270.0], [7.2, 271.0], [7.3, 271.0], [7.4, 271.0], [7.5, 272.0], [7.6, 273.0], [7.7, 273.0], [7.8, 274.0], [7.9, 274.0], [8.0, 275.0], [8.1, 275.0], [8.2, 276.0], [8.3, 276.0], [8.4, 276.0], [8.5, 277.0], [8.6, 277.0], [8.7, 278.0], [8.8, 278.0], [8.9, 279.0], [9.0, 279.0], [9.1, 280.0], [9.2, 280.0], [9.3, 281.0], [9.4, 281.0], [9.5, 281.0], [9.6, 282.0], [9.7, 282.0], [9.8, 283.0], [9.9, 283.0], [10.0, 284.0], [10.1, 284.0], [10.2, 285.0], [10.3, 285.0], [10.4, 286.0], [10.5, 286.0], [10.6, 287.0], [10.7, 287.0], [10.8, 287.0], [10.9, 288.0], [11.0, 288.0], [11.1, 289.0], [11.2, 289.0], [11.3, 290.0], [11.4, 291.0], [11.5, 291.0], [11.6, 291.0], [11.7, 292.0], [11.8, 292.0], [11.9, 293.0], [12.0, 293.0], [12.1, 294.0], [12.2, 294.0], [12.3, 294.0], [12.4, 294.0], [12.5, 295.0], [12.6, 295.0], [12.7, 295.0], [12.8, 296.0], [12.9, 297.0], [13.0, 297.0], [13.1, 297.0], [13.2, 298.0], [13.3, 298.0], [13.4, 298.0], [13.5, 298.0], [13.6, 299.0], [13.7, 300.0], [13.8, 300.0], [13.9, 300.0], [14.0, 300.0], [14.1, 301.0], [14.2, 301.0], [14.3, 302.0], [14.4, 302.0], [14.5, 303.0], [14.6, 304.0], [14.7, 304.0], [14.8, 304.0], [14.9, 304.0], [15.0, 305.0], [15.1, 305.0], [15.2, 306.0], [15.3, 306.0], [15.4, 306.0], [15.5, 306.0], [15.6, 307.0], [15.7, 307.0], [15.8, 308.0], [15.9, 308.0], [16.0, 308.0], [16.1, 309.0], [16.2, 309.0], [16.3, 310.0], [16.4, 310.0], [16.5, 310.0], [16.6, 310.0], [16.7, 311.0], [16.8, 311.0], [16.9, 312.0], [17.0, 312.0], [17.1, 312.0], [17.2, 313.0], [17.3, 313.0], [17.4, 314.0], [17.5, 314.0], [17.6, 315.0], [17.7, 315.0], [17.8, 316.0], [17.9, 316.0], [18.0, 317.0], [18.1, 318.0], [18.2, 318.0], [18.3, 318.0], [18.4, 319.0], [18.5, 319.0], [18.6, 319.0], [18.7, 319.0], [18.8, 319.0], [18.9, 320.0], [19.0, 320.0], [19.1, 321.0], [19.2, 321.0], [19.3, 322.0], [19.4, 322.0], [19.5, 322.0], [19.6, 323.0], [19.7, 323.0], [19.8, 323.0], [19.9, 323.0], [20.0, 324.0], [20.1, 324.0], [20.2, 325.0], [20.3, 325.0], [20.4, 325.0], [20.5, 326.0], [20.6, 326.0], [20.7, 327.0], [20.8, 327.0], [20.9, 327.0], [21.0, 328.0], [21.1, 328.0], [21.2, 328.0], [21.3, 329.0], [21.4, 329.0], [21.5, 329.0], [21.6, 330.0], [21.7, 330.0], [21.8, 330.0], [21.9, 330.0], [22.0, 331.0], [22.1, 331.0], [22.2, 331.0], [22.3, 332.0], [22.4, 332.0], [22.5, 332.0], [22.6, 333.0], [22.7, 333.0], [22.8, 334.0], [22.9, 334.0], [23.0, 335.0], [23.1, 335.0], [23.2, 335.0], [23.3, 336.0], [23.4, 336.0], [23.5, 337.0], [23.6, 337.0], [23.7, 338.0], [23.8, 338.0], [23.9, 338.0], [24.0, 339.0], [24.1, 339.0], [24.2, 340.0], [24.3, 340.0], [24.4, 340.0], [24.5, 341.0], [24.6, 341.0], [24.7, 341.0], [24.8, 342.0], [24.9, 342.0], [25.0, 342.0], [25.1, 342.0], [25.2, 343.0], [25.3, 343.0], [25.4, 344.0], [25.5, 344.0], [25.6, 344.0], [25.7, 345.0], [25.8, 345.0], [25.9, 345.0], [26.0, 345.0], [26.1, 346.0], [26.2, 346.0], [26.3, 347.0], [26.4, 347.0], [26.5, 348.0], [26.6, 348.0], [26.7, 348.0], [26.8, 349.0], [26.9, 350.0], [27.0, 350.0], [27.1, 350.0], [27.2, 351.0], [27.3, 351.0], [27.4, 352.0], [27.5, 352.0], [27.6, 353.0], [27.7, 353.0], [27.8, 353.0], [27.9, 354.0], [28.0, 354.0], [28.1, 355.0], [28.2, 355.0], [28.3, 355.0], [28.4, 356.0], [28.5, 356.0], [28.6, 357.0], [28.7, 357.0], [28.8, 357.0], [28.9, 358.0], [29.0, 358.0], [29.1, 358.0], [29.2, 359.0], [29.3, 359.0], [29.4, 360.0], [29.5, 360.0], [29.6, 360.0], [29.7, 360.0], [29.8, 361.0], [29.9, 361.0], [30.0, 362.0], [30.1, 362.0], [30.2, 363.0], [30.3, 363.0], [30.4, 363.0], [30.5, 364.0], [30.6, 364.0], [30.7, 364.0], [30.8, 365.0], [30.9, 365.0], [31.0, 366.0], [31.1, 366.0], [31.2, 366.0], [31.3, 366.0], [31.4, 367.0], [31.5, 368.0], [31.6, 368.0], [31.7, 368.0], [31.8, 369.0], [31.9, 369.0], [32.0, 369.0], [32.1, 370.0], [32.2, 371.0], [32.3, 371.0], [32.4, 371.0], [32.5, 372.0], [32.6, 372.0], [32.7, 373.0], [32.8, 374.0], [32.9, 374.0], [33.0, 374.0], [33.1, 375.0], [33.2, 375.0], [33.3, 375.0], [33.4, 376.0], [33.5, 376.0], [33.6, 377.0], [33.7, 377.0], [33.8, 378.0], [33.9, 378.0], [34.0, 379.0], [34.1, 379.0], [34.2, 379.0], [34.3, 379.0], [34.4, 380.0], [34.5, 380.0], [34.6, 380.0], [34.7, 381.0], [34.8, 381.0], [34.9, 381.0], [35.0, 382.0], [35.1, 382.0], [35.2, 382.0], [35.3, 383.0], [35.4, 383.0], [35.5, 384.0], [35.6, 384.0], [35.7, 385.0], [35.8, 385.0], [35.9, 385.0], [36.0, 386.0], [36.1, 386.0], [36.2, 386.0], [36.3, 387.0], [36.4, 387.0], [36.5, 387.0], [36.6, 388.0], [36.7, 388.0], [36.8, 389.0], [36.9, 389.0], [37.0, 390.0], [37.1, 390.0], [37.2, 391.0], [37.3, 391.0], [37.4, 393.0], [37.5, 393.0], [37.6, 394.0], [37.7, 394.0], [37.8, 395.0], [37.9, 395.0], [38.0, 396.0], [38.1, 396.0], [38.2, 397.0], [38.3, 397.0], [38.4, 397.0], [38.5, 398.0], [38.6, 398.0], [38.7, 399.0], [38.8, 400.0], [38.9, 400.0], [39.0, 401.0], [39.1, 402.0], [39.2, 402.0], [39.3, 403.0], [39.4, 404.0], [39.5, 404.0], [39.6, 405.0], [39.7, 405.0], [39.8, 406.0], [39.9, 407.0], [40.0, 407.0], [40.1, 408.0], [40.2, 409.0], [40.3, 409.0], [40.4, 409.0], [40.5, 410.0], [40.6, 410.0], [40.7, 411.0], [40.8, 412.0], [40.9, 412.0], [41.0, 413.0], [41.1, 414.0], [41.2, 414.0], [41.3, 415.0], [41.4, 416.0], [41.5, 416.0], [41.6, 417.0], [41.7, 417.0], [41.8, 418.0], [41.9, 418.0], [42.0, 419.0], [42.1, 419.0], [42.2, 420.0], [42.3, 420.0], [42.4, 421.0], [42.5, 421.0], [42.6, 422.0], [42.7, 422.0], [42.8, 423.0], [42.9, 424.0], [43.0, 424.0], [43.1, 425.0], [43.2, 426.0], [43.3, 427.0], [43.4, 427.0], [43.5, 428.0], [43.6, 429.0], [43.7, 429.0], [43.8, 430.0], [43.9, 431.0], [44.0, 432.0], [44.1, 432.0], [44.2, 433.0], [44.3, 434.0], [44.4, 435.0], [44.5, 435.0], [44.6, 435.0], [44.7, 436.0], [44.8, 437.0], [44.9, 437.0], [45.0, 438.0], [45.1, 439.0], [45.2, 439.0], [45.3, 440.0], [45.4, 441.0], [45.5, 441.0], [45.6, 442.0], [45.7, 442.0], [45.8, 444.0], [45.9, 445.0], [46.0, 446.0], [46.1, 447.0], [46.2, 448.0], [46.3, 449.0], [46.4, 449.0], [46.5, 450.0], [46.6, 450.0], [46.7, 452.0], [46.8, 452.0], [46.9, 453.0], [47.0, 454.0], [47.1, 455.0], [47.2, 457.0], [47.3, 458.0], [47.4, 460.0], [47.5, 461.0], [47.6, 461.0], [47.7, 462.0], [47.8, 464.0], [47.9, 466.0], [48.0, 467.0], [48.1, 468.0], [48.2, 471.0], [48.3, 472.0], [48.4, 473.0], [48.5, 475.0], [48.6, 478.0], [48.7, 479.0], [48.8, 480.0], [48.9, 481.0], [49.0, 483.0], [49.1, 485.0], [49.2, 486.0], [49.3, 488.0], [49.4, 492.0], [49.5, 493.0], [49.6, 496.0], [49.7, 497.0], [49.8, 497.0], [49.9, 499.0], [50.0, 503.0], [50.1, 507.0], [50.2, 512.0], [50.3, 514.0], [50.4, 517.0], [50.5, 525.0], [50.6, 526.0], [50.7, 530.0], [50.8, 539.0], [50.9, 542.0], [51.0, 546.0], [51.1, 550.0], [51.2, 554.0], [51.3, 559.0], [51.4, 564.0], [51.5, 569.0], [51.6, 571.0], [51.7, 572.0], [51.8, 583.0], [51.9, 589.0], [52.0, 594.0], [52.1, 603.0], [52.2, 616.0], [52.3, 634.0], [52.4, 652.0], [52.5, 687.0], [52.6, 706.0], [52.7, 711.0], [52.8, 733.0], [52.9, 748.0], [53.0, 763.0], [53.1, 776.0], [53.2, 793.0], [53.3, 797.0], [53.4, 805.0], [53.5, 813.0], [53.6, 818.0], [53.7, 822.0], [53.8, 826.0], [53.9, 828.0], [54.0, 830.0], [54.1, 833.0], [54.2, 834.0], [54.3, 836.0], [54.4, 839.0], [54.5, 842.0], [54.6, 843.0], [54.7, 845.0], [54.8, 847.0], [54.9, 849.0], [55.0, 850.0], [55.1, 852.0], [55.2, 853.0], [55.3, 854.0], [55.4, 856.0], [55.5, 857.0], [55.6, 858.0], [55.7, 859.0], [55.8, 860.0], [55.9, 862.0], [56.0, 863.0], [56.1, 863.0], [56.2, 865.0], [56.3, 867.0], [56.4, 868.0], [56.5, 869.0], [56.6, 870.0], [56.7, 870.0], [56.8, 871.0], [56.9, 872.0], [57.0, 874.0], [57.1, 875.0], [57.2, 876.0], [57.3, 876.0], [57.4, 877.0], [57.5, 878.0], [57.6, 878.0], [57.7, 879.0], [57.8, 880.0], [57.9, 881.0], [58.0, 881.0], [58.1, 883.0], [58.2, 883.0], [58.3, 884.0], [58.4, 884.0], [58.5, 885.0], [58.6, 886.0], [58.7, 887.0], [58.8, 887.0], [58.9, 888.0], [59.0, 888.0], [59.1, 889.0], [59.2, 889.0], [59.3, 889.0], [59.4, 890.0], [59.5, 890.0], [59.6, 891.0], [59.7, 892.0], [59.8, 892.0], [59.9, 893.0], [60.0, 893.0], [60.1, 894.0], [60.2, 895.0], [60.3, 895.0], [60.4, 896.0], [60.5, 897.0], [60.6, 897.0], [60.7, 897.0], [60.8, 898.0], [60.9, 899.0], [61.0, 899.0], [61.1, 899.0], [61.2, 901.0], [61.3, 901.0], [61.4, 902.0], [61.5, 903.0], [61.6, 903.0], [61.7, 904.0], [61.8, 904.0], [61.9, 905.0], [62.0, 905.0], [62.1, 906.0], [62.2, 906.0], [62.3, 907.0], [62.4, 907.0], [62.5, 907.0], [62.6, 907.0], [62.7, 908.0], [62.8, 908.0], [62.9, 909.0], [63.0, 909.0], [63.1, 909.0], [63.2, 910.0], [63.3, 910.0], [63.4, 910.0], [63.5, 911.0], [63.6, 911.0], [63.7, 912.0], [63.8, 912.0], [63.9, 913.0], [64.0, 913.0], [64.1, 914.0], [64.2, 915.0], [64.3, 915.0], [64.4, 916.0], [64.5, 916.0], [64.6, 917.0], [64.7, 918.0], [64.8, 918.0], [64.9, 919.0], [65.0, 919.0], [65.1, 919.0], [65.2, 920.0], [65.3, 920.0], [65.4, 920.0], [65.5, 921.0], [65.6, 921.0], [65.7, 922.0], [65.8, 922.0], [65.9, 922.0], [66.0, 923.0], [66.1, 923.0], [66.2, 924.0], [66.3, 924.0], [66.4, 924.0], [66.5, 925.0], [66.6, 925.0], [66.7, 925.0], [66.8, 926.0], [66.9, 926.0], [67.0, 926.0], [67.1, 927.0], [67.2, 927.0], [67.3, 927.0], [67.4, 928.0], [67.5, 928.0], [67.6, 928.0], [67.7, 929.0], [67.8, 929.0], [67.9, 930.0], [68.0, 930.0], [68.1, 930.0], [68.2, 930.0], [68.3, 931.0], [68.4, 931.0], [68.5, 932.0], [68.6, 932.0], [68.7, 932.0], [68.8, 933.0], [68.9, 933.0], [69.0, 933.0], [69.1, 934.0], [69.2, 934.0], [69.3, 934.0], [69.4, 935.0], [69.5, 935.0], [69.6, 936.0], [69.7, 936.0], [69.8, 937.0], [69.9, 937.0], [70.0, 937.0], [70.1, 938.0], [70.2, 938.0], [70.3, 939.0], [70.4, 939.0], [70.5, 939.0], [70.6, 940.0], [70.7, 940.0], [70.8, 941.0], [70.9, 941.0], [71.0, 942.0], [71.1, 942.0], [71.2, 943.0], [71.3, 943.0], [71.4, 944.0], [71.5, 944.0], [71.6, 944.0], [71.7, 944.0], [71.8, 945.0], [71.9, 945.0], [72.0, 946.0], [72.1, 946.0], [72.2, 946.0], [72.3, 947.0], [72.4, 947.0], [72.5, 947.0], [72.6, 948.0], [72.7, 948.0], [72.8, 949.0], [72.9, 949.0], [73.0, 949.0], [73.1, 950.0], [73.2, 950.0], [73.3, 951.0], [73.4, 951.0], [73.5, 952.0], [73.6, 952.0], [73.7, 953.0], [73.8, 953.0], [73.9, 953.0], [74.0, 954.0], [74.1, 954.0], [74.2, 954.0], [74.3, 954.0], [74.4, 955.0], [74.5, 955.0], [74.6, 955.0], [74.7, 956.0], [74.8, 956.0], [74.9, 957.0], [75.0, 957.0], [75.1, 957.0], [75.2, 957.0], [75.3, 958.0], [75.4, 958.0], [75.5, 958.0], [75.6, 959.0], [75.7, 959.0], [75.8, 959.0], [75.9, 960.0], [76.0, 960.0], [76.1, 961.0], [76.2, 961.0], [76.3, 962.0], [76.4, 962.0], [76.5, 963.0], [76.6, 964.0], [76.7, 964.0], [76.8, 965.0], [76.9, 965.0], [77.0, 966.0], [77.1, 966.0], [77.2, 966.0], [77.3, 967.0], [77.4, 967.0], [77.5, 968.0], [77.6, 968.0], [77.7, 968.0], [77.8, 969.0], [77.9, 969.0], [78.0, 970.0], [78.1, 970.0], [78.2, 971.0], [78.3, 971.0], [78.4, 972.0], [78.5, 972.0], [78.6, 972.0], [78.7, 973.0], [78.8, 973.0], [78.9, 973.0], [79.0, 974.0], [79.1, 974.0], [79.2, 975.0], [79.3, 975.0], [79.4, 976.0], [79.5, 976.0], [79.6, 976.0], [79.7, 977.0], [79.8, 977.0], [79.9, 977.0], [80.0, 978.0], [80.1, 979.0], [80.2, 980.0], [80.3, 980.0], [80.4, 980.0], [80.5, 981.0], [80.6, 982.0], [80.7, 983.0], [80.8, 983.0], [80.9, 983.0], [81.0, 984.0], [81.1, 985.0], [81.2, 985.0], [81.3, 986.0], [81.4, 986.0], [81.5, 987.0], [81.6, 987.0], [81.7, 987.0], [81.8, 988.0], [81.9, 989.0], [82.0, 989.0], [82.1, 989.0], [82.2, 990.0], [82.3, 991.0], [82.4, 991.0], [82.5, 992.0], [82.6, 992.0], [82.7, 993.0], [82.8, 993.0], [82.9, 994.0], [83.0, 994.0], [83.1, 995.0], [83.2, 995.0], [83.3, 996.0], [83.4, 996.0], [83.5, 997.0], [83.6, 998.0], [83.7, 998.0], [83.8, 999.0], [83.9, 999.0], [84.0, 1000.0], [84.1, 1000.0], [84.2, 1001.0], [84.3, 1001.0], [84.4, 1002.0], [84.5, 1002.0], [84.6, 1003.0], [84.7, 1003.0], [84.8, 1004.0], [84.9, 1004.0], [85.0, 1005.0], [85.1, 1006.0], [85.2, 1006.0], [85.3, 1008.0], [85.4, 1008.0], [85.5, 1009.0], [85.6, 1009.0], [85.7, 1010.0], [85.8, 1010.0], [85.9, 1011.0], [86.0, 1012.0], [86.1, 1013.0], [86.2, 1013.0], [86.3, 1014.0], [86.4, 1014.0], [86.5, 1015.0], [86.6, 1016.0], [86.7, 1017.0], [86.8, 1018.0], [86.9, 1019.0], [87.0, 1019.0], [87.1, 1020.0], [87.2, 1021.0], [87.3, 1021.0], [87.4, 1022.0], [87.5, 1023.0], [87.6, 1024.0], [87.7, 1024.0], [87.8, 1025.0], [87.9, 1026.0], [88.0, 1027.0], [88.1, 1028.0], [88.2, 1029.0], [88.3, 1029.0], [88.4, 1029.0], [88.5, 1030.0], [88.6, 1031.0], [88.7, 1032.0], [88.8, 1032.0], [88.9, 1033.0], [89.0, 1034.0], [89.1, 1035.0], [89.2, 1036.0], [89.3, 1038.0], [89.4, 1039.0], [89.5, 1039.0], [89.6, 1040.0], [89.7, 1041.0], [89.8, 1043.0], [89.9, 1044.0], [90.0, 1046.0], [90.1, 1047.0], [90.2, 1048.0], [90.3, 1049.0], [90.4, 1051.0], [90.5, 1051.0], [90.6, 1053.0], [90.7, 1053.0], [90.8, 1056.0], [90.9, 1057.0], [91.0, 1059.0], [91.1, 1060.0], [91.2, 1061.0], [91.3, 1063.0], [91.4, 1065.0], [91.5, 1067.0], [91.6, 1068.0], [91.7, 1070.0], [91.8, 1071.0], [91.9, 1072.0], [92.0, 1074.0], [92.1, 1075.0], [92.2, 1080.0], [92.3, 1083.0], [92.4, 1085.0], [92.5, 1086.0], [92.6, 1090.0], [92.7, 1095.0], [92.8, 1096.0], [92.9, 1099.0], [93.0, 1101.0], [93.1, 1104.0], [93.2, 1106.0], [93.3, 1109.0], [93.4, 1113.0], [93.5, 1117.0], [93.6, 1120.0], [93.7, 1125.0], [93.8, 1128.0], [93.9, 1130.0], [94.0, 1136.0], [94.1, 1138.0], [94.2, 1141.0], [94.3, 1147.0], [94.4, 1150.0], [94.5, 1153.0], [94.6, 1159.0], [94.7, 1166.0], [94.8, 1175.0], [94.9, 1187.0], [95.0, 1203.0], [95.1, 1222.0], [95.2, 1238.0], [95.3, 1260.0], [95.4, 1278.0], [95.5, 1294.0], [95.6, 1298.0], [95.7, 1305.0], [95.8, 1317.0], [95.9, 1329.0], [96.0, 1350.0], [96.1, 1361.0], [96.2, 1370.0], [96.3, 1386.0], [96.4, 1389.0], [96.5, 1400.0], [96.6, 1403.0], [96.7, 1421.0], [96.8, 1436.0], [96.9, 1455.0], [97.0, 1474.0], [97.1, 1485.0], [97.2, 1514.0], [97.3, 1536.0], [97.4, 1554.0], [97.5, 1558.0], [97.6, 1577.0], [97.7, 1591.0], [97.8, 1609.0], [97.9, 1616.0], [98.0, 1638.0], [98.1, 1660.0], [98.2, 1680.0], [98.3, 1702.0], [98.4, 1719.0], [98.5, 1733.0], [98.6, 1749.0], [98.7, 1764.0], [98.8, 1800.0], [98.9, 1809.0], [99.0, 1833.0], [99.1, 1867.0], [99.2, 1977.0], [99.3, 2393.0], [99.4, 2501.0], [99.5, 2576.0], [99.6, 2639.0], [99.7, 2764.0], [99.8, 2832.0], [99.9, 2976.0]], "isOverall": false, "label": "GET All Transactions", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 1336.0, "series": [{"data": [[600.0, 26.0], [700.0, 41.0], [800.0, 414.0], [900.0, 1216.0], [1000.0, 478.0], [1100.0, 110.0], [1200.0, 33.0], [1300.0, 46.0], [1400.0, 37.0], [1500.0, 32.0], [1600.0, 27.0], [100.0, 21.0], [1700.0, 28.0], [1800.0, 19.0], [1900.0, 4.0], [2000.0, 1.0], [2100.0, 1.0], [2200.0, 1.0], [2300.0, 1.0], [2400.0, 4.0], [2500.0, 10.0], [2600.0, 5.0], [2800.0, 5.0], [2700.0, 5.0], [2900.0, 3.0], [3000.0, 3.0], [3100.0, 1.0], [3300.0, 1.0], [200.0, 708.0], [300.0, 1336.0], [400.0, 592.0], [500.0, 115.0]], "isOverall": false, "label": "GET All Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 151.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2659.0, "series": [{"data": [[0.0, 2659.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2514.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 151.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 21.521008403361336, "minX": 1.7511297E12, "maxY": 31.814606741573062, "series": [{"data": [[1.7511297E12, 21.521008403361336], [1.75112982E12, 30.868029197080304], [1.75112976E12, 31.814606741573062]], "isOverall": false, "label": "GET /transactions Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112982E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 247.0, "minX": 1.0, "maxY": 2522.238095238095, "series": [{"data": [[32.0, 1505.452380952381], [33.0, 1322.103448275862], [34.0, 1384.727272727273], [35.0, 1452.5], [36.0, 1776.0714285714287], [37.0, 1325.4444444444443], [38.0, 1388.0], [39.0, 1388.6666666666667], [40.0, 2461.176470588235], [41.0, 1945.6], [42.0, 2522.238095238095], [43.0, 1896.6000000000001], [44.0, 1631.8], [45.0, 1655.3333333333335], [46.0, 1947.2], [47.0, 1783.6666666666667], [48.0, 2002.3333333333333], [49.0, 1818.0], [3.0, 257.0], [5.0, 324.5], [6.0, 252.0], [7.0, 308.0], [8.0, 963.5], [9.0, 1007.0], [10.0, 798.0], [11.0, 407.5], [12.0, 364.3333333333333], [13.0, 593.0], [14.0, 541.1999999999999], [15.0, 470.0], [16.0, 531.8333333333333], [1.0, 247.0], [17.0, 599.3333333333333], [18.0, 529.375], [19.0, 363.0], [20.0, 649.8888888888889], [21.0, 741.8333333333334], [22.0, 739.5], [23.0, 642.1428571428571], [24.0, 749.625], [25.0, 887.3333333333334], [26.0, 900.4285714285714], [27.0, 842.0], [28.0, 642.5], [29.0, 960.875], [30.0, 935.0], [31.0, 631.7541280708831]], "isOverall": false, "label": "GET All Transactions", "isController": false}, {"data": [[30.97558226897071, 678.4043951915854]], "isOverall": false, "label": "GET All Transactions-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 49.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 251.88333333333333, "minX": 1.7511297E12, "maxY": 6.1104620125E8, "series": [{"data": [[1.7511297E12, 2.123051035E7], [1.75112982E12, 6.1104620125E8], [1.75112976E12, 3.17565617E8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7511297E12, 251.88333333333333], [1.75112982E12, 7249.583333333333], [1.75112976E12, 3767.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112982E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 470.5763503649638, "minX": 1.7511297E12, "maxY": 1069.5932584269665, "series": [{"data": [[1.7511297E12, 808.6134453781516], [1.75112982E12, 470.5763503649638], [1.75112976E12, 1069.5932584269665]], "isOverall": false, "label": "GET All Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112982E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 8.57584269662921, "minX": 1.7511297E12, "maxY": 35.44537815126052, "series": [{"data": [[1.7511297E12, 35.44537815126052], [1.75112982E12, 16.964087591240887], [1.75112976E12, 8.57584269662921]], "isOverall": false, "label": "GET All Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112982E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.1533707865168563, "minX": 1.7511297E12, "maxY": 6.24467153284673, "series": [{"data": [[1.7511297E12, 2.252100840336133], [1.75112982E12, 6.24467153284673], [1.75112976E12, 2.1533707865168563]], "isOverall": false, "label": "GET All Transactions", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112982E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 157.0, "minX": 1.7511297E12, "maxY": 3314.0, "series": [{"data": [[1.7511297E12, 1436.0], [1.75112982E12, 1260.0], [1.75112976E12, 3314.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7511297E12, 385.0], [1.75112982E12, 157.0], [1.75112976E12, 702.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7511297E12, 1130.0], [1.75112982E12, 948.0], [1.75112976E12, 1410.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7511297E12, 1427.1999999999998], [1.75112982E12, 1091.4799999999996], [1.75112976E12, 2745.610000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7511297E12, 767.0], [1.75112982E12, 370.0], [1.75112976E12, 968.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7511297E12, 1213.0], [1.75112982E12, 995.0], [1.75112976E12, 1704.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112982E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 313.5, "minX": 1.0, "maxY": 2577.0, "series": [{"data": [[33.0, 950.0], [32.0, 946.0], [34.0, 945.5], [35.0, 937.0], [37.0, 870.0], [36.0, 926.5], [42.0, 888.0], [44.0, 318.0], [67.0, 383.0], [75.0, 385.0], [72.0, 393.0], [76.0, 344.5], [77.0, 372.5], [78.0, 372.5], [5.0, 1278.0], [83.0, 363.0], [87.0, 331.5], [85.0, 342.0], [86.0, 362.5], [90.0, 320.5], [91.0, 313.5], [88.0, 314.5], [89.0, 357.0], [92.0, 322.0], [94.0, 322.0], [6.0, 1227.0], [13.0, 1377.0], [1.0, 2199.0], [16.0, 1549.0], [17.0, 2577.0], [20.0, 578.5], [22.0, 1330.5], [23.0, 1338.5], [25.0, 1249.0], [26.0, 974.0], [27.0, 748.0], [28.0, 1308.5], [29.0, 1055.0], [30.0, 1032.0], [31.0, 979.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 1.0, "maxY": 492.0, "series": [{"data": [[33.0, 2.0], [32.0, 2.0], [34.0, 2.0], [35.0, 2.0], [37.0, 2.0], [36.0, 2.0], [42.0, 2.0], [44.0, 12.0], [67.0, 20.0], [75.0, 13.0], [72.0, 19.0], [76.0, 14.0], [77.0, 14.0], [78.0, 15.0], [5.0, 492.0], [83.0, 13.0], [87.0, 16.5], [85.0, 16.0], [86.0, 13.0], [90.0, 15.0], [91.0, 15.0], [88.0, 10.5], [89.0, 15.0], [92.0, 15.0], [94.0, 14.0], [6.0, 21.5], [13.0, 28.0], [1.0, 29.0], [16.0, 2.0], [17.0, 11.0], [20.0, 5.5], [22.0, 11.5], [23.0, 5.5], [25.0, 3.0], [26.0, 2.0], [27.0, 10.0], [28.0, 10.0], [29.0, 2.0], [30.0, 2.0], [31.0, 2.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 94.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.55, "minX": 1.7511297E12, "maxY": 56.56666666666667, "series": [{"data": [[1.7511297E12, 2.55], [1.75112982E12, 56.56666666666667], [1.75112976E12, 29.616666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112982E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.7511297E12, "maxY": 57.083333333333336, "series": [{"data": [[1.7511297E12, 1.9833333333333334], [1.75112982E12, 57.083333333333336], [1.75112976E12, 29.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.75112982E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.7511297E12, "maxY": 57.083333333333336, "series": [{"data": [[1.7511297E12, 1.9833333333333334], [1.75112982E12, 57.083333333333336], [1.75112976E12, 29.666666666666668]], "isOverall": false, "label": "GET All Transactions-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112982E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.7511297E12, "maxY": 57.083333333333336, "series": [{"data": [[1.7511297E12, 1.9833333333333334], [1.75112982E12, 57.083333333333336], [1.75112976E12, 29.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.75112982E12, "title": "Total Transactions Per Second"}},
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

