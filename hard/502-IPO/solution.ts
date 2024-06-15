function maxProfitFromCapital(
  w: number,
  profits: number[],
  capital: number[],
  completedProjects: boolean[]
) {
  let potentialProfit = 0;
  let currentProjectIndex = -1;

  //   for (let i = 0; i < capital.length; i++) {
  //     if (completedProjects[i]) continue;
  //     if (w >= capital[i] && profits[i] > potentialProfit) {
  //       potentialProfit = profits[i];
  //       currentProjectIndex = i;
  //     }
  //   }

  for (let i = 0; i < capital.length; i++) {
    if (completedProjects[i]) continue;
    if (w > 10 ** 9) {
      potentialProfit = profits[i];
      currentProjectIndex = i;
      break;
    }
    if (w >= capital[i]) {
      // we have a project we can afford to invest in
      if (profits[i] === 10 ** 4) {
        // if it's the max available profit
        // we'll go for it
        potentialProfit = profits[i];
        currentProjectIndex = i;
        break;
      }
      if (profits[i] > potentialProfit) {
        // otherwise check it's more profitable than
        // what we already have stored
        potentialProfit = profits[i];
        currentProjectIndex = i;
      }
    }
  }

  return currentProjectIndex;
}

export function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  let maximizedCapital = w;
  const completedProjects = new Array(capital.length).fill(false);
  let completedProjectsCount = 0;
  let checkedProjectsCount = 0;
  // find first project
  // max profit from capital available

  console.log(capital.length);

  while (completedProjectsCount < k && checkedProjectsCount < capital.length) {
    const idx = maxProfitFromCapital(
      maximizedCapital,
      profits,
      capital,
      completedProjects
    );
    if (idx > -1) {
      completedProjects[idx] = true;
      maximizedCapital += profits[idx];
      completedProjectsCount++;
    }
    checkedProjectsCount++;
  }

  return maximizedCapital;
}
