(function() {
    var carlist = new Vue({
        el: '#carlist',
        data: {
            openedCount: null,
            carModel: '',
            carDoors: '',
            carColors: '',
            "lightningCars": [{
                "colorSelection": ['Red', 'Blue', 'Green'],
                "models": [{
                    "name": "Alpha",
                    "features": [{
                        "doors": [3, 5]
                    }]
                }, {
                    "name": "Beta",
                    "features": [{
                        "doors": [3, 5]
                    }]
                }, {
                    "name": "Gamma",
                    "features": [{
                        "doors": [3]
                    }]
                }]
            }]
        },
        methods: {
            onClick: function($index) {
                this.openedCount = $index;
            }
        }
    })
}())
