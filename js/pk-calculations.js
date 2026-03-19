// pk-calculations.js - Pharmacokinetic Calculation Functions

/**
 * Calculate Ideal Body Weight (Devine formula)
 */
export function calculateIBW(sex, height) {
    return sex === 'male'
        ? 50 + 0.9 * (height - 152)
        : 45.5 + 0.9 * (height - 152);
}

/**
 * Calculate Adjusted Body Weight
 */
export function calculateAdjBW(ibw, actualWeight) {
    return ibw + 0.4 * (actualWeight - ibw);
}

/**
 * Determine weight for CrCl calculation
 */
export function getWeightForCrCl(weight, ibw, adjBw) {
    if (weight < ibw) return weight;
    if (weight > 1.2 * ibw) return adjBw;
    return weight;
}

/**
 * Calculate Creatinine Clearance (Cockcroft-Gault)
 */
export function calculateCrCl(age, weight, scr, sex) {
    let crcl = ((140 - age) * weight) / (72 * scr);
    if (sex === 'female') crcl *= 0.85;
    return crcl;
}

/**
 * Calculate population elimination rate constant (Matzke equation)
 */
export function calculateKelPop(crcl) {
    return 0.00083 * crcl + 0.0044;
}

/**
 * Calculate population Volume of Distribution
 */
export function calculateVdPop(weight) {
    return 0.7 * weight;
}

/**
 * Calculate steady-state peak concentration
 */
export function calculatePeakSS(dose, vd, kel, interval) {
    return (dose / vd) * (1 / (1 - Math.exp(-kel * interval)));
}

/**
 * Calculate steady-state trough concentration
 */
export function calculateTroughSS(peakSS, kel, interval) {
    return peakSS * Math.exp(-kel * interval);
}

/**
 * Calculate AUC over 24 hours
 */
export function calculateAUC24(dose, interval, cl) {
    const totalDailyDose = (24 / interval) * dose;
    return totalDailyDose / cl;
}

/**
 * Calculate half-life from elimination rate constant
 */
export function calculateHalfLife(kel) {
    return 0.693 / kel;
}

/**
 * Calculate all population PK parameters for a patient
 */
export function calculatePopulationPK(age, sex, height, weight, scr) {
    const ibw = calculateIBW(sex, height);
    const adjBw = calculateAdjBW(ibw, weight);
    const weightForCrCl = getWeightForCrCl(weight, ibw, adjBw);
    const crcl = calculateCrCl(age, weightForCrCl, scr, sex);
    const kel = calculateKelPop(crcl);
    const vd = calculateVdPop(weight);
    const cl = kel * vd;

    return { ibw, adjBw, crcl, kel, vd, cl, halfLife: calculateHalfLife(kel) };
}

/**
 * Predict concentration at a given time considering dose accumulation
 */
export function predictConcentration(kel, vd, dose, interval, startTime, measurementTime) {
    const timeSinceStart = (measurementTime - startTime) / (1000 * 60 * 60);
    const doseNumber = Math.floor(timeSinceStart / interval) + 1;
    const timeAfterLastDose = timeSinceStart % interval;

    let effectiveAccumulation;
    if (doseNumber <= 5) {
        effectiveAccumulation = (1 - Math.exp(-kel * interval * doseNumber)) /
                               (1 - Math.exp(-kel * interval));
    } else {
        effectiveAccumulation = 1 / (1 - Math.exp(-kel * interval));
    }

    const peak = (dose / vd) * effectiveAccumulation;
    return peak * Math.exp(-kel * timeAfterLastDose);
}
