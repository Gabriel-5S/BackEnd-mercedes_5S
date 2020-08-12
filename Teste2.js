const x = [
    {
        "id": 3,
        "Cost_center_id": "3",
        "Answer_average_5s": 3,
        "createdAt": "2020-06-18T19:32:35.000Z"
    },
    {
        "id": 4,
        "Cost_center_id": "3",
        "Answer_average_5s": 3,
        "createdAt": "2020-06-18T19:32:41.000Z"
    },
    {
        "id": 5,
        "Cost_center_id": "3",
        "Answer_average_5s": 5,
        "createdAt": "2020-06-18T19:32:41.000Z"
    },
    {
        "id": 6,
        "Cost_center_id": "3",
        "Answer_average_5s": 3.2,
        "createdAt": "2020-06-18T19:32:41.000Z"
    },
    {
        "id": 9,
        "Cost_center_id": "3",
        "Answer_average_5s": 3.7,
        "createdAt": "2020-06-18T19:32:41.000Z"
    },
]
var w = []
for (i=0; i< x.length; i++) {    
    var y = x[i]['Answer_average_5s']
    console.log(y)
    w.push(y)
    }

console.log(w)
