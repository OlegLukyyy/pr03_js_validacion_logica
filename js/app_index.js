const params = new URLSearchParams(window.location.search);
const mes = Number(params.get("mes"));

const months = document.querySelectorAll(".months li");

months.forEach((month) => {
  month.addEventListener("click", () => {
    const selectedMonth = month.dataset.month;
    window.location.href = `pages/mes.html?mes=${selectedMonth}`;
  });
});
