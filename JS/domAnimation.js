

function start() {
    const movingBox = document.querySelector('#animate')

    let position = 0; 
    
    

    const interval = setInterval(frame,5);
    function frame() {
        position ++;
    
            // movingBox.style.top = position + 'px';
            // movingBox.style.left = position + 'px';
    
        if (position < 350) {
            movingBox.style.top = position + 'px';
            movingBox.style.left = position + 'px';
        } else{
            clearInterval(interval);
        }
    
    }
    
}



function move() {
    const movingBox = document.querySelector('#animate')

    let position = 0; 
    
    const promise = new Promise(function(resolve, reject) {

        const interval = setInterval(frame,5);
        function frame() {
            position ++;
    
            // movingBox.style.top = position + 'px';
            // movingBox.style.left = position + 'px';
    
            if (position < 350) {
                movingBox.style.top = position + 'px';
                movingBox.style.left = position + 'px';
                resolve();
            } else{
                reject(clearInterval(interval));
            }
    
        }
    
         
    })

    // return promise;

     
}



function reset() {
    const movingBox = document.querySelector('#animate');

    

    let position; 
    position = 0;
    movingBox.style.top = position + 'px';
    movingBox.style.left = position + 'px';

}


function automaticReset() {
    const movingBox = document.querySelector('#animate')

    

    const promise = new Promise(function(resolve, reject) {

        setInterval(function() {

            let position; 
            position = 0;
            movingBox.style.top = position + 'px';
            movingBox.style.left = position + 'px';
            resolve();
            
        },10000)
        
    })

    // return promise;

    
}

const result = async function(){ 
    try {
        await move();
        await automaticReset();
    } catch(err){
        console.log(err);
    }
}
