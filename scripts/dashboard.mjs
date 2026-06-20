import { scenarios } from "./dashboard-data.mjs";

const flow = document.querySelector("#scenario-flow");
const title = document.querySelector("#scenario-title");
const eyebrow = document.querySelector("#scenario-eyebrow");
const badge = document.querySelector("#scenario-badge");
const copy = document.querySelector("#scenario-copy");
const buttons = [...document.querySelectorAll("[data-scenario]")];

function renderScenario(key) {
  const scenario = scenarios[key] ?? scenarios.overview;
  eyebrow.textContent = scenario.eyebrow;
  title.textContent = scenario.title;
  badge.textContent = scenario.badge;
  copy.textContent = scenario.copy;
  flow.innerHTML = scenario.steps
    .map(([number, heading, body]) => `
      <article>
        <span>${number}</span>
        <h3>${heading}</h3>
        <p>${body}</p>
      </article>
    `)
    .join("");

  for (const button of buttons) {
    button.classList.toggle("active", button.dataset.scenario === key);
  }
}

for (const button of buttons) {
  button.addEventListener("click", () => renderScenario(button.dataset.scenario));
}

renderScenario("overview");
