(()=>{
  let count = 0;
  const intervalId = setInterval(() => {
    count++;
    const sec = count % 60;
    const min = Math.floor(count / 60);
    const hour = Math.floor(count / 3600);
    console.log(`Hour ${hour} : min ${min} : sec : ${sec}`);
  }, 1000);
})();