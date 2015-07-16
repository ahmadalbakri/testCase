(function() {
    var carlist = new Vue({
        el: '#carlist',
        data: {
            "cars": [{
                "model": "Alpha",
                "features": [{
                    "doors": 3,
                    "leatherseat": "yes"
                }]
            }, {
                "model": "Beta",
                "features": [{
                    "doors": 3,
                    "leatherseat": "no"
                }]
            }, {
                "model": "Gamma",
                "features": [{
                    "doors": 2,
                    "leatherseat": "no"
                }]
            }],
            "colors": [{
                "options1": "red",
                "options2": "white",
                "options3": "blue"
            }]
        }
    })

    new Vue({
        el: '#demo',
        data: {
            picked: 'one'
        }
    })
}())
