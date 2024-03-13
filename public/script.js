$(()=>{

    $("#calcFare").click(function(){
        let km = $('#km').val();
        let min = $('#min').val();
        $.post('/calcFare', {
            km : km,
            min : min
        }, (data)=>{
            $('#fare').text(`Total Fare :` + data.fare);
        })
    })
    $("#getRate").click(function(){
        $.get('/rates', (data)=>{
            let prettyData = `
            Rate per km after 5 km is : Rs.${data.perKm}/km
            <br>
            Min km is : ${data.minKm}Km and charges are Rs. ${data.fixed}
            <br>
            Nonchargeable waiting time is : ${data.freeMin} Min
            <br>
            Charge for extra waiting time : Rs.${data.perMin}/Min 
            `
            $('#rate').html(prettyData)
        })
    })
    

})