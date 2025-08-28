// common
//convert to number
function toNumber(id) {
    const num = document.getElementById(id).innerText;
    return Number(num);
}

//heart count
document.getElementById('card-box').addEventListener('click', function (event) {
    if (event.target.className.includes('fa-heart')) {
        const heart = event.target;
        let presentHeart = toNumber('heart-count');
        presentHeart = presentHeart + 1;
        document.getElementById('heart-count').innerText = presentHeart;
    }
})

//call button
document.getElementById('card-box').addEventListener('click', function (event) {
    if (event.target.className.includes('call-btn')) {
        const callButton = event.target;
        //alert
        const serviceNameBangla = callButton.parentNode.parentNode.children[1].innerText;
        const serviceName = callButton.parentNode.parentNode.children[2].innerText;
        const serviceNumber = callButton.parentNode.parentNode.children[3].innerText;

        //coin
        let presentCoin = toNumber('coin-count');
        if (presentCoin < 20) {
            alert('❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে অন্তত ২০ কয়েন লাগবে।');
            return;
        }
        else {
            alert(`📞Calling ${serviceName} ${serviceNumber}`);
            presentCoin = presentCoin - 20;
            document.getElementById('coin-count').innerText = presentCoin;

            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="flex items-center justify-between p-3 bg-[#FAFAFA] my-2 rounded-lg">
                        <div>
                             <h3 class="text-base text-[#111111]">${serviceNameBangla}</h3>
                        <p class="text-base text-gray-600 inline-block">${serviceNumber}</p>
                        </div>
                        <p class="text-base text-[#111111]">11:36:58 <span>AM</span></p>
                    </div>
            `

            document.getElementById('history-stack').append(newHistory);
        }
    }
})


//clear button
document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('history-stack').innerHTML = '';
})