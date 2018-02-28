function crew(workerObj) {
    if (workerObj.handsShaking) {
        let alcoholToBeAdded = 0.1 * workerObj.weight * workerObj.experience;
        workerObj.bloodAlcoholLevel += alcoholToBeAdded;
        workerObj.handsShaking = false;
    }
    return workerObj;
}

console.log(crew({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
  ));