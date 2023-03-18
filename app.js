const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

onload = () => {
  testData = `
    {
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
          {
            "dt": 1678147200,
            "main": {
              "temp": 271.43,
              "feels_like": 271.43,
              "temp_min": 270.14,
              "temp_max": 271.43,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1022,
              "humidity": 61,
              "temp_kf": 1.29
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 0
            },
            "wind": {
              "speed": 0.99,
              "deg": 0,
              "gust": 1.24
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-07 00:00:00"
          },
          {
            "dt": 1678158000,
            "main": {
              "temp": 270.35,
              "feels_like": 270.35,
              "temp_min": 268.2,
              "temp_max": 270.35,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1021,
              "humidity": 73,
              "temp_kf": 2.15
            },
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
              }
            ],
            "clouds": {
              "all": 33
            },
            "wind": {
              "speed": 0.55,
              "deg": 108,
              "gust": 0.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-07 03:00:00"
          },
          {
            "dt": 1678168800,
            "main": {
              "temp": 267.4,
              "feels_like": 267.4,
              "temp_min": 265.38,
              "temp_max": 267.4,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1022,
              "humidity": 83,
              "temp_kf": 2.02
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 66
            },
            "wind": {
              "speed": 0.92,
              "deg": 117,
              "gust": 0.83
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-07 06:00:00"
          },
          {
            "dt": 1678179600,
            "main": {
              "temp": 264.97,
              "feels_like": 264.97,
              "temp_min": 264.97,
              "temp_max": 264.97,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1022,
              "humidity": 91,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 88
            },
            "wind": {
              "speed": 0.77,
              "deg": 108,
              "gust": 0.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-07 09:00:00"
          },
          {
            "dt": 1678190400,
            "main": {
              "temp": 263.88,
              "feels_like": 263.88,
              "temp_min": 263.88,
              "temp_max": 263.88,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 91,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 92
            },
            "wind": {
              "speed": 0.71,
              "deg": 104,
              "gust": 0.72
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-07 12:00:00"
          },
          {
            "dt": 1678201200,
            "main": {
              "temp": 265.87,
              "feels_like": 265.87,
              "temp_min": 265.87,
              "temp_max": 265.87,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 91,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 69
            },
            "wind": {
              "speed": 0.96,
              "deg": 57,
              "gust": 1.5
            },
            "visibility": 7141,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-07 15:00:00"
          },
          {
            "dt": 1678212000,
            "main": {
              "temp": 266.83,
              "feels_like": 266.83,
              "temp_min": 266.83,
              "temp_max": 266.83,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 93,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 67
            },
            "wind": {
              "speed": 0.5,
              "deg": 54,
              "gust": 1
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-07 18:00:00"
          },
          {
            "dt": 1678222800,
            "main": {
              "temp": 270,
              "feels_like": 270,
              "temp_min": 270,
              "temp_max": 270,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 95,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 55
            },
            "wind": {
              "speed": 0.92,
              "deg": 299,
              "gust": 0.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-07 21:00:00"
          },
          {
            "dt": 1678233600,
            "main": {
              "temp": 272.02,
              "feels_like": 272.02,
              "temp_min": 272.02,
              "temp_max": 272.02,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1019,
              "humidity": 97,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
              }
            ],
            "clouds": {
              "all": 40
            },
            "wind": {
              "speed": 0.77,
              "deg": 295,
              "gust": 0.72
            },
            "visibility": 5771,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-08 00:00:00"
          },
          {
            "dt": 1678244400,
            "main": {
              "temp": 270.34,
              "feels_like": 270.34,
              "temp_min": 270.34,
              "temp_max": 270.34,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1019,
              "humidity": 99,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 60
            },
            "wind": {
              "speed": 0.8,
              "deg": 157,
              "gust": 0.87
            },
            "visibility": 7405,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-08 03:00:00"
          },
          {
            "dt": 1678255200,
            "main": {
              "temp": 269.36,
              "feels_like": 269.36,
              "temp_min": 269.36,
              "temp_max": 269.36,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1019,
              "humidity": 94,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 70
            },
            "wind": {
              "speed": 0.28,
              "deg": 258,
              "gust": 0.62
            },
            "visibility": 4506,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-08 06:00:00"
          },
          {
            "dt": 1678266000,
            "main": {
              "temp": 268.56,
              "feels_like": 268.56,
              "temp_min": 268.56,
              "temp_max": 268.56,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 94,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 76
            },
            "wind": {
              "speed": 0.19,
              "deg": 39,
              "gust": 0.82
            },
            "visibility": 3600,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-08 09:00:00"
          },
          {
            "dt": 1678276800,
            "main": {
              "temp": 269.13,
              "feels_like": 269.13,
              "temp_min": 269.13,
              "temp_max": 269.13,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 92,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 81
            },
            "wind": {
              "speed": 0.8,
              "deg": 104,
              "gust": 0.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-08 12:00:00"
          },
          {
            "dt": 1678287600,
            "main": {
              "temp": 268.7,
              "feels_like": 268.7,
              "temp_min": 268.7,
              "temp_max": 268.7,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1019,
              "humidity": 92,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 97
            },
            "wind": {
              "speed": 0.57,
              "deg": 95,
              "gust": 0.57
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-08 15:00:00"
          },
          {
            "dt": 1678298400,
            "main": {
              "temp": 269.71,
              "feels_like": 269.71,
              "temp_min": 269.71,
              "temp_max": 269.71,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 92,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 97
            },
            "wind": {
              "speed": 0.55,
              "deg": 93,
              "gust": 0.63
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-08 18:00:00"
          },
          {
            "dt": 1678309200,
            "main": {
              "temp": 271.94,
              "feels_like": 271.94,
              "temp_min": 271.94,
              "temp_max": 271.94,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 97,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 82
            },
            "wind": {
              "speed": 0.73,
              "deg": 309,
              "gust": 0.57
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-08 21:00:00"
          },
          {
            "dt": 1678320000,
            "main": {
              "temp": 272.82,
              "feels_like": 272.82,
              "temp_min": 272.82,
              "temp_max": 272.82,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 96,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 91
            },
            "wind": {
              "speed": 0.23,
              "deg": 267,
              "gust": 0.33
            },
            "visibility": 1741,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-09 00:00:00"
          },
          {
            "dt": 1678330800,
            "main": {
              "temp": 272.93,
              "feels_like": 272.93,
              "temp_min": 272.93,
              "temp_max": 272.93,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 97,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 0.56,
              "deg": 251,
              "gust": 0.68
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-09 03:00:00"
          },
          {
            "dt": 1678341600,
            "main": {
              "temp": 269.68,
              "feels_like": 269.68,
              "temp_min": 269.68,
              "temp_max": 269.68,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 95,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 96
            },
            "wind": {
              "speed": 1.05,
              "deg": 150,
              "gust": 1.1
            },
            "visibility": 7927,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-09 06:00:00"
          },
          {
            "dt": 1678352400,
            "main": {
              "temp": 268.6,
              "feels_like": 265.94,
              "temp_min": 268.6,
              "temp_max": 268.6,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1022,
              "humidity": 94,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 77
            },
            "wind": {
              "speed": 1.65,
              "deg": 139,
              "gust": 1.74
            },
            "visibility": 7250,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-09 09:00:00"
          },
          {
            "dt": 1678363200,
            "main": {
              "temp": 267.84,
              "feels_like": 265.4,
              "temp_min": 267.84,
              "temp_max": 267.84,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1022,
              "humidity": 92,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 85
            },
            "wind": {
              "speed": 1.47,
              "deg": 118,
              "gust": 1.29
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-09 12:00:00"
          },
          {
            "dt": 1678374000,
            "main": {
              "temp": 267.52,
              "feels_like": 264.56,
              "temp_min": 267.52,
              "temp_max": 267.52,
              "pressure": 1026,
              "sea_level": 1026,
              "grnd_level": 1022,
              "humidity": 91,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 66
            },
            "wind": {
              "speed": 1.73,
              "deg": 113,
              "gust": 1.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-09 15:00:00"
          },
          {
            "dt": 1678384800,
            "main": {
              "temp": 270.81,
              "feels_like": 270.81,
              "temp_min": 270.81,
              "temp_max": 270.81,
              "pressure": 1025,
              "sea_level": 1025,
              "grnd_level": 1021,
              "humidity": 90,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 74
            },
            "wind": {
              "speed": 1.01,
              "deg": 97,
              "gust": 0.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-09 18:00:00"
          },
          {
            "dt": 1678395600,
            "main": {
              "temp": 272.75,
              "feels_like": 271.1,
              "temp_min": 272.75,
              "temp_max": 272.75,
              "pressure": 1024,
              "sea_level": 1024,
              "grnd_level": 1020,
              "humidity": 95,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "light snow",
                "icon": "13d"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 1.4,
              "deg": 12,
              "gust": 1.59
            },
            "visibility": 5774,
            "pop": 0.28,
            "snow": {
              "3h": 0.12
            },
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-09 21:00:00"
          },
          {
            "dt": 1678406400,
            "main": {
              "temp": 273.09,
              "feels_like": 270.53,
              "temp_min": 273.09,
              "temp_max": 273.09,
              "pressure": 1023,
              "sea_level": 1023,
              "grnd_level": 1019,
              "humidity": 98,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 98
            },
            "wind": {
              "speed": 2.08,
              "deg": 349,
              "gust": 2.39
            },
            "visibility": 962,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-10 00:00:00"
          },
          {
            "dt": 1678417200,
            "main": {
              "temp": 272.65,
              "feels_like": 270.28,
              "temp_min": 272.65,
              "temp_max": 272.65,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1018,
              "humidity": 92,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 98
            },
            "wind": {
              "speed": 1.87,
              "deg": 348,
              "gust": 2.52
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-10 03:00:00"
          },
          {
            "dt": 1678428000,
            "main": {
              "temp": 271.82,
              "feels_like": 271.82,
              "temp_min": 271.82,
              "temp_max": 271.82,
              "pressure": 1021,
              "sea_level": 1021,
              "grnd_level": 1017,
              "humidity": 96,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 99
            },
            "wind": {
              "speed": 1.05,
              "deg": 325,
              "gust": 1.4
            },
            "visibility": 7853,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-10 06:00:00"
          },
          {
            "dt": 1678438800,
            "main": {
              "temp": 271.28,
              "feels_like": 271.28,
              "temp_min": 271.28,
              "temp_max": 271.28,
              "pressure": 1019,
              "sea_level": 1019,
              "grnd_level": 1015,
              "humidity": 96,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 100
            },
            "wind": {
              "speed": 0.36,
              "deg": 332,
              "gust": 1.06
            },
            "visibility": 1086,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-10 09:00:00"
          },
          {
            "dt": 1678449600,
            "main": {
              "temp": 267.07,
              "feels_like": 267.07,
              "temp_min": 267.07,
              "temp_max": 267.07,
              "pressure": 1018,
              "sea_level": 1018,
              "grnd_level": 1014,
              "humidity": 97,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 600,
                "main": "Snow",
                "description": "light snow",
                "icon": "13n"
              }
            ],
            "clouds": {
              "all": 99
            },
            "wind": {
              "speed": 1.19,
              "deg": 346,
              "gust": 3.11
            },
            "visibility": 3799,
            "pop": 0.31,
            "snow": {
              "3h": 0.23
            },
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-10 12:00:00"
          },
          {
            "dt": 1678460400,
            "main": {
              "temp": 264.8,
              "feels_like": 264.8,
              "temp_min": 264.8,
              "temp_max": 264.8,
              "pressure": 1017,
              "sea_level": 1017,
              "grnd_level": 1013,
              "humidity": 98,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 71
            },
            "wind": {
              "speed": 1.2,
              "deg": 10,
              "gust": 3.06
            },
            "visibility": 2971,
            "pop": 0.06,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-10 15:00:00"
          },
          {
            "dt": 1678471200,
            "main": {
              "temp": 265.43,
              "feels_like": 265.43,
              "temp_min": 265.43,
              "temp_max": 265.43,
              "pressure": 1015,
              "sea_level": 1015,
              "grnd_level": 1011,
              "humidity": 94,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 76
            },
            "wind": {
              "speed": 1.11,
              "deg": 6,
              "gust": 4.21
            },
            "visibility": 10000,
            "pop": 0.04,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-10 18:00:00"
          },
          {
            "dt": 1678482000,
            "main": {
              "temp": 270.22,
              "feels_like": 265.9,
              "temp_min": 270.22,
              "temp_max": 270.22,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1010,
              "humidity": 81,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
              }
            ],
            "clouds": {
              "all": 41
            },
            "wind": {
              "speed": 3.24,
              "deg": 8,
              "gust": 7.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-10 21:00:00"
          },
          {
            "dt": 1678492800,
            "main": {
              "temp": 272.33,
              "feels_like": 267.64,
              "temp_min": 272.33,
              "temp_max": 272.33,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1008,
              "humidity": 80,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
              }
            ],
            "clouds": {
              "all": 37
            },
            "wind": {
              "speed": 4.32,
              "deg": 352,
              "gust": 8.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-11 00:00:00"
          },
          {
            "dt": 1678503600,
            "main": {
              "temp": 270.71,
              "feels_like": 264.33,
              "temp_min": 270.71,
              "temp_max": 270.71,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1007,
              "humidity": 78,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04d"
              }
            ],
            "clouds": {
              "all": 54
            },
            "wind": {
              "speed": 6.52,
              "deg": 353,
              "gust": 12.09
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-11 03:00:00"
          },
          {
            "dt": 1678514400,
            "main": {
              "temp": 268.22,
              "feels_like": 261.22,
              "temp_min": 268.22,
              "temp_max": 268.22,
              "pressure": 1011,
              "sea_level": 1011,
              "grnd_level": 1007,
              "humidity": 76,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 77
            },
            "wind": {
              "speed": 6.95,
              "deg": 3,
              "gust": 13.64
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-11 06:00:00"
          },
          {
            "dt": 1678525200,
            "main": {
              "temp": 266.21,
              "feels_like": 259.63,
              "temp_min": 266.21,
              "temp_max": 266.21,
              "pressure": 1012,
              "sea_level": 1012,
              "grnd_level": 1008,
              "humidity": 77,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 81
            },
            "wind": {
              "speed": 4.89,
              "deg": 6,
              "gust": 9.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-11 09:00:00"
          },
          {
            "dt": 1678536000,
            "main": {
              "temp": 263.79,
              "feels_like": 257,
              "temp_min": 263.79,
              "temp_max": 263.79,
              "pressure": 1013,
              "sea_level": 1013,
              "grnd_level": 1009,
              "humidity": 80,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
              }
            ],
            "clouds": {
              "all": 55
            },
            "wind": {
              "speed": 4.41,
              "deg": 358,
              "gust": 9.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-11 12:00:00"
          },
          {
            "dt": 1678546800,
            "main": {
              "temp": 260.91,
              "feels_like": 254.93,
              "temp_min": 260.91,
              "temp_max": 260.91,
              "pressure": 1014,
              "sea_level": 1014,
              "grnd_level": 1010,
              "humidity": 81,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
              }
            ],
            "clouds": {
              "all": 11
            },
            "wind": {
              "speed": 3.01,
              "deg": 13,
              "gust": 6.79
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "n"
            },
            "dt_txt": "2023-03-11 15:00:00"
          },
          {
            "dt": 1678557600,
            "main": {
              "temp": 261.26,
              "feels_like": 255.19,
              "temp_min": 261.26,
              "temp_max": 261.26,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1012,
              "humidity": 81,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 6
            },
            "wind": {
              "speed": 3.14,
              "deg": 18,
              "gust": 7.03
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-11 18:00:00"
          },
          {
            "dt": 1678568400,
            "main": {
              "temp": 266.36,
              "feels_like": 260.78,
              "temp_min": 266.36,
              "temp_max": 266.36,
              "pressure": 1016,
              "sea_level": 1016,
              "grnd_level": 1012,
              "humidity": 80,
              "temp_kf": 0
            },
            "weather": [
              {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
              }
            ],
            "clouds": {
              "all": 2
            },
            "wind": {
              "speed": 3.71,
              "deg": 359,
              "gust": 6.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
              "pod": "d"
            },
            "dt_txt": "2023-03-11 21:00:00"
          }
        ],
        "city": {
          "id": 5879400,
          "name": "Anchorage",
          "coord": {
            "lat": 61.216,
            "lon": -149.894
          },
          "country": "US",
          "population": 291826,
          "timezone": -32400,
          "sunrise": 1678121115,
          "sunset": 1678160203
        }
      }`;

  testData = JSON.parse(testData);

  info = new WeatherInformation(testData);

  console.log(info.HourlyWeatherInformation[9]);
};

function processRequest() {
  const data = document.getElementById('locationInput').value;
  line = data.split(",");

  // If is a state
  if (isNaN(line[0])) {
    console.log("is city, state");
    info = getGeoLoationByCity(line[0], line[1]);
  } else {
    console.log("is zipcode");
    info = getGeoLoationByZipcode(line[0]);
  }
}

const getGeoLoationByCity = (
  cityName,
  stateName,
  countryCode = "US",
  limit = 1
) => {
  url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateName},${countryCode}&limit=${limit}&appid=${API_KEY}`;
  return fetchWeatherData(url);
};

async function getGeoLoationByZipcode(zipcode, countryCode = "US") {
  url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},${countryCode}&appid=${API_KEY}`;
  return await fetchWeatherData(url);
}

async function fetchWeatherData(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  console.log(`Request to: ${url}: successful`);

  getWeatherForcast(data.lat, data.lon);
}

// Gettings temperature and weather for city
async function fetchWeatherData(latitude, longitude) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data = await response.json();
  console.log(`Request to: ${url}: successful`);

  WeatherCollectionInformation = WeatherInformation(data);
  displayWeatherInformation(WeatherCollectionInformation);
}

// Use setText to map API data to weather params
function displayWeatherInformation(WeatherCollectionInformation) {

}

class WeatherInformation {
  weatherInfoCollection;

  constructor(json) {
    this.count = json.list.length;
    this.date = this.getDateInformation(json, 0);

    this.weatherInfoCollection = [];
    var dayweatherCollectionInfo = [];

    for (var i = 0; i < this.count; i++) {
      this.currentDate = this.getDateInformation(json, i);

      if (this.currentDate != this.date) {
        // We are processing the following days weather information.
        // We push the collection of infomration from the last <x> days
        // into the main list and reset the days weather information and
        // continue.
        this.date = this.currentDate;
        this.weatherInfoCollection.push(this.dayweatherCollectionInfo);
        var dayweatherCollectionInfo = DayWeatherInformation(date);
      }

      this.data = this.getWeatherInformation(json, i);
      dayweatherCollectionInfo.addHourlyWeatherInformation(this.data);
    }
  }

  getDateInformation(jsonInfo, index) {
    return jsonInfo.list[index].dt_txt.split(" ")[0];
  }

  getWeatherInformation(json, index) {
    return json.list[index];
  }
}

class DayWeatherInformation {
  date;

  weatherDataIndex;
  weatherData;



  constructor(date) {
    this.date = date;

    this.weatherDataIndex = 0;
    this.weatherData = new Array();

    this.addHourlyWeatherInformation = this.addHourlyWeatherInformation;
  }

