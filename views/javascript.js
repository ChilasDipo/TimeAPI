async function getTime(){
    let respone = await fetch("/date",
        {
            method: "get"})
        

    let result = await respone.json()
        document.getElementById("time").innerHTML = result
    }

    setInterval(() => {
       getTime() 
    }, 1000);

    async function getTime(){
        let respone = await fetch("/name",
            {
                method: "get"})
        let result = await respone.json()
        document.getElementById("name").innerHTML = "Hello " + result
        }
