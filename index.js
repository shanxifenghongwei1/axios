
const express = require('express');
const path = require('path');
const sever = express();
sever.use(express.static('./www'));
sever.get('/',(req,res)=>{
        res.sendFile(
            path.resolve('./axios.html')
        )
    }
)
sever.listen(5060)

// function date2time(date) {
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let day = [31, year % 4 == 0 ? 28 : 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//     return day[month]
// }
//
// function centre(date) {
//
//     let month = date.getMonth()
//
//     let start =
//
// }

