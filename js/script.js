((d) => {

// selected the desired classes and stored in variables
const container = d.querySelector(".container");
const text = d.querySelector(".text");

// set times
const totalTime = 10000;
const inhaleTime = totalTime / 5 * 2;
const holdTime = totalTime / 5;

// function to change the text depending on time passed
const breathAnimation = () => {

    text.textContent = "Breath in...";
    container.className = "container grow"

    /* setTimeout - a function that excutes its content after
    waiting the amount of time specified in its second argumant */
    setTimeout(() => {
        text.textContent = "Hold";

        setTimeout(() => {
            text.textContent = "Breath out...";
            container.className = "container shrink";
        }, holdTime);

    }, inhaleTime);
};

breathAnimation();

/* setInterval - a function that excutes its content every time the
amount of time specified in its second argumant has passed creating a loop */
setInterval(breathAnimation, totalTime);

})(document);