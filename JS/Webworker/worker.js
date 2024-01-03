
self.addEventListener('message',(e)=>{
    for(let i=1;i<=100000;i++){
        self.postMessage(i)
    }
})