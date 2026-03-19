// Translations
const translations = {
    en: {
        title: 'Vancomycin TDM Calculator',
        subtitle: 'Therapeutic Drug Monitoring & Dosage Recommendation',
        themeToggle: 'Dark',
        themeToggleBright: 'Bright',
        inputTitle: 'Patient & Dosing Information',
        patientDemo: 'Patient Demographics',
        age: 'Age (years)',
        agePlaceholder: 'e.g. 65',
        sex: 'Sex',
        male: 'Male',
        female: 'Female',
        height: 'Height (cm)',
        heightPlaceholder: 'e.g. 170',
        weight: 'Weight (kg)',
        weightPlaceholder: 'e.g. 70',
        scr: 'Serum Creatinine (mg/dL)',
        scrPlaceholder: 'e.g. 1.2',
        dosingRegimen: 'Current Dosing Regimen',
        dose: 'Dose (mg)',
        dosePlaceholder: 'e.g. 1000',
        interval: 'Interval (hours)',
        intervalPlaceholder: 'e.g. 12',
        startTime: 'First Dose Time',
        monitoring: 'Monitoring',
        sampleTime: 'Sampling Time',
        sampleTimeHint: 'Time when blood sample was drawn',
        measuredConc: 'Measured Concentration (mg/L)',
        measuredConcPlaceholder: 'e.g. 15.5',
        measuredConcHint: 'Lab result from blood sample',
        calculateBtn: 'Calculate & Analyze',
        resultsTitle: 'TDM Analysis Results',
        auc24: 'AUC (24h)',
        trough: 'Trough (Cmin)',
        clearance: 'Clearance (CL)',
        halflife: 'Half-life (T1/2)',
        hours: 'hours',
        waiting: 'Waiting...',
        concentrationCurve: 'Concentration-Time Curve',
        chartTime: 'Time (hours)',
        chartConcentration: 'Concentration (mg/L)',
        chartPeak: 'Peak',
        chartTrough: 'Trough',
        chartTargetRange: 'Target Range',
        clinicalInterpretation: 'Clinical Interpretation',
        effectivenessLabel: 'Effectiveness Prediction:',
        toxicityLabel: 'Toxicity Assessment:',
        recommendationTitle: 'Dosage Recommendation',
        recommendationPlaceholder: 'Please enter patient data and calculate to see recommendations.',
        fillAllFields: 'Please fill in all numeric fields.',
        aucLow: 'Low (<400)',
        aucTarget: 'Target (400-600)',
        aucHigh: 'High (>600)',
        troughLow: 'Low (<10)',
        troughAcceptable: 'Acceptable (10-20)',
        troughHigh: 'High (>20)',
        effectivenessLow: 'Risk of clinical failure. Drug exposure may be insufficient.',
        effectivenessGood: 'Predicted exposure is sufficient for therapeutic effect (AUC > 400).',
        toxicityHigh: 'Increased risk of nephrotoxicity. Monitoring recommended.',
        toxicityLow: 'Low risk of dose-dependent toxicity.',
        recAppropriate: 'Current dosing regimen is appropriate. Continue monitoring renal function and trough levels.',
        recIncrease: 'AUC is below target. Consider INCREASING total daily dose. \nOptions: Increase dose amount or shorten dosing interval (e.g., q12h -> q8h).',
        recDecrease: 'AUC is above target. Consider DECREASING total daily dose. \nOptions: Decrease dose amount or extend dosing interval (e.g., q12h -> q24h) to reduce toxicity risk.',
        // New translations for multi-point TDM
        addMeasurement: '+ Add Measurement',
        remove: 'Remove',
        measurementLabel: 'Measurement',
        measurementHint: 'Add 2+ measurements for multi-point Bayesian fitting',
        noMeasurements: 'Please add at least one measurement.',
        fitQualityLabel: 'Bayesian Fit Quality',
        fitQualitySinglePoint: 'Single-point estimate (add more measurements for improved accuracy)',
        fitQualityGood: 'Excellent fit',
        fitQualityModerate: 'Acceptable fit',
        fitQualityPoor: 'Poor fit - review data quality',
        doseSimulationTitle: 'Dose Simulation',
        simDose: 'Simulated Dose (mg)',
        simDosePlaceholder: 'e.g. 1000',
        simInterval: 'Simulated Interval',
        simulateBtn: 'Simulate',
        specificDoseRecTitle: 'Specific Dose Recommendations',
        doseOptionDose: 'Dose/Interval',
        doseOptionAUC: 'Predicted AUC',
        doseOptionTrough: 'Trough',
        doseOptionStatus: 'Status',
        doseStatusOptimal: 'Optimal',
        doseStatusAcceptable: 'Acceptable',
        doseStatusSubtherapeutic: 'Subtherapeutic',
        doseStatusToxicRisk: 'Toxicity Risk',
        currentRegimen: 'Current',
        predicted: 'Predicted',
        measured: 'Measured',
        recommendChange: 'Consider changing from %CURRENT% to %RECOMMENDED%. Expected AUC: %NEWAUC% mg·h/L (current: %OLDAUC% mg·h/L).',
        // Disclaimer
        disclaimerTitle: 'Educational Use Only',
        disclaimerBody: 'This calculator is for educational and research purposes only. It has NOT been validated for clinical use. Do NOT use this tool for actual patient care decisions without proper clinical validation and expert review.',
        disclaimerAgree: 'I understand and agree that this is for educational purposes only',
        disclaimerAccept: 'Accept & Continue',
        resultsWatermark: 'FOR EDUCATIONAL/RESEARCH USE ONLY — NOT FOR CLINICAL DECISIONS',
        // Validation
        valAgeRange: 'Age must be between 18 and 120 years',
        valHeightRange: 'Height must be between 100 and 250 cm',
        valWeightRange: 'Weight must be between 20 and 300 kg',
        valScrRange: 'Serum creatinine must be between 0.1 and 15 mg/dL',
        valDoseRange: 'Dose must be between 100 and 5000 mg',
        valIntervalRange: 'Interval must be between 4 and 72 hours',
        valConcRange: 'Concentration must be between 0.1 and 100 mg/L',
        valDoseWarning: 'Warning: Unusual dose detected. Please verify.',
        valCrclWarning: 'Note: Cockcroft-Gault may be less accurate for this patient.',
        saveData: 'Save Data',
        loadData: 'Load Data',
        printResults: 'Print',
        dataSaved: 'Patient data saved successfully.',
        dataLoaded: 'Patient data loaded successfully.',
        noSavedData: 'No saved patient data found.',
        confirmLoad: 'Load saved patient data? Current values will be overwritten.'
    },
    ko: {
        title: '반코마이신 TDM 계산기',
        subtitle: '치료적 약물 모니터링 & 용량 권장',
        themeToggle: '다크',
        themeToggleBright: '브라이트',
        inputTitle: '환자 & 투약 정보',
        patientDemo: '환자 인구통계',
        age: '나이 (세)',
        agePlaceholder: '예) 65',
        sex: '성별',
        male: '남성',
        female: '여성',
        height: '키 (cm)',
        heightPlaceholder: '예) 170',
        weight: '체중 (kg)',
        weightPlaceholder: '예) 70',
        scr: '혈청 크레아티닌 (mg/dL)',
        scrPlaceholder: '예) 1.2',
        dosingRegimen: '현재 투약 요법',
        dose: '용량 (mg)',
        dosePlaceholder: '예) 1000',
        interval: '투약 간격 (시간)',
        intervalPlaceholder: '예) 12',
        startTime: '첫 투약 시간',
        monitoring: '모니터링',
        sampleTime: '채혈 시간',
        sampleTimeHint: '혈액 샘플을 채취한 시간',
        measuredConc: '측정된 농도 (mg/L)',
        measuredConcPlaceholder: '예) 15.5',
        measuredConcHint: '혈액 검사 결과값',
        calculateBtn: '계산 & 분석',
        resultsTitle: 'TDM 분석 결과',
        auc24: 'AUC (24시간)',
        trough: '최저 농도 (Cmin)',
        clearance: '청소율 (CL)',
        halflife: '반감기 (T1/2)',
        hours: '시간',
        waiting: '대기 중...',
        concentrationCurve: '농도-시간 곡선',
        chartTime: '시간 (시간)',
        chartConcentration: '농도 (mg/L)',
        chartPeak: '최고 농도',
        chartTrough: '최저 농도',
        chartTargetRange: '목표 범위',
        clinicalInterpretation: '임상적 해석',
        effectivenessLabel: '효과 예측:',
        toxicityLabel: '독성 평가:',
        recommendationTitle: '용량 권장사항',
        recommendationPlaceholder: '환자 데이터를 입력하고 계산하여 권장사항을 확인하세요.',
        fillAllFields: '모든 숫자 필드를 입력해주세요.',
        aucLow: '낮음 (<400)',
        aucTarget: '목표 (400-600)',
        aucHigh: '높음 (>600)',
        troughLow: '낮음 (<10)',
        troughAcceptable: '적정 (10-20)',
        troughHigh: '높음 (>20)',
        effectivenessLow: '임상적 실패 위험. 약물 노출이 불충분할 수 있습니다.',
        effectivenessGood: '예측된 노출량은 치료 효과에 충분합니다 (AUC > 400).',
        toxicityHigh: '신독성 위험 증가. 모니터링을 권장합니다.',
        toxicityLow: '용량 의존적 독성의 낮은 위험.',
        recAppropriate: '현재 투약 요법이 적절합니다. 신기능과 최저 농도 모니터링을 계속하세요.',
        recIncrease: 'AUC가 목표보다 낮습니다. 총 일일 용량 증가를 고려하세요. \n옵션: 용량 증가 또는 투약 간격 단축 (예: 12시간마다 -> 8시간마다).',
        recDecrease: 'AUC가 목표보다 높습니다. 총 일일 용량 감소를 고려하세요. \n옵션: 용량 감소 또는 투약 간격 연장 (예: 12시간마다 -> 24시간마다) 하여 독성 위험을 줄이세요.',
        // New translations for multi-point TDM
        addMeasurement: '+ 측정 추가',
        remove: '삭제',
        measurementLabel: '측정',
        measurementHint: '다중 포인트 베이지안 피팅을 위해 2개 이상의 측정을 추가하세요',
        noMeasurements: '최소 한 개의 측정을 추가해주세요.',
        fitQualityLabel: '베이지안 피팅 품질',
        fitQualitySinglePoint: '단일 포인트 추정 (정확도 향상을 위해 더 많은 측정을 추가하세요)',
        fitQualityGood: '우수한 피팅',
        fitQualityModerate: '적절한 피팅',
        fitQualityPoor: '불량한 피팅 - 데이터 품질을 확인하세요',
        doseSimulationTitle: '용량 시뮬레이션',
        simDose: '시뮬레이션 용량 (mg)',
        simDosePlaceholder: '예) 1000',
        simInterval: '시뮬레이션 간격',
        simulateBtn: '시뮬레이션',
        specificDoseRecTitle: '구체적 용량 권장',
        doseOptionDose: '용량/간격',
        doseOptionAUC: '예상 AUC',
        doseOptionTrough: '최저 농도',
        doseOptionStatus: '상태',
        doseStatusOptimal: '최적',
        doseStatusAcceptable: '적절',
        doseStatusSubtherapeutic: '치료 미달',
        doseStatusToxicRisk: '독성 위험',
        currentRegimen: '현재',
        predicted: '예측값',
        measured: '측정값',
        recommendChange: '%CURRENT%에서 %RECOMMENDED%로 변경을 고려하세요. 예상 AUC: %NEWAUC% mg·h/L (현재: %OLDAUC% mg·h/L).',
        // Disclaimer
        disclaimerTitle: '교육 목적 전용',
        disclaimerBody: '이 계산기는 교육 및 연구 목적으로만 사용됩니다. 임상 사용을 위한 검증이 이루어지지 않았습니다. 적절한 임상 검증과 전문가 검토 없이 실제 환자 치료 결정에 이 도구를 사용하지 마세요.',
        disclaimerAgree: '이것이 교육 목적으로만 사용됨을 이해하고 동의합니다',
        disclaimerAccept: '동의 및 계속',
        resultsWatermark: '교육/연구 목적 전용 — 임상 결정에 사용 불가',
        // Validation
        valAgeRange: '나이는 18세에서 120세 사이여야 합니다',
        valHeightRange: '키는 100cm에서 250cm 사이여야 합니다',
        valWeightRange: '체중은 20kg에서 300kg 사이여야 합니다',
        valScrRange: '혈청 크레아티닌은 0.1에서 15 mg/dL 사이여야 합니다',
        valDoseRange: '용량은 100mg에서 5000mg 사이여야 합니다',
        valIntervalRange: '투약 간격은 4시간에서 72시간 사이여야 합니다',
        valConcRange: '농도는 0.1에서 100 mg/L 사이여야 합니다',
        valDoseWarning: '경고: 비정상적인 용량이 감지되었습니다. 확인해주세요.',
        valCrclWarning: '참고: 이 환자에서 Cockcroft-Gault 정확도가 낮을 수 있습니다.',
        saveData: '데이터 저장',
        loadData: '데이터 불러오기',
        printResults: '인쇄',
        dataSaved: '환자 데이터가 저장되었습니다.',
        dataLoaded: '환자 데이터를 불러왔습니다.',
        noSavedData: '저장된 환자 데이터가 없습니다.',
        confirmLoad: '저장된 환자 데이터를 불러오시겠습니까? 현재 값이 덮어씌워집니다.'
    }
};

let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
let pkChart = null; // Global chart variable
let individualizedPK = null; // Stores fitted PK parameters for dose simulation

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // Disclaimer Modal
    // ==========================================
    const disclaimerModal = document.getElementById('disclaimerModal');
    const disclaimerCheckbox = document.getElementById('disclaimerCheckbox');
    const disclaimerAcceptBtn = document.getElementById('disclaimerAcceptBtn');

    if (sessionStorage.getItem('disclaimerAccepted')) {
        disclaimerModal.classList.add('hidden');
    }

    disclaimerCheckbox.addEventListener('change', () => {
        disclaimerAcceptBtn.disabled = !disclaimerCheckbox.checked;
    });

    disclaimerAcceptBtn.addEventListener('click', () => {
        if (disclaimerCheckbox.checked) {
            disclaimerModal.classList.add('hidden');
            sessionStorage.setItem('disclaimerAccepted', 'true');
        }
    });

    // Get all DOM elements first
    const calculateBtn = document.getElementById('calculateBtn');

    // Inputs
    const ageInput = document.getElementById('age');
    const sexInput = document.getElementById('sex');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const scrInput = document.getElementById('scr');
    const doseInput = document.getElementById('dose');
    const intervalInput = document.getElementById('interval');
    const startTimeInput = document.getElementById('startTime');
    // Note: sampleTime and measuredConc are now dynamic (multiple measurements)

    // Outputs
    const aucValue = document.getElementById('aucValue');
    const aucStatus = document.getElementById('aucStatus');
    const troughValue = document.getElementById('troughValue');
    const troughStatus = document.getElementById('troughStatus');
    const clValue = document.getElementById('clValue');
    const halflifeValue = document.getElementById('halflifeValue');
    const effectivenessText = document.getElementById('effectivenessText');
    const toxicityText = document.getElementById('toxicityText');
    const recommendationText = document.getElementById('recommendationText');

    // Theme controls
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');

    // Language controls
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');

    // Function definitions
    function applyTheme() {
        const t = translations[currentLang];
        const themeToggleText = document.querySelector('#themeToggle span[data-i18n]');

        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
            if (themeToggleText) {
                themeToggleText.textContent = t.themeToggleBright;
            }
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
            if (themeToggleText) {
                themeToggleText.textContent = t.themeToggle;
            }
        }
    }

    function applyLanguage() {
        const t = translations[currentLang];

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (t[key]) {
                element.textContent = t[key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-placeholder]').forEach(element => {
            const key = element.getAttribute('data-placeholder');
            if (t[key]) {
                element.placeholder = t[key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = currentLang;
    }

    // ==========================================
    // Input Validation
    // ==========================================

    const validationRules = {
        age:      { min: 18,  max: 120, key: 'valAgeRange' },
        height:   { min: 100, max: 250, key: 'valHeightRange' },
        weight:   { min: 20,  max: 300, key: 'valWeightRange' },
        scr:      { min: 0.1, max: 15,  key: 'valScrRange' },
        dose:     { min: 100, max: 5000, key: 'valDoseRange' },
        interval: { min: 4,   max: 72,  key: 'valIntervalRange' }
    };

    function validateField(input, ruleName) {
        const rule = validationRules[ruleName];
        if (!rule) return true;

        const value = parseFloat(input.value);
        const group = input.closest('.input-group');
        if (!group) return true;

        let errorEl = group.querySelector('.validation-error');
        if (!errorEl) {
            errorEl = document.createElement('small');
            errorEl.className = 'validation-error';
            group.appendChild(errorEl);
        }

        if (isNaN(value) || value < rule.min || value > rule.max) {
            const t = translations[currentLang];
            errorEl.textContent = t[rule.key];
            group.classList.add('has-error');
            return false;
        }

        errorEl.textContent = '';
        group.classList.remove('has-error');
        return true;
    }

    function validateAllInputs() {
        const t = translations[currentLang];
        let valid = true;
        const warnings = [];

        valid = validateField(ageInput, 'age') && valid;
        valid = validateField(heightInput, 'height') && valid;
        valid = validateField(weightInput, 'weight') && valid;
        valid = validateField(scrInput, 'scr') && valid;
        valid = validateField(doseInput, 'dose') && valid;
        valid = validateField(intervalInput, 'interval') && valid;

        // Check concentration values
        const concInputs = document.querySelectorAll('.measured-conc');
        concInputs.forEach(input => {
            const val = parseFloat(input.value);
            if (input.value && (isNaN(val) || val < 0.1 || val > 100)) {
                const group = input.closest('.input-group');
                let errorEl = group.querySelector('.validation-error');
                if (!errorEl) {
                    errorEl = document.createElement('small');
                    errorEl.className = 'validation-error';
                    group.appendChild(errorEl);
                }
                errorEl.textContent = t.valConcRange;
                group.classList.add('has-error');
                valid = false;
            }
        });

        // Clinical warnings (non-blocking)
        const dose = parseFloat(doseInput.value);
        const weight = parseFloat(weightInput.value);
        if (dose && weight && dose / weight > 30) {
            warnings.push(t.valDoseWarning);
        }

        const age = parseFloat(ageInput.value);
        const scr = parseFloat(scrInput.value);
        if ((age && age > 85) || (weight && weight > 150) || (scr && scr < 0.4)) {
            warnings.push(t.valCrclWarning);
        }

        return { valid, warnings };
    }

    // Add real-time validation on blur
    Object.keys(validationRules).forEach(fieldName => {
        const input = document.getElementById(fieldName);
        if (input) {
            input.addEventListener('blur', () => validateField(input, fieldName));
        }
    });

    // ==========================================
    // Measurement Management Functions
    // ==========================================

    /**
     * Creates a new measurement entry element
     * @param {number} index - The measurement index
     * @returns {HTMLElement} - The measurement entry DOM element
     */
    function createMeasurementEntry(index) {
        const t = translations[currentLang];
        const entry = document.createElement('div');
        entry.className = 'measurement-entry';
        entry.dataset.index = index;

        entry.innerHTML = `
            <div class="measurement-header">
                <span class="measurement-label">${t.measurementLabel} #${index + 1}</span>
                ${index > 0 ? `<button type="button" class="btn-remove">${t.remove}</button>` : ''}
            </div>
            <div class="grid-2">
                <div class="input-group">
                    <label>${t.sampleTime}</label>
                    <input type="datetime-local" class="sample-time" required>
                    <small class="hint">${t.sampleTimeHint}</small>
                </div>
                <div class="input-group">
                    <label>${t.measuredConc}</label>
                    <input type="number" class="measured-conc" required step="0.1" min="0" placeholder="${t.measuredConcPlaceholder}">
                    <small class="hint">${t.measuredConcHint}</small>
                </div>
            </div>
        `;

        // Add remove button event listener
        const removeBtn = entry.querySelector('.btn-remove');
        if (removeBtn) {
            removeBtn.addEventListener('click', () => removeMeasurement(index));
        }

        return entry;
    }

    /**
     * Adds a new measurement entry to the UI
     */
    function addMeasurement() {
        const container = document.getElementById('measurementsContainer');
        const index = container.children.length;
        const entry = createMeasurementEntry(index);
        container.appendChild(entry);

        // Highlight newly added entry
        entry.classList.add('highlight');
        setTimeout(() => entry.classList.remove('highlight'), 1000);
    }

    /**
     * Removes a measurement entry
     * @param {number} index - The index to remove
     */
    function removeMeasurement(index) {
        const container = document.getElementById('measurementsContainer');
        const entries = container.querySelectorAll('.measurement-entry');

        if (entries.length > 1) {
            entries[index].remove();
            // Re-index remaining entries
            reindexMeasurements();
        }
    }

    /**
     * Re-indexes all measurement entries after removal
     */
    function reindexMeasurements() {
        const t = translations[currentLang];
        const container = document.getElementById('measurementsContainer');
        const entries = container.querySelectorAll('.measurement-entry');

        entries.forEach((entry, i) => {
            entry.dataset.index = i;
            const label = entry.querySelector('.measurement-label');
            label.textContent = `${t.measurementLabel} #${i + 1}`;

            // Handle remove button visibility
            let removeBtn = entry.querySelector('.btn-remove');
            if (i === 0 && removeBtn) {
                removeBtn.remove();
            } else if (i > 0 && !removeBtn) {
                const header = entry.querySelector('.measurement-header');
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'btn-remove';
                btn.textContent = t.remove;
                btn.addEventListener('click', () => removeMeasurement(i));
                header.appendChild(btn);
            }
        });
    }

    /**
     * Collects all measurement data from the UI
     * @returns {Array} - Array of measurement objects {time: Date, concentration: number}
     */
    function collectMeasurements() {
        const container = document.getElementById('measurementsContainer');
        const entries = container.querySelectorAll('.measurement-entry');
        const measurements = [];

        entries.forEach((entry) => {
            const timeInput = entry.querySelector('.sample-time');
            const concInput = entry.querySelector('.measured-conc');

            if (timeInput.value && concInput.value) {
                measurements.push({
                    time: new Date(timeInput.value),
                    concentration: parseFloat(concInput.value)
                });
            }
        });

        // Sort measurements by time
        measurements.sort((a, b) => a.time - b.time);

        return measurements;
    }

    // ==========================================
    // Multi-Point Bayesian Fitting Algorithm
    // ==========================================

    /**
     * Multi-point Bayesian fitting using weighted least squares
     * Fits both Kel and Vd from multiple concentration measurements
     *
     * @param {Object} patientData - Patient demographics and dosing info
     * @param {Array} measurements - Array of {time, concentration} objects
     * @param {Object} populationPK - Population PK parameters {kel, vd}
     * @returns {Object} - Individualized PK parameters and fit quality metrics
     */
    function multiPointBayesianFit(patientData, measurements, populationPK) {
        const { dose, interval, startTime } = patientData;
        const { kel: kelPop, vd: vdPop } = populationPK;

        // If only one measurement, fall back to single-point adjustment
        if (measurements.length === 1) {
            return singlePointBayesianFit(patientData, measurements[0], populationPK);
        }

        /**
         * Calculates predicted concentration at a given time
         */
        function predictConcentration(kel, vd, measurementTime) {
            const timeSinceStart = (measurementTime - startTime) / (1000 * 60 * 60);
            const doseNumber = Math.floor(timeSinceStart / interval) + 1;
            const timeAfterLastDose = timeSinceStart % interval;

            // Accumulation factor
            let effectiveAccumulation;
            if (doseNumber <= 5) {
                effectiveAccumulation = (1 - Math.exp(-kel * interval * doseNumber)) /
                                       (1 - Math.exp(-kel * interval));
            } else {
                effectiveAccumulation = 1 / (1 - Math.exp(-kel * interval));
            }

            const peak = (dose / vd) * effectiveAccumulation;
            const concentration = peak * Math.exp(-kel * timeAfterLastDose);

            return concentration;
        }

        /**
         * Objective function: Weighted sum of squared residuals with Bayesian prior
         */
        function objectiveFunction(params) {
            const kel = params[0];
            const vd = params[1];

            // Parameter bounds validation
            if (kel <= 0 || vd <= 0 || kel > 0.5 || vd > vdPop * 5 || vd < vdPop * 0.2) {
                return 1e10;
            }

            // Sum of squared residuals
            let ssr = 0;
            measurements.forEach(m => {
                const predicted = predictConcentration(kel, vd, m.time);
                const residual = m.concentration - predicted;
                const weight = 1 / (0.1 * m.concentration) ** 2;
                ssr += weight * residual * residual;
            });

            // Bayesian prior penalty
            const kelVariance = (kelPop * 0.3) ** 2;
            const vdVariance = (vdPop * 0.25) ** 2;

            const kelPriorPenalty = ((kel - kelPop) ** 2) / kelVariance;
            const vdPriorPenalty = ((vd - vdPop) ** 2) / vdVariance;

            const bayesianWeight = 0.5;

            return ssr + bayesianWeight * (kelPriorPenalty + vdPriorPenalty);
        }

        /**
         * Nelder-Mead Simplex Optimization
         */
        function nelderMeadOptimize(initialParams, maxIterations = 500, tolerance = 1e-8) {
            const n = initialParams.length;

            // Initialize simplex
            const simplex = [initialParams.slice()];
            for (let i = 0; i < n; i++) {
                const point = initialParams.slice();
                point[i] *= 1.1;
                simplex.push(point);
            }

            const alpha = 1, gamma = 2, rho = 0.5, sigma = 0.5;

            for (let iter = 0; iter < maxIterations; iter++) {
                simplex.sort((a, b) => objectiveFunction(a) - objectiveFunction(b));

                const fBest = objectiveFunction(simplex[0]);
                const fWorst = objectiveFunction(simplex[n]);
                if (Math.abs(fWorst - fBest) < tolerance) break;

                // Calculate centroid
                const centroid = new Array(n).fill(0);
                for (let i = 0; i < n; i++) {
                    for (let j = 0; j < n; j++) {
                        centroid[j] += simplex[i][j];
                    }
                }
                centroid.forEach((_, i) => centroid[i] /= n);

                // Reflection
                const reflected = centroid.map((c, i) => c + alpha * (c - simplex[n][i]));
                const fReflected = objectiveFunction(reflected);

                if (fReflected < objectiveFunction(simplex[0])) {
                    const expanded = centroid.map((c, i) => c + gamma * (reflected[i] - c));
                    simplex[n] = objectiveFunction(expanded) < fReflected ? expanded : reflected;
                } else if (fReflected < objectiveFunction(simplex[n - 1])) {
                    simplex[n] = reflected;
                } else {
                    const contracted = centroid.map((c, i) => c + rho * (simplex[n][i] - c));
                    if (objectiveFunction(contracted) < objectiveFunction(simplex[n])) {
                        simplex[n] = contracted;
                    } else {
                        for (let i = 1; i <= n; i++) {
                            simplex[i] = simplex[0].map((best, j) => best + sigma * (simplex[i][j] - best));
                        }
                    }
                }
            }

            simplex.sort((a, b) => objectiveFunction(a) - objectiveFunction(b));
            return simplex[0];
        }

        // Run optimization
        const optimizedParams = nelderMeadOptimize([kelPop, vdPop]);
        const kelIndividual = optimizedParams[0];
        const vdIndividual = optimizedParams[1];

        // Calculate fit quality metrics
        const predictions = measurements.map(m => predictConcentration(kelIndividual, vdIndividual, m.time));
        const residuals = measurements.map((m, i) => m.concentration - predictions[i]);
        const meanObserved = measurements.reduce((sum, m) => sum + m.concentration, 0) / measurements.length;

        const ssRes = residuals.reduce((sum, r) => sum + r * r, 0);
        const ssTot = measurements.reduce((sum, m) => sum + (m.concentration - meanObserved) ** 2, 0);
        const rSquared = ssTot > 0 ? 1 - (ssRes / ssTot) : 0;
        const rmse = Math.sqrt(ssRes / measurements.length);

        return {
            kel: kelIndividual,
            vd: vdIndividual,
            cl: kelIndividual * vdIndividual,
            halfLife: 0.693 / kelIndividual,
            fitQuality: {
                rSquared: rSquared,
                rmse: rmse,
                measurementCount: measurements.length,
                predictions: predictions,
                residuals: residuals
            }
        };
    }

    /**
     * Single-point Bayesian adjustment (existing logic refactored)
     */
    function singlePointBayesianFit(patientData, measurement, populationPK) {
        const { dose, interval, startTime } = patientData;
        const { kel: kelPop, vd: vdPop } = populationPK;

        const timeSinceStart = (measurement.time - startTime) / (1000 * 60 * 60);
        const doseNumber = Math.floor(timeSinceStart / interval) + 1;
        const timeAfterLastDose = timeSinceStart % interval;

        let cPredicted;
        if (doseNumber === 1) {
            cPredicted = (dose / vdPop) * Math.exp(-kelPop * timeAfterLastDose);
        } else {
            const peakSS = (dose / vdPop) * (1 / (1 - Math.exp(-kelPop * interval)));
            cPredicted = peakSS * Math.exp(-kelPop * timeAfterLastDose);
        }

        const vdIndividual = vdPop * (cPredicted / measurement.concentration);

        return {
            kel: kelPop,
            vd: vdIndividual,
            cl: kelPop * vdIndividual,
            halfLife: 0.693 / kelPop,
            fitQuality: {
                rSquared: null,
                rmse: Math.abs(measurement.concentration - cPredicted),
                measurementCount: 1,
                predictions: [cPredicted],
                residuals: [measurement.concentration - cPredicted]
            }
        };
    }

    function calculateTDM() {
        const t = translations[currentLang];

        // 1. Get Patient Values
        const age = parseFloat(ageInput.value);
        const sex = sexInput.value;
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        const scr = parseFloat(scrInput.value);
        const dose = parseFloat(doseInput.value);
        const interval = parseFloat(intervalInput.value);
        const startTime = new Date(startTimeInput.value);

        // Validate basic inputs
        if (!age || !height || !weight || !scr || !dose || !interval || !startTimeInput.value) {
            alert(t.fillAllFields);
            return;
        }

        // Run comprehensive validation
        const { valid, warnings } = validateAllInputs();
        if (!valid) return;

        if (warnings.length > 0) {
            const proceed = confirm(warnings.join('\n') + '\n\n' +
                (currentLang === 'en' ? 'Do you want to proceed?' : '계속 진행하시겠습니까?'));
            if (!proceed) return;
        }

        // 2. Collect measurements
        const measurements = collectMeasurements();

        if (measurements.length === 0) {
            alert(t.noMeasurements);
            return;
        }

        // Validate measurement times
        for (const m of measurements) {
            if (m.time < startTime) {
                alert(currentLang === 'en'
                    ? 'All sample times must be after the first dose time!'
                    : '모든 채혈 시간은 첫 투약 시간 이후여야 합니다!');
                return;
            }
        }

        // 3. Calculate Population PK Parameters
        // IBW (Devine formula)
        let ibw;
        if (sex === 'male') {
            ibw = 50 + 0.9 * (height - 152);
        } else {
            ibw = 45.5 + 0.9 * (height - 152);
        }

        // Adjusted Body Weight
        const adjBw = ibw + 0.4 * (weight - ibw);

        // Weight for CrCl calculation
        let weightForCrCl = weight;
        if (weight < ibw) {
            weightForCrCl = weight;
        } else if (weight > 1.2 * ibw) {
            weightForCrCl = adjBw;
        }

        // Cockcroft-Gault CrCl
        let crcl = ((140 - age) * weightForCrCl) / (72 * scr);
        if (sex === 'female') {
            crcl *= 0.85;
        }

        // Matzke equation for Kel
        const kelPop = 0.00083 * crcl + 0.0044;

        // Population Vd (0.7 L/kg)
        const vdPop = 0.7 * weight;

        // 4. Perform Bayesian Fitting
        const patientData = { dose, interval, startTime };
        const populationPK = { kel: kelPop, vd: vdPop };

        individualizedPK = multiPointBayesianFit(patientData, measurements, populationPK);

        // 5. Calculate Steady-State Predictions
        const { kel, vd, cl, halfLife, fitQuality } = individualizedPK;

        const peakSS = (dose / vd) * (1 / (1 - Math.exp(-kel * interval)));
        const troughSS = peakSS * Math.exp(-kel * interval);

        // AUC 24h
        const totalDailyDose = (24 / interval) * dose;
        const auc24 = totalDailyDose / cl;

        // 6. Update UI with Results
        aucValue.textContent = auc24.toFixed(1);
        troughValue.textContent = troughSS.toFixed(1);
        clValue.textContent = cl.toFixed(2);
        halflifeValue.textContent = halfLife.toFixed(1);

        // Update status and interpretation
        updateStatus(auc24, troughSS);

        // Display fit quality indicator
        displayFitQuality(fitQuality);

        // 7. Update Chart with Extended Timeline
        updateChartExtended(peakSS, kel, vd, interval, measurements, startTime, dose);

        // 8. Generate Specific Dose Recommendations
        generateSpecificDoseRecommendations(individualizedPK, dose, interval);

        // Show simulation and recommendations boxes
        document.getElementById('simulationBox').style.display = 'block';
        document.getElementById('doseRecommendationsBox').style.display = 'block';

        // Add results watermark
        let watermark = document.querySelector('.results-watermark');
        if (!watermark) {
            watermark = document.createElement('div');
            watermark.className = 'results-watermark';
            document.getElementById('resultsSection').appendChild(watermark);
        }
        watermark.textContent = t.resultsWatermark;
    }

    /**
     * Updates the chart to show multiple dosing intervals with all measured points
     */
    function updateChartExtended(peakSS, kel, vd, interval, measurements, startTime, dose) {
        const t = translations[currentLang];
        const ctx = document.getElementById('pkChart');

        // Determine chart duration based on measurements
        const lastMeasurementTime = measurements[measurements.length - 1].time;
        const timeSinceStart = (lastMeasurementTime - startTime) / (1000 * 60 * 60);

        // Show at least 3 intervals, or enough to include all measurements + 1 interval
        const numIntervalsToShow = Math.max(3, Math.ceil(timeSinceStart / interval) + 1);
        const totalDuration = numIntervalsToShow * interval;

        // Generate concentration-time data for multiple intervals
        const timePoints = [];
        const concentrations = [];
        const steps = totalDuration * 4; // 4 points per hour for smooth curve

        for (let i = 0; i <= steps; i++) {
            const time = (totalDuration * i) / steps;
            timePoints.push(time.toFixed(1));

            // Calculate concentration at this time
            const currentInterval = Math.floor(time / interval);
            const timeAfterDose = time % interval;

            // Account for accumulation
            const doseNumber = currentInterval + 1;
            let effectiveAccumulation;

            if (doseNumber <= 5) {
                effectiveAccumulation = (1 - Math.exp(-kel * interval * doseNumber)) /
                                       (1 - Math.exp(-kel * interval));
            } else {
                effectiveAccumulation = 1 / (1 - Math.exp(-kel * interval));
            }

            const peak = (dose / vd) * effectiveAccumulation;
            const conc = peak * Math.exp(-kel * timeAfterDose);
            concentrations.push(conc);
        }

        // Destroy existing chart
        if (pkChart) {
            pkChart.destroy();
        }

        // Theme colors
        const isDark = currentTheme === 'dark';
        const textColor = isDark ? '#f1f5f9' : '#0f172a';
        const gridColor = isDark ? '#334155' : '#e2e8f0';

        // Calculate trough at steady state
        const troughSS = peakSS * Math.exp(-kel * interval);

        // Prepare datasets
        const datasets = [{
            label: t.chartConcentration,
            data: concentrations,
            borderColor: '#0ea5e9',
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            borderWidth: 2
        }, {
            label: t.chartTrough + ' (SS)',
            data: new Array(timePoints.length).fill(troughSS),
            borderColor: '#f59e0b',
            borderDash: [5, 5],
            pointRadius: 0,
            borderWidth: 1.5
        }, {
            label: t.chartTargetRange || 'Target (10-20)',
            data: new Array(timePoints.length).fill(20),
            borderColor: 'rgba(16, 185, 129, 0.4)',
            backgroundColor: 'rgba(16, 185, 129, 0.08)',
            fill: '+1',
            pointRadius: 0,
            borderWidth: 1
        }, {
            label: '',
            data: new Array(timePoints.length).fill(10),
            borderColor: 'rgba(16, 185, 129, 0.4)',
            fill: false,
            pointRadius: 0,
            borderWidth: 1
        }];

        // Add measured concentration points
        const measuredData = timePoints.map(() => null);
        measurements.forEach(m => {
            const measurementTime = (m.time - startTime) / (1000 * 60 * 60);
            // Find closest time point
            let closestIdx = 0;
            let closestDist = Infinity;
            timePoints.forEach((tp, idx) => {
                const dist = Math.abs(parseFloat(tp) - measurementTime);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestIdx = idx;
                }
            });
            if (closestDist < 0.3) {
                measuredData[closestIdx] = m.concentration;
            }
        });

        datasets.push({
            label: t.measured || 'Measured',
            data: measuredData,
            borderColor: '#ef4444',
            backgroundColor: '#ef4444',
            pointRadius: 8,
            pointStyle: 'circle',
            showLine: false,
            borderWidth: 2
        });

        // Add predicted points (for multi-point comparison)
        if (individualizedPK && individualizedPK.fitQuality.predictions && measurements.length > 1) {
            const predictedData = timePoints.map(() => null);
            measurements.forEach((m, idx) => {
                const measurementTime = (m.time - startTime) / (1000 * 60 * 60);
                let closestIdx = 0;
                let closestDist = Infinity;
                timePoints.forEach((tp, i) => {
                    const dist = Math.abs(parseFloat(tp) - measurementTime);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closestIdx = i;
                    }
                });
                if (closestDist < 0.3) {
                    predictedData[closestIdx] = individualizedPK.fitQuality.predictions[idx];
                }
            });

            datasets.push({
                label: t.predicted || 'Predicted',
                data: predictedData,
                borderColor: '#8b5cf6',
                backgroundColor: '#8b5cf6',
                pointRadius: 6,
                pointStyle: 'triangle',
                showLine: false,
                borderWidth: 2
            });
        }

        // Create chart
        pkChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: timePoints,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: textColor,
                            usePointStyle: true,
                            padding: 15,
                            font: { size: 11 },
                            filter: (item) => item.text !== ''
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            title: (items) => {
                                const time = parseFloat(items[0].label);
                                const doseNum = Math.floor(time / interval) + 1;
                                const timeAfterDose = (time % interval).toFixed(1);
                                return `${currentLang === 'en' ? 'Time' : '시간'}: ${time}h (${currentLang === 'en' ? 'Dose' : '투약'} #${doseNum}, +${timeAfterDose}h)`;
                            },
                            label: (context) => {
                                let label = context.dataset.label || '';
                                if (label && context.parsed.y !== null) {
                                    label += ': ' + context.parsed.y.toFixed(2) + ' mg/L';
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: t.chartTime + ` (${currentLang === 'en' ? 'since first dose' : '첫 투약 이후'})`,
                            color: textColor,
                            font: { size: 12, weight: '500' }
                        },
                        ticks: {
                            color: textColor,
                            maxTicksLimit: 10
                        },
                        grid: { color: gridColor }
                    },
                    y: {
                        title: {
                            display: true,
                            text: t.chartConcentration,
                            color: textColor,
                            font: { size: 12, weight: '500' }
                        },
                        ticks: { color: textColor },
                        grid: { color: gridColor },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    /**
     * Displays fit quality indicators in the UI
     */
    function displayFitQuality(fitQuality) {
        const t = translations[currentLang];

        // Create or update fit quality indicator
        let indicator = document.querySelector('.fit-quality-indicator');
        if (!indicator) {
            indicator = document.createElement('div');
            indicator.className = 'fit-quality-indicator';
            document.querySelector('.results-grid').after(indicator);
        }

        let qualityClass, qualityText;

        if (fitQuality.measurementCount === 1) {
            qualityClass = 'moderate';
            qualityText = t.fitQualitySinglePoint;
        } else if (fitQuality.rSquared > 0.9) {
            qualityClass = 'good';
            qualityText = `${t.fitQualityGood} (R² = ${fitQuality.rSquared.toFixed(3)})`;
        } else if (fitQuality.rSquared > 0.7) {
            qualityClass = 'moderate';
            qualityText = `${t.fitQualityModerate} (R² = ${fitQuality.rSquared.toFixed(3)})`;
        } else {
            qualityClass = 'poor';
            qualityText = `${t.fitQualityPoor} (R² = ${fitQuality.rSquared.toFixed(3)})`;
        }

        indicator.innerHTML = `
            <span class="fit-quality-label">${t.fitQualityLabel}:</span>
            <span class="fit-quality-value ${qualityClass}">${qualityText}</span>
            <span class="fit-quality-details">(RMSE: ${fitQuality.rmse.toFixed(2)} mg/L, n=${fitQuality.measurementCount})</span>
        `;
    }

    /**
     * Generates specific dose recommendations with AUC predictions
     */
    function generateSpecificDoseRecommendations(pk, currentDose, currentInterval) {
        const t = translations[currentLang];
        const doseOptionsContainer = document.getElementById('doseOptions');

        // Define dose options to simulate
        const doseOptions = [
            { dose: 500, interval: 8 },
            { dose: 750, interval: 8 },
            { dose: 1000, interval: 8 },
            { dose: 500, interval: 12 },
            { dose: 750, interval: 12 },
            { dose: 1000, interval: 12 },
            { dose: 1250, interval: 12 },
            { dose: 1500, interval: 12 },
            { dose: 1000, interval: 24 },
            { dose: 1250, interval: 24 },
            { dose: 1500, interval: 24 },
            { dose: 1750, interval: 24 },
            // Include current regimen
            { dose: currentDose, interval: currentInterval, isCurrent: true }
        ];

        // Calculate AUC for each option
        const results = doseOptions.map(option => {
            const totalDailyDose = (24 / option.interval) * option.dose;
            const auc24 = totalDailyDose / pk.cl;
            const peak = (option.dose / pk.vd) * (1 / (1 - Math.exp(-pk.kel * option.interval)));
            const trough = peak * Math.exp(-pk.kel * option.interval);

            // Determine status
            let status, statusClass;
            if (auc24 >= 400 && auc24 <= 600 && trough >= 10 && trough <= 20) {
                status = t.doseStatusOptimal;
                statusClass = 'success';
            } else if (auc24 < 400) {
                status = t.doseStatusSubtherapeutic;
                statusClass = 'warning';
            } else if (auc24 > 600 || trough > 20) {
                status = t.doseStatusToxicRisk;
                statusClass = 'danger';
            } else {
                status = t.doseStatusAcceptable;
                statusClass = 'success';
            }

            return {
                ...option,
                auc24,
                peak,
                trough,
                status,
                statusClass,
                isRecommended: auc24 >= 400 && auc24 <= 600 && trough >= 10 && trough <= 20
            };
        });

        // Sort by how close AUC is to target (500 mg*h/L)
        results.sort((a, b) => {
            const aDistance = Math.abs(a.auc24 - 500);
            const bDistance = Math.abs(b.auc24 - 500);
            return aDistance - bDistance;
        });

        // Filter to reasonable range
        const filteredResults = results.filter(r => r.auc24 >= 250 && r.auc24 <= 900);

        // Generate HTML
        doseOptionsContainer.innerHTML = `
            <div class="dose-options-header">
                <span>${t.doseOptionDose}</span>
                <span>${t.doseOptionAUC}</span>
                <span>${t.doseOptionTrough}</span>
                <span>${t.doseOptionStatus}</span>
            </div>
            ${filteredResults.slice(0, 8).map(r => `
                <div class="dose-option ${r.isRecommended ? 'recommended' : ''} ${r.isCurrent ? 'current' : ''}">
                    <div class="dose-option-label">
                        ${r.dose}mg q${r.interval}h
                        ${r.isCurrent ? `<span class="current-badge">${t.currentRegimen}</span>` : ''}
                    </div>
                    <div class="dose-option-auc">
                        <strong>${r.auc24.toFixed(0)}</strong> mg·h/L
                    </div>
                    <div class="dose-option-trough">
                        ${r.trough.toFixed(1)} mg/L
                    </div>
                    <div class="dose-option-status">
                        <span class="status-badge ${r.statusClass}">${r.status}</span>
                    </div>
                </div>
            `).join('')}
        `;

        // Update main recommendation text
        const bestOption = filteredResults.find(r => r.isRecommended && !r.isCurrent);
        const currentResult = results.find(r => r.isCurrent);

        let recText = '';
        if (currentResult && currentResult.isRecommended) {
            recText = t.recAppropriate;
        } else if (bestOption && currentResult) {
            recText = t.recommendChange
                .replace('%CURRENT%', `${currentDose}mg q${currentInterval}h`)
                .replace('%RECOMMENDED%', `${bestOption.dose}mg q${bestOption.interval}h`)
                .replace('%NEWAUC%', bestOption.auc24.toFixed(0))
                .replace('%OLDAUC%', currentResult.auc24.toFixed(0));
        } else if (currentResult) {
            recText = currentResult.auc24 < 400 ? t.recIncrease : t.recDecrease;
        }

        document.getElementById('recommendationText').textContent = recText;
    }

    /**
     * Handles dose simulation from user input
     */
    function simulateDose() {
        if (!individualizedPK) {
            alert(currentLang === 'en'
                ? 'Please calculate TDM first before simulating doses.'
                : '먼저 TDM을 계산한 후 용량 시뮬레이션을 실행하세요.');
            return;
        }

        const simDose = parseFloat(document.getElementById('simDose').value);
        const simInterval = parseFloat(document.getElementById('simInterval').value);

        if (!simDose) {
            alert(currentLang === 'en'
                ? 'Please enter a dose to simulate.'
                : '시뮬레이션할 용량을 입력하세요.');
            return;
        }

        const t = translations[currentLang];
        const pk = individualizedPK;

        // Calculate predicted values
        const totalDailyDose = (24 / simInterval) * simDose;
        const auc24 = totalDailyDose / pk.cl;
        const peak = (simDose / pk.vd) * (1 / (1 - Math.exp(-pk.kel * simInterval)));
        const trough = peak * Math.exp(-pk.kel * simInterval);

        // Determine AUC status
        let aucStatusText, aucStatusClass;
        if (auc24 >= 400 && auc24 <= 600) {
            aucStatusText = t.aucTarget;
            aucStatusClass = 'success';
        } else if (auc24 < 400) {
            aucStatusText = t.aucLow;
            aucStatusClass = 'warning';
        } else {
            aucStatusText = t.aucHigh;
            aucStatusClass = 'danger';
        }

        // Determine trough status
        let troughStatusText, troughStatusClass;
        if (trough >= 10 && trough <= 20) {
            troughStatusText = t.troughAcceptable;
            troughStatusClass = 'success';
        } else if (trough < 10) {
            troughStatusText = t.troughLow;
            troughStatusClass = 'warning';
        } else {
            troughStatusText = t.troughHigh;
            troughStatusClass = 'danger';
        }

        // Display results
        const resultsContainer = document.getElementById('simulationResults');
        resultsContainer.innerHTML = `
            <div class="simulation-result-grid">
                <div class="sim-result-item">
                    <span class="sim-result-label">${t.auc24}:</span>
                    <span class="sim-result-value">${auc24.toFixed(0)} mg·h/L</span>
                    <span class="status-badge ${aucStatusClass}">${aucStatusText}</span>
                </div>
                <div class="sim-result-item">
                    <span class="sim-result-label">${currentLang === 'en' ? 'Peak (Cmax)' : '최고 농도'}:</span>
                    <span class="sim-result-value">${peak.toFixed(1)} mg/L</span>
                </div>
                <div class="sim-result-item">
                    <span class="sim-result-label">${t.trough}:</span>
                    <span class="sim-result-value">${trough.toFixed(1)} mg/L</span>
                    <span class="status-badge ${troughStatusClass}">${troughStatusText}</span>
                </div>
            </div>
        `;
    }

    function updateStatus(auc, trough) {
        const t = translations[currentLang];

        // AUC Status
        let aucClass = '';
        let aucMsg = '';

        if (auc < 400) {
            aucClass = 'warning';
            aucMsg = t.aucLow;
        } else if (auc <= 600) {
            aucClass = 'success';
            aucMsg = t.aucTarget;
        } else {
            aucClass = 'danger';
            aucMsg = t.aucHigh;
        }

        aucStatus.className = `status-badge ${aucClass}`;
        aucStatus.textContent = aucMsg;

        // Trough Status (Target 10-20 generally, <10 low, >20 high)
        let troughClass = '';
        let troughMsg = '';
        if (trough < 10) {
            troughClass = 'warning';
            troughMsg = t.troughLow;
        } else if (trough <= 20) {
            troughClass = 'success';
            troughMsg = t.troughAcceptable;
        } else {
            troughClass = 'danger';
            troughMsg = t.troughHigh;
        }

        troughStatus.className = `status-badge ${troughClass}`;
        troughStatus.textContent = troughMsg;

        // Clinical Interpretation Text
        // Effectiveness
        if (auc < 400) {
            effectivenessText.textContent = t.effectivenessLow;
            effectivenessText.style.color = "#d97706"; // amber
        } else {
            effectivenessText.textContent = t.effectivenessGood;
            effectivenessText.style.color = "#059669"; // green
        }

        // Toxicity
        if (auc > 600 || trough > 20) {
            toxicityText.textContent = t.toxicityHigh;
            toxicityText.style.color = "#dc2626"; // red
        } else {
            toxicityText.textContent = t.toxicityLow;
            toxicityText.style.color = "#059669"; // green
        }

        // Recommendation
        generateRecommendation(auc, trough);
    }

    function generateRecommendation(auc, trough) {
        const t = translations[currentLang];
        let rec = "";

        if (auc >= 400 && auc <= 600) {
            rec = t.recAppropriate;
        } else {
            if (auc < 400) {
                rec = t.recIncrease;
            } else if (auc > 600) {
                rec = t.recDecrease;
            }
        }

        recommendationText.innerText = rec;
    }

    // Initialize theme and language
    applyTheme();
    applyLanguage();
    langText.textContent = currentLang === 'en' ? '한국어' : 'English';

    // Initialize with one measurement entry
    addMeasurement();

    // Event listeners
    document.getElementById('addMeasurementBtn').addEventListener('click', addMeasurement);
    document.getElementById('simulateBtn').addEventListener('click', simulateDose);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        applyTheme();
        localStorage.setItem('theme', currentTheme);
        // Redraw chart with new theme colors
        if (pkChart) {
            const isDark = currentTheme === 'dark';
            const textColor = isDark ? '#f1f5f9' : '#0f172a';
            const gridColor = isDark ? '#334155' : '#e2e8f0';

            pkChart.options.plugins.legend.labels.color = textColor;
            pkChart.options.scales.x.title.color = textColor;
            pkChart.options.scales.x.ticks.color = textColor;
            pkChart.options.scales.x.grid.color = gridColor;
            pkChart.options.scales.y.title.color = textColor;
            pkChart.options.scales.y.ticks.color = textColor;
            pkChart.options.scales.y.grid.color = gridColor;
            pkChart.update();
        }
    });

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'ko' : 'en';
        applyLanguage();
        applyTheme(); // Update theme button text after language change
        langText.textContent = currentLang === 'en' ? '한국어' : 'English';
        localStorage.setItem('language', currentLang);

        // Update measurement entries labels
        reindexMeasurements();

        // Update chart labels if chart exists
        if (pkChart) {
            const t = translations[currentLang];
            pkChart.data.datasets[0].label = t.chartConcentration;
            if (pkChart.data.datasets[1]) {
                pkChart.data.datasets[1].label = t.chartTrough + ' (SS)';
            }
            pkChart.options.scales.x.title.text = t.chartTime + ` (${currentLang === 'en' ? 'since first dose' : '첫 투약 이후'})`;
            pkChart.options.scales.y.title.text = t.chartConcentration;
            pkChart.update();
        }
    });

    calculateBtn.addEventListener('click', calculateTDM);
});