  addHourlyWeatherInformation = function(jsonInfo) {
    this.data = new HourlyWeatherInformation(jsonInfo);
    this.weatherData.push(data);
    this.weatherDataIndex++;
  }
}

class HourlyWeatherInformation {
  time = "";

  // Main infromation
  actual_tmp = "";
  feels_like_tmp = "";
  temp_min = "";
  temp_max = "";
  pressure = "";
  humidity = "";
  temp_kf = "";

  // Weather information
  weather_id = "";
  weather_main = "";
  weather_description = "";
  weather_icon = "";

  // Clouds
  clouds = "";

  // Wind
  wind_speed = "";
  wind_deg = "";
  wind_gust = "";

  // Misc information
  visibility = "";
  pop = "";
  portionOfDay = ""; // "d" - day, "n" - night

  constructor(jsonData) {
    this.ProcessTime(jsonData);

    this.actual_tmp = jsonData.main.temp;
    this.feels_like_tmp = jsonData.main.feels_like;
    this.temp_min = jsonData.main.temp_min;
    this.temp_max = jsonData.main.temp_max;
    this.pressure = jsonData.main.pressure;
    this.humidity = jsonData.main.humidity;
    this.temp_kf = jsonData.main.temp_kf;

    this.weather_id = jsonData.weather[0].id;
    this.weather_main = jsonData.weather[0].main;
    this.weather_description = jsonData.weather[0].description;
    this.weather_icon = jsonData.weather[0].icon;

    this.clouds = jsonData.clouds.all;

    this.wind_speed = jsonData.wind.speed;
    this.wind_deg = jsonData.wind.deg;
    this.wind_gust = jsonData.wind.gust;

    this.visibility = jsonData.visibility;
    this.pop = jsonData.pop;
    this.portionOfDay = jsonData.sys.pod;
  }

  ProcessTime(jsonData) {
    this.time = jsonData.dt_txt.split(" ")[1].split(":")[0];

    if (this.time > 12) {
      this.time = (this.time - 12).toString() + "pm";
    } else if (this.time == 0) {
      this.time = "12am";
    } else {
      this.time = this.time.toString() + "am";
    }
  }
}
