// https://www.omnicalculator.com/chemistry/neutralization#formula-for-normality

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const normalityRadio = document.getElementById('normalityRadio');
const weightofsoluteRadio = document.getElementById('weightofsoluteRadio');
const volumeofsolventRadio = document.getElementById('volumeofsolventRadio');
const equivalentweightRadio = document.getElementById('equivalentweightRadio');

let normality;
let weightofsolute = v1;
let volumeofsolvent = v2;
let equivalentweight = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

normalityRadio.addEventListener('click', function() {
  variable1.textContent = 'Weight of solute';
  variable2.textContent = 'Volume of solvent';
  variable3.textContent = 'Equivalent weight';
  weightofsolute = v1;
  volumeofsolvent = v2;
  equivalentweight = v3;
  result.textContent = '';
});

weightofsoluteRadio.addEventListener('click', function() {
  variable1.textContent = 'Normality';
  variable2.textContent = 'Volume of solvent';
  variable3.textContent = 'Equivalent weight';
  normality = v1;
  volumeofsolvent = v2;
  equivalentweight = v3;
  result.textContent = '';
});

volumeofsolventRadio.addEventListener('click', function() {
  variable1.textContent = 'Normality';
  variable2.textContent = 'Weight of solute';
  variable3.textContent = 'Equivalent weight';
  normality = v1;
  weightofsolute = v2;
  equivalentweight = v3;
  result.textContent = '';
});

equivalentweightRadio.addEventListener('click', function() {
  variable1.textContent = 'Normality';
  variable2.textContent = 'Weight of solute';
  variable3.textContent = 'Volume of solvent';
  normality = v1;
  weightofsolute = v2;
  volumeofsolvent = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(normalityRadio.checked)
    result.textContent = `Normality = ${computeNormality().toFixed(5)}`;

  else if(weightofsoluteRadio.checked)
    result.textContent = `Weight of solute = ${computeWeightofsolute().toFixed(2)}`;

  else if(volumeofsolventRadio.checked)
    result.textContent = `Volume of solvent = ${computeVolumeofsolvent().toFixed(2)}`;

  else if(equivalentweightRadio.checked)
    result.textContent = `Equivalent weight = ${computeEquivalentweight().toFixed(2)}`;
})

// calculation

function computeNormality() {
  return Number(weightofsolute.value) / (Number(volumeofsolvent.value) * Number(equivalentweight.value));
}

function computeWeightofsolute() {
  return Number(normality.value) * Number(volumeofsolvent.value) * Number(equivalentweight.value);
}

function computeVolumeofsolvent() {
  return Number(weightofsolute.value) / (Number(normality.value) * Number(equivalentweight.value));
}

function computeEquivalentweight() {
  return Number(weightofsolute.value) / (Number(normality.value) * Number(volumeofsolvent.value));
}