(() => {
  setInterval(() => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const sec = currentDate.getSeconds();

    console.log(`${hours}:${minutes}:${sec}`);
  }, 1000);
})();
