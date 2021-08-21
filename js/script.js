// Using Mamory Parpuss
function memoryCostCalculation(isset){ 
   const memoryValue =  document.getElementById('mamory-cost');
   if( isset == true){
    memoryValue.innerText = '0';
   }
   else{
    memoryValue.innerText = '180';
   }
   totalCostCount()
};

document.getElementById('small-size-memory').addEventListener('click',function(){
    memoryCostCalculation(true);
});
document.getElementById('big-size-memory').addEventListener('click',function(){
    memoryCostCalculation(false);
});

// using Storage 

function storageCalculation(sizing){
   if(sizing == 'small'){
        document.getElementById('storage-cost').innerText = '0';
   }
   else if(sizing == 'medium'){
        document.getElementById('storage-cost').innerText = '100';
   }
    else if(sizing == 'big'){
     document.getElementById('storage-cost').innerText = '180';
   }
   totalCostCount()
};

document.getElementById('small-size-storage').addEventListener('click',function(){
    storageCalculation('small');
});
document.getElementById('medium-size-storage').addEventListener('click',function(){
    storageCalculation('medium');
});
document.getElementById('big-size-storage').addEventListener('click',function(){
    storageCalculation('big');
});

// Using Delivary Cost	Parpuss

function delivaryCostCalculation(cheack){
    const delivaryValue =  document.getElementById('delivery-cost');
    if( cheack == true){
        delivaryValue.innerText = '0';
    }
    else{
        delivaryValue.innerText = '20';
    }
    totalCostCount()
 };

 document.getElementById('free-delivery-charge').addEventListener('click',function(){
    delivaryCostCalculation(true);
 });
 document.getElementById('paid-delivery-charge').addEventListener('click',function(){
    delivaryCostCalculation(false);
 });

 function totalCostCount(){

    // All cost define here

    const memoryCostText = document.getElementById('mamory-cost').innerText;
    const memoryCost = parseInt(memoryCostText);
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = parseInt(storageCostText);
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = parseInt(deliveryCostText);

    const totalAmount = 1299 + memoryCost + storageCost + deliveryCost;
    document.getElementById('total-price').innerText = totalAmount;
    document.getElementById('total-cost').innerText = totalAmount;
 };

//  Promocode sector
let condition = document.getElementById('total-price');
let promoInput = document.getElementById('code-field');
let totalCost = document.getElementById('total-cost');

function promocode(promo){
    document.getElementById(promo).addEventListener('click',function(){

        if( promoInput.value == 'stevekaku'){
            let discountAmount = parseInt(condition.innerText)-parseInt(condition.innerText)*0.2;
            totalCost.innerText = discountAmount;
        }
        promoInput.value = '';
    }); 
}
promocode('code-btn');