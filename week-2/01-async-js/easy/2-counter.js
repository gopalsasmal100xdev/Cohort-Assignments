(()=>{
  function countDown(count){
    setTimeout(()=>{
      console.log(count);
      countDown(count+1);
    }, 1000);
  }
  countDown(0);
})();