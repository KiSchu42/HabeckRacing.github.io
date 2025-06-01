document.addEventListener("DOMContentLoaded", () => {
  const teamColors = {
    "Racer – Team 1": ["#570057", "#e5ff00"],
    "Racer – Team 2": ["#570057", "#ff9100"],
    "Oil of Olaf": ["#93dafe", "#ff7403"],
    "Team Redneck": ["#da1918", "#ffffff"],
    "Team Autohaus": ["#ffffff", "#ffffff"]
  };

  document.querySelectorAll(".f1-table tbody tr").forEach(row => {
    const teamCell = row.children[2]; // Teamname-Spalte
    const colorCell = row.children[1]; // Ziel-TD mit car-placeholder

    if (teamCell && colorCell) {
      const teamName = teamCell.textContent.trim();
      const colors = teamColors[teamName];

      if (colors) {
        colorCell.innerHTML = `
          <div class="car-placeholder" style="--color-left: ${colors[0]}; --color-right: ${colors[1]};"></div>
        `;
      }
    }
  });
});