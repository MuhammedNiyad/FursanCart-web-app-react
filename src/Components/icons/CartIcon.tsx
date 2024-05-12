import React from "react";

export const CartIcon: React.FC<{}> = () => {
  return (
    <div className="hover:scale-110 ease-in-out duration-150">
      <svg
        id="svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0, 0, 400,400"
      >
        <g id="svgg">
          <path
            id="path0"
            d="M206.770 107.329 C 205.757 107.864,204.418 109.086,203.607 110.215 L 202.200 112.173 202.087 134.914 C 201.995 153.498,201.878 157.631,201.447 157.527 C 201.157 157.457,197.554 154.160,193.441 150.200 C 184.019 141.128,181.473 139.914,176.655 142.201 C 169.632 145.534,169.641 152.925,176.676 159.589 C 178.614 161.425,185.600 168.185,192.200 174.611 C 204.683 186.766,205.870 187.850,207.714 188.785 C 209.298 189.589,213.482 189.500,215.200 188.627 C 216.832 187.797,246.817 158.108,248.224 155.928 C 253.236 148.164,245.171 138.637,236.800 142.434 C 235.567 142.993,232.790 145.448,227.986 150.225 C 224.128 154.061,220.843 157.200,220.686 157.200 C 220.529 157.200,220.400 147.388,220.400 135.396 C 220.400 111.213,220.457 111.766,217.671 108.980 C 214.930 106.239,210.188 105.521,206.770 107.329 M92.918 123.656 C 85.947 127.038,84.838 136.597,90.800 141.912 C 92.502 143.430,96.491 144.533,105.600 146.005 C 106.810 146.200,108.880 146.558,110.200 146.800 C 114.068 147.509,117.178 147.986,120.679 148.409 C 125.468 148.986,125.838 149.191,126.570 151.680 C 127.758 155.716,129.098 160.563,130.859 167.200 C 131.297 168.850,131.810 170.740,132.000 171.400 C 132.190 172.060,132.730 174.040,133.200 175.800 C 133.670 177.560,134.210 179.540,134.400 180.200 C 134.590 180.860,135.130 182.840,135.600 184.600 C 136.070 186.360,136.607 188.340,136.793 189.000 C 137.330 190.909,138.979 196.870,140.996 204.200 C 141.299 205.300,142.472 209.530,143.603 213.600 C 144.734 217.670,145.923 221.990,146.246 223.200 C 146.570 224.410,147.190 226.660,147.625 228.200 C 148.060 229.740,148.617 231.720,148.862 232.600 C 149.881 236.256,150.165 237.098,151.054 239.096 C 152.184 241.637,153.609 243.179,156.000 244.446 L 157.800 245.400 209.800 245.400 L 261.800 245.400 263.708 244.452 C 267.448 242.595,268.905 240.166,271.537 231.400 C 272.198 229.200,273.198 225.870,273.758 224.000 C 274.319 222.130,275.971 216.640,277.428 211.800 C 278.886 206.960,280.588 201.290,281.211 199.200 C 281.833 197.110,282.730 194.140,283.204 192.600 C 283.678 191.060,284.215 189.260,284.397 188.600 C 284.579 187.940,285.191 185.870,285.756 184.000 C 288.614 174.542,284.628 167.955,276.000 167.875 C 269.479 167.815,267.327 170.280,264.022 181.600 C 263.540 183.250,262.989 185.050,262.799 185.600 C 262.608 186.150,261.883 188.490,261.189 190.800 C 260.494 193.110,259.148 197.520,258.197 200.600 C 257.246 203.680,255.901 208.090,255.208 210.400 C 254.515 212.710,253.802 215.050,253.623 215.600 C 253.443 216.150,252.897 217.950,252.408 219.600 C 251.919 221.250,251.382 222.870,251.216 223.200 C 250.839 223.947,170.280 224.330,169.387 223.589 C 169.112 223.361,168.792 222.685,168.676 222.087 C 168.561 221.489,168.283 220.370,168.061 219.600 C 167.838 218.830,167.270 216.760,166.800 215.000 C 166.330 213.240,165.793 211.260,165.609 210.600 C 164.330 206.038,163.579 203.320,162.679 200.000 C 162.113 197.910,160.646 192.558,159.421 188.106 C 158.196 183.654,156.909 178.974,156.562 177.706 C 156.215 176.438,155.779 174.860,155.593 174.200 C 155.407 173.540,154.870 171.560,154.400 169.800 C 153.930 168.040,153.393 166.060,153.209 165.400 C 151.735 160.140,150.151 154.418,148.973 150.100 C 148.658 148.945,148.142 147.055,147.827 145.900 C 147.512 144.745,146.874 142.360,146.409 140.600 C 143.997 131.466,141.543 129.566,129.600 127.585 C 97.038 122.185,96.146 122.090,92.918 123.656 M167.766 254.565 C 145.696 261.475,150.002 293.600,172.999 293.600 C 195.497 293.600,200.641 262.980,179.480 255.016 C 176.401 253.857,170.726 253.638,167.766 254.565 M237.727 254.763 C 216.265 262.081,221.194 293.600,243.800 293.600 C 266.256 293.600,271.345 262.632,250.153 254.940 C 246.867 253.747,240.954 253.663,237.727 254.763 "
            stroke="none"
            fill="#fbfbfc"
            fill-rule="evenodd"
          ></path>
          <path
            id="path1"
            d="M178.300 0.275 C 176.375 0.361,174.800 0.604,174.800 0.816 C 174.800 1.027,173.461 1.200,171.824 1.200 C 170.187 1.200,168.736 1.380,168.600 1.600 C 168.464 1.820,167.463 2.000,166.376 2.000 C 165.289 2.000,164.400 2.180,164.400 2.400 C 164.400 2.620,163.410 2.800,162.200 2.800 C 160.990 2.800,160.000 2.980,160.000 3.200 C 160.000 3.420,159.201 3.600,158.224 3.600 C 157.247 3.600,156.336 3.780,156.200 4.000 C 156.064 4.220,155.243 4.400,154.376 4.400 C 153.509 4.400,152.800 4.580,152.800 4.800 C 152.800 5.020,152.080 5.200,151.200 5.200 C 150.320 5.200,149.600 5.380,149.600 5.600 C 149.600 5.820,148.880 6.000,148.000 6.000 C 147.120 6.000,146.400 6.180,146.400 6.400 C 146.400 6.620,145.860 6.800,145.200 6.800 C 144.540 6.800,144.000 6.980,144.000 7.200 C 144.000 7.420,143.370 7.600,142.600 7.600 C 141.830 7.600,141.200 7.780,141.200 8.000 C 141.200 8.220,140.771 8.400,140.246 8.400 C 139.355 8.400,136.018 9.285,134.200 10.003 C 133.760 10.177,132.770 10.536,132.000 10.800 C 130.307 11.382,128.840 11.971,127.905 12.447 C 127.523 12.641,126.848 12.800,126.405 12.800 C 125.962 12.800,125.600 12.980,125.600 13.200 C 125.600 13.420,125.240 13.600,124.800 13.600 C 124.360 13.600,124.000 13.780,124.000 14.000 C 124.000 14.220,123.561 14.400,123.024 14.400 C 122.487 14.400,121.936 14.580,121.800 14.800 C 121.664 15.020,121.203 15.200,120.776 15.200 C 120.349 15.200,120.000 15.380,120.000 15.600 C 120.000 15.820,119.640 16.000,119.200 16.000 C 118.760 16.000,118.400 16.180,118.400 16.400 C 118.400 16.620,118.128 16.800,117.795 16.800 C 117.207 16.800,116.782 16.967,114.905 17.938 C 114.413 18.192,113.738 18.400,113.405 18.400 C 113.072 18.400,112.800 18.580,112.800 18.800 C 112.800 19.020,112.440 19.200,112.000 19.200 C 111.560 19.200,111.200 19.346,111.200 19.525 C 111.200 19.704,110.570 20.098,109.800 20.400 C 109.030 20.702,108.400 21.096,108.400 21.275 C 108.400 21.454,108.040 21.600,107.600 21.600 C 107.160 21.600,106.800 21.780,106.800 22.000 C 106.800 22.220,106.440 22.400,106.000 22.400 C 105.560 22.400,105.200 22.580,105.200 22.800 C 105.200 23.020,104.880 23.200,104.488 23.200 C 104.097 23.200,103.517 23.560,103.200 24.000 C 102.883 24.440,102.372 24.800,102.066 24.800 C 101.415 24.800,97.463 26.859,97.267 27.300 C 97.193 27.465,96.956 27.600,96.739 27.600 C 96.522 27.600,95.559 28.140,94.600 28.800 C 93.641 29.460,92.703 30.000,92.516 30.000 C 92.329 30.000,91.917 30.360,91.600 30.800 C 91.283 31.240,90.743 31.600,90.400 31.600 C 90.057 31.600,89.517 31.960,89.200 32.400 C 88.883 32.840,88.343 33.200,88.000 33.200 C 87.657 33.200,87.117 33.560,86.800 34.000 C 86.483 34.440,85.991 34.800,85.708 34.800 C 85.425 34.800,84.628 35.340,83.937 36.000 C 83.246 36.660,82.478 37.200,82.229 37.200 C 81.980 37.200,81.517 37.560,81.200 38.000 C 80.883 38.440,80.375 38.800,80.072 38.800 C 79.769 38.800,79.017 39.340,78.400 40.000 C 77.783 40.660,77.164 41.200,77.023 41.200 C 76.752 41.200,76.352 41.514,74.349 43.300 C 73.671 43.905,72.959 44.400,72.768 44.400 C 72.577 44.400,71.651 45.167,70.711 46.105 C 69.770 47.043,68.370 48.255,67.600 48.799 C 66.830 49.342,64.439 51.590,62.287 53.793 C 57.582 58.611,58.611 57.582,53.793 62.287 C 51.590 64.439,49.342 66.828,48.799 67.595 C 48.255 68.362,46.953 69.865,45.905 70.935 C 44.857 72.005,44.000 73.051,44.000 73.259 C 44.000 73.466,43.595 74.070,43.100 74.599 C 41.731 76.063,41.200 76.740,41.200 77.023 C 41.200 77.164,40.660 77.783,40.000 78.400 C 39.340 79.017,38.800 79.769,38.800 80.072 C 38.800 80.375,38.440 80.883,38.000 81.200 C 37.560 81.517,37.200 81.980,37.200 82.229 C 37.200 82.478,36.660 83.246,36.000 83.937 C 35.340 84.628,34.800 85.425,34.800 85.708 C 34.800 85.991,34.440 86.483,34.000 86.800 C 33.560 87.117,33.200 87.657,33.200 88.000 C 33.200 88.343,32.840 88.883,32.400 89.200 C 31.960 89.517,31.600 90.057,31.600 90.400 C 31.600 90.743,31.240 91.283,30.800 91.600 C 30.360 91.917,30.000 92.329,30.000 92.516 C 30.000 92.703,29.460 93.641,28.800 94.600 C 28.140 95.559,27.600 96.522,27.600 96.739 C 27.600 96.956,27.443 97.193,27.251 97.267 C 26.809 97.435,24.800 101.396,24.800 102.098 C 24.800 102.387,24.440 102.883,24.000 103.200 C 23.560 103.517,23.200 104.097,23.200 104.488 C 23.200 104.880,23.020 105.200,22.800 105.200 C 22.580 105.200,22.400 105.560,22.400 106.000 C 22.400 106.440,22.220 106.800,22.000 106.800 C 21.780 106.800,21.600 107.160,21.600 107.600 C 21.600 108.040,21.454 108.400,21.275 108.400 C 21.096 108.400,20.702 109.030,20.400 109.800 C 20.098 110.570,19.704 111.200,19.525 111.200 C 19.346 111.200,19.200 111.560,19.200 112.000 C 19.200 112.440,19.020 112.800,18.800 112.800 C 18.580 112.800,18.400 113.149,18.400 113.576 C 18.400 114.003,18.220 114.464,18.000 114.600 C 17.780 114.736,17.600 115.197,17.600 115.624 C 17.600 116.051,17.420 116.400,17.200 116.400 C 16.980 116.400,16.800 116.850,16.800 117.400 C 16.800 117.950,16.620 118.400,16.400 118.400 C 16.180 118.400,16.000 118.760,16.000 119.200 C 16.000 119.640,15.820 120.000,15.600 120.000 C 15.380 120.000,15.200 120.349,15.200 120.776 C 15.200 121.203,15.020 121.664,14.800 121.800 C 14.580 121.936,14.400 122.487,14.400 123.024 C 14.400 123.561,14.220 124.000,14.000 124.000 C 13.780 124.000,13.600 124.360,13.600 124.800 C 13.600 125.240,13.420 125.600,13.200 125.600 C 12.980 125.600,12.800 125.962,12.800 126.405 C 12.800 126.848,12.641 127.523,12.447 127.905 C 12.252 128.287,11.871 129.140,11.600 129.800 C 11.329 130.460,10.948 131.313,10.753 131.695 C 10.559 132.077,10.400 132.664,10.400 133.000 C 10.400 133.336,10.237 133.923,10.037 134.305 C 9.440 135.447,8.400 139.222,8.400 140.246 C 8.400 140.771,8.220 141.200,8.000 141.200 C 7.780 141.200,7.600 141.830,7.600 142.600 C 7.600 143.370,7.420 144.000,7.200 144.000 C 6.980 144.000,6.800 144.529,6.800 145.176 C 6.800 145.823,6.620 146.464,6.400 146.600 C 6.180 146.736,6.000 147.467,6.000 148.224 C 6.000 148.981,5.820 149.600,5.600 149.600 C 5.380 149.600,5.200 150.320,5.200 151.200 C 5.200 152.080,5.020 152.800,4.800 152.800 C 4.580 152.800,4.400 153.509,4.400 154.376 C 4.400 155.243,4.220 156.064,4.000 156.200 C 3.780 156.336,3.600 157.247,3.600 158.224 C 3.600 159.201,3.420 160.000,3.200 160.000 C 2.980 160.000,2.800 160.900,2.800 162.000 C 2.800 163.100,2.620 164.000,2.400 164.000 C 2.178 164.000,2.000 165.059,2.000 166.376 C 2.000 167.683,1.820 168.864,1.600 169.000 C 1.380 169.136,1.200 170.371,1.200 171.744 C 1.200 173.207,0.993 174.447,0.700 174.740 C 0.311 175.129,0.200 180.743,0.200 200.087 C 0.200 219.608,0.307 224.969,0.700 225.100 C 1.035 225.212,1.200 226.171,1.200 228.010 C 1.200 229.518,1.380 230.864,1.600 231.000 C 1.820 231.136,2.000 232.317,2.000 233.624 C 2.000 234.941,2.178 236.000,2.400 236.000 C 2.620 236.000,2.800 236.900,2.800 238.000 C 2.800 239.100,2.980 240.000,3.200 240.000 C 3.420 240.000,3.600 240.799,3.600 241.776 C 3.600 242.753,3.780 243.664,4.000 243.800 C 4.220 243.936,4.400 244.757,4.400 245.624 C 4.400 246.491,4.580 247.200,4.800 247.200 C 5.020 247.200,5.200 247.920,5.200 248.800 C 5.200 249.680,5.380 250.400,5.600 250.400 C 5.820 250.400,6.000 251.019,6.000 251.776 C 6.000 252.533,6.180 253.264,6.400 253.400 C 6.620 253.536,6.800 254.177,6.800 254.824 C 6.800 255.471,6.980 256.000,7.200 256.000 C 7.420 256.000,7.600 256.630,7.600 257.400 C 7.600 258.170,7.780 258.800,8.000 258.800 C 8.220 258.800,8.400 259.229,8.400 259.754 C 8.400 260.645,9.285 263.982,10.003 265.800 C 10.177 266.240,10.536 267.230,10.800 268.000 C 11.382 269.693,11.971 271.160,12.447 272.095 C 12.641 272.477,12.800 273.152,12.800 273.595 C 12.800 274.038,12.980 274.400,13.200 274.400 C 13.420 274.400,13.600 274.760,13.600 275.200 C 13.600 275.640,13.780 276.000,14.000 276.000 C 14.220 276.000,14.400 276.439,14.400 276.976 C 14.400 277.513,14.580 278.064,14.800 278.200 C 15.020 278.336,15.200 278.797,15.200 279.224 C 15.200 279.651,15.380 280.000,15.600 280.000 C 15.820 280.000,16.000 280.360,16.000 280.800 C 16.000 281.240,16.180 281.600,16.400 281.600 C 16.620 281.600,16.800 281.872,16.800 282.205 C 16.800 282.538,16.980 283.168,17.200 283.605 C 17.420 284.042,17.780 284.758,18.000 285.195 C 18.220 285.632,18.400 286.262,18.400 286.595 C 18.400 286.928,18.535 287.201,18.700 287.201 C 18.865 287.202,19.450 288.192,20.000 289.400 C 20.550 290.608,21.135 291.598,21.300 291.599 C 21.465 291.599,21.600 291.960,21.600 292.400 C 21.600 292.840,21.780 293.200,22.000 293.200 C 22.220 293.200,22.400 293.560,22.400 294.000 C 22.400 294.440,22.580 294.800,22.800 294.800 C 23.020 294.800,23.200 295.036,23.200 295.325 C 23.200 295.613,23.560 296.236,24.000 296.708 C 24.440 297.180,24.800 297.775,24.800 298.029 C 24.800 298.611,26.895 302.553,27.300 302.733 C 27.465 302.807,27.600 303.044,27.600 303.261 C 27.600 303.478,28.140 304.441,28.800 305.400 C 29.460 306.359,30.000 307.297,30.000 307.484 C 30.000 307.671,30.360 308.083,30.800 308.400 C 31.240 308.717,31.600 309.257,31.600 309.600 C 31.600 309.943,31.960 310.483,32.400 310.800 C 32.840 311.117,33.200 311.657,33.200 312.000 C 33.200 312.343,33.560 312.883,34.000 313.200 C 34.440 313.517,34.800 314.009,34.800 314.292 C 34.800 314.575,35.340 315.372,36.000 316.063 C 36.660 316.754,37.200 317.522,37.200 317.771 C 37.200 318.020,37.560 318.483,38.000 318.800 C 38.440 319.117,38.800 319.607,38.800 319.888 C 38.800 320.169,39.520 321.141,40.400 322.048 C 41.280 322.955,42.000 323.836,42.000 324.006 C 42.000 324.176,42.540 324.893,43.200 325.600 C 43.860 326.307,44.400 327.041,44.400 327.232 C 44.400 327.423,45.167 328.349,46.105 329.289 C 47.043 330.230,48.255 331.630,48.799 332.400 C 49.342 333.170,51.590 335.561,53.793 337.713 C 58.611 342.418,57.582 341.389,62.287 346.207 C 64.439 348.410,66.830 350.658,67.600 351.201 C 68.370 351.745,69.770 352.957,70.711 353.895 C 71.651 354.833,72.574 355.600,72.760 355.600 C 72.947 355.600,73.787 356.230,74.628 357.000 C 75.469 357.770,76.295 358.400,76.465 358.400 C 76.635 358.400,77.403 359.030,78.173 359.800 C 78.943 360.570,79.810 361.200,80.098 361.200 C 80.387 361.200,80.883 361.560,81.200 362.000 C 81.517 362.440,81.980 362.800,82.229 362.800 C 82.478 362.800,83.246 363.340,83.937 364.000 C 84.628 364.660,85.425 365.200,85.708 365.200 C 85.991 365.200,86.483 365.560,86.800 366.000 C 87.117 366.440,87.657 366.800,88.000 366.800 C 88.343 366.800,88.883 367.160,89.200 367.600 C 89.517 368.040,90.057 368.400,90.400 368.400 C 90.743 368.400,91.283 368.760,91.600 369.200 C 91.917 369.640,92.329 370.000,92.516 370.000 C 92.703 370.000,93.641 370.540,94.600 371.200 C 95.559 371.860,96.537 372.400,96.772 372.400 C 97.007 372.400,97.200 372.580,97.200 372.800 C 97.200 373.020,97.397 373.200,97.638 373.200 C 97.879 373.200,98.565 373.548,99.163 373.973 C 99.760 374.399,100.772 374.878,101.411 375.039 C 102.050 375.199,102.928 375.661,103.362 376.065 C 103.796 376.469,104.387 376.800,104.675 376.800 C 104.964 376.800,105.200 376.980,105.200 377.200 C 105.200 377.420,105.560 377.600,106.000 377.600 C 106.440 377.600,106.800 377.780,106.800 378.000 C 106.800 378.220,107.160 378.400,107.600 378.400 C 108.040 378.400,108.400 378.580,108.400 378.800 C 108.400 379.020,108.745 379.200,109.167 379.200 C 109.588 379.200,109.993 379.335,110.067 379.500 C 110.140 379.665,111.100 380.225,112.200 380.744 C 113.300 381.263,114.513 381.848,114.895 382.044 C 115.277 382.240,115.862 382.400,116.195 382.400 C 116.528 382.400,116.800 382.580,116.800 382.800 C 116.800 383.020,117.160 383.200,117.600 383.200 C 118.040 383.200,118.400 383.380,118.400 383.600 C 118.400 383.820,118.760 384.000,119.200 384.000 C 119.640 384.000,120.000 384.180,120.000 384.400 C 120.000 384.620,120.349 384.800,120.776 384.800 C 121.203 384.800,121.664 384.980,121.800 385.200 C 121.936 385.420,122.487 385.600,123.024 385.600 C 123.561 385.600,124.000 385.780,124.000 386.000 C 124.000 386.220,124.360 386.400,124.800 386.400 C 125.240 386.400,125.600 386.580,125.600 386.800 C 125.600 387.020,125.962 387.200,126.405 387.200 C 126.848 387.200,127.523 387.359,127.905 387.553 C 128.840 388.029,130.307 388.618,132.000 389.200 C 132.770 389.464,133.760 389.823,134.200 389.997 C 136.018 390.715,139.355 391.600,140.246 391.600 C 140.771 391.600,141.200 391.780,141.200 392.000 C 141.200 392.220,141.830 392.400,142.600 392.400 C 143.370 392.400,144.000 392.580,144.000 392.800 C 144.000 393.020,144.529 393.200,145.176 393.200 C 145.823 393.200,146.464 393.380,146.600 393.600 C 146.736 393.820,147.467 394.000,148.224 394.000 C 148.981 394.000,149.600 394.180,149.600 394.400 C 149.600 394.620,150.320 394.800,151.200 394.800 C 152.080 394.800,152.800 394.980,152.800 395.200 C 152.800 395.420,153.509 395.600,154.376 395.600 C 155.243 395.600,156.064 395.780,156.200 396.000 C 156.336 396.220,157.247 396.400,158.224 396.400 C 159.201 396.400,160.000 396.580,160.000 396.800 C 160.000 397.020,160.990 397.200,162.200 397.200 C 163.410 397.200,164.400 397.380,164.400 397.600 C 164.400 397.820,165.379 398.000,166.576 398.000 C 167.773 398.000,168.864 398.180,169.000 398.400 C 169.136 398.620,170.482 398.800,171.990 398.800 C 173.829 398.800,174.788 398.965,174.900 399.300 C 175.144 400.032,224.856 400.032,225.100 399.300 C 225.212 398.965,226.171 398.800,228.010 398.800 C 229.518 398.800,230.864 398.620,231.000 398.400 C 231.136 398.180,232.216 398.000,233.400 398.000 C 234.584 398.000,235.664 397.820,235.800 397.600 C 235.936 397.380,236.937 397.200,238.024 397.200 C 239.111 397.200,240.000 397.020,240.000 396.800 C 240.000 396.580,240.709 396.400,241.576 396.400 C 242.443 396.400,243.264 396.220,243.400 396.000 C 243.536 395.780,244.447 395.600,245.424 395.600 C 246.401 395.600,247.200 395.420,247.200 395.200 C 247.200 394.980,247.920 394.800,248.800 394.800 C 249.680 394.800,250.400 394.620,250.400 394.400 C 250.400 394.180,251.019 394.000,251.776 394.000 C 252.533 394.000,253.264 393.820,253.400 393.600 C 253.536 393.380,254.177 393.200,254.824 393.200 C 255.471 393.200,256.000 393.020,256.000 392.800 C 256.000 392.580,256.630 392.400,257.400 392.400 C 258.170 392.400,258.800 392.241,258.800 392.046 C 258.800 391.851,259.787 391.569,260.994 391.418 C 262.200 391.267,263.291 390.977,263.417 390.772 C 263.544 390.567,264.076 390.400,264.600 390.400 C 265.124 390.400,265.664 390.220,265.800 390.000 C 265.936 389.780,266.399 389.600,266.829 389.600 C 267.259 389.600,267.923 389.441,268.305 389.247 C 268.687 389.052,269.540 388.671,270.200 388.400 C 270.860 388.129,271.713 387.748,272.095 387.553 C 272.477 387.359,273.152 387.200,273.595 387.200 C 274.038 387.200,274.400 387.020,274.400 386.800 C 274.400 386.580,274.760 386.400,275.200 386.400 C 275.640 386.400,276.000 386.220,276.000 386.000 C 276.000 385.780,276.540 385.600,277.200 385.600 C 277.860 385.600,278.400 385.420,278.400 385.200 C 278.400 384.980,278.760 384.800,279.200 384.800 C 279.640 384.800,280.000 384.620,280.000 384.400 C 280.000 384.180,280.360 384.000,280.800 384.000 C 281.240 384.000,281.600 383.820,281.600 383.600 C 281.600 383.380,281.872 383.200,282.205 383.200 C 282.793 383.200,283.218 383.033,285.095 382.062 C 285.587 381.808,286.262 381.600,286.595 381.600 C 286.928 381.600,287.201 381.465,287.201 381.300 C 287.202 381.135,288.192 380.550,289.400 380.000 C 290.608 379.450,291.598 378.865,291.599 378.700 C 291.599 378.535,291.960 378.400,292.400 378.400 C 292.840 378.400,293.200 378.220,293.200 378.000 C 293.200 377.780,293.560 377.600,294.000 377.600 C 294.440 377.600,294.800 377.420,294.800 377.200 C 294.800 376.980,295.036 376.800,295.325 376.800 C 295.613 376.800,296.236 376.440,296.708 376.000 C 297.180 375.560,297.775 375.200,298.029 375.200 C 298.611 375.200,302.553 373.105,302.733 372.700 C 302.807 372.535,303.044 372.400,303.261 372.400 C 303.478 372.400,304.441 371.860,305.400 371.200 C 306.359 370.540,307.297 370.000,307.484 370.000 C 307.671 370.000,308.083 369.640,308.400 369.200 C 308.717 368.760,309.257 368.400,309.600 368.400 C 309.943 368.400,310.483 368.040,310.800 367.600 C 311.117 367.160,311.657 366.800,312.000 366.800 C 312.343 366.800,312.883 366.440,313.200 366.000 C 313.517 365.560,314.009 365.200,314.292 365.200 C 314.575 365.200,315.372 364.660,316.063 364.000 C 316.754 363.340,317.522 362.800,317.771 362.800 C 318.020 362.800,318.483 362.440,318.800 362.000 C 319.117 361.560,319.613 361.200,319.902 361.200 C 320.190 361.200,321.057 360.570,321.827 359.800 C 322.597 359.030,323.365 358.400,323.535 358.400 C 323.705 358.400,324.531 357.770,325.372 357.000 C 326.213 356.230,327.053 355.600,327.240 355.600 C 327.426 355.600,328.349 354.833,329.289 353.895 C 330.230 352.957,331.630 351.745,332.400 351.201 C 333.170 350.658,335.561 348.410,337.713 346.207 C 342.418 341.389,341.389 342.418,346.207 337.713 C 348.410 335.561,350.658 333.170,351.201 332.400 C 351.745 331.630,352.957 330.230,353.895 329.289 C 354.833 328.349,355.600 327.426,355.600 327.240 C 355.600 327.054,356.320 326.113,357.200 325.151 C 358.080 324.188,358.800 323.247,358.800 323.061 C 358.800 322.874,359.340 322.217,360.000 321.600 C 360.660 320.983,361.200 320.231,361.200 319.928 C 361.200 319.625,361.560 319.117,362.000 318.800 C 362.440 318.483,362.800 318.020,362.800 317.771 C 362.800 317.522,363.340 316.754,364.000 316.063 C 364.660 315.372,365.200 314.575,365.200 314.292 C 365.200 314.009,365.560 313.517,366.000 313.200 C 366.440 312.883,366.800 312.343,366.800 312.000 C 366.800 311.657,367.160 311.117,367.600 310.800 C 368.040 310.483,368.400 309.943,368.400 309.600 C 368.400 309.257,368.760 308.717,369.200 308.400 C 369.640 308.083,370.000 307.671,370.000 307.484 C 370.000 307.297,370.540 306.359,371.200 305.400 C 371.860 304.441,372.400 303.463,372.400 303.228 C 372.400 302.993,372.580 302.800,372.800 302.800 C 373.020 302.800,373.200 302.440,373.200 302.000 C 373.200 301.560,373.347 301.200,373.526 301.200 C 373.874 301.200,375.200 298.642,375.200 297.970 C 375.200 297.748,375.560 297.180,376.000 296.708 C 376.440 296.236,376.800 295.613,376.800 295.325 C 376.800 295.036,376.980 294.800,377.200 294.800 C 377.420 294.800,377.600 294.440,377.600 294.000 C 377.600 293.560,377.780 293.200,378.000 293.200 C 378.220 293.200,378.400 292.855,378.400 292.433 C 378.400 292.012,378.537 291.607,378.704 291.533 C 378.871 291.460,379.789 289.780,380.745 287.800 C 381.700 285.820,382.643 283.887,382.841 283.505 C 383.038 283.123,383.200 282.538,383.200 282.205 C 383.200 281.872,383.380 281.600,383.600 281.600 C 383.820 281.600,384.000 281.240,384.000 280.800 C 384.000 280.360,384.180 280.000,384.400 280.000 C 384.620 280.000,384.800 279.651,384.800 279.224 C 384.800 278.797,384.980 278.336,385.200 278.200 C 385.420 278.064,385.600 277.513,385.600 276.976 C 385.600 276.439,385.780 276.000,386.000 276.000 C 386.220 276.000,386.400 275.640,386.400 275.200 C 386.400 274.760,386.580 274.400,386.800 274.400 C 387.020 274.400,387.200 274.038,387.200 273.595 C 387.200 273.152,387.359 272.477,387.553 272.095 C 387.748 271.713,388.129 270.860,388.400 270.200 C 388.671 269.540,389.052 268.687,389.247 268.305 C 389.441 267.923,389.600 267.259,389.600 266.829 C 389.600 266.399,389.780 265.936,390.000 265.800 C 390.220 265.664,390.400 265.124,390.400 264.600 C 390.400 264.076,390.567 263.544,390.772 263.417 C 390.977 263.291,391.267 262.200,391.418 260.994 C 391.569 259.787,391.851 258.800,392.046 258.800 C 392.241 258.800,392.400 258.170,392.400 257.400 C 392.400 256.630,392.580 256.000,392.800 256.000 C 393.020 256.000,393.200 255.471,393.200 254.824 C 393.200 254.177,393.380 253.536,393.600 253.400 C 393.820 253.264,394.000 252.533,394.000 251.776 C 394.000 251.019,394.180 250.400,394.400 250.400 C 394.620 250.400,394.800 249.680,394.800 248.800 C 394.800 247.920,394.980 247.200,395.200 247.200 C 395.420 247.200,395.600 246.491,395.600 245.624 C 395.600 244.757,395.780 243.936,396.000 243.800 C 396.220 243.664,396.400 242.753,396.400 241.776 C 396.400 240.799,396.580 240.000,396.800 240.000 C 397.020 240.000,397.200 239.111,397.200 238.024 C 397.200 236.937,397.380 235.936,397.600 235.800 C 397.820 235.664,398.000 234.584,398.000 233.400 C 398.000 232.216,398.180 231.136,398.400 231.000 C 398.620 230.864,398.800 229.518,398.800 228.010 C 398.800 226.171,398.965 225.212,399.300 225.100 C 399.693 224.969,399.800 219.591,399.800 200.000 C 399.800 180.409,399.693 175.031,399.300 174.900 C 398.965 174.788,398.800 173.829,398.800 171.990 C 398.800 170.482,398.620 169.136,398.400 169.000 C 398.180 168.864,398.000 167.784,398.000 166.600 C 398.000 165.416,397.820 164.336,397.600 164.200 C 397.380 164.064,397.200 163.063,397.200 161.976 C 397.200 160.889,397.020 160.000,396.800 160.000 C 396.580 160.000,396.400 159.201,396.400 158.224 C 396.400 157.247,396.220 156.336,396.000 156.200 C 395.780 156.064,395.600 155.243,395.600 154.376 C 395.600 153.509,395.420 152.800,395.200 152.800 C 394.980 152.800,394.800 152.080,394.800 151.200 C 394.800 150.320,394.620 149.600,394.400 149.600 C 394.180 149.600,394.000 148.981,394.000 148.224 C 394.000 147.467,393.820 146.736,393.600 146.600 C 393.380 146.464,393.200 145.823,393.200 145.176 C 393.200 144.529,393.020 144.000,392.800 144.000 C 392.580 144.000,392.400 143.370,392.400 142.600 C 392.400 141.830,392.241 141.200,392.046 141.200 C 391.851 141.200,391.569 140.213,391.418 139.006 C 391.267 137.800,390.977 136.709,390.772 136.583 C 390.567 136.456,390.400 135.924,390.400 135.400 C 390.400 134.876,390.220 134.336,390.000 134.200 C 389.780 134.064,389.600 133.601,389.600 133.171 C 389.600 132.741,389.441 132.077,389.247 131.695 C 389.052 131.313,388.671 130.460,388.400 129.800 C 388.129 129.140,387.748 128.287,387.553 127.905 C 387.359 127.523,387.200 126.848,387.200 126.405 C 387.200 125.962,387.020 125.600,386.800 125.600 C 386.580 125.600,386.400 125.240,386.400 124.800 C 386.400 124.360,386.220 124.000,386.000 124.000 C 385.780 124.000,385.600 123.561,385.600 123.024 C 385.600 122.487,385.420 121.936,385.200 121.800 C 384.980 121.664,384.800 121.203,384.800 120.776 C 384.800 120.349,384.620 120.000,384.400 120.000 C 384.180 120.000,384.000 119.640,384.000 119.200 C 384.000 118.760,383.820 118.400,383.600 118.400 C 383.380 118.400,383.200 118.040,383.200 117.600 C 383.200 117.160,383.020 116.800,382.800 116.800 C 382.580 116.800,382.401 116.485,382.403 116.100 C 382.407 115.325,379.186 108.678,378.704 108.467 C 378.537 108.393,378.400 107.988,378.400 107.567 C 378.400 107.145,378.220 106.800,378.000 106.800 C 377.780 106.800,377.600 106.440,377.600 106.000 C 377.600 105.560,377.420 105.200,377.200 105.200 C 376.980 105.200,376.800 104.964,376.800 104.675 C 376.800 104.387,376.469 103.796,376.065 103.362 C 375.661 102.928,375.199 102.050,375.039 101.411 C 374.878 100.772,374.399 99.760,373.973 99.163 C 373.548 98.565,373.200 97.879,373.200 97.638 C 373.200 97.397,373.020 97.200,372.800 97.200 C 372.580 97.200,372.400 97.007,372.400 96.772 C 372.400 96.537,371.860 95.559,371.200 94.600 C 370.540 93.641,370.000 92.703,370.000 92.516 C 370.000 92.329,369.640 91.917,369.200 91.600 C 368.760 91.283,368.400 90.743,368.400 90.400 C 368.400 90.057,368.040 89.517,367.600 89.200 C 367.160 88.883,366.800 88.343,366.800 88.000 C 366.800 87.657,366.440 87.117,366.000 86.800 C 365.560 86.483,365.200 85.943,365.200 85.600 C 365.200 85.257,364.840 84.717,364.400 84.400 C 363.960 84.083,363.600 83.620,363.600 83.371 C 363.600 83.122,363.060 82.354,362.400 81.663 C 361.740 80.972,361.200 80.208,361.200 79.964 C 361.200 79.720,360.660 79.017,360.000 78.400 C 359.340 77.783,358.800 77.126,358.800 76.939 C 358.800 76.753,358.080 75.812,357.200 74.849 C 356.320 73.887,355.600 72.946,355.600 72.760 C 355.600 72.574,354.833 71.651,353.895 70.711 C 352.957 69.770,351.745 68.370,351.201 67.600 C 350.658 66.830,348.410 64.439,346.207 62.287 C 341.389 57.582,342.418 58.611,337.713 53.793 C 335.561 51.590,333.172 49.342,332.405 48.799 C 331.638 48.255,330.135 46.953,329.065 45.905 C 327.995 44.857,326.949 44.000,326.741 44.000 C 326.534 44.000,325.930 43.595,325.401 43.100 C 323.937 41.731,323.260 41.200,322.977 41.200 C 322.836 41.200,322.217 40.660,321.600 40.000 C 320.983 39.340,320.280 38.800,320.036 38.800 C 319.792 38.800,319.028 38.260,318.337 37.600 C 317.646 36.940,316.878 36.400,316.629 36.400 C 316.380 36.400,315.917 36.040,315.600 35.600 C 315.283 35.160,314.743 34.800,314.400 34.800 C 314.057 34.800,313.517 34.440,313.200 34.000 C 312.883 33.560,312.343 33.200,312.000 33.200 C 311.657 33.200,311.117 32.840,310.800 32.400 C 310.483 31.960,309.943 31.600,309.600 31.600 C 309.257 31.600,308.717 31.240,308.400 30.800 C 308.083 30.360,307.671 30.000,307.484 30.000 C 307.297 30.000,306.359 29.460,305.400 28.800 C 304.441 28.140,303.478 27.600,303.261 27.600 C 303.044 27.600,302.807 27.465,302.733 27.300 C 302.553 26.895,298.611 24.800,298.029 24.800 C 297.775 24.800,297.180 24.440,296.708 24.000 C 296.236 23.560,295.613 23.200,295.325 23.200 C 295.036 23.200,294.800 23.020,294.800 22.800 C 294.800 22.580,294.440 22.400,294.000 22.400 C 293.560 22.400,293.200 22.220,293.200 22.000 C 293.200 21.780,292.840 21.600,292.400 21.600 C 291.960 21.600,291.599 21.465,291.599 21.300 C 291.598 21.135,290.608 20.550,289.400 20.000 C 288.192 19.450,287.202 18.865,287.201 18.700 C 287.201 18.535,286.928 18.400,286.595 18.400 C 286.007 18.400,285.582 18.233,283.705 17.262 C 283.213 17.008,282.538 16.800,282.205 16.800 C 281.872 16.800,281.600 16.620,281.600 16.400 C 281.600 16.180,281.240 16.000,280.800 16.000 C 280.360 16.000,280.000 15.820,280.000 15.600 C 280.000 15.380,279.640 15.200,279.200 15.200 C 278.760 15.200,278.400 15.020,278.400 14.800 C 278.400 14.580,277.860 14.400,277.200 14.400 C 276.540 14.400,276.000 14.220,276.000 14.000 C 276.000 13.780,275.640 13.600,275.200 13.600 C 274.760 13.600,274.400 13.420,274.400 13.200 C 274.400 12.980,274.038 12.800,273.595 12.800 C 273.152 12.800,272.477 12.641,272.095 12.447 C 271.713 12.252,270.860 11.871,270.200 11.600 C 269.540 11.329,268.687 10.948,268.305 10.753 C 267.923 10.559,267.336 10.400,267.000 10.400 C 266.664 10.400,266.077 10.237,265.695 10.037 C 264.553 9.440,260.778 8.400,259.754 8.400 C 259.229 8.400,258.800 8.220,258.800 8.000 C 258.800 7.780,258.170 7.600,257.400 7.600 C 256.630 7.600,256.000 7.420,256.000 7.200 C 256.000 6.980,255.471 6.800,254.824 6.800 C 254.177 6.800,253.536 6.620,253.400 6.400 C 253.264 6.180,252.533 6.000,251.776 6.000 C 251.019 6.000,250.400 5.820,250.400 5.600 C 250.400 5.380,249.680 5.200,248.800 5.200 C 247.920 5.200,247.200 5.020,247.200 4.800 C 247.200 4.580,246.491 4.400,245.624 4.400 C 244.757 4.400,243.936 4.220,243.800 4.000 C 243.664 3.780,242.753 3.600,241.776 3.600 C 240.799 3.600,240.000 3.420,240.000 3.200 C 240.000 2.980,239.100 2.800,238.000 2.800 C 236.900 2.800,236.000 2.620,236.000 2.400 C 236.000 2.178,234.941 2.000,233.624 2.000 C 232.317 2.000,231.136 1.820,231.000 1.600 C 230.864 1.380,229.518 1.200,228.010 1.200 C 226.193 1.200,225.211 1.034,225.103 0.708 C 224.941 0.222,187.291 -0.126,178.300 0.275 M215.121 107.160 C 220.430 109.868,220.400 109.709,220.400 135.396 C 220.400 147.388,220.529 157.200,220.686 157.200 C 220.843 157.200,224.128 154.061,227.986 150.225 C 232.790 145.448,235.567 142.993,236.800 142.434 C 245.171 138.637,253.236 148.164,248.224 155.928 C 246.817 158.108,216.832 187.797,215.200 188.627 C 213.482 189.500,209.298 189.589,207.714 188.785 C 205.870 187.850,204.683 186.766,192.200 174.611 C 185.600 168.185,178.614 161.425,176.676 159.589 C 169.641 152.925,169.632 145.534,176.655 142.201 C 181.473 139.914,184.019 141.128,193.441 150.200 C 197.554 154.160,201.157 157.457,201.447 157.527 C 201.878 157.631,201.995 153.498,202.087 134.914 L 202.200 112.173 203.607 110.215 C 206.209 106.593,211.341 105.231,215.121 107.160 M112.625 124.778 C 133.528 128.231,134.572 128.408,136.006 128.744 C 141.502 130.032,144.529 133.482,146.409 140.600 C 146.874 142.360,147.512 144.745,147.827 145.900 C 148.142 147.055,148.658 148.945,148.973 150.100 C 150.151 154.418,151.735 160.140,153.209 165.400 C 153.393 166.060,153.930 168.040,154.400 169.800 C 154.870 171.560,155.407 173.540,155.593 174.200 C 155.779 174.860,156.215 176.438,156.562 177.706 C 156.909 178.974,158.196 183.654,159.421 188.106 C 160.646 192.558,162.113 197.910,162.679 200.000 C 163.579 203.320,164.330 206.038,165.609 210.600 C 165.793 211.260,166.330 213.240,166.800 215.000 C 167.270 216.760,167.838 218.830,168.061 219.600 C 168.283 220.370,168.561 221.489,168.676 222.087 C 168.792 222.685,169.112 223.361,169.387 223.589 C 170.280 224.330,250.839 223.947,251.216 223.200 C 251.382 222.870,251.919 221.250,252.408 219.600 C 252.897 217.950,253.443 216.150,253.623 215.600 C 253.802 215.050,254.515 212.710,255.208 210.400 C 255.901 208.090,257.246 203.680,258.197 200.600 C 259.148 197.520,260.494 193.110,261.189 190.800 C 261.883 188.490,262.608 186.150,262.799 185.600 C 262.989 185.050,263.540 183.250,264.022 181.600 C 267.327 170.280,269.479 167.815,276.000 167.875 C 284.628 167.955,288.614 174.542,285.756 184.000 C 285.191 185.870,284.579 187.940,284.397 188.600 C 284.215 189.260,283.678 191.060,283.204 192.600 C 282.730 194.140,281.833 197.110,281.211 199.200 C 280.588 201.290,278.886 206.960,277.428 211.800 C 275.971 216.640,274.319 222.130,273.758 224.000 C 273.198 225.870,272.198 229.200,271.537 231.400 C 268.905 240.166,267.448 242.595,263.708 244.452 L 261.800 245.400 209.800 245.400 L 157.800 245.400 156.000 244.446 C 153.609 243.179,152.184 241.637,151.054 239.096 C 150.165 237.098,149.881 236.256,148.862 232.600 C 148.617 231.720,148.060 229.740,147.625 228.200 C 147.190 226.660,146.570 224.410,146.246 223.200 C 145.923 221.990,144.734 217.670,143.603 213.600 C 142.472 209.530,141.299 205.300,140.996 204.200 C 138.979 196.870,137.330 190.909,136.793 189.000 C 136.607 188.340,136.070 186.360,135.600 184.600 C 135.130 182.840,134.590 180.860,134.400 180.200 C 134.210 179.540,133.670 177.560,133.200 175.800 C 132.730 174.040,132.190 172.060,132.000 171.400 C 131.810 170.740,131.297 168.850,130.859 167.200 C 129.098 160.563,127.758 155.716,126.570 151.680 C 125.838 149.191,125.468 148.986,120.679 148.409 C 117.178 147.986,114.068 147.509,110.200 146.800 C 108.880 146.558,106.810 146.200,105.600 146.005 C 96.491 144.533,92.502 143.430,90.800 141.912 C 86.075 137.700,85.564 130.625,89.663 126.178 C 93.392 122.133,95.742 121.989,112.625 124.778 M179.480 255.016 C 200.641 262.980,195.497 293.600,172.999 293.600 C 155.304 293.600,146.483 272.306,158.995 259.795 C 164.372 254.417,172.718 252.470,179.480 255.016 M250.153 254.940 C 271.345 262.632,266.256 293.600,243.800 293.600 C 226.283 293.600,217.373 273.166,229.250 260.231 C 234.402 254.620,243.162 252.402,250.153 254.940 "
            stroke="none"
            fill="#faeb14"
            fill-rule="evenodd"
          ></path>
        </g>
      </svg>
    </div>
  );
};
