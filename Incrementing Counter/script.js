const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
        //获取target的值
        const target = + counter.getAttribute("data-target");
        //查询当前的显示的值
        const count = + counter.innerText;
        //每ms增长200
        const increment = target / 200;
        if (count < target) {
            counter.innerText = `${Math.ceil(count + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };
    //更新值
    updateCounter();
});