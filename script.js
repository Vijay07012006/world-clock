// alert("hello")
function ct() {
    let a = new Date()
    // console.log(a.getDate());
    let b = a.toLocaleString('en-us',
        {
            timeZone: 'Asia/Dubai',
        }
    );
    console.log(b);

    let c = a.toLocaleString('en-us', {
        timeZone: 'Asia/Kolkata'
    });
    console.log(c);

    let d = a.toLocaleString('en-us',
        {
            timeZone: 'America/Los_Angeles',
        }
    );
    console.log(d);
    document.getElementById('india').innerHTML = "time:" + b
    document.getElementById('america').innerHTML = "time:" + c
    document.getElementById('dubai').innerHTML = "time:" + d
}
ct();

// setTimeout(()=>{
//     console.log('hellow')
// },1000)

// setTimeout 1000=1sec ke baad print hota hai

setInterval(ct, 1000)

// setInterval lagatar print hota rehta hai bina page refresh kiye