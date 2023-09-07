function checkCreditCard(cardNo){
    //Luhn algoritmasini uyguluyoruz

    //inputu number arrayine cevirir
    let creditCardInt = cardNo.split('').map(Number);

    //sondan ikinci ile baslayip ikiser ikiser atalyarak denk gelen sayilarin 2 katini alir
    for(let i = creditCardInt.length - 2; i >= 0; i = i - 2){
        let tempValue = creditCardInt[i]

        tempValue = tempValue*2

        //tempvalue 10dan buyukse iki rakamin toplamini alir. en fazla 18 olabilecegi icin kalan + 1 seklinde yaziyoruz
        if(tempValue > 9){
            tempValue = tempValue % 10 + 1;
        }

        //algoritmaya gore iki kati alinan rakamlarla devam edilmeli
        creditCardInt[i] = tempValue

        //simdi de yeni rakamlar eklenmis arrayin tum rakamlarini toplama islemi yapilir
        let total = 0;

        for(let i = 0; i < creditCardInt.length; i++){
            total += creditCardInt[i]
        }

        //toplam 10'un katiysa true doner ve bu fonksiyonun valid donmesini saglar ya da tam tersiyse invalid doner
        const result = total % 10 == 0 ? "invalid" : "valid"
        return result
    }
}

//  console.log(checkCreditCard("544997444492192284562329"))
//  console.log(checkCreditCard("5449974444921922"))

module.exports = checkCreditCard