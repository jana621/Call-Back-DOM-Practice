var div=document.createElement('div');
var count=document.createElement('h1');

setTimeout(()=>{
count.innerText=10;
count.style.color='red';
    setTimeout(()=>{
    count.innerText=9;
    count.style.color='green';
        setTimeout(()=>{
        count.innerText=8;
        count.style.color='yellow';
            setTimeout(()=>{
            count.innerText=7;
            count.style.color='blue';
                setTimeout(()=>{
                count.innerText=6;
                count.style.color='black';
                    setTimeout(()=>{
                    count.innerText=5;
                    count.style.color='lawngreen';
                        setTimeout(()=>{
                        count.innerText=4;
                        count.style.color='darkblue';
                            setTimeout(()=>{
                            count.innerText=3;
                            count.style.color='violet';
                                setTimeout(()=>{
                                count.innerText=2;
                                count.style.color='orange';
                                    setTimeout(()=>{
                                    count.innerText=1;
                                    count.style.color='green';
                                        setTimeout(()=>{
                                        count.innerText="Happy Independence Day!!!";
                                        count.style.color='chocolate';
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);

div.append(count)
document.body.append(div);

