// validation.js - Input Validation Module

import { translations, getLang } from './i18n.js';

export const validationRules = {
    age:      { min: 18,  max: 120, key: 'valAgeRange' },
    height:   { min: 100, max: 250, key: 'valHeightRange' },
    weight:   { min: 20,  max: 300, key: 'valWeightRange' },
    scr:      { min: 0.1, max: 15,  key: 'valScrRange' },
    dose:     { min: 100, max: 5000, key: 'valDoseRange' },
    interval: { min: 4,   max: 72,  key: 'valIntervalRange' }
};

/**
 * Validate a single field against its rule
 */
export function validateField(input, ruleName) {
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
        const t = translations[getLang()];
        errorEl.textContent = t[rule.key];
        group.classList.add('has-error');
        return false;
    }

    errorEl.textContent = '';
    group.classList.remove('has-error');
    return true;
}

/**
 * Validate all inputs and return { valid, warnings }
 */
export function validateAllInputs(inputs) {
    const t = translations[getLang()];
    let valid = true;
    const warnings = [];

    // Validate main fields
    for (const [name, input] of Object.entries(inputs)) {
        if (validationRules[name]) {
            valid = validateField(input, name) && valid;
        }
    }

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
    const dose = parseFloat(inputs.dose.value);
    const weight = parseFloat(inputs.weight.value);
    if (dose && weight && dose / weight > 30) {
        warnings.push(t.valDoseWarning);
    }

    const age = parseFloat(inputs.age.value);
    const scr = parseFloat(inputs.scr.value);
    if ((age && age > 85) || (weight && weight > 150) || (scr && scr < 0.4)) {
        warnings.push(t.valCrclWarning);
    }

    return { valid, warnings };
}

/**
 * Set up real-time validation on blur for all validatable fields
 */
export function setupRealtimeValidation() {
    Object.keys(validationRules).forEach(fieldName => {
        const input = document.getElementById(fieldName);
        if (input) {
            input.addEventListener('blur', () => validateField(input, fieldName));
        }
    });
}
