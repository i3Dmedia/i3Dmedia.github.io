var sDs = {
    "circle": {
  "name": "circle",
  "model": {
    "scene": {
      "name":"circle",
      "filters": { 
        "year": {"range": {"a":0, "b":"INF"}},
        "count": {"range": {"a":0, "b":"INF"}}
      },
      "rendering": "template", 
      "update": true,
      "x": "50", 
      "y": "50", 
      "r": "30", 
      "fill": "red"
    }
  }
},



    "stocks": {
    "name": "stocks",
    "model": {
      "scene": {
        "filters": { 
          "year": {"range": {"a":0, "b":"INF"}},
          "count": {"range": {"a":0, "b":"INF"}}
        }
      },
      "stocks": {
        "rendering": "vega",
        "update":true,
        "width": 100,
        "height": 100,
        "data": [
          {
            "name": "stocks",
            "format": {"type": "json", "parse": {"price":"number", "date":"date"}},
            "values": [            
  {
    "symbol":"MSFT",
    "date":"Jan 1 2000",
    "price":39.81
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2000",
    "price":36.35
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2000",
    "price":43.22
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2000",
    "price":28.37
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2000",
    "price":25.45
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2000",
    "price":32.54
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2000",
    "price":28.4
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2000",
    "price":28.4
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2000",
    "price":24.53
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2000",
    "price":28.02
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2000",
    "price":23.34
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2000",
    "price":17.65
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2001",
    "price":24.84
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2001",
    "price":24
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2001",
    "price":22.25
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2001",
    "price":27.56
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2001",
    "price":28.14
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2001",
    "price":29.7
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2001",
    "price":26.93
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2001",
    "price":23.21
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2001",
    "price":20.82
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2001",
    "price":23.65
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2001",
    "price":26.12
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2001",
    "price":26.95
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2002",
    "price":25.92
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2002",
    "price":23.73
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2002",
    "price":24.53
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2002",
    "price":21.26
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2002",
    "price":20.71
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2002",
    "price":22.25
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2002",
    "price":19.52
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2002",
    "price":19.97
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2002",
    "price":17.79
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2002",
    "price":21.75
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2002",
    "price":23.46
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2002",
    "price":21.03
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2003",
    "price":19.31
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2003",
    "price":19.34
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2003",
    "price":19.76
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2003",
    "price":20.87
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2003",
    "price":20.09
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2003",
    "price":20.93
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2003",
    "price":21.56
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2003",
    "price":21.65
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2003",
    "price":22.69
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2003",
    "price":21.45
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2003",
    "price":21.1
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2003",
    "price":22.46
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2004",
    "price":22.69
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2004",
    "price":21.77
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2004",
    "price":20.46
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2004",
    "price":21.45
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2004",
    "price":21.53
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2004",
    "price":23.44
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2004",
    "price":23.38
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2004",
    "price":22.47
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2004",
    "price":22.76
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2004",
    "price":23.02
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2004",
    "price":24.6
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2004",
    "price":24.52
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2005",
    "price":24.11
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2005",
    "price":23.15
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2005",
    "price":22.24
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2005",
    "price":23.28
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2005",
    "price":23.82
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2005",
    "price":22.93
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2005",
    "price":23.64
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2005",
    "price":25.35
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2005",
    "price":23.83
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2005",
    "price":23.8
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2005",
    "price":25.71
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2005",
    "price":24.29
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2006",
    "price":26.14
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2006",
    "price":25.04
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2006",
    "price":25.36
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2006",
    "price":22.5
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2006",
    "price":21.19
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2006",
    "price":21.8
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2006",
    "price":22.51
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2006",
    "price":24.13
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2006",
    "price":25.68
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2006",
    "price":26.96
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2006",
    "price":27.66
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2006",
    "price":28.13
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2007",
    "price":29.07
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2007",
    "price":26.63
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2007",
    "price":26.35
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2007",
    "price":28.3
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2007",
    "price":29.11
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2007",
    "price":27.95
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2007",
    "price":27.5
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2007",
    "price":27.34
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2007",
    "price":28.04
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2007",
    "price":35.03
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2007",
    "price":32.09
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2007",
    "price":34
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2008",
    "price":31.13
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2008",
    "price":26.07
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2008",
    "price":27.21
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2008",
    "price":27.34
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2008",
    "price":27.25
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2008",
    "price":26.47
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2008",
    "price":24.75
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2008",
    "price":26.36
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2008",
    "price":25.78
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2008",
    "price":21.57
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2008",
    "price":19.66
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2008",
    "price":18.91
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2009",
    "price":16.63
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2009",
    "price":15.81
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2009",
    "price":17.99
  },
  {
    "symbol":"MSFT",
    "date":"Apr 1 2009",
    "price":19.84
  },
  {
    "symbol":"MSFT",
    "date":"May 1 2009",
    "price":20.59
  },
  {
    "symbol":"MSFT",
    "date":"Jun 1 2009",
    "price":23.42
  },
  {
    "symbol":"MSFT",
    "date":"Jul 1 2009",
    "price":23.18
  },
  {
    "symbol":"MSFT",
    "date":"Aug 1 2009",
    "price":24.43
  },
  {
    "symbol":"MSFT",
    "date":"Sep 1 2009",
    "price":25.49
  },
  {
    "symbol":"MSFT",
    "date":"Oct 1 2009",
    "price":27.48
  },
  {
    "symbol":"MSFT",
    "date":"Nov 1 2009",
    "price":29.27
  },
  {
    "symbol":"MSFT",
    "date":"Dec 1 2009",
    "price":30.34
  },
  {
    "symbol":"MSFT",
    "date":"Jan 1 2010",
    "price":28.05
  },
  {
    "symbol":"MSFT",
    "date":"Feb 1 2010",
    "price":28.67
  },
  {
    "symbol":"MSFT",
    "date":"Mar 1 2010",
    "price":28.8
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2000",
    "price":64.56
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2000",
    "price":68.87
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2000",
    "price":67
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2000",
    "price":55.19
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2000",
    "price":48.31
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2000",
    "price":36.31
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2000",
    "price":30.12
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2000",
    "price":41.5
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2000",
    "price":38.44
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2000",
    "price":36.62
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2000",
    "price":24.69
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2000",
    "price":15.56
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2001",
    "price":17.31
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2001",
    "price":10.19
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2001",
    "price":10.23
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2001",
    "price":15.78
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2001",
    "price":16.69
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2001",
    "price":14.15
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2001",
    "price":12.49
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2001",
    "price":8.94
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2001",
    "price":5.97
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2001",
    "price":6.98
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2001",
    "price":11.32
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2001",
    "price":10.82
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2002",
    "price":14.19
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2002",
    "price":14.1
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2002",
    "price":14.3
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2002",
    "price":16.69
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2002",
    "price":18.23
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2002",
    "price":16.25
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2002",
    "price":14.45
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2002",
    "price":14.94
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2002",
    "price":15.93
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2002",
    "price":19.36
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2002",
    "price":23.35
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2002",
    "price":18.89
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2003",
    "price":21.85
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2003",
    "price":22.01
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2003",
    "price":26.03
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2003",
    "price":28.69
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2003",
    "price":35.89
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2003",
    "price":36.32
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2003",
    "price":41.64
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2003",
    "price":46.32
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2003",
    "price":48.43
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2003",
    "price":54.43
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2003",
    "price":53.97
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2003",
    "price":52.62
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2004",
    "price":50.4
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2004",
    "price":43.01
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2004",
    "price":43.28
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2004",
    "price":43.6
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2004",
    "price":48.5
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2004",
    "price":54.4
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2004",
    "price":38.92
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2004",
    "price":38.14
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2004",
    "price":40.86
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2004",
    "price":34.13
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2004",
    "price":39.68
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2004",
    "price":44.29
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2005",
    "price":43.22
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2005",
    "price":35.18
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2005",
    "price":34.27
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2005",
    "price":32.36
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2005",
    "price":35.51
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2005",
    "price":33.09
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2005",
    "price":45.15
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2005",
    "price":42.7
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2005",
    "price":45.3
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2005",
    "price":39.86
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2005",
    "price":48.46
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2005",
    "price":47.15
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2006",
    "price":44.82
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2006",
    "price":37.44
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2006",
    "price":36.53
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2006",
    "price":35.21
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2006",
    "price":34.61
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2006",
    "price":38.68
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2006",
    "price":26.89
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2006",
    "price":30.83
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2006",
    "price":32.12
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2006",
    "price":38.09
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2006",
    "price":40.34
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2006",
    "price":39.46
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2007",
    "price":37.67
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2007",
    "price":39.14
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2007",
    "price":39.79
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2007",
    "price":61.33
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2007",
    "price":69.14
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2007",
    "price":68.41
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2007",
    "price":78.54
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2007",
    "price":79.91
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2007",
    "price":93.15
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2007",
    "price":89.15
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2007",
    "price":90.56
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2007",
    "price":92.64
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2008",
    "price":77.7
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2008",
    "price":64.47
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2008",
    "price":71.3
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2008",
    "price":78.63
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2008",
    "price":81.62
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2008",
    "price":73.33
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2008",
    "price":76.34
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2008",
    "price":80.81
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2008",
    "price":72.76
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2008",
    "price":57.24
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2008",
    "price":42.7
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2008",
    "price":51.28
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2009",
    "price":58.82
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2009",
    "price":64.79
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2009",
    "price":73.44
  },
  {
    "symbol":"AMZN",
    "date":"Apr 1 2009",
    "price":80.52
  },
  {
    "symbol":"AMZN",
    "date":"May 1 2009",
    "price":77.99
  },
  {
    "symbol":"AMZN",
    "date":"Jun 1 2009",
    "price":83.66
  },
  {
    "symbol":"AMZN",
    "date":"Jul 1 2009",
    "price":85.76
  },
  {
    "symbol":"AMZN",
    "date":"Aug 1 2009",
    "price":81.19
  },
  {
    "symbol":"AMZN",
    "date":"Sep 1 2009",
    "price":93.36
  },
  {
    "symbol":"AMZN",
    "date":"Oct 1 2009",
    "price":118.81
  },
  {
    "symbol":"AMZN",
    "date":"Nov 1 2009",
    "price":135.91
  },
  {
    "symbol":"AMZN",
    "date":"Dec 1 2009",
    "price":134.52
  },
  {
    "symbol":"AMZN",
    "date":"Jan 1 2010",
    "price":125.41
  },
  {
    "symbol":"AMZN",
    "date":"Feb 1 2010",
    "price":118.4
  },
  {
    "symbol":"AMZN",
    "date":"Mar 1 2010",
    "price":128.82
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2000",
    "price":100.52
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2000",
    "price":92.11
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2000",
    "price":106.11
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2000",
    "price":99.95
  },
  {
    "symbol":"IBM",
    "date":"May 1 2000",
    "price":96.31
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2000",
    "price":98.33
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2000",
    "price":100.74
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2000",
    "price":118.62
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2000",
    "price":101.19
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2000",
    "price":88.5
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2000",
    "price":84.12
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2000",
    "price":76.47
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2001",
    "price":100.76
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2001",
    "price":89.98
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2001",
    "price":86.63
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2001",
    "price":103.7
  },
  {
    "symbol":"IBM",
    "date":"May 1 2001",
    "price":100.82
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2001",
    "price":102.35
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2001",
    "price":94.87
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2001",
    "price":90.25
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2001",
    "price":82.82
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2001",
    "price":97.58
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2001",
    "price":104.5
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2001",
    "price":109.36
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2002",
    "price":97.54
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2002",
    "price":88.82
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2002",
    "price":94.15
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2002",
    "price":75.82
  },
  {
    "symbol":"IBM",
    "date":"May 1 2002",
    "price":72.97
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2002",
    "price":65.31
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2002",
    "price":63.86
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2002",
    "price":68.52
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2002",
    "price":53.01
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2002",
    "price":71.76
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2002",
    "price":79.16
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2002",
    "price":70.58
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2003",
    "price":71.22
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2003",
    "price":71.13
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2003",
    "price":71.57
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2003",
    "price":77.47
  },
  {
    "symbol":"IBM",
    "date":"May 1 2003",
    "price":80.48
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2003",
    "price":75.42
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2003",
    "price":74.28
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2003",
    "price":75.12
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2003",
    "price":80.91
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2003",
    "price":81.96
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2003",
    "price":83.08
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2003",
    "price":85.05
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2004",
    "price":91.06
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2004",
    "price":88.7
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2004",
    "price":84.41
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2004",
    "price":81.04
  },
  {
    "symbol":"IBM",
    "date":"May 1 2004",
    "price":81.59
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2004",
    "price":81.19
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2004",
    "price":80.19
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2004",
    "price":78.17
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2004",
    "price":79.13
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2004",
    "price":82.84
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2004",
    "price":87.15
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2004",
    "price":91.16
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2005",
    "price":86.39
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2005",
    "price":85.78
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2005",
    "price":84.66
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2005",
    "price":70.77
  },
  {
    "symbol":"IBM",
    "date":"May 1 2005",
    "price":70.18
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2005",
    "price":68.93
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2005",
    "price":77.53
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2005",
    "price":75.07
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2005",
    "price":74.7
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2005",
    "price":76.25
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2005",
    "price":82.98
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2005",
    "price":76.73
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2006",
    "price":75.89
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2006",
    "price":75.09
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2006",
    "price":77.17
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2006",
    "price":77.05
  },
  {
    "symbol":"IBM",
    "date":"May 1 2006",
    "price":75.04
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2006",
    "price":72.15
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2006",
    "price":72.7
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2006",
    "price":76.35
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2006",
    "price":77.26
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2006",
    "price":87.06
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2006",
    "price":86.95
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2006",
    "price":91.9
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2007",
    "price":93.79
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2007",
    "price":88.18
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2007",
    "price":89.44
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2007",
    "price":96.98
  },
  {
    "symbol":"IBM",
    "date":"May 1 2007",
    "price":101.54
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2007",
    "price":100.25
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2007",
    "price":105.4
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2007",
    "price":111.54
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2007",
    "price":112.6
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2007",
    "price":111
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2007",
    "price":100.9
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2007",
    "price":103.7
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2008",
    "price":102.75
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2008",
    "price":109.64
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2008",
    "price":110.87
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2008",
    "price":116.23
  },
  {
    "symbol":"IBM",
    "date":"May 1 2008",
    "price":125.14
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2008",
    "price":114.6
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2008",
    "price":123.74
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2008",
    "price":118.16
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2008",
    "price":113.53
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2008",
    "price":90.24
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2008",
    "price":79.65
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2008",
    "price":82.15
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2009",
    "price":89.46
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2009",
    "price":90.32
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2009",
    "price":95.09
  },
  {
    "symbol":"IBM",
    "date":"Apr 1 2009",
    "price":101.29
  },
  {
    "symbol":"IBM",
    "date":"May 1 2009",
    "price":104.85
  },
  {
    "symbol":"IBM",
    "date":"Jun 1 2009",
    "price":103.01
  },
  {
    "symbol":"IBM",
    "date":"Jul 1 2009",
    "price":116.34
  },
  {
    "symbol":"IBM",
    "date":"Aug 1 2009",
    "price":117
  },
  {
    "symbol":"IBM",
    "date":"Sep 1 2009",
    "price":118.55
  },
  {
    "symbol":"IBM",
    "date":"Oct 1 2009",
    "price":119.54
  },
  {
    "symbol":"IBM",
    "date":"Nov 1 2009",
    "price":125.79
  },
  {
    "symbol":"IBM",
    "date":"Dec 1 2009",
    "price":130.32
  },
  {
    "symbol":"IBM",
    "date":"Jan 1 2010",
    "price":121.85
  },
  {
    "symbol":"IBM",
    "date":"Feb 1 2010",
    "price":127.16
  },
  {
    "symbol":"IBM",
    "date":"Mar 1 2010",
    "price":125.55
  },
  {
    "symbol":"GOOG",
    "date":"Aug 1 2004",
    "price":102.37
  },
  {
    "symbol":"GOOG",
    "date":"Sep 1 2004",
    "price":129.6
  },
  {
    "symbol":"GOOG",
    "date":"Oct 1 2004",
    "price":190.64
  },
  {
    "symbol":"GOOG",
    "date":"Nov 1 2004",
    "price":181.98
  },
  {
    "symbol":"GOOG",
    "date":"Dec 1 2004",
    "price":192.79
  },
  {
    "symbol":"GOOG",
    "date":"Jan 1 2005",
    "price":195.62
  },
  {
    "symbol":"GOOG",
    "date":"Feb 1 2005",
    "price":187.99
  },
  {
    "symbol":"GOOG",
    "date":"Mar 1 2005",
    "price":180.51
  },
  {
    "symbol":"GOOG",
    "date":"Apr 1 2005",
    "price":220
  },
  {
    "symbol":"GOOG",
    "date":"May 1 2005",
    "price":277.27
  },
  {
    "symbol":"GOOG",
    "date":"Jun 1 2005",
    "price":294.15
  },
  {
    "symbol":"GOOG",
    "date":"Jul 1 2005",
    "price":287.76
  },
  {
    "symbol":"GOOG",
    "date":"Aug 1 2005",
    "price":286
  },
  {
    "symbol":"GOOG",
    "date":"Sep 1 2005",
    "price":316.46
  },
  {
    "symbol":"GOOG",
    "date":"Oct 1 2005",
    "price":372.14
  },
  {
    "symbol":"GOOG",
    "date":"Nov 1 2005",
    "price":404.91
  },
  {
    "symbol":"GOOG",
    "date":"Dec 1 2005",
    "price":414.86
  },
  {
    "symbol":"GOOG",
    "date":"Jan 1 2006",
    "price":432.66
  },
  {
    "symbol":"GOOG",
    "date":"Feb 1 2006",
    "price":362.62
  },
  {
    "symbol":"GOOG",
    "date":"Mar 1 2006",
    "price":390
  },
  {
    "symbol":"GOOG",
    "date":"Apr 1 2006",
    "price":417.94
  },
  {
    "symbol":"GOOG",
    "date":"May 1 2006",
    "price":371.82
  },
  {
    "symbol":"GOOG",
    "date":"Jun 1 2006",
    "price":419.33
  },
  {
    "symbol":"GOOG",
    "date":"Jul 1 2006",
    "price":386.6
  },
  {
    "symbol":"GOOG",
    "date":"Aug 1 2006",
    "price":378.53
  },
  {
    "symbol":"GOOG",
    "date":"Sep 1 2006",
    "price":401.9
  },
  {
    "symbol":"GOOG",
    "date":"Oct 1 2006",
    "price":476.39
  },
  {
    "symbol":"GOOG",
    "date":"Nov 1 2006",
    "price":484.81
  },
  {
    "symbol":"GOOG",
    "date":"Dec 1 2006",
    "price":460.48
  },
  {
    "symbol":"GOOG",
    "date":"Jan 1 2007",
    "price":501.5
  },
  {
    "symbol":"GOOG",
    "date":"Feb 1 2007",
    "price":449.45
  },
  {
    "symbol":"GOOG",
    "date":"Mar 1 2007",
    "price":458.16
  },
  {
    "symbol":"GOOG",
    "date":"Apr 1 2007",
    "price":471.38
  },
  {
    "symbol":"GOOG",
    "date":"May 1 2007",
    "price":497.91
  },
  {
    "symbol":"GOOG",
    "date":"Jun 1 2007",
    "price":522.7
  },
  {
    "symbol":"GOOG",
    "date":"Jul 1 2007",
    "price":510
  },
  {
    "symbol":"GOOG",
    "date":"Aug 1 2007",
    "price":515.25
  },
  {
    "symbol":"GOOG",
    "date":"Sep 1 2007",
    "price":567.27
  },
  {
    "symbol":"GOOG",
    "date":"Oct 1 2007",
    "price":707
  },
  {
    "symbol":"GOOG",
    "date":"Nov 1 2007",
    "price":693
  },
  {
    "symbol":"GOOG",
    "date":"Dec 1 2007",
    "price":691.48
  },
  {
    "symbol":"GOOG",
    "date":"Jan 1 2008",
    "price":564.3
  },
  {
    "symbol":"GOOG",
    "date":"Feb 1 2008",
    "price":471.18
  },
  {
    "symbol":"GOOG",
    "date":"Mar 1 2008",
    "price":440.47
  },
  {
    "symbol":"GOOG",
    "date":"Apr 1 2008",
    "price":574.29
  },
  {
    "symbol":"GOOG",
    "date":"May 1 2008",
    "price":585.8
  },
  {
    "symbol":"GOOG",
    "date":"Jun 1 2008",
    "price":526.42
  },
  {
    "symbol":"GOOG",
    "date":"Jul 1 2008",
    "price":473.75
  },
  {
    "symbol":"GOOG",
    "date":"Aug 1 2008",
    "price":463.29
  },
  {
    "symbol":"GOOG",
    "date":"Sep 1 2008",
    "price":400.52
  },
  {
    "symbol":"GOOG",
    "date":"Oct 1 2008",
    "price":359.36
  },
  {
    "symbol":"GOOG",
    "date":"Nov 1 2008",
    "price":292.96
  },
  {
    "symbol":"GOOG",
    "date":"Dec 1 2008",
    "price":307.65
  },
  {
    "symbol":"GOOG",
    "date":"Jan 1 2009",
    "price":338.53
  },
  {
    "symbol":"GOOG",
    "date":"Feb 1 2009",
    "price":337.99
  },
  {
    "symbol":"GOOG",
    "date":"Mar 1 2009",
    "price":348.06
  },
  {
    "symbol":"GOOG",
    "date":"Apr 1 2009",
    "price":395.97
  },
  {
    "symbol":"GOOG",
    "date":"May 1 2009",
    "price":417.23
  },
  {
    "symbol":"GOOG",
    "date":"Jun 1 2009",
    "price":421.59
  },
  {
    "symbol":"GOOG",
    "date":"Jul 1 2009",
    "price":443.05
  },
  {
    "symbol":"GOOG",
    "date":"Aug 1 2009",
    "price":461.67
  },
  {
    "symbol":"GOOG",
    "date":"Sep 1 2009",
    "price":495.85
  },
  {
    "symbol":"GOOG",
    "date":"Oct 1 2009",
    "price":536.12
  },
  {
    "symbol":"GOOG",
    "date":"Nov 1 2009",
    "price":583
  },
  {
    "symbol":"GOOG",
    "date":"Dec 1 2009",
    "price":619.98
  },
  {
    "symbol":"GOOG",
    "date":"Jan 1 2010",
    "price":529.94
  },
  {
    "symbol":"GOOG",
    "date":"Feb 1 2010",
    "price":526.8
  },
  {
    "symbol":"GOOG",
    "date":"Mar 1 2010",
    "price":560.19
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2000",
    "price":25.94
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2000",
    "price":28.66
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2000",
    "price":33.95
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2000",
    "price":31.01
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2000",
    "price":21
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2000",
    "price":26.19
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2000",
    "price":25.41
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2000",
    "price":30.47
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2000",
    "price":12.88
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2000",
    "price":9.78
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2000",
    "price":8.25
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2000",
    "price":7.44
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2001",
    "price":10.81
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2001",
    "price":9.12
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2001",
    "price":11.03
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2001",
    "price":12.74
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2001",
    "price":9.98
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2001",
    "price":11.62
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2001",
    "price":9.4
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2001",
    "price":9.27
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2001",
    "price":7.76
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2001",
    "price":8.78
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2001",
    "price":10.65
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2001",
    "price":10.95
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2002",
    "price":12.36
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2002",
    "price":10.85
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2002",
    "price":11.84
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2002",
    "price":12.14
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2002",
    "price":11.65
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2002",
    "price":8.86
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2002",
    "price":7.63
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2002",
    "price":7.38
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2002",
    "price":7.25
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2002",
    "price":8.03
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2002",
    "price":7.75
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2002",
    "price":7.16
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2003",
    "price":7.18
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2003",
    "price":7.51
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2003",
    "price":7.07
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2003",
    "price":7.11
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2003",
    "price":8.98
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2003",
    "price":9.53
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2003",
    "price":10.54
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2003",
    "price":11.31
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2003",
    "price":10.36
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2003",
    "price":11.44
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2003",
    "price":10.45
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2003",
    "price":10.69
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2004",
    "price":11.28
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2004",
    "price":11.96
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2004",
    "price":13.52
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2004",
    "price":12.89
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2004",
    "price":14.03
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2004",
    "price":16.27
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2004",
    "price":16.17
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2004",
    "price":17.25
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2004",
    "price":19.38
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2004",
    "price":26.2
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2004",
    "price":33.53
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2004",
    "price":32.2
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2005",
    "price":38.45
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2005",
    "price":44.86
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2005",
    "price":41.67
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2005",
    "price":36.06
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2005",
    "price":39.76
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2005",
    "price":36.81
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2005",
    "price":42.65
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2005",
    "price":46.89
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2005",
    "price":53.61
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2005",
    "price":57.59
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2005",
    "price":67.82
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2005",
    "price":71.89
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2006",
    "price":75.51
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2006",
    "price":68.49
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2006",
    "price":62.72
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2006",
    "price":70.39
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2006",
    "price":59.77
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2006",
    "price":57.27
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2006",
    "price":67.96
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2006",
    "price":67.85
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2006",
    "price":76.98
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2006",
    "price":81.08
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2006",
    "price":91.66
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2006",
    "price":84.84
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2007",
    "price":85.73
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2007",
    "price":84.61
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2007",
    "price":92.91
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2007",
    "price":99.8
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2007",
    "price":121.19
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2007",
    "price":122.04
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2007",
    "price":131.76
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2007",
    "price":138.48
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2007",
    "price":153.47
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2007",
    "price":189.95
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2007",
    "price":182.22
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2007",
    "price":198.08
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2008",
    "price":135.36
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2008",
    "price":125.02
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2008",
    "price":143.5
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2008",
    "price":173.95
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2008",
    "price":188.75
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2008",
    "price":167.44
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2008",
    "price":158.95
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2008",
    "price":169.53
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2008",
    "price":113.66
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2008",
    "price":107.59
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2008",
    "price":92.67
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2008",
    "price":85.35
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2009",
    "price":90.13
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2009",
    "price":89.31
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2009",
    "price":105.12
  },
  {
    "symbol":"AAPL",
    "date":"Apr 1 2009",
    "price":125.83
  },
  {
    "symbol":"AAPL",
    "date":"May 1 2009",
    "price":135.81
  },
  {
    "symbol":"AAPL",
    "date":"Jun 1 2009",
    "price":142.43
  },
  {
    "symbol":"AAPL",
    "date":"Jul 1 2009",
    "price":163.39
  },
  {
    "symbol":"AAPL",
    "date":"Aug 1 2009",
    "price":168.21
  },
  {
    "symbol":"AAPL",
    "date":"Sep 1 2009",
    "price":185.35
  },
  {
    "symbol":"AAPL",
    "date":"Oct 1 2009",
    "price":188.5
  },
  {
    "symbol":"AAPL",
    "date":"Nov 1 2009",
    "price":199.91
  },
  {
    "symbol":"AAPL",
    "date":"Dec 1 2009",
    "price":210.73
  },
  {
    "symbol":"AAPL",
    "date":"Jan 1 2010",
    "price":192.06
  },
  {
    "symbol":"AAPL",
    "date":"Feb 1 2010",
    "price":204.62
  },
  {
    "symbol":"AAPL",
    "date":"Mar 1 2010",
    "price":223.02
  }
]            
            }
        ],
        "scales": [
          {
            "name": "x",
            "type": "time",
            "range": "width",
            "domain": {"data": "stocks", "field": "data.date"}
          },
          {
            "name": "y",
            "type": "linear",
            "range": "height",
            "nice": true,
            "domain": {"data": "stocks", "field": "data.price"}
          },
          {
            "name": "color", "type": "ordinal", "range": "category10"
          }
        ],
        "axes": [
          {"type": "x", "scale": "x", "tickSizeEnd": 0, "properties": {"labels": {"fontSize":{"value": 3.9}}}},
          {"type": "y", "scale": "y", "properties":{"labels": {"fontSize":{"value": 5}}}}
        ],

        "marks": [
          {
            "type": "group",
            "from": {
              "data": "stocks",
              "transform": [{"type": "facet", "keys": ["data.symbol"]}]
            },
            "marks": [
              {
                "type": "line",
                "properties": {
                  "enter": {
                    "x": {"scale": "x", "field": "data.date"},
                    "y": {"scale": "y", "field": "data.price"},
                    "stroke": {"scale": "color", "field": "data.symbol"},
                    "strokeWidth": {"value": 1}
                  }
                }
              },
              {
                "type": "text",
                "from": {
                  "transform": [{"type": "filter", "test": "index==data.length-1"}]
                },
                "properties": {
                  "enter": {
                    "x": {"scale": "x", "field": "data.date", "offset": 2},
                    "y": {"scale": "y", "field": "data.price"},
                    "fill": {"scale": "color", "field": "data.symbol"},
                    "text": {"field": "data.symbol"},
                    "baseline": {"value": "middle"}
                  }
                }
              }
            ]
          }
        ]
      }

  },

  "shot" : {
    "scene": {"transform": "rotate(0,50,50)"}, 
    "stocks": {"transform": "translate(10,10) scale(0.5)"} 
  }

},



    "footprint": {
  "name": "footprint",
  "model": {
     "scene": {
       "filters": { 
         "country": {"range": {"a":"*"}, "hide_b": "true"},
         "count": {"range": {"a":0, "b":"INF"}}
       }
     },

    "map": {
      "name": "map",
      "rendering": "vega",
      "update": true,
      "width": 100,
      "height": 100,
      "viewport": [100, 100],
      "data": [
        {
          "name": "world",
          "format": {"type": "topojson", "feature": "countries"}, 
          "values":
{"type":"Topology","transform":{"scale":[0.0036000360003600037,0.0016925586033320111],"translate":[-180,-85.60903777459777]},"objects":{"land":{"type":"MultiPolygon","arcs":[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[7,8,9]],[[10,11]],[[12]],[[13]],[[14]],[[15]],[[16]],[[17]],[[18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29,30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42,43]],[[44]],[[45]],[[46]],[[47,48,49,50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]],[[60]],[[61]],[[62,63]],[[64]],[[65]],[[66]],[[67]],[[68]],[[69]],[[70]],[[71]],[[72]],[[73]],[[74]],[[75]],[[76,77]],[[78]],[[79]],[[80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90,91]],[[92]],[[93]],[[94]],[[95]],[[96]],[[97]],[[98]],[[99]],[[100]],[[101]],[[102]],[[103]],[[104]],[[105]],[[106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221]],[[222,223]],[[224]],[[225]],[[226]],[[227]],[[228]],[[229]],[[230,231,232,233]],[[234]],[[235]],[[236]],[[237]],[[238]],[[239]],[[240]],[[241]],[[242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350,351,352,353,354,355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,376,377,378,379,380,381,382,383,384,385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,400,401,402,403,404,405,406,407,408,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,451,452,453,454,455,456,457,458,459,460,461,462,463,464,465,466,467,468,469,470,471,472,473,474,475,476,477],[478,479,480,481,482,483,484]],[[485]],[[486]],[[487]],[[488]],[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]],[[496]],[[497]],[[498]]]},"countries":{"type":"GeometryCollection","geometries":[{"type":"Polygon","arcs":[[499,500,501,502,503,504]],"id":4},{"type":"MultiPolygon","arcs":[[[505,506,352,507]],[[354,508,509]]],"id":24},{"type":"Polygon","arcs":[[510,511,414,512,513,514]],"id":8},{"type":"Polygon","arcs":[[312,515,314,516,517]],"id":784},{"type":"MultiPolygon","arcs":[[[518,11]],[[519,520,521,166,522,168,523,524]]],"id":32},{"type":"Polygon","arcs":[[525,526,527,528,529]],"id":51},{"type":"MultiPolygon","arcs":[[[0]],[[1]],[[2]],[[3]],[[4]],[[5]],[[6]],[[530,531]]],"id":10},{"type":"Polygon","arcs":[[13]],"id":260},{"type":"MultiPolygon","arcs":[[[14]],[[24]]],"id":36},{"type":"Polygon","arcs":[[532,533,534,535,536,537,538]],"id":40},{"type":"MultiPolygon","arcs":[[[539,-528]],[[484,540,479,541,-526,542,543]]],"id":31},{"type":"Polygon","arcs":[[544,545,546]],"id":108},{"type":"Polygon","arcs":[[547,548,549,550,437]],"id":56},{"type":"Polygon","arcs":[[551,552,553,554,366]],"id":204},{"type":"Polygon","arcs":[[555,556,557,-553,558,559]],"id":854},{"type":"Polygon","arcs":[[560,561,289,562]],"id":50},{"type":"Polygon","arcs":[[563,404,564,565,566,567]],"id":100},{"type":"MultiPolygon","arcs":[[[71]],[[73]],[[74]]],"id":44},{"type":"Polygon","arcs":[[568,569,570]],"id":70},{"type":"Polygon","arcs":[[571,572,573,574,575]],"id":112},{"type":"Polygon","arcs":[[576,145,577]],"id":84},{"type":"Polygon","arcs":[[578,579,580,581,-525]],"id":68},{"type":"Polygon","arcs":[[-521,582,-581,583,584,585,586,587,588,164,589]],"id":76},{"type":"Polygon","arcs":[[48,590]],"id":96},{"type":"Polygon","arcs":[[591,592]],"id":64},{"type":"Polygon","arcs":[[593,594,595,596]],"id":72},{"type":"Polygon","arcs":[[597,598,599,600,601,602,603]],"id":140},{"type":"MultiPolygon","arcs":[[[84]],[[85]],[[86]],[[87]],[[88]],[[96]],[[97]],[[99]],[[101]],[[103]],[[604,107,605,109,606,111,607,113,608,115,609,117,610,199,611,201,612,215,613,217,614,219,615,221]],[[616,223]],[[224]],[[225]],[[226]],[[227]],[[229]],[[230,617,232,618]],[[235]],[[237]],[[238]],[[240]],[[241]],[[485]],[[486]],[[488]],[[489]],[[490]],[[496]],[[497]]],"id":124},{"type":"Polygon","arcs":[[-536,619,620,621]],"id":756},{"type":"MultiPolygon","arcs":[[[-519,622,623,624]],[[-524,169,625,171,626,-579]]],"id":152},{"type":"MultiPolygon","arcs":[[[64]],[[627,274,628,276,629,278,630,280,631,632,633,634,635,-593,636,637,638,639,-503,640,641,642,643,644,645]]],"id":156},{"type":"Polygon","arcs":[[369,646,647,648,-556,649]],"id":384},{"type":"Polygon","arcs":[[650,651,652,359,653,654,655,656,-604,657]],"id":120},{"type":"Polygon","arcs":[[658,659,-545,660,661,662,663,-508,353,-510,664,-602,665]],"id":180},{"type":"Polygon","arcs":[[-509,355,666,-658,-603,-665]],"id":178},{"type":"Polygon","arcs":[[667,174,668,155,669,-585,670]],"id":170},{"type":"Polygon","arcs":[[178,671,151,672]],"id":188},{"type":"Polygon","arcs":[[70]],"id":192},{"type":"Polygon","arcs":[[77,673]],"id":-99},{"type":"Polygon","arcs":[[76,-674]],"id":196},{"type":"Polygon","arcs":[[-538,674,675,676]],"id":203},{"type":"Polygon","arcs":[[445,677,-675,-537,-622,678,679,-549,680,441,681]],"id":276},{"type":"Polygon","arcs":[[337,682,683,684]],"id":262},{"type":"MultiPolygon","arcs":[[[92]],[[-682,442,685,444]]],"id":208},{"type":"Polygon","arcs":[[62,686]],"id":214},{"type":"Polygon","arcs":[[687,688,689,690,691,384,692,693]],"id":12},{"type":"Polygon","arcs":[[173,-668,694]],"id":218},{"type":"Polygon","arcs":[[333,695,696,390,697]],"id":818},{"type":"Polygon","arcs":[[698,699,700,336,-685]],"id":232},{"type":"Polygon","arcs":[[431,701,433,702,427,703,429,704]],"id":724},{"type":"Polygon","arcs":[[450,705,706]],"id":233},{"type":"Polygon","arcs":[[-684,707,708,709,710,711,712,-699]],"id":231},{"type":"Polygon","arcs":[[713,452,714,715,455,716,717]],"id":246},{"type":"MultiPolygon","arcs":[[[18]],[[19]],[[20]]],"id":242},{"type":"Polygon","arcs":[[12]],"id":238},{"type":"MultiPolygon","arcs":[[[718,719,163,-589]],[[82]],[[720,-679,-621,721,426,-703,434,722,436,-551]]],"id":250},{"type":"Polygon","arcs":[[356,723,-651,-667]],"id":266},{"type":"MultiPolygon","arcs":[[[724,90]],[[725,726,727,728,729,730,731,732]]],"id":826},{"type":"Polygon","arcs":[[400,733,-543,-530,734]],"id":268},{"type":"Polygon","arcs":[[368,-650,-560,735]],"id":288},{"type":"Polygon","arcs":[[736,737,374,738,739,740,-648]],"id":324},{"type":"Polygon","arcs":[[741,377]],"id":270},{"type":"Polygon","arcs":[[375,742,-739]],"id":624},{"type":"Polygon","arcs":[[357,-652,-724]],"id":226},{"type":"MultiPolygon","arcs":[[[78]],[[407,743,409,744,411,745,413,-512,746,-566,747]]],"id":300},{"type":"Polygon","arcs":[[498]],"id":304},{"type":"Polygon","arcs":[[185,748,-578,146,749,750]],"id":320},{"type":"Polygon","arcs":[[161,751,-587,752]],"id":328},{"type":"Polygon","arcs":[[182,753,754,-750,147,755,149,756]],"id":340},{"type":"Polygon","arcs":[[757,-571,758,417,759,419,760,761]],"id":191},{"type":"Polygon","arcs":[[-687,63]],"id":332},{"type":"Polygon","arcs":[[-533,762,763,764,765,-762,766]],"id":348},{"type":"MultiPolygon","arcs":[[[26]],[[767,30]],[[31]],[[32]],[[35]],[[36]],[[39]],[[40]],[[768,43]],[[44]],[[45]],[[769,50]],[[46]]],"id":360},{"type":"Polygon","arcs":[[-639,770,-637,-592,-636,771,-563,290,772,292,773,294,774,296,775]],"id":356},{"type":"Polygon","arcs":[[91,-725]],"id":372},{"type":"Polygon","arcs":[[776,-505,777,300,778,302,779,780,781,-540,-527,-542,480]],"id":364},{"type":"Polygon","arcs":[[782,783,784,785,786,-781,787]],"id":368},{"type":"Polygon","arcs":[[100]],"id":352},{"type":"Polygon","arcs":[[788,789,-698,391,790,791,792]],"id":376},{"type":"MultiPolygon","arcs":[[[79]],[[80]],[[793,421,794,423,795,425,-722,-620,-535]]],"id":380},{"type":"Polygon","arcs":[[61]],"id":388},{"type":"Polygon","arcs":[[796,-785,797,332,-790,798,-793]],"id":400},{"type":"MultiPolygon","arcs":[[[75]],[[81]],[[83]]],"id":392},{"type":"Polygon","arcs":[[799,800,482,801,-643,802]],"id":398},{"type":"Polygon","arcs":[[342,803,804,805,-710,806]],"id":404},{"type":"Polygon","arcs":[[-803,-642,807,808]],"id":417},{"type":"Polygon","arcs":[[809,810,811,283]],"id":116},{"type":"Polygon","arcs":[[265,812,267,813]],"id":410},{"type":"Polygon","arcs":[[-515,814,815,816]],"id":-99},{"type":"Polygon","arcs":[[304,817,-783]],"id":414},{"type":"Polygon","arcs":[[818,819,-634,820,-811]],"id":418},{"type":"Polygon","arcs":[[-791,392,821]],"id":422},{"type":"Polygon","arcs":[[370,822,372,823,-737,-647]],"id":430},{"type":"Polygon","arcs":[[824,-694,825,388,826,-697,827,828]],"id":434},{"type":"Polygon","arcs":[[52]],"id":144},{"type":"Polygon","arcs":[[829]],"id":426},{"type":"Polygon","arcs":[[830,448,831,-572,832]],"id":440},{"type":"Polygon","arcs":[[-680,-721,-550]],"id":442},{"type":"Polygon","arcs":[[449,-707,833,-573,-832]],"id":428},{"type":"Polygon","arcs":[[-692,834,835,836,837,383]],"id":504},{"type":"Polygon","arcs":[[838,839]],"id":498},{"type":"Polygon","arcs":[[23]],"id":450},{"type":"Polygon","arcs":[[840,-577,-749,186,841,188,842,190,843,192,844,194,845]],"id":484},{"type":"Polygon","arcs":[[-817,846,-567,-747,-511]],"id":807},{"type":"Polygon","arcs":[[847,-689,848,-557,-649,-741,849]],"id":466},{"type":"Polygon","arcs":[[287,-561,-772,-635,-820,850]],"id":104},{"type":"Polygon","arcs":[[416,-759,-570,851,-815,-514,852]],"id":499},{"type":"Polygon","arcs":[[853,-645]],"id":496},{"type":"Polygon","arcs":[[854,344,855,856,347,857,858,859,860,861,862]],"id":508},{"type":"Polygon","arcs":[[863,379,864,-690,-848]],"id":478},{"type":"Polygon","arcs":[[-863,865,866]],"id":454},{"type":"MultiPolygon","arcs":[[[285,867]],[[-770,47,-591,49]]],"id":458},{"type":"Polygon","arcs":[[351,-507,868,-595,869]],"id":516},{"type":"Polygon","arcs":[[17]],"id":540},{"type":"Polygon","arcs":[[-558,-849,-688,-825,870,-656,871,-554]],"id":562},{"type":"Polygon","arcs":[[361,872,363,873,365,-555,-872,-655]],"id":566},{"type":"Polygon","arcs":[[179,874,181,-757,150,-672]],"id":558},{"type":"Polygon","arcs":[[-681,-548,438,875,440]],"id":528},{"type":"MultiPolygon","arcs":[[[876,-718,877,457,878,459,879,461]],[[487]],[[492]],[[493]]],"id":578},{"type":"Polygon","arcs":[[-771,-638]],"id":524},{"type":"MultiPolygon","arcs":[[[15]],[[16]]],"id":554},{"type":"MultiPolygon","arcs":[[[880,319,881,882,883,-517,315,884,317]],[[-516,313]]],"id":512},{"type":"Polygon","arcs":[[-640,-776,297,885,299,-778,-504]],"id":586},{"type":"Polygon","arcs":[[175,886,177,-673,152,887,154,-669]],"id":591},{"type":"Polygon","arcs":[[-627,172,-695,-671,-584,-580]],"id":604},{"type":"MultiPolygon","arcs":[[[51]],[[54]],[[55]],[[56]],[[57]],[[58]],[[59]]],"id":608},{"type":"MultiPolygon","arcs":[[[37]],[[38]],[[-769,42]],[[41]]],"id":598},{"type":"Polygon","arcs":[[-678,446,888,-833,-576,889,890,-676]],"id":616},{"type":"Polygon","arcs":[[60]],"id":630},{"type":"Polygon","arcs":[[262,891,264,-814,892,269,893,271,894,273,-628,895]],"id":408},{"type":"Polygon","arcs":[[-705,430]],"id":620},{"type":"Polygon","arcs":[[-582,-583,-520]],"id":600},{"type":"Polygon","arcs":[[-799,-789]],"id":275},{"type":"Polygon","arcs":[[308,896,310,897]],"id":634},{"type":"Polygon","arcs":[[898,-840,899,403,-564,900,-765]],"id":642},{"type":"MultiPolygon","arcs":[[[89]],[[-889,447,-831]],[[102]],[[104]],[[105]],[[228]],[[234]],[[236]],[[239]],[[901,243,902,245,903,247,904,249,905,251,906,253,907,255,908,257,909,259,910,261,-896,-646,-854,-644,-802,483,-544,-734,401,911,-574,-834,-706,451,-714,-877,912,913,914,915,464,916,466,917,468,918,470,919,920,473,921,475,922,477]],[[491]],[[494]],[[495]]],"id":643},{"type":"Polygon","arcs":[[923,-546,-660,924]],"id":646},{"type":"Polygon","arcs":[[-691,-865,380,-835]],"id":732},{"type":"Polygon","arcs":[[925,329,926,331,-798,-784,-818,305,927,307,-898,311,-518,-884,928]],"id":682},{"type":"Polygon","arcs":[[-599,929,-828,-696,334,-700,-713,930,931,932]],"id":729},{"type":"Polygon","arcs":[[-711,-806,933,-666,-601,934,-932,935]],"id":728},{"type":"Polygon","arcs":[[378,-864,-850,-740,-743,376,-742]],"id":686},{"type":"MultiPolygon","arcs":[[[25]],[[27]],[[28]],[[33]],[[34]]],"id":90},{"type":"Polygon","arcs":[[373,-738,-824]],"id":694},{"type":"Polygon","arcs":[[184,-751,-755,936]],"id":222},{"type":"Polygon","arcs":[[-708,-683,338,937,340,938]],"id":-99},{"type":"Polygon","arcs":[[-807,-709,-939,341]],"id":706},{"type":"Polygon","arcs":[[-568,-847,-816,-852,-569,-758,-766,-901]],"id":688},{"type":"Polygon","arcs":[[162,-720,939,-588,-752]],"id":740},{"type":"Polygon","arcs":[[-891,940,-763,-539,-677]],"id":703},{"type":"Polygon","arcs":[[-534,-767,-761,420,-794]],"id":705},{"type":"Polygon","arcs":[[-878,-717,456]],"id":752},{"type":"Polygon","arcs":[[941,-859]],"id":748},{"type":"Polygon","arcs":[[-797,-792,-822,393,942,-786]],"id":760},{"type":"Polygon","arcs":[[-871,-829,-930,-598,-657]],"id":148},{"type":"Polygon","arcs":[[-736,-559,-552,367]],"id":768},{"type":"Polygon","arcs":[[284,-868,286,-851,-819,-810]],"id":764},{"type":"Polygon","arcs":[[-808,-641,-502,943]],"id":762},{"type":"Polygon","arcs":[[-777,481,-801,944,-500]],"id":795},{"type":"Polygon","arcs":[[29,-768]],"id":626},{"type":"Polygon","arcs":[[53]],"id":780},{"type":"Polygon","arcs":[[-693,385,945,387,-826]],"id":788},{"type":"MultiPolygon","arcs":[[[399,-735,-529,-782,-787,-943,394,946,947,397,948]],[[949,-748,-565,405]]],"id":792},{"type":"Polygon","arcs":[[72]],"id":158},{"type":"Polygon","arcs":[[-804,343,-855,-867,950,-663,951,-661,-547,-924,952]],"id":834},{"type":"Polygon","arcs":[[-925,-659,-934,-805,-953]],"id":800},{"type":"Polygon","arcs":[[-912,402,-900,-839,-899,-764,-941,-890,-575]],"id":804},{"type":"Polygon","arcs":[[-590,165,-522]],"id":858},{"type":"MultiPolygon","arcs":[[[65]],[[66]],[[67]],[[68]],[[69]],[[118,953,120,954,122,955,124,956,126,957,128,958,130,959,132,960,134,961,136,962,138,963,140,964,142,-846,195,965,966,967,968,969,-611]],[[93]],[[95]],[[98]],[[-613,202,970,204,971,206,972,208,973,210,974,212,975,214]]],"id":840},{"type":"Polygon","arcs":[[-945,-800,-809,-944,-501]],"id":860},{"type":"Polygon","arcs":[[156,976,158,977,160,-753,-586,-670]],"id":862},{"type":"Polygon","arcs":[[282,-812,-821,-633]],"id":704},{"type":"MultiPolygon","arcs":[[[21]],[[22]]],"id":548},{"type":"Polygon","arcs":[[321,978,323,979,325,980,327,-929,-883,981]],"id":887},{"type":"Polygon","arcs":[[982,350,-870,-594,983,-860,-942,-858,348],[-830]],"id":710},{"type":"Polygon","arcs":[[-866,-862,984,-596,-869,-506,-664,-951]],"id":894},{"type":"Polygon","arcs":[[-984,-597,-985,-861]],"id":716}]}},"arcs":[[[33289,2723],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174],[625,-23],[599,-58],[207,243],[147,208],[288,-243],[-82,-301],[-81,-266]],[[5242,3530],[-364,208],[-163,209],[-11,35],[-180,162],[169,220],[517,-93],[277,-185],[212,-209],[76,-266],[-533,-81]],[[35977,2708],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243],[141,0],[414,127],[419,-127],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116]],[[16602,6806],[-386,47],[-278,208],[60,197],[332,-104],[359,-93],[332,104],[-158,-208],[-261,-151]],[[15547,6934],[-164,23],[-359,58],[-381,162],[202,127],[277,-139],[425,-231]],[[23277,7733],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243],[174,104],[353,-81],[403,-46],[305,-81],[304,69],[163,-335]],[[30256,7743],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116]],[[794,704],[78,49],[94,61],[81,52],[41,26]],[[1088,892],[41,-1],[29,-10]],[[1158,881],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99504,-147],[245,344],[501,-185],[32,21]],[[31400,18145],[-92,-239],[-238,-183],[-301,67],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[30935,19481],[106,-274],[139,-443],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208]],[[33139,19680],[-139,266],[333,354],[236,-148],[167,237],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266]],[[69095,21172],[-7,314],[41,244],[19,121],[179,-186],[263,-74],[9,-112],[-77,-269],[-427,-38]],[[90796,24799],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52],[269,-204],[151,81],[217,113],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412]],[[97036,23023],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169]],[[98677,25949],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110],[-105,-319],[-138,-404],[-214,-236]],[[96316,37345],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166],[228,-366],[144,-272],[-105,-142]],[[99425,39775],[-153,73],[-27,260],[107,203],[126,-74],[69,98],[96,-171],[-46,-308],[-172,-81]],[[99645,40529],[-36,220],[139,121],[88,33],[163,184],[0,-289],[-177,-145],[-177,-124]],[[0,40798],[0,289],[57,27],[-34,-284],[-23,-32]],[[96531,40773],[-93,259],[10,158],[175,-339],[-92,-78]],[[96463,41280],[-75,74],[-58,-32],[-39,163],[-6,453],[133,-182],[45,-476]],[[62613,35454],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254],[74,-251],[69,-390],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250]],[[90643,27516],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254]],[[95110,44183],[-194,4],[-106,363],[166,-142],[56,-22],[78,-203]],[[83414,44519],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159],[-117,-11]],[[94572,44733],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155],[-108,-14]],[[94868,44799],[-206,512],[-57,353],[94,0],[100,-473],[111,-283],[-42,-109]],[[84713,45326],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170]],[[84746,45030],[-181,-441],[-238,-130],[-33,71],[25,201],[119,360],[275,235]],[[82576,45238],[-149,5],[95,340],[153,5],[74,209],[100,-158],[172,48],[69,-251],[-321,-119],[-193,-79]],[[83681,45301],[-370,73],[0,216],[220,123],[174,-177],[185,45],[249,216],[-41,-328],[-417,-168]],[[94421,45535],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272],[65,-187],[12,-119]],[[93704,46205],[-121,134],[-114,243],[14,99],[166,-250],[111,-193],[-56,-33]],[[81823,45409],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45],[38,-210],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225]],[[87280,46506],[-27,445],[49,212],[58,200],[63,-173],[0,-282],[-143,-402]],[[93221,46491],[-120,227],[-122,375],[-59,450],[38,57],[30,-175],[84,-134],[135,-375],[131,-200],[-39,-166],[-78,-59]],[[91733,46847],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361],[-146,-48],[-44,-166],[-152,-144],[-142,-138]],[[85242,48340],[-192,108],[-54,254],[281,29],[69,-195],[-104,-196]],[[86342,48300],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24],[305,-172],[101,-452]],[[92451,47764],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248],[106,-189],[33,-307],[-87,-157]],[[89166,49043],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25]],[[89175,45193],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113]],[[83276,47228],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82],[319,25],[275,429],[48,-132],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85]],[[85582,50048],[-112,374],[-82,755],[56,472],[92,215],[20,-322],[164,-52],[26,-241],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71]],[[79085,47110],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914],[-308,-12]],[[80461,51765],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374]],[[81723,53254],[110,221],[236,323]],[[82069,53798],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201]],[[82744,53024],[-158,-533],[204,-560],[-48,-272],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392]],[[84832,53877],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277]],[[72318,54106],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616],[-42,-615],[-116,-168],[-242,-135]],[[32841,56488],[-50,53],[81,163],[-6,233],[160,77],[58,-21],[-11,-440],[-232,-65]],[[84165,55910],[-171,409],[57,158],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563],[-100,-195],[-87,-373],[-87,-175]],[[82548,55523],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406],[-369,-561]],[[83889,56748],[-10,275],[20,301],[-43,282],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178]],[[84666,56567],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133]],[[83683,57791],[-119,295],[-142,450],[238,-22],[97,-213],[-74,-510]],[[84465,57987],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1],[171,-168],[85,153],[26,-150],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272]],[[31337,61183],[-16,253],[40,86],[227,-3],[142,-52],[50,-118],[-71,-149],[-209,4],[-163,-21]],[[28554,61038],[-156,95],[-159,215],[34,135],[116,41],[64,-20],[187,-53],[147,-142],[46,-161],[-195,-11],[-84,-99]],[[30080,62227],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170]],[[30081,61241],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26],[241,-93]],[[80409,61331],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341],[-240,-284]],[[6753,61756],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92],[-41,-99]],[[6551,62734],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90],[-23,-71],[-94,-43]],[[6447,63028],[-149,17],[21,72],[137,-26],[-9,-63]],[[6192,63143],[-19,8],[-97,21],[-35,133],[-11,24],[74,82],[23,-38],[80,-196],[-15,-34]],[[5704,63509],[-93,107],[14,43],[43,58],[64,-12],[5,-138],[-33,-58]],[[28401,62311],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65],[240,-42],[219,-7],[261,-201],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57]],[[28394,64588],[-70,340],[-104,171],[60,375],[84,-23],[97,-491],[1,-343],[-68,-29]],[[83540,63560],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357],[-167,-947],[-119,-485]],[[28080,66189],[-19,219],[130,47],[184,-18],[8,-153],[-303,-95]],[[28563,65870],[-51,75],[4,309],[-124,234],[-1,67],[220,-265],[-48,-420]],[[86948,69902],[-181,168],[2,281],[154,352],[158,-68],[114,248],[204,-127],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346]],[[59437,71293],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22]],[[59092,71341],[19,3],[40,143],[200,-8],[253,176],[-188,-251],[21,-111]],[[56867,71211],[3,98],[-339,115],[52,251],[152,-199],[216,34],[207,-42],[-7,-103],[151,71],[-35,-175],[-400,-50]],[[54194,72216],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64],[211,51],[-100,-465],[41,-183],[-58,-303]],[[52446,73567],[-105,156],[-11,713],[-64,338],[153,-30],[139,183],[166,-419],[-39,-782],[-126,38],[-113,-197]],[[86301,68913],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479],[-256,-595],[4,-610],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248]],[[52563,75028],[-126,120],[-64,398],[56,219],[179,226],[47,-507],[-92,-456]],[[88876,75140],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198],[195,-126],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9]],[[32535,77739],[-353,250],[-69,198],[105,183],[97,-288],[202,-79],[257,16],[-137,-242],[-102,-38]],[[32696,79581],[-360,186],[-258,279],[96,49],[365,-148],[284,-247],[8,-108],[-135,-11]],[[15552,79158],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327],[-140,-82]],[[35133,78123],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160],[-148,-372],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22]],[[13561,81409],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76],[267,47],[-84,-671],[242,-475]],[[89469,77738],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391],[96,-569],[-7,-581],[114,-597],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457]],[[47896,83153],[233,24],[298,-365],[-149,-406]],[[48278,82406],[46,-422],[-210,-528],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276]],[[53358,82957],[-291,333],[-39,246],[408,195],[88,-296],[-166,-478]],[[7221,84100],[-142,152],[-43,277],[252,210],[148,90],[185,-40],[117,-183],[-240,-281],[-277,-225]],[[48543,80097],[-148,118],[407,621],[249,127],[-436,99],[-79,235],[291,183],[-152,319],[52,387],[414,-54],[40,343],[-190,372],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[270,-759],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226]],[[3835,85884],[-182,110],[-168,161],[274,101],[220,-54],[27,-226],[-171,-92]],[[27873,86994],[-123,50],[-73,176],[13,41],[107,177],[114,-13],[70,-121],[-108,-310]],[[26925,87305],[-196,13],[-61,160],[207,273],[381,-6],[-6,-114],[-325,-326]],[[2908,87788],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125]],[[26243,87832],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49],[51,-259],[143,91],[161,-155],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306]],[[44817,88095],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107]],[[28614,90223],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82],[-180,-174],[-312,-30]],[[1957,88542],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251],[0,2354],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122]],[[23258,91203],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112],[169,-226],[-173,-207]],[[99694,92399],[-49,187],[354,247],[0,-404],[-305,-30]],[[0,92429],[0,404],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36]],[[26228,91219],[16,648],[394,-45]],[[26638,91822],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498]],[[25824,89109],[-81,-258],[-322,-400]],[[25421,88451],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466]],[[23714,86094],[-15,-686],[408,-99]],[[24107,85309],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279]],[[25743,83665],[348,-162],[294,-249]],[[26385,83254],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411]],[[28738,83981],[-22,395],[-189,502]],[[28527,84878],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493]],[[31513,79609],[416,59],[245,-290]],[[32174,79378],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72]],[[31350,77248],[48,-194],[-296,-286],[-286,-204],[-293,-175]],[[30523,76389],[-159,-386],[-35,-98]],[[30329,75905],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96]],[[30377,75084],[-133,12],[-205,-104]],[[30039,74992],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152]],[[29172,73738],[-61,31],[-91,147]],[[29020,73916],[57,-318]],[[29077,73598],[66,-106],[8,-222]],[[29151,73270],[-89,-230],[-157,-472],[-25,24],[86,402]],[[28966,72994],[-142,226],[-33,490]],[[28791,73710],[-53,-255],[59,-375]],[[28797,73080],[-175,88],[183,-186]],[[28805,72982],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361]],[[27672,65472],[-83,-74],[-137,71]],[[27452,65469],[-44,259]],[[27408,65728],[-106,136],[-147,508]],[[27155,66372],[-129,452],[-42,231],[57,393],[-77,325],[-217,494]],[[26747,68267],[-108,91],[-281,-269]],[[26358,68089],[-49,30]],[[26309,68119],[-135,276],[-174,146]],[[26000,68541],[-314,-75],[-247,66],[-212,-41]],[[25227,68491],[-118,-83],[54,-166]],[[25163,68242],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18]],[[24755,67801],[-207,313],[-242,-74]],[[24306,68040],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201]],[[23016,65864],[1,-1],[-1,-1],[-107,-516]],[[22909,65346],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[25472,61510],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205]],[[25297,59966],[90,-107],[24,88],[82,-75]],[[25493,59872],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53]],[[25860,59889],[128,16],[90,65]],[[26078,59970],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162]],[[26903,59440],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97]],[[26762,57043],[70,-321],[108,-238],[130,-252]],[[27070,56232],[100,-212]],[[27170,56020],[-6,-125],[111,-27]],[[27275,55868],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164]],[[28513,55702],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199]],[[30185,57537],[-8,-139],[-163,-69],[91,-268],[-3,-309]],[[30102,56752],[-123,-343],[105,-469]],[[30084,55940],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264]],[[31762,56607],[213,-73],[155,184]],[[32130,56718],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139]],[[33400,55523],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205]],[[34125,54109],[333,-119],[30,107],[225,43],[298,-159]],[[35011,53981],[95,-65],[204,-140],[294,-499],[46,-242]],[[35650,53035],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337]],[[35174,30629],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327]],[[33770,30545],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443]],[[31227,23224],[274,-433],[265,-119]],[[31766,22672],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30]],[[30952,19680],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404]],[[29661,27385],[-79,576],[-23,666]],[[29559,28627],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832]],[[30452,39739],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373]],[[27693,48568],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236]],[[28095,51396],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315]],[[28366,54848],[-93,170],[-59,319],[68,158],[-70,40]],[[28212,55535],[-52,195],[-138,165]],[[28022,55895],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89]],[[26954,55439],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114]],[[26191,57131],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267]],[[25647,58207],[31,92],[46,-89]],[[25724,58210],[21,41]],[[25745,58251],[-48,185]],[[25697,58436],[-84,52],[-31,-140]],[[25582,58348],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127]],[[24973,58695],[-142,103],[-174,11],[-127,117],[-149,244]],[[24381,59170],[-314,636]],[[24067,59806],[-144,192],[-226,154]],[[23697,60152],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365]],[[19641,66203],[-142,137],[-164,288]],[[19335,66628],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227]],[[18570,68996],[-201,235],[-93,-26]],[[18276,69205],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359]],[[19362,64423],[-182,337],[-200,286]],[[18980,65046],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531]],[[17464,69802],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59]],[[16564,70932],[-70,95],[-34,324]],[[16460,71351],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[67,1072],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558]],[[15948,78405],[68,156],[-44,485],[-94,484]],[[15878,79530],[-38,1],[-537,581],[-199,255]],[[15104,80367],[-503,245],[-155,523],[40,362]],[[14486,81497],[-356,252],[-48,476],[-336,429],[-6,304]],[[13740,82958],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211]],[[10396,86079],[-385,-50],[-546,271]],[[9465,86300],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199]],[[8164,85656],[-307,-126],[-40,348]],[[7817,85878],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424]],[[7158,84934],[-299,-247],[-278,-181]],[[6581,84506],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352]],[[4985,85596],[50,217],[-179,210]],[[4856,86023],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0]],[[4541,89915],[-38,-295],[586,22]],[[5089,89642],[-225,366]],[[4864,90008],[-342,226],[-197,295]],[[4325,90529],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83]],[[10837,91767],[518,-142]],[[11355,91625],[438,-284],[289,-55]],[[12082,91286],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401]],[[15437,92031],[38,-448],[341,96]],[[15816,91679],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38]],[[17987,91291],[375,-300],[-391,-293]],[[17971,90698],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510]],[[19722,91216],[-824,-103],[-374,-41]],[[18524,91072],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201]],[[20728,93568],[-434,413],[95,83],[372,24],[211,-130],[-244,-390]],[[27920,93557],[-80,36],[-306,313],[12,213],[133,39],[636,-63],[479,-325],[25,-163],[-296,17],[-299,13],[-304,-80]],[[31620,87170],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206]],[[22678,92689],[-268,50],[-192,225],[-690,456],[5,189],[567,-73],[-306,386],[329,286],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229]],[[89468,93831],[-569,66],[-49,31],[263,234],[348,54],[394,-226],[34,-155],[-421,-4]],[[23814,93133],[-317,22],[-173,519],[4,294],[145,251],[276,161],[579,-20],[530,-144],[-415,-526],[-331,-115],[-298,-442]],[[15808,92470],[-147,259],[-641,312]],[[15020,93041],[93,193],[218,489]],[[15331,93723],[241,388],[-272,362],[939,93],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414]],[[16539,93012],[0,-248],[-731,-294]],[[91548,94707],[-444,53],[-516,233],[66,192],[518,-89],[697,-155],[-321,-234]],[[23845,94650],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187],[-151,-229]],[[88598,94662],[-550,384],[149,406],[366,111],[734,-26],[1004,-313],[-219,-439],[-1023,16],[-461,-139]],[[22275,94831],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77],[212,-273],[9,-303],[-127,-440],[-458,-60]],[[18404,94533],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282],[109,-210],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14]],[[65817,92311],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484],[-164,-52]],[[25514,94532],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11]],[[16250,95423],[-377,128],[472,442],[570,383],[426,-9],[381,87],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91]],[[81143,94175],[250,112],[142,-379]],[[81535,93908],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451]],[[84237,94144],[590,-103],[443,3]],[[85270,94044],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378]],[[97224,91732],[123,263],[886,-166]],[[98233,91829],[578,36],[799,-282],[389,-258],[0,-2354],[-2,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464]],[[96192,85904],[-126,220],[-268,-254]],[[95798,85870],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255]],[[95032,82989],[-486,-301],[-96,-675]],[[94450,82013],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353]],[[93543,84472],[15,276],[431,132]],[[93989,84880],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487]],[[95182,86999],[-705,-648],[-227,726]],[[94250,87077],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102]],[[90412,85637],[-913,-175],[-900,-1153]],[[88599,84309],[-1065,-1394],[438,-74],[136,-370],[270,-132]],[[88378,82339],[178,296],[305,-39]],[[88861,82596],[401,-650]],[[89262,81946],[9,-502],[-217,-591]],[[89054,80853],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197]],[[86327,75524],[-106,36]],[[86221,75560],[-120,-201],[-83,-201]],[[86018,75158],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259]],[[85652,73393],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322]],[[85103,71220],[52,443],[-123,615]],[[85032,72278],[206,99],[-190,506]],[[85048,72883],[-135,113],[-34,-112]],[[84879,72884],[-81,-49],[-10,112],[-72,54],[-75,94]],[[84641,73095],[77,260],[65,69]],[[84783,73424],[-25,108],[71,319]],[[84829,73851],[-18,97],[-163,64]],[[84648,74012],[-131,158]],[[84517,74170],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265]],[[83030,72705],[220,-172],[311,421]],[[83561,72954],[247,-230],[179,-15]],[[83987,72709],[46,-310],[-394,-165]],[[83639,72234],[-130,-319],[-270,-296],[-142,-414]],[[83097,71205],[299,-324],[109,-582]],[[83505,70299],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228]],[[80517,63220],[-373,190],[-131,-97]],[[80013,63313],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335]],[[78981,56775],[-233,87],[-112,307],[-141,611]],[[78495,57780],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306]],[[78372,54256],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250]],[[77801,54399],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566]],[[77375,56448],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481]],[[75657,62792],[-79,309],[-16,301],[-53,284]],[[75509,63686],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53]],[[74730,63611],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373]],[[73107,61020],[-276,-386],[-1,-272]],[[72830,60362],[-138,-146]],[[72692,60216],[-250,-212],[-130,-31]],[[72312,59973],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195]],[[71996,56025],[-253,-167],[-93,-402]],[[71650,55456],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501]],[[68937,64577],[-203,150]],[[68734,64727],[-83,425],[-215,449]],[[68436,65601],[-512,-111],[-451,-11],[-391,-83]],[[67082,65396],[-523,179]],[[66559,65575],[-302,136],[-314,76]],[[65943,65787],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196]],[[63594,68492],[-103,-231],[-165,29]],[[63326,68290],[58,-261],[-25,-135],[89,-445]],[[63448,67449],[109,-510],[137,-135],[47,-207]],[[63741,66597],[190,-248],[16,-244]],[[63947,66105],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145]],[[64113,65205],[-18,430],[75,310],[76,64]],[[64246,66009],[84,-186],[5,-345]],[[64335,65478],[-61,-348]],[[64274,65130],[53,-226]],[[64327,64904],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364]],[[65575,65974],[80,201],[35,-51],[-26,-244],[-37,-108]],[[65627,65772],[38,-466]],[[65665,65306],[125,-404],[155,-214]],[[65945,64688],[204,-78],[164,-107]],[[66313,64503],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149]],[[65352,60997],[1,-239],[-134,-164]],[[65219,60594],[-153,56],[-186,-199]],[[64880,60451],[-128,-33],[-201,-159]],[[64551,60259],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417]],[[63521,58853],[-122,-32],[-83,34]],[[63316,58855],[-163,-245]],[[63153,58610],[-177,-113],[-233,-31]],[[62743,58466],[-70,-34],[-61,-156],[-73,-43]],[[62539,58233],[-42,-150],[-138,13]],[[62359,58096],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257]],[[61883,60238],[-36,253],[-84,177]],[[61763,60668],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133]],[[60335,65400],[-77,307],[-81,131]],[[60177,65838],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236]],[[59709,67924],[-9,86]],[[59700,68010],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121]],[[60240,63578],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219]],[[60669,61213],[161,-683],[77,-543]],[[60907,59987],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178]],[[61966,58083],[66,-183],[-9,-245],[-158,-142],[119,-161]],[[61984,57352],[91,-109]],[[62075,57243],[54,-244],[125,-248]],[[62254,56751],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20]],[[63596,57321],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140]],[[61551,49585],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195]],[[60889,47817],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129]],[[61198,44484],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579]],[[59870,36949],[-45,-274],[65,-102]],[[59890,36573],[-41,-246],[-116,-210]],[[59733,36117],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311]],[[59119,34780],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355]],[[57838,31217],[-209,-269],[-291,-229]],[[57338,30719],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768]],[[54540,33696],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453]],[[53259,40357],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115]],[[53422,46976],[-39,183]],[[53383,47159],[-74,444]],[[53309,47603],[-228,626]],[[53081,48229],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438]],[[52636,51176],[-52,90],[96,663]],[[52680,51929],[40,467],[-108,390]],[[52612,52786],[-127,100],[-56,265]],[[52429,53151],[-71,85],[3,163]],[[52361,53399],[-289,-213]],[[52072,53186],[-105,32],[-107,-133]],[[51860,53085],[-222,13],[-149,370],[-91,427]],[[51398,53895],[-197,390],[-209,-8]],[[50992,54277],[-245,1]],[[50747,54278],[-229,-69]],[[50518,54209],[-224,-126]],[[50294,54083],[-436,-346],[-154,-203],[-250,-171],[-248,168]],[[49206,53531],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15]],[[47857,53158],[-73,-5],[-286,282]],[[47498,53435],[-252,450],[-237,323]],[[47009,54208],[-187,381]],[[46822,54589],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437]],[[46320,55840],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97]],[[45797,57103],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127]],[[45367,57897],[-46,453]],[[45321,58350],[36,262]],[[45357,58612],[-115,460],[-138,210],[122,112],[134,415],[66,304]],[[45426,60113],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255]],[[45260,62987],[12,249]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[144,235]],[[46494,67145],[259,66],[219,403],[139,158]],[[47111,67772],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6]],[[49397,71358],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35]],[[52339,72408],[302,239],[195,-71],[-9,-299],[236,217],[20,-113]],[[53083,72381],[-139,-289],[-2,-274]],[[52942,71818],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92]],[[53191,70158],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101]],[[56646,69496],[276,-69],[68,-196]],[[56990,69231],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149]],[[59518,69025],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6]],[[59757,70130],[99,482],[138,416],[5,21]],[[59999,71049],[-26,452],[68,243]],[[60041,71744],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245]],[[58441,72005],[-192,-71],[-268,315]],[[57981,72249],[-303,-10],[-165,587]],[[57513,72826],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13]],[[59768,75418],[485,-416],[399,-229]],[[60652,74773],[323,91],[239,-53],[328,309]],[[61542,75120],[42,252],[-70,403],[-160,218],[-154,68],[-102,181]],[[61098,76242],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95]],[[60617,78409],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[16,-368],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-80,135],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437]],[[58223,77340],[6,-152],[-135,-128],[-84,56],[-78,-713]],[[57932,76403],[-144,-245],[-101,-422],[89,-337]],[[57776,75399],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319]],[[57321,74302],[-87,275],[3,122]],[[57237,74699],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96]],[[56638,74190],[-154,0],[-147,304]],[[56337,74494],[-52,-130],[62,-353],[139,-277]],[[56486,73734],[-105,-130],[155,-272]],[[56536,73332],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521]],[[56431,72099],[-184,-7],[-228,257],[-104,472]],[[55915,72821],[-49,393],[-108,272],[-143,337],[-18,168]],[[55597,73991],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184]],[[55427,75229],[-46,93],[-59,46]],[[55322,75368],[-78,192],[-120,118]],[[55124,75678],[-261,218],[-161,213],[-254,176]],[[54448,76285],[-233,435],[56,44]],[[54271,76764],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9]],[[53809,77462],[62,54]],[[53871,77516],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118]],[[54413,75123],[249,-213],[204,-179]],[[54866,74731],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384]],[[53108,75604],[-189,341],[-86,584]],[[52833,76529],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43]],[[52065,76395],[-252,-334],[-548,160],[-404,-192],[-32,-355]],[[50829,75674],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118]],[[49600,72702],[-197,-455],[-352,-8]],[[49051,72239],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92]],[[47929,72498],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200]],[[47490,75324],[14,420],[-114,257],[393,426]],[[47783,76427],[340,-107],[373,4]],[[48496,76324],[296,-101],[230,31],[449,-19]],[[49471,76235],[144,354],[53,1177],[-287,620],[-205,299]],[[49176,78685],[-424,228],[-28,430]],[[48724,79343],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119]],[[50698,80799],[222,117]],[[50920,80916],[143,162]],[[51063,81078],[244,870],[380,247]],[[51687,82195],[231,-17]],[[51918,82178],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335]],[[52368,83053],[-113,328],[-8,604],[46,159]],[[52293,84144],[80,178],[244,36]],[[52617,84358],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288]],[[52756,83065],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189]],[[53922,82340],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7]],[[55461,82736],[63,260],[383,191]],[[55907,83187],[-59,497]],[[55848,83684],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453]],[[56753,84725],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17]],[[57772,85719],[316,327],[-291,280]],[[57797,86326],[-504,-47],[-489,-216],[-452,-125]],[[56352,85938],[-161,322],[-269,195],[62,581]],[[55984,87036],[-135,534],[133,344]],[[55982,87914],[252,371],[635,640],[185,124],[-28,250],[-387,279]],[[56639,89578],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835]],[[53063,85353],[-187,363],[-548,-684]],[[52328,85032],[-370,-138],[-385,301]],[[51573,85195],[-99,635]],[[51474,85830],[-88,1364],[256,380]],[[51642,87574],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[36,-878],[358,-180],[217,-153],[36,286]],[[60317,88590],[-174,263],[183,215]],[[60326,89068],[672,-368]],[[60998,88700],[234,144],[-187,433]],[[61045,89277],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73]],[[62654,90499],[2,-328],[218,-203]],[[62874,89968],[429,128],[68,377]],[[63371,90473],[581,282],[969,507]],[[64921,91262],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535]],[[69038,93080],[182,537],[207,116]],[[69427,93733],[735,-156],[58,-328]],[[70220,93249],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328]],[[70444,91717],[222,594],[-361,481]],[[70305,92792],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630]],[[72363,94093],[484,119],[668,-26]],[[73515,94186],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149]],[[63720,73858],[-47,-207],[-102,-138]],[[63571,73513],[7,-293]],[[63578,73220],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139]],[[64978,72558],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383]],[[64583,75266],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124]],[[63639,77993],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696]],[[63495,75281],[146,-311],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459]],[[23807,96363],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68],[-126,-17]],[[18874,96315],[-411,191],[224,188],[406,60],[392,-92],[-93,-177],[-518,-170]],[[56247,96336],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134],[-620,-241]],[[19199,96904],[-461,1],[5,84],[285,177],[149,-27],[361,-120],[-339,-115]],[[22969,96575],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39],[332,-205],[-76,-214],[-411,-122]],[[22313,96609],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227],[546,-81],[751,-215],[212,-281],[108,-247]],[[77621,96617],[507,776],[229,66],[208,-38],[704,-336],[-82,-240],[-1566,-228]],[[54420,95937],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8],[105,202],[408,20],[350,-206],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23]],[[56395,97491],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148],[545,-207],[-412,-318],[-806,-70]],[[63218,97851],[-301,140],[158,185],[-618,18],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90],[-373,-78],[-250,-45],[-39,-97],[-324,-98]],[[77154,97111],[-773,170],[-462,226],[-213,423],[-379,117],[722,404],[600,133],[540,-297],[640,-572],[-69,-531],[-606,-73]],[[24776,96791],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390],[334,-190],[-381,-176],[-513,-445],[-492,-42]],[[27622,95587],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355]],[[37559,86051],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253],[932,353],[975,-27],[354,218],[982,57],[2219,-74],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36]],[[67002,71642],[284,-224],[209,79],[58,268],[219,89],[157,180],[55,472],[234,114],[44,211],[131,-158],[84,-19]],[[68477,72654],[154,-4],[210,-124]],[[68841,72526],[85,-72],[201,189],[93,-114],[90,271],[166,-12],[43,86],[29,239],[120,205],[150,-134],[-30,-181],[84,-28],[-26,-496],[110,-194],[97,125],[123,58],[173,265],[192,-44],[286,-1]],[[70827,72688],[50,-169]],[[70877,72519],[-162,-67],[-141,-109],[-319,-68],[-298,-124],[-163,-258],[66,-250],[32,-294],[-139,-248],[12,-227],[-76,-213],[-265,18],[110,-390],[-177,-150],[-118,-356],[15,-355],[-108,-166],[-103,55],[-212,-77],[-31,-166],[-207,1],[-154,-334],[-10,-503],[-361,-246],[-194,52],[-56,-129],[-166,75],[-278,-88],[-465,301]],[[66909,68203],[252,536],[-23,380],[-210,100],[-22,375],[-91,472],[119,323],[-121,87],[76,430],[113,736]],[[56642,44124],[29,-184],[-32,-286],[49,-277],[-41,-222],[24,-203],[-579,7],[-13,-1880],[188,-483],[181,-369]],[[56448,40227],[-510,-241],[-673,83],[-192,284],[-1126,-26],[-42,-41],[-166,267],[-180,17],[-166,-100],[-134,-113]],[[53422,46976],[115,79],[80,-11],[98,71],[820,-8],[68,-440],[80,-354],[64,-191],[106,-309],[184,47],[91,83],[154,-83],[42,148],[69,344],[172,23],[15,103],[142,2],[-24,-213],[337,5],[5,-372],[56,-228],[-41,-356],[21,-363],[93,-219],[-15,-703],[68,54],[121,-15],[172,89],[127,-35]],[[53309,47603],[112,255],[84,100],[104,-203]],[[53609,47755],[-101,-124],[-45,-152],[-9,-258],[-71,-62]],[[55719,75309],[-35,-201],[39,-254],[115,-144]],[[55838,74710],[-5,-155],[-91,-85],[-16,-192],[-129,-287]],[[55427,75229],[-47,93]],[[55380,75322],[-18,188],[120,291],[18,-111],[75,52]],[[55575,75742],[59,-159],[66,-60],[19,-214]],[[65575,65974],[52,-202]],[[65665,65306],[-142,-3],[-23,-384],[50,-82],[-126,-117],[-1,-241],[-81,-245],[-7,-238]],[[65335,63996],[-56,-125],[-835,298],[-106,599],[-11,136]],[[31400,18145],[-168,16],[-297,1],[0,1319]],[[32587,37434],[511,-964],[227,-89],[339,-437],[286,-231],[40,-261],[-273,-898],[280,-160],[312,-91],[220,95],[252,453],[45,521]],[[34826,35372],[138,114],[139,-341],[-6,-472],[-234,-326],[-186,-241],[-314,-573],[-370,-806]],[[33993,32727],[-70,-473],[-74,-607],[3,-588],[-61,-132],[-21,-382]],[[31227,23224],[273,-433],[266,-119]],[[30952,19680],[-257,93],[-672,79],[-115,344],[6,443],[-185,-38],[-98,214],[-24,626],[213,260],[88,375],[-33,299],[148,504],[101,782],[-30,347],[122,112],[-30,223],[-129,118],[92,248],[-126,224],[-65,682],[112,120],[-47,720],[65,605],[75,527],[166,215],[-84,576],[-1,543],[210,386],[-7,494],[159,576],[1,544],[-72,108],[-128,1020],[171,607],[-27,572],[100,537],[182,555],[196,367],[-83,232],[58,190],[-9,985],[302,291],[96,614],[-34,148]],[[31359,37147],[231,534],[364,-144],[163,-427],[109,475],[316,-24],[45,-127]],[[62492,74950],[57,-155],[106,-103],[-56,-148],[148,-202],[-78,-189],[118,-160],[124,-97],[7,-410]],[[62918,73486],[-101,-17]],[[62817,73469],[-113,342],[1,91],[-123,-2],[-82,159],[-58,-16]],[[62442,74043],[-109,172],[-207,147],[27,288],[-47,208]],[[62106,74858],[386,92]],[[1088,892],[38,-7],[32,-4]],[[1158,881],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[-99504,-147],[245,344],[501,-185],[32,21],[294,188]],[[54716,79012],[-21,-241],[-156,-2],[53,-128],[-92,-380]],[[54500,78261],[-53,-100],[-243,-14],[-140,-134],[-229,45]],[[53835,78058],[-398,153],[-62,205],[-274,-102],[-32,-113],[-169,84]],[[52900,78285],[-142,16],[-125,108],[42,145],[-10,104]],[[52665,78658],[83,33],[141,-164],[39,156],[245,-25],[199,106],[133,-18],[87,-121],[26,100],[-40,385],[100,75],[98,272]],[[53776,79457],[206,-190],[157,242],[98,44],[215,-180],[131,30],[128,-111]],[[54711,79292],[-23,-75],[28,-205]],[[62817,73469],[-190,78],[-141,273],[-44,223]],[[63720,73858],[-48,-207],[-101,-138]],[[63578,73220],[-69,-29],[-173,309],[95,292],[-82,174],[-104,-44],[-327,-436]],[[62492,74950],[68,96],[207,-169],[149,-36],[38,70],[-136,319],[72,82]],[[62890,75312],[78,-20],[191,-359],[122,-40],[48,150],[166,238]],[[58149,47921],[-17,713],[-70,268]],[[58062,48902],[169,-46],[85,336],[147,-38]],[[58463,49154],[16,-233],[60,-134],[3,-192],[-69,-124],[-108,-308],[-101,-214],[-115,-28]],[[50920,80916],[204,-47],[257,123],[176,-258],[153,-138]],[[51710,80596],[-32,-400]],[[51678,80196],[-72,-22],[-30,-331]],[[51576,79843],[-243,269],[-143,-46],[-194,279],[-129,237],[-129,10],[-40,207]],[[50518,54209],[-69,407],[13,1357],[-56,122],[-11,290],[-96,207],[-85,174],[35,311]],[[50249,57077],[96,67],[56,258],[136,56],[61,176]],[[50598,57634],[93,173],[100,2],[212,-340]],[[51003,57469],[-11,-197],[62,-350],[-54,-238],[29,-159],[-135,-366],[-86,-181],[-52,-372],[7,-376],[-16,-952]],[[49214,56277],[-190,152],[-130,-22],[-97,-149],[-125,125],[-49,195],[-125,129]],[[48498,56707],[-18,343],[76,250],[-7,200],[221,490],[41,405],[76,144],[134,-79],[116,120],[38,152],[216,265],[53,184],[259,246],[153,84],[70,-114],[178,3]],[[50104,59400],[-22,-286],[37,-269],[156,-386],[9,-286],[320,-134],[-6,-405]],[[50249,57077],[-243,13]],[[50006,57090],[-128,47],[-90,-96],[-123,43],[-482,-27],[-7,-336],[38,-444]],[[75742,63602],[-6,-424],[-97,90],[18,-476]],[[75657,62792],[-79,308],[-16,301],[-53,285]],[[74730,63611],[-43,486],[-96,444],[47,356],[-171,159],[62,215],[173,220],[-200,313],[98,401],[220,-255],[133,-30],[24,-410],[265,-81],[257,8],[160,-101],[-128,-500],[-124,-34],[-86,-336],[152,-306],[46,377],[76,2],[147,-937]],[[56293,76715],[80,-243],[108,43],[213,-92],[408,-31],[138,150],[327,138],[202,-215],[163,-62]],[[57776,75399],[-239,79],[-283,-186]],[[57254,75292],[-3,-294],[-252,-56],[-196,206],[-222,-162],[-206,17]],[[56375,75003],[-20,391],[-139,189]],[[56216,75583],[46,84],[-30,70],[47,188],[105,185],[-135,255],[-24,216],[68,134]],[[55279,77084],[100,2],[-69,-260],[134,-227],[-41,-278],[-65,-27]],[[55338,76294],[-52,-53],[-90,-138],[-41,-325]],[[55155,75778],[-246,224],[-105,247],[-106,130],[-127,221],[-61,183],[-136,277],[59,245],[99,-136],[60,123],[130,13],[239,-98],[192,8],[126,-131]],[[56523,82432],[268,-4],[302,223],[64,333],[228,190],[-26,264]],[[57359,83438],[169,100],[298,228]],[[57826,83766],[293,-149],[39,-146],[146,70],[272,-141],[27,-277],[-60,-159],[174,-387],[113,-108],[-16,-107],[187,-104],[80,-157],[-108,-129],[-224,20],[-54,-55],[66,-196],[68,-379]],[[58829,81362],[-239,-35],[-85,-129],[-18,-298],[-111,57],[-250,-28],[-73,138],[-104,-103],[-105,86],[-218,12],[-310,141],[-281,47],[-215,-14],[-152,-160],[-133,-23]],[[56535,81053],[-6,263],[-85,274],[166,121],[2,235],[-77,225],[-12,261]],[[25238,61101],[-2,87],[33,27],[51,-70],[99,357],[53,8]],[[25297,59966],[-83,0],[22,667],[2,468]],[[31359,37147],[-200,-81],[-109,814],[-150,663],[88,572],[-146,250],[-37,426],[-136,402]],[[30669,40193],[175,638],[-119,496],[63,199],[-49,219],[108,295],[6,503],[13,415],[60,200],[-240,951]],[[30686,44109],[206,-50],[143,13],[62,179],[243,239],[147,222],[363,100],[-29,-443],[34,-227],[-23,-396],[302,-529],[311,-98],[109,-220],[188,-117],[115,-172],[175,6],[161,-175],[12,-342],[55,-172],[3,-255],[-81,-10],[107,-688],[533,-24],[-41,-342],[30,-233],[151,-166],[66,-367],[-49,-465],[-77,-259],[27,-337],[-87,-122]],[[33842,38659],[-4,182],[-259,302],[-258,9],[-484,-172],[-133,-520],[-7,-318],[-110,-708]],[[34826,35372],[54,341],[38,350],[0,325],[-100,107],[-104,-96],[-103,26],[-33,228],[-26,541],[-52,177],[-187,160],[-114,-116],[-293,113],[18,802],[-82,329]],[[30686,44109],[-157,-102],[-126,68],[18,898],[-228,-348],[-245,15],[-105,315],[-184,34],[59,254],[-155,359],[-115,532],[73,108],[0,250],[168,171],[-28,319],[71,206],[20,275],[318,402],[227,114],[37,89],[251,-28]],[[30585,48040],[125,1620],[6,256],[-43,339],[-123,215],[1,430],[156,97],[56,-61],[9,226],[-162,61],[-4,370],[541,-13],[92,203],[77,-187],[55,-349],[52,73]],[[31423,51320],[153,-312],[216,38],[54,181],[206,138],[115,97],[32,250],[198,168],[-15,124],[-235,51],[-39,372],[12,396],[-125,153],[52,55],[206,-76],[221,-148],[80,140],[200,92],[310,221],[102,225],[-37,167]],[[33129,53652],[145,26],[64,-136],[-36,-259],[96,-90],[63,-274],[-77,-209],[-44,-502],[71,-299],[20,-274],[171,-277],[137,-29],[30,116],[88,25],[126,104],[90,157],[154,-50],[67,21]],[[34294,51702],[151,-48],[25,120],[-46,118],[28,171],[112,-53],[131,61],[159,-125]],[[34854,51946],[121,-122],[86,160],[62,-25],[38,-166],[133,42],[107,224],[85,436],[164,540]],[[35174,30629],[-77,334],[122,280],[-160,402],[-218,327],[-286,379],[-103,-18],[-279,457],[-180,-63]],[[82069,53798],[-13,-291],[-16,-377],[-133,19],[-58,-202],[-126,307]],[[75471,66988],[113,-189],[-20,-363],[-227,-17],[-234,39],[-175,-92],[-252,224],[-6,119]],[[74670,66709],[184,439],[150,150],[198,-137],[147,-14],[122,-159]],[[58175,37528],[-393,-435],[-249,-442],[-93,-393],[-83,-222],[-152,-47],[-48,-283],[-28,-184],[-178,-138],[-226,29],[-133,166],[-117,71],[-135,-137],[-68,-283],[-132,-177],[-139,-264],[-199,-60],[-62,207],[26,360],[-165,562],[-75,88]],[[55526,35946],[0,1725],[274,20],[8,2105],[207,19],[428,207],[106,-243],[177,231],[85,2],[156,133]],[[56967,40145],[50,-44]],[[57017,40101],[107,-473],[56,-105],[87,-342],[315,-649],[119,-64],[0,-208],[82,-375],[215,-90],[177,-267]],[[54244,54965],[229,44],[52,152],[46,-11],[69,-134],[350,226],[118,230],[145,207],[-28,208],[78,54],[269,-36],[261,273],[201,645],[141,239],[176,101]],[[56351,57163],[31,-253],[160,-369],[1,-241],[-45,-246],[18,-184],[96,-170]],[[56612,55700],[212,-258]],[[56824,55442],[152,-239],[2,-192],[187,-308],[116,-255],[70,-355],[208,-234],[44,-187]],[[57603,53672],[-91,-63],[-178,14],[-209,62],[-104,-51],[-41,-143],[-90,-18],[-110,125],[-309,-295],[-127,60],[-38,-46],[-83,-357],[-207,115],[-203,59],[-177,218],[-229,200],[-149,-190],[-108,-300],[-25,-412]],[[55125,52650],[-178,33],[-188,99],[-166,-313],[-146,-550]],[[54447,51919],[-29,172],[-12,269],[-127,190],[-103,305],[-23,212],[-132,309],[23,176],[-28,249],[21,458],[67,107],[140,599]],[[26228,91219],[16,649],[394,-46]],[[25824,89109],[-81,-259],[-322,-399]],[[23714,86094],[-16,-686],[409,-99]],[[25743,83665],[348,-163],[294,-248]],[[28738,83981],[-23,395],[-188,502]],[[31513,79609],[415,58],[246,-289]],[[31350,77248],[-181,334],[0,805],[-123,171],[-187,-100],[-92,155],[-212,-446],[-84,-460],[-99,-269],[-118,-91],[-89,-30],[-28,-146],[-512,0],[-422,-4],[-125,-109],[-294,-425],[-34,-46],[-89,-231],[-255,1],[-273,-3],[-125,-93],[44,-116],[25,-181],[-5,-60],[-363,-293],[-286,-93],[-323,-316],[-70,0],[-94,93],[-31,85],[6,61],[61,207],[131,325],[81,349],[-56,514],[-59,536],[-290,277],[35,105],[-41,73],[-76,0],[-56,93],[-14,140],[-54,-61],[-75,18],[17,59],[-65,58],[-27,155],[-216,189],[-224,197],[-272,229],[-261,214],[-248,-167],[-91,-6],[-342,154],[-225,-77],[-269,183],[-284,94],[-194,36],[-86,100],[-49,325],[-94,-3],[-1,-227],[-575,0],[-951,0],[-944,0],[-833,0],[-834,0],[-819,0],[-847,0],[-273,0],[-825,0],[-788,0]],[[15104,80367],[-503,244],[-155,523],[40,363]],[[13740,82958],[154,285],[-7,373],[-473,376],[-284,674],[-173,424],[-255,266],[-187,242],[-147,306],[-279,-192],[-270,-330],[-247,388],[-194,259],[-271,164],[-273,17],[1,3364],[2,2193]],[[11355,91625],[438,-285],[289,-54]],[[15437,92031],[38,-449],[341,97]],[[17987,91291],[374,-300],[-390,-293]],[[19722,91216],[-704,-88],[-494,-56]],[[15020,93041],[119,250],[192,432]],[[16539,93012],[0,-257],[-731,-285]],[[52900,78285],[-22,-242],[-122,-100],[-206,75],[-60,-239],[-132,-19],[-48,94],[-156,-200],[-134,-28],[-120,126]],[[51900,77752],[-95,259],[-133,-92],[5,267],[203,332],[-9,150],[126,-54],[77,101]],[[52074,78715],[236,-4],[57,128],[298,-181]],[[31400,18145],[-92,-239],[-238,-183]],[[31070,17723],[-137,19],[-164,48]],[[30769,17790],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[29661,27385],[-80,576],[-22,666]],[[30452,39739],[143,151],[74,303]],[[86288,75628],[-179,348],[-111,-331],[-429,-254],[44,-312],[-241,22],[-131,185],[-191,-419],[-306,-318],[-227,-379]],[[83030,72705],[220,-173],[311,422]],[[83987,72709],[45,-310],[-393,-165]],[[83097,71205],[299,-325],[109,-581]],[[80517,63220],[-373,189],[-131,-96]],[[80013,63313],[-280,154],[-132,240],[44,340],[-254,108],[-134,222],[-236,-315],[-271,-68],[-221,3],[-149,-145]],[[78380,63852],[-144,-86],[42,-676],[-148,16],[-25,139]],[[78105,63245],[-9,244],[-203,-172],[-121,109],[-206,222],[81,490],[-176,115],[-66,544],[-293,-98],[33,701],[263,493],[11,487],[-8,452],[-121,141],[-93,348],[-162,-44]],[[77035,67277],[-300,89],[94,248],[-130,367],[-198,-249],[-233,145],[-321,-376],[-252,-439],[-224,-74]],[[74670,66709],[-23,465],[-170,-124]],[[74477,67050],[-324,57],[-314,136],[-225,259],[-216,117],[-93,284],[-157,84],[-280,385],[-223,182],[-115,-141]],[[72530,68413],[-386,413],[-273,374],[-78,651],[200,-79],[9,301],[-111,303],[28,482],[-298,692]],[[71621,71550],[-457,239],[-82,454],[-205,276]],[[70827,72688],[-42,337],[10,230],[-169,134],[-91,-59],[-70,546]],[[70465,73876],[79,136],[-39,138],[266,279],[192,116],[294,-80],[105,378],[356,70],[99,234],[438,320],[39,134]],[[72294,75601],[-22,337],[190,154],[-250,1026],[550,236],[143,131],[200,1058],[551,-194],[155,267],[13,592],[230,56],[212,393]],[[74266,79657],[109,49]],[[74375,79706],[73,-413],[233,-313],[396,-222],[192,-476],[-107,-690],[100,-256],[330,-101],[374,-83],[336,-368],[171,-66],[127,-544],[163,-351],[306,14],[574,-133],[369,82],[274,-88],[411,-359],[336,1],[123,-184],[324,318],[448,205],[417,22],[324,208],[200,316],[194,199],[-45,195],[-89,227],[146,381],[156,-53],[286,-120],[277,313],[423,229],[204,391],[195,168],[404,78],[219,-66],[30,210],[-251,413],[-223,189],[-214,-219],[-274,92],[-157,-74],[-72,241],[197,590],[135,446]],[[82410,80055],[333,-223],[392,373],[-3,260],[251,627],[155,189],[-4,326],[-152,141],[229,294],[345,106],[369,16],[415,-176],[244,-217],[172,-596],[104,-254],[97,-363],[103,-579],[483,-189],[329,-420],[112,-555],[423,-1],[240,233],[459,175],[-146,-532],[-107,-216],[-96,-647],[-186,-575],[-338,104],[-238,-208],[73,-506],[-40,-698],[-142,-16],[2,-300]],[[47857,53158],[22,487],[26,74],[-8,233],[-118,247],[-88,40],[-81,162],[60,262],[-28,286],[13,172]],[[47655,55121],[44,0],[17,258],[-22,114],[27,82],[103,71],[-69,473],[-64,245],[23,200],[55,46]],[[47769,56610],[36,54],[77,-89],[215,-5],[51,172],[48,-11],[80,67],[43,-253],[65,74],[114,88]],[[49214,56277],[74,-841],[-117,-496],[-73,-667],[121,-509],[-13,-233]],[[53632,51919],[-35,32],[-164,-76],[-169,79],[-132,-38]],[[53132,51916],[-452,13]],[[52680,51929],[40,466],[-108,391]],[[52429,53151],[-72,85],[4,163]],[[52361,53399],[71,418],[132,570],[81,6],[165,345],[105,10],[156,-243],[191,199],[26,246],[63,238],[43,299],[148,243],[56,414],[59,132],[39,307],[74,377],[234,457],[14,196],[31,107],[-110,235]],[[53939,57955],[9,188],[78,34]],[[54026,58177],[111,-378],[18,-392],[-10,-393],[151,-537],[-155,6],[-78,-42],[-127,60],[-60,-279],[164,-345],[121,-100],[39,-245],[87,-407],[-43,-160]],[[54447,51919],[-20,-319],[-220,140],[-225,156],[-350,23]],[[58564,52653],[-16,-691],[111,-80],[-89,-210],[-107,-157],[-106,-308],[-59,-274],[-15,-475],[-65,-225],[-2,-446]],[[58216,49787],[-80,-165],[-10,-351],[-38,-46],[-26,-323]],[[58149,47921],[50,-544],[-27,-307]],[[58172,47070],[55,-343],[161,-330]],[[58388,46397],[150,-745]],[[58538,45652],[-109,60],[-373,-99],[-75,-71],[-79,-377],[62,-261],[-49,-699],[-34,-593],[75,-105],[194,-230],[76,107],[23,-637],[-212,5],[-114,325],[-103,252],[-213,82],[-62,310],[-170,-187],[-222,83],[-93,268],[-176,55],[-131,-15],[-15,184],[-96,15]],[[53609,47755],[73,-60],[95,226],[152,-6],[17,-167],[104,-105],[164,370],[161,289],[71,189],[-10,486],[121,574],[127,304],[183,285],[32,189],[7,216],[45,205],[-14,335],[34,524],[55,368],[83,316],[16,357]],[[57603,53672],[169,-488],[124,-71],[75,99],[128,-39],[155,125],[66,-252],[244,-393]],[[53081,48229],[212,326],[-105,391],[95,148],[187,73],[23,261],[148,-283],[245,-25],[85,279],[36,393],[-31,461],[-131,350],[120,684],[-69,117],[-207,-48],[-78,305],[21,258]],[[29063,50490],[-119,140],[-137,195],[-79,-94],[-235,82],[-68,255],[-52,-10],[-278,338]],[[28366,54848],[36,287],[89,-43],[52,176],[-64,348],[34,86]],[[30185,57537],[-178,-99],[-71,-295],[-107,-169],[-81,-220],[-34,-422],[-77,-345],[144,-40],[35,-271],[62,-130],[21,-238],[-33,-219],[10,-123],[69,-49],[66,-207],[357,57],[161,-75],[196,-508],[112,63],[200,-32],[158,68],[99,-102],[-50,-318],[-62,-199],[-22,-423],[56,-393],[79,-175],[9,-133],[-140,-294],[100,-130],[74,-207],[85,-589]],[[30585,48040],[-139,314],[-83,14],[179,602],[-213,276],[-166,-51],[-101,103],[-153,-157],[-207,74],[-163,620],[-129,152],[-89,279],[-184,280],[-74,-56]],[[26191,57131],[42,76],[183,-156],[63,77],[89,-50],[46,-121],[82,-40],[66,126]],[[27070,56232],[-107,-53],[1,-238],[58,-88],[-41,-70],[10,-107],[-23,-120],[-14,-117]],[[59437,71293],[-30,21],[-53,-45],[-42,12],[-14,-22],[-5,59],[-20,37],[-54,6],[-75,-51],[-52,31]],[[53776,79457],[-157,254],[-141,142],[-30,249],[-49,176],[202,129],[103,147],[200,114],[70,113],[73,-68],[124,62]],[[54171,80775],[132,-191],[207,-51],[-17,-163],[151,-122],[41,153],[191,-66],[26,-185],[207,-36],[127,-291]],[[55236,79823],[-82,-1],[-43,-106],[-64,-26],[-18,-134],[-54,-28],[-7,-55],[-95,-61],[-123,10],[-39,-130]],[[53922,82340],[64,-300],[-77,-158],[101,-210],[69,-316],[-22,-204],[114,-377]],[[52074,78715],[35,421],[140,404],[-400,109],[-131,155]],[[51718,79804],[16,259],[-56,133]],[[51710,80596],[-47,619],[167,0],[70,222],[69,541],[-51,200]],[[52368,83053],[210,-78],[178,90]],[[61984,57352],[-102,-317]],[[61882,57035],[-62,106],[-67,-42],[-155,10],[-4,180],[-22,163],[94,277],[98,261]],[[61764,57990],[119,-51],[83,144]],[[52293,84144],[80,177],[244,37]],[[30081,61241],[5,161],[-71,177],[68,99],[21,228],[-24,321]],[[53333,64447],[-952,-1126],[-804,-1161],[-392,-263]],[[51185,61897],[-308,-58],[-3,376],[-129,96],[-173,169],[-66,277],[-937,1289],[-937,1289]],[[48632,65335],[-1045,1431]],[[47587,66766],[6,114],[-1,40]],[[47592,66920],[-2,700],[449,436],[277,90],[227,159],[107,295],[324,234],[12,438],[161,51],[126,219],[363,99],[51,230],[-73,125],[-96,624],[-17,359],[-104,379]],[[52339,72408],[-57,-303],[44,-563],[-65,-487],[-171,-330],[24,-445],[227,-352],[3,-143],[171,-238],[118,-1061]],[[52633,68486],[90,-522],[15,-274],[-49,-482],[21,-270],[-36,-323],[24,-371],[-110,-247],[164,-431],[11,-253],[99,-330],[130,109],[219,-275],[122,-370]],[[29063,50490],[38,-449],[-86,-384],[-303,-619],[-334,-233],[-170,-514],[-53,-398],[-157,-243],[-116,298],[-113,64],[-114,-47],[-8,216],[79,141],[-33,246]],[[60240,63578],[-1102,0],[-1077,0],[-1117,0]],[[56944,63578],[0,2175],[0,2101],[-83,476],[71,365],[-43,253],[101,283]],[[59518,69025],[182,-1015]],[[61764,57990],[-95,191],[-114,346],[-124,190],[-71,204],[-242,237],[-191,7],[-67,124],[-163,-139],[-168,268],[-87,-441],[-323,124]],[[60119,59101],[-30,236],[120,868],[27,393],[88,181],[204,97],[141,337]],[[60669,61213],[161,-684],[77,-542]],[[47783,76427],[340,-106],[373,3]],[[49471,76235],[111,-230],[511,-268],[101,127],[313,-267],[322,77]],[[49600,72702],[-197,-454],[-352,-9]],[[47929,72498],[-23,195],[103,222],[38,161],[-96,175],[77,388],[-111,355],[120,48],[11,280],[45,86],[3,461],[129,160],[-78,296],[-162,21],[-47,-75],[-164,0],[-70,289],[-113,-86],[-101,-150]],[[57772,85719],[42,-103],[-198,-341],[83,-551],[-120,-187]],[[57579,84537],[-229,1],[-239,219],[-121,73],[-237,-105]],[[61882,57035],[-61,-209],[103,-325],[102,-285],[106,-210],[909,-702],[233,4]],[[63274,55308],[-785,-1773],[-362,-26],[-247,-417],[-178,-11],[-76,-186]],[[61626,52895],[-190,0],[-112,200],[-254,-247],[-82,-247],[-185,47],[-62,68],[-65,-16],[-87,6],[-352,502],[-193,0],[-95,194],[0,332],[-145,99]],[[59804,53833],[-164,643],[-127,137],[-48,236],[-141,288],[-171,42],[95,337],[147,14],[42,181]],[[59437,55711],[-4,531]],[[59433,56242],[82,618],[132,166],[28,241],[119,451],[168,293],[112,582],[45,508]],[[57942,91385],[-41,-414],[425,-394],[-256,-445],[323,-673],[-187,-506],[250,-440],[-113,-385],[411,-405],[-105,-301],[-258,-341],[-594,-755]],[[56352,85938],[-161,323],[-269,193],[62,582]],[[55984,87036],[-135,533],[133,345]],[[56639,89578],[-93,230],[-8,910],[-433,402],[-371,289]],[[55734,91409],[167,156],[309,-312],[362,29],[298,-143],[265,262],[137,433],[431,200],[356,-235],[-117,-414]],[[34854,51946],[70,252],[24,269],[48,253],[-107,349]],[[34889,53069],[-22,404],[144,508]],[[51576,79843],[62,-52],[80,13]],[[51900,77752],[-11,-167],[82,-222],[-97,-180],[72,-457],[151,-75],[-32,-256]],[[49176,78685],[-424,227],[-28,431]],[[52636,51176],[94,35],[404,-6],[-2,711]],[[48278,82406],[-210,122],[-172,-9],[57,317],[-57,317]],[[49420,83612],[22,-62],[248,-697]],[[49690,82853],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127]],[[49051,80963],[-2,1],[-434,98]],[[48615,81062],[-79,235],[291,183],[-152,319],[52,387]],[[48727,82186],[413,-54],[1,0]],[[49141,82132],[40,343]],[[49181,82475],[-186,364],[-4,8]],[[48991,82847],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38]],[[61098,76242],[34,70],[235,-101],[409,-96],[378,-283],[48,-110],[169,93],[259,-124],[85,-242],[175,-137]],[[62106,74858],[-268,290],[-296,-28]],[[50006,57090],[-20,-184],[116,-305],[-1,-429],[27,-466],[69,-215],[-61,-532],[22,-294],[74,-375],[62,-207]],[[47655,55121],[-78,15],[-57,-238],[-78,3],[-55,126],[19,237],[-116,362],[-73,-67],[-59,-13]],[[47158,55546],[-77,-34],[3,217],[-44,155],[9,171],[-60,249],[-78,211],[-222,1],[-65,-112],[-76,-13],[-48,-128],[-32,-163],[-148,-260]],[[45797,57103],[123,288],[84,-11],[73,99],[61,1],[44,78],[-24,196],[31,62],[5,200]],[[46194,58016],[134,-6],[200,-144],[61,13],[21,66],[151,-47],[40,33]],[[46801,57931],[16,-216],[44,1],[73,78],[46,-19],[77,-150],[119,-48],[76,128],[90,79],[67,83],[55,-15],[62,-130],[33,-163],[114,-248],[-57,-152],[-11,-192],[59,58],[35,-69],[-15,-176],[85,-170]],[[45357,58612],[302,17],[63,140],[88,9],[110,-145],[86,-3],[92,99],[56,-170],[-120,-133],[-121,11],[-119,124],[-103,-136],[-50,-5],[-67,-83],[-253,13]],[[45367,57897],[147,96],[92,-19],[75,67],[513,-25]],[[56638,74190],[-154,-1],[-147,305]],[[56486,73734],[-105,-129],[155,-273]],[[56431,72099],[-184,-8],[-228,257],[-104,473]],[[55838,74710],[182,53],[106,129],[150,-12],[46,103],[53,20]],[[57254,75292],[135,-157],[-86,-369],[-66,-67]],[[24381,59170],[7,172],[32,138],[-39,111],[133,481],[357,2],[7,201],[-45,36],[-31,128],[-103,136],[-103,198],[125,1],[1,333],[259,1],[257,-7]],[[25493,59872],[-127,-225],[-131,-166],[-20,-113],[22,-116],[-58,-150]],[[25179,59102],[-65,-37],[15,-69],[-52,-66],[-95,-149],[-9,-86]],[[34125,54109],[-44,-532],[-169,-154],[15,-139],[-51,-305],[123,-429],[89,-1],[37,-333],[169,-514]],[[33129,53652],[-188,448],[75,163],[-5,273],[171,95],[69,110],[-95,220],[24,215],[220,347]],[[25697,58436],[-84,51]],[[25613,58487],[19,237],[-38,64],[-57,42],[-122,-70],[-10,79],[-84,95],[-60,118],[-82,50]],[[25860,59889],[128,15],[90,66]],[[26903,59440],[-95,12],[-38,-81],[-97,-77],[-70,0],[-61,-76],[-56,27],[-47,90],[-29,-17],[-36,-141],[-27,5],[-4,-121],[-97,-163],[-51,-70],[-29,-74],[-82,120],[-60,-158],[-58,4],[-65,-14],[6,-290],[-41,-5],[-35,-135],[-86,-25]],[[55230,77704],[67,-229],[89,-169],[-107,-222]],[[55155,75778],[-31,-100]],[[54448,76285],[-233,434],[56,45]],[[53809,77462],[194,-20],[51,100],[94,-97],[109,-11],[-1,165],[97,60],[27,239],[221,157]],[[54601,78055],[88,-73],[208,-253],[229,-114],[104,89]],[[54716,79012],[141,-151],[103,-65],[233,73],[22,118],[111,18],[135,92],[30,-38],[130,74],[66,139],[91,36],[297,-180],[59,61]],[[56134,79189],[155,-161],[19,-159]],[[56308,78869],[-170,-123],[-131,-401],[-168,-401],[-223,-111]],[[55616,77833],[-173,26],[-213,-155]],[[54601,78055],[-54,200],[-47,6]],[[84713,45326],[28,-117],[5,-179]],[[89166,49043],[5,-1925],[4,-1925]],[[80461,51765],[47,-395],[190,-334],[179,121],[177,-43],[162,299],[133,52],[263,-166],[226,126],[143,822],[107,205],[96,672],[319,0],[241,-100]],[[72530,68413],[-176,-268],[-108,-553],[269,-224],[262,-289],[362,-332],[381,-76],[160,-301],[215,-56],[334,-138],[231,10],[32,234],[-36,375],[21,255]],[[77035,67277],[20,-224],[-97,-108],[23,-364],[-199,107],[-359,-408],[8,-338],[-153,-496],[-14,-288],[-124,-487],[-217,135],[-11,-612],[-63,-201],[30,-251],[-137,-140]],[[73107,61020],[-276,-387],[-1,-271]],[[72692,60216],[-251,-212],[-129,-31]],[[71996,56025],[-253,-168],[-93,-401]],[[68937,64577],[185,395],[612,-2],[-56,507],[-156,300],[-31,455],[-182,265],[306,619],[323,-45],[290,620],[174,599],[270,593],[-4,421],[236,342],[-224,292],[-96,400],[-99,517],[137,255],[421,-144],[310,88],[268,496]],[[64978,72558],[244,114],[197,338],[186,-17],[122,110],[197,-55],[308,-299],[221,-65],[318,-523],[207,-21],[24,-498]],[[66909,68203],[137,-310],[112,-357],[266,-260],[7,-520],[133,-96],[23,-272],[-400,-305],[-105,-687]],[[66559,65575],[-303,136],[-313,76]],[[63594,68492],[-104,-231]],[[63490,68261],[-153,311],[-3,314],[-89,0],[46,428],[-143,449],[-340,324],[-193,562],[65,461],[139,204],[-21,345],[-182,177],[-180,705]],[[62436,72541],[-152,473],[55,183],[-87,678],[190,168]],[[63326,68290],[-187,49],[-204,-567]],[[62935,67772],[-516,47],[-784,1188],[-413,414],[-335,160]],[[60887,69581],[-112,720]],[[60775,70301],[615,614],[105,715],[-26,431],[152,146],[142,369]],[[61763,72576],[119,92],[324,-77],[97,-150],[133,100]],[[63490,68261],[-164,29]],[[59873,69719],[-100,82],[-58,-394],[69,-66],[-71,-81],[-12,-156],[131,80]],[[59832,69184],[7,-230],[-139,-944]],[[59757,70130],[93,-1],[25,104],[75,8]],[[59950,70241],[4,-242],[-38,-90],[6,-4]],[[59922,69905],[-49,-186]],[[53835,78058],[-31,-291],[67,-251]],[[54413,75123],[249,-214],[204,-178]],[[53108,75604],[-189,340],[-86,585]],[[59922,69905],[309,-234],[544,630]],[[60887,69581],[-53,-89],[-556,-296],[277,-591],[-92,-101],[-46,-197],[-212,-82],[-66,-213],[-120,-182],[-310,94]],[[59832,69184],[41,173],[0,362]],[[69711,75551],[-159,-109],[-367,-412],[-121,-422],[-104,-4],[-76,280],[-353,19],[-57,484],[-135,4],[21,593],[-333,431],[-476,-46],[-326,-86],[-265,533],[-227,223],[-431,423],[-52,51],[-715,-349],[11,-2178]],[[65546,74986],[-142,-29],[-195,463],[-188,166],[-315,-123],[-123,-197]],[[63639,77993],[-142,96],[29,304],[-177,395],[-207,-17],[-235,401],[160,448],[-81,120],[222,649],[285,-342],[35,431],[573,643],[434,15],[612,-409],[329,-239],[295,249],[440,12],[356,-306],[80,175],[391,-25],[69,280],[-450,406],[267,288],[-52,161],[266,153],[-200,405],[127,202],[1039,205],[136,146],[695,218],[250,245],[499,-127],[88,-612],[290,144],[356,-202],[-23,-322],[267,33],[696,558],[-102,-185],[355,-457],[620,-1500],[148,309],[383,-340],[399,151],[154,-106],[133,-341],[194,-115],[119,-251],[358,79],[147,-361]],[[72294,75601],[-171,87],[-140,212],[-412,62],[-461,16],[-100,-65],[-396,248],[-158,-122],[-43,-349],[-457,204],[-183,-84],[-62,-259]],[[60889,47817],[-399,590],[-19,343],[-1007,1203],[-47,65]],[[59417,50018],[-3,627],[80,239],[137,391],[101,431],[-123,678],[-32,296],[-132,411]],[[59445,53091],[171,352],[188,390]],[[61626,52895],[-243,-670],[3,-2152],[165,-488]],[[70465,73876],[-526,-89],[-343,192],[-301,-46],[26,340],[303,-98],[101,182]],[[69725,74357],[212,-58],[355,425],[-329,311],[-198,-147],[-205,223],[234,382],[-83,58]],[[78495,57780],[-66,713],[178,492],[359,112],[261,-84]],[[79227,59013],[229,-232],[126,407],[246,-217]],[[79828,58971],[64,-394],[-34,-708],[-467,-455],[122,-358],[-292,-43],[-240,-238]],[[85103,71220],[51,443],[-122,615]],[[85048,72883],[17,54],[124,-21],[108,266],[197,29],[118,39],[40,143]],[[55575,75742],[52,132]],[[55627,75874],[66,43],[38,196],[50,33],[40,-84],[52,-36],[36,-94],[46,-28],[54,-110],[39,4],[-31,-144],[-33,-71],[9,-44]],[[55993,75539],[-62,-23],[-164,-91],[-13,-121],[-35,5]],[[63448,67449],[-196,-16],[-69,282],[-248,57]],[[79227,59013],[90,266],[12,500],[-224,515],[-18,583],[-211,480],[-210,40],[-56,-205],[-163,-17],[-83,104],[-293,-353],[-6,530],[68,623],[-188,27],[-16,355],[-120,182]],[[77809,62643],[59,218],[237,384]],[[78380,63852],[162,-466],[125,-537],[342,-5],[108,-515],[-178,-155],[-80,-212],[333,-353],[231,-699],[175,-520],[210,-411],[70,-418],[-50,-590]],[[59999,71049],[125,-31],[45,-231],[-151,-223],[-68,-323]],[[47498,53435],[-252,449],[-237,324]],[[46822,54589],[66,189],[15,172],[126,320],[129,276]],[[54125,64088],[-197,-220],[-156,324],[-439,255]],[[52633,68486],[136,137],[24,250],[-30,244],[191,228],[86,189],[135,170],[16,454]],[[56646,69496],[276,-70],[68,-195]],[[56944,63578],[0,-1180],[-320,-2],[-3,-248]],[[56621,62148],[-1108,1131],[-1108,1132],[-280,-323]],[[57708,32474],[-209,454],[148,374],[151,232],[130,120],[121,-182],[96,-178],[-85,-288],[-47,-192],[-155,-93],[-51,-188],[-99,-59]],[[56314,82678],[-23,150],[30,162],[-123,94],[-291,103]],[[55848,83684],[318,181],[466,-38],[273,59],[39,-123],[148,-38],[267,-287]],[[56523,82432],[-67,182],[-142,64]],[[57579,84537],[134,-136],[24,-287],[89,-348]],[[47592,66920],[-42,0],[7,-317],[-172,-19],[-90,-134],[-126,0],[-100,76],[-234,-63],[-91,-460],[-86,-44],[-131,-745],[-386,-637],[-92,-816],[-114,-265],[-33,-213],[-625,-48],[-5,1]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603]],[[46350,66910],[5,8],[139,227]],[[46494,67145],[259,65],[218,404],[140,158]],[[57394,79070],[66,87],[185,58],[204,-184],[115,-22],[125,-159],[-20,-200],[101,-97],[40,-247],[97,-150],[-19,-88],[52,-60],[-74,-44],[-164,18],[-27,81],[-58,-47],[20,-106],[-76,-188],[-49,-203],[-70,-64]],[[57842,77455],[-50,270],[30,252],[-9,259],[-160,352],[-89,249],[-86,175],[-84,58]],[[23016,65864],[-107,-518],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[24067,59806],[-144,191],[-226,155]],[[19641,66203],[-142,138],[-164,287]],[[18570,68996],[-201,234],[-93,-25]],[[19362,64423],[-181,337],[-201,286]],[[17464,69802],[316,46],[353,64],[-26,-116],[419,-287],[634,-416],[552,4],[221,0],[0,244],[481,0],[102,-210],[142,-186],[165,-260],[92,-309],[69,-325],[144,-178],[230,-177],[175,467],[227,11],[196,-236],[139,-404],[96,-346],[164,-337],[61,-414],[78,-277],[217,-184],[197,-130],[108,18]],[[55993,75539],[95,35],[128,9]],[[46619,59216],[93,107],[47,348],[88,14],[194,-165],[157,117],[107,-39],[42,131],[1114,9],[62,414],[-48,73],[-134,2550],[-134,2550],[425,10]],[[51185,61897],[1,-1361],[-152,-394],[-24,-364],[-247,-94],[-379,-51],[-102,-210],[-178,-23]],[[46801,57931],[13,184],[-24,229],[-104,166],[-54,338],[-13,368]],[[77809,62643],[-159,-137],[-162,-256],[-196,-26],[-127,-639],[-117,-107],[134,-519],[177,-431],[113,-390],[-101,-514],[-96,-109],[66,-296],[185,-470],[32,-330],[-4,-274],[108,-539],[-152,-551],[-135,-607]],[[55338,76294],[74,-101],[40,-82],[91,-63],[106,-123],[-22,-51]],[[55380,75322],[-58,46]],[[74375,79706],[292,102],[530,509],[423,278],[242,-182],[289,-8],[186,-276],[277,-22],[402,-148],[270,411],[-113,348],[288,612],[311,-244],[252,-69],[327,-152],[53,-443],[394,-248],[263,109],[351,78],[279,-78],[272,-284],[168,-302],[258,6],[350,-96],[255,146],[366,98],[407,416],[166,-63],[146,-198],[331,49]],[[59599,43773],[209,48],[334,-166],[73,74],[193,16],[99,177],[167,-10],[303,230],[221,342]],[[59870,36949],[-45,-275],[65,-101]],[[59890,36573],[-41,-245],[-116,-211]],[[59119,34780],[-211,5]],[[58908,34785],[-24,261],[-41,265]],[[58843,35311],[-23,212],[49,659],[-72,419],[-133,832]],[[58664,37433],[292,671],[74,426],[42,53],[31,348],[-45,175],[12,442],[54,409],[0,748],[-145,190],[-132,43],[-60,146],[-128,125],[-232,-12],[-18,220]],[[58409,41417],[-26,421],[843,487]],[[59226,42325],[159,-284],[77,54],[110,-149],[16,-237],[-59,-274],[21,-417],[181,-365],[85,410],[120,124],[-24,760],[-116,427],[-100,191],[-97,-9],[-77,768],[77,449]],[[46619,59216],[-184,405],[-168,435],[-184,157],[-133,173],[-155,-6],[-135,-129],[-138,51],[-96,-189]],[[45260,62987],[60,197],[1088,-4],[-53,853],[68,304],[261,53],[-9,1512],[911,-31],[1,895]],[[59226,42325],[-147,153],[85,549],[87,205],[-53,490],[56,479],[47,160],[-71,501],[-131,264]],[[59099,45126],[273,-110],[55,-164],[95,-275],[77,-804]],[[77801,54399],[48,105],[227,-258],[22,-304],[183,71],[91,243]],[[56448,40227],[228,134],[180,-34],[109,-133],[2,-49]],[[55526,35946],[0,-2182],[-248,-302],[-149,-43],[-175,112],[-125,43],[-47,252],[-109,162],[-133,-292]],[[54125,64088],[68,-919],[104,-153],[4,-188],[116,-203],[-60,-254],[-107,-1199],[-15,-769],[-354,-557],[-120,-778],[115,-219],[0,-380],[178,-13],[-28,-279]],[[53939,57955],[-52,-13],[-188,647],[-65,24],[-217,-331],[-215,173],[-150,34],[-80,-83],[-163,18],[-164,-252],[-141,-14],[-337,305],[-131,-145],[-142,10],[-104,223],[-279,221],[-298,-70],[-72,-128],[-39,-340],[-80,-238],[-19,-527]],[[52072,53186],[-105,31],[-107,-132]],[[51398,53895],[-197,389],[-209,-7]],[[25647,58207],[31,91],[46,-88]],[[51063,81078],[244,869],[380,248]],[[58639,91676],[-473,-237],[-224,-54]],[[55734,91409],[-172,-24],[-41,-389],[-523,95],[-74,-329],[-267,2],[-183,-421],[-278,-655],[-431,-831],[101,-202],[-97,-234],[-275,10],[-180,-554],[17,-784],[177,-300],[-92,-694],[-231,-405],[-122,-341]],[[52328,85032],[-371,-138],[-384,301]],[[51474,85830],[-88,1363],[256,381]],[[65352,60997],[1,-238],[-134,-165]],[[64880,60451],[-128,-34]],[[64752,60417],[-91,413],[-217,975]],[[64444,61805],[833,591],[185,1182],[-127,418]],[[65945,64688],[203,-78],[165,-107]],[[68734,64727],[-83,424],[-215,450]],[[28212,55535],[-52,196],[-138,164]],[[27170,56020],[-6,-126],[111,-26]],[[55461,82736],[342,-67],[511,9]],[[56535,81053],[139,-515],[-29,-166],[-138,-69],[-252,-491],[71,-266],[-60,35]],[[56266,79581],[-264,227],[-200,-84],[-131,61],[-165,-127],[-140,210],[-114,-81],[-16,36]],[[86221,75560],[-120,-200],[-83,-202]],[[85048,72883],[-135,112],[-34,-111]],[[84641,73095],[76,260],[66,69]],[[84829,73851],[-18,96],[-163,65]],[[86288,75628],[39,-104]],[[64246,66009],[84,-185],[5,-346]],[[64274,65130],[-77,-42],[-84,117]],[[56308,78869],[120,127],[172,-65],[178,-3],[129,-144],[95,91],[205,56],[69,139],[118,0]],[[57842,77455],[124,-109],[131,95],[126,-101]],[[56293,76715],[-51,103],[65,99],[-69,74],[-87,-133],[-162,172],[-22,244],[-169,139],[-31,188],[-151,232]],[[81143,94175],[251,112],[141,-379]],[[84237,94144],[590,-104],[443,4]],[[97224,91732],[123,262],[886,-165]],[[96192,85904],[-126,219],[-268,-253]],[[95032,82989],[-486,-302],[-96,-674]],[[93543,84472],[14,276],[432,132]],[[95182,86999],[-705,-649],[-227,727]],[[90412,85637],[-914,-175],[-899,-1153]],[[88378,82339],[178,295],[305,-38]],[[89262,81946],[9,-503],[-217,-590]],[[60617,78409],[9,262],[143,165],[269,43],[44,197],[-62,326],[113,310],[-3,173],[-410,192],[-162,-6],[-172,277],[-213,-94],[-352,208],[6,116],[-99,256],[-222,29],[-23,183],[70,120],[-178,334],[-288,-57],[-84,30],[-70,-134],[-104,23]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433]],[[59670,89515],[18,-274],[18,-604]],[[59706,88637],[358,-180],[217,-153],[36,286]],[[60317,88590],[-168,254],[177,224]],[[60998,88700],[233,144],[-186,433]],[[62654,90499],[1,-328],[219,-203]],[[63371,90473],[580,282],[970,507]],[[69038,93080],[183,537],[206,116]],[[69427,93733],[736,-156],[57,-328]],[[70444,91717],[222,593],[-361,482]],[[72363,94093],[483,119],[669,-26]],[[58449,49909],[110,-333],[-16,-348],[-80,-74]],[[58216,49787],[67,-60],[166,182]],[[61883,60238],[-37,252],[-83,178]],[[60335,65400],[-77,306],[-81,132]],[[63741,66597],[190,-249],[16,-243]],[[64444,61805],[-801,-226],[-259,-266],[-199,-620],[-130,-99],[-70,197],[-106,-30],[-269,60],[-50,59],[-321,-14],[-75,-53],[-114,153],[-74,-290],[28,-249],[-121,-189]],[[56351,57163],[3,143],[-102,174],[-3,343],[-58,228],[-98,-34],[28,217],[72,246],[-32,245],[92,181],[-58,138],[73,365],[127,435],[240,-41],[-14,2345]],[[59433,56242],[1,-71]],[[59434,56171],[-39,12],[5,294],[-33,203],[-143,233],[-34,426],[34,436],[-129,41],[-19,-132],[-167,-30],[67,-173],[23,-355],[-152,-324],[-138,-426],[-144,-61],[-233,345],[-105,-122],[-29,-172],[-143,-112],[-9,-122],[-277,0],[-38,122],[-200,20],[-100,-101],[-77,51],[-143,344],[-48,163],[-200,-81],[-76,-274],[-72,-528],[-95,-111],[-85,-65]],[[56635,55672],[-23,28]],[[59445,53091],[-171,-272],[-195,1],[-224,-138],[-176,132],[-115,-161]],[[56824,55442],[-189,230]],[[59434,56171],[3,-460]],[[25613,58487],[-31,-139]],[[62075,57243],[54,-245],[125,-247]],[[63596,57321],[-2,-9],[-1,-244],[0,-596],[0,-308],[-125,-363],[-194,-493]],[[34889,53069],[109,-351],[-49,-254],[-24,-270],[-71,-248]],[[56266,79581],[-77,-154],[-55,-238]],[[58908,34785],[-56,-263],[-163,-63],[-166,320],[-2,204],[76,222],[26,172],[80,42],[140,-108]],[[60041,71744],[74,129],[75,130],[15,329],[91,-115],[306,165],[147,-112],[229,2],[320,222],[149,-10],[316,92]],[[68841,72526],[156,598],[-60,440],[-204,140],[72,261],[232,-28],[132,326],[89,380],[371,137],[-58,-274],[40,-164],[114,15]],[[65546,74986],[313,8],[-45,297],[237,204],[234,343],[374,-312],[30,-471],[106,-121],[301,27],[93,-108],[137,-609],[317,-408],[181,-278],[291,-289],[369,-253],[-7,-362]],[[53083,72381],[-139,-290],[-2,-273]],[[58441,72005],[-192,-70],[-268,314]],[[57981,72249],[-303,-11],[-165,588]],[[59768,75418],[485,-417],[399,-228]],[[57321,74302],[-87,276],[3,121]],[[59099,45126],[-157,177],[-177,100],[-111,99],[-116,150]],[[58388,46397],[-161,331],[-55,342]],[[58449,49909],[98,71],[304,-7],[566,45]],[[30523,76389],[-147,-351],[-47,-133]],[[30377,75084],[-133,11],[-205,-103]],[[29172,73738],[-61,30],[-91,148]],[[29077,73598],[69,-105],[5,-223]],[[28966,72994],[-142,225],[-33,491]],[[28797,73080],[-183,93],[191,-191]],[[27672,65472],[-83,-75],[-137,72]],[[27408,65728],[-105,136],[-148,508]],[[26747,68267],[-108,90],[-281,-268]],[[26309,68119],[-135,275],[-174,147]],[[25227,68491],[-114,-92],[50,-157]],[[24755,67801],[-207,312],[-242,-73]],[[16564,70932],[-71,95],[-33,324]],[[16460,71351],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557]],[[15516,76404],[34,536],[33,536]],[[15583,77476],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558]],[[15948,78405],[69,156],[-45,484],[-94,485]],[[10396,86079],[-385,-51],[-546,272]],[[8164,85656],[-308,-126],[-39,348]],[[7158,84934],[-299,-248],[-278,-180]],[[4985,85596],[50,216],[-179,211]],[[4541,89915],[-38,-296],[586,23]],[[4864,90008],[-342,225],[-197,296]],[[30102,56752],[-123,-344],[105,-468]],[[31762,56607],[213,-74],[155,185]],[[63521,58853],[-122,-33],[-83,35]],[[63153,58610],[-177,-114],[-233,-30]],[[62539,58233],[-43,-150],[-137,13]],[[64752,60417],[-201,-158]],[[57838,31217],[-210,-269],[-290,-229]],[[58175,37528],[113,-7],[134,-100],[94,71],[148,-59]],[[58409,41417],[-210,-81],[-159,-235],[-33,-205],[-100,-46],[-241,-486],[-154,-383],[-94,-13],[-90,68],[-311,65]]]}

        }
      ],
      "marks": [
        {
          "type": "path",
          "from": {
            "data": "world",
            "transform": [{
              "type": "geopath",
              "value": "data",
              "projection": "winkel3",
              "scale": 50,
              "translate": [0, 100]
            }]
          },
          "properties": {
            "enter": {
              "stroke": {"value": "#fff"},
              "path": {"field": "path"}
            },
            "update": {"fill": {"value": "#ccc"}},
            "hover": {"fill": {"value": "pink"}}
          }
        }
      ]
    },

    "barchart": {
      "name": "barchart",
      "rendering": "vega",
      "update": true,
      "width": 100,
      "height": 100,
      "data": [
        {
          "name": "table",
          "values": [
            {"x": 1,  "y": 28}, {"x": 2,  "y": 55},
            {"x": 3,  "y": 43}, {"x": 4,  "y": 91},
            {"x": 5,  "y": 81}, {"x": 6,  "y": 53},
            {"x": 7,  "y": 19}, {"x": 8,  "y": 87},
            {"x": 9,  "y": 52}, {"x": 10, "y": 48},
            {"x": 11, "y": 24}, {"x": 12, "y": 49},
            {"x": 13, "y": 87}, {"x": 14, "y": 66},
            {"x": 15, "y": 17}, {"x": 16, "y": 27},
            {"x": 17, "y": 68}, {"x": 18, "y": 16},
            {"x": 19, "y": 49}, {"x": 20, "y": 15}
          ]
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "ordinal",
          "range": "width",
          "domain": {"data": "table", "field": "data.x"}
        },
        {
          "name": "y",
          "range": "height",
          "nice": true,
          "domain": {"data": "table", "field": "data.y"}
        }
      ],
      "axes": [
        {"type": "x", "scale": "x", "properties": {"labels": {"fontSize":{"value": 3.9}}}},
        {"type": "y", "scale": "y", "properties":{"labels": {"fontSize":{"value": 5}}}}
      ],
      "marks": [
        {
          "type": "rect",
          "from": {"data": "table"},
          "properties": {
            "enter": {
              "x": {"scale": "x", "field": "data.x"},
              "width": {"scale": "x", "band": true, "offset": -1},
              "y": {"scale": "y", "field": "data.y"},
              "y2": {"scale": "y", "value": 0}
            },
            "update": {
              "fill": {"value": "steelblue"}
            },
            "hover": {
              "fill": {"value": "red"}
            }
          }
        }
      ]
    },

    "textboxes": {
      "name": "textboxes",
      "rendering": "template",
      "update": true,
      "data": [
        { "values": [{"TOT. REV.": "$1.453M"}, 
                           {"RPU": "$17.85"}, 
                           {"DAU": "$301.3K"}, 
                           {"EVENTS": "41.92"}, 
                           {"INSTALLS": "$114.2K"}]
        }
      ],
      "font-family": "calibri",
      "textboxes": [
        {"label": "TOT. REV.", "value": "$1.453M", "transform":"translate(0,0) scale(1.0,1.2)", "arrow":{"transform": "rotate(0,2,5)"} },
        {"label": "RPU", "value": "$17.85", "transform":"translate(0,10) scale(1.0,1.2)", "arrow":{"transform": "rotate(0,2,5)"} },
        {"label": "DAU", "value": "$301.3K", "transform":"translate(0,20) scale(1.0,1.2)", "arrow":{"transform": "rotate(0,2,5)"} },
        {"label": "EVENTS", "value": "41.92", "transform":"translate(0,30) scale(1.0,1.2)", "arrow":{"transform": "rotate(0,2,5)"} },
        {"label": "INSTALLS", "value": "114.2K", "transform":"translate(0,40) scale(1.0,1.2)", "arrow":{"transform": "rotate(180,2,5)"} }
      ]
    }
  },

  "shot" : {
    "scene": {"transform": "rotate(0,50,50)"}, 
    "map": {"transform": "translate(15, -5) scale(0.33, 0.30)"}, 
    "barchart": {"transform": "translate(2, 47) scale(0.72, 0.4)"},
    "textboxes": {"transform": "translate(13, 5) scale(0.6, 0.8)"}
  }

}
  };  

