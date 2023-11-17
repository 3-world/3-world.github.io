const container = document.querySelector(".main_container2");
const gradient = document.querySelector(".main_container");

container.addEventListener("scroll", () => {
  const y = 1 + container.scrollTop;
  const y_start = 5100;
  const y_end = 9300;

  console.log(y);

  let col = 248;

  if (y >= y_start && y < y_end) {
    col = Math.round(
      ((y - y_start) * 0 + (y_end - y) * 248) / (y_end - y_start)
    );
  } else if (y >= y_end) {
    col = 0;
  }

  gradient.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;
});
