

// ------ Polka lover async/await

function decideDanceStyle() {
    const danceStyles = ['polka', 'tango', 'hiphop']

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(danceStyles[Math.floor(Math.random() * danceStyles.length)])
        }, 2000);
    })
}

async function letsDance() {
    const pickedDance = await decideDanceStyle()
    if (pickedDance === 'polka') {
        console.log('Yes, polka is my thing!')
    } else {
        console.log('Not even if a pandemic roamed the earth')
    }
}


// letsDance()


// --------------------------------------------------------

// Webbprojektet async/await
let stepIndex
const steps = [{
    step: 1,
    resolveMessage: 'Researchade målgruppen!',
    rejectMessage: "Målgruppen vill inte använda webben överhuvudtaget",
    timeInMS: 4000
},
{
    step: 2,
    resolveMessage: 'Skissade upp en design på papper!',
    rejectMessage: "Alla pennor är borta",
    timeInMS: 2000
},
{
    step: 3,
    resolveMessage: 'Gjorde skissen till en pixel perfect mockup i Figma - XD',
    rejectMessage: "Figma har gått i konkurs eller nåt",
    timeInMS: 3000
},
{
    step: 4,
    resolveMessage: 'Kodade!',
    rejectMessage: "Alla har glömt hur man kodar",
    timeInMS: 3000
},
{
    step: 5,
    resolveMessage: 'Stackoverflow:ade fel!',
    rejectMessage: "The stack overflowed beyond repair",
    timeInMS: 1000
},
{
    step: 6,
    resolveMessage: 'Testade produkten!',
    rejectMessage: "Test failed :(",
    timeInMS: 2000
},
{
    step: 7,
    resolveMessage: 'Partajade hela natten lång!',
    rejectMessage: "Systemet är stängt",
    timeInMS: 1000
}]

function runNextStep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(steps[stepIndex].resolveMessage)
        }, steps[stepIndex].timeInMS);
    })
}

async function startProject() {
    stepIndex = 0
    while (stepIndex < steps.length) {
        const currentStep = await runNextStep()
        console.log(currentStep)
        stepIndex++
    }
}

startProject()