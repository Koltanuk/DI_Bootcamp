function singASong(){

    let bottles = 99;
    console.log('We start the song at 99 bottles');

    while(bottles>=0){
        let num = prompt('please enter a number of dropping bottles');
        if (isNaN(num)|| num=="" || num==null || num>bottles || num<=0) {
            alert("Please enter a valid positive number not more then number of left bottles");
        }
        else{
            let itWord;
            if(num==1){
                itWord = 'it';
            }
            else {
                itWord = 'them';
            }

            num = Number(num);

            if(bottles==99){
                console.log(`Take ${num} down, pass ${itWord} arond`);
                bottles-= num;
                logBottles(bottles);
            }

            else if(bottles>=1){
                console.log(`then, Take ${num} down, pass ${itWord} arond`);
                bottles-= num;
                logBottles(bottles);    
            }

            if (bottles==0){
                return;
            }
           

        }
        
    }
}

function logBottles(bottles){
    if (bottles==0){
        console.log('no bottle of beer on the wall');
    }
    else if (bottles==1){
        console.log(`we have now ${bottles} bottle`);
    }
    else{ 
        console.log(`we have now ${bottles} bottles`);

    }    
}