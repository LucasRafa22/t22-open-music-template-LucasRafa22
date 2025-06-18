export function applyInputRangeStyle() {
    const inputRange = document.querySelector("#content-preco__input");
    const priceSpan = document.querySelector(".content-preco__h3-span");
  
    inputRange.addEventListener("input", (event) => {
      const currentInputValue = event.target.value;
      const runnableTrackProgress = (currentInputValue / inputRange.max) * 100;
  
      inputRange.style.background = `linear-gradient(to right, var(--brand-1) ${runnableTrackProgress}%, var(--gray-5) ${runnableTrackProgress}%)`;
      priceSpan.textContent = `R$ ${currentInputValue}`;
    });
  }