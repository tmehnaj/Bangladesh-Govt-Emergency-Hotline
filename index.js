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
    if (event.target.closest('.call-btn')) {
        const callButton = event.target.closest('.call-btn');
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

            //current time
            const currentTime = new Date();
            const changeTime = {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            };
            const format12HourTime = currentTime.toLocaleTimeString('en-Us', changeTime);

            const newHistory = document.createElement('div');
            newHistory.innerHTML = `
            <div class="flex items-center justify-between p-3 bg-[#FAFAFA] my-2 rounded-lg">
                        <div>
                             <h3 class="text-base text-[#111111]">${serviceNameBangla}</h3>
                        <p class="text-base text-gray-600 inline-block">${serviceNumber}</p>
                        </div>
                        <p class="text-base text-[#111111]">${format12HourTime}</p>
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

//copy button

document.getElementById('card-box').addEventListener('click', function(event){
    if(event.target.closest('.copy-btn')){
        const copyButton = event.target.closest('.copy-btn');
        const serviceNumber = copyButton.parentNode.parentNode.children[3].innerText;
        let copyCount = toNumber('copy-count');

        //clipboard e text copy kora
        navigator.clipboard.writeText(serviceNumber);

        alert(`নম্বর কপি হয়েছে: ${serviceNumber}`);

        copyCount = copyCount + 1;
        document.getElementById('copy-count').innerText = copyCount;


    }
})