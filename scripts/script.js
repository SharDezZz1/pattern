const STAGES = [
    {
        id: 1,
        name: 'ІДЕЯ',
        description: 'Аналізуємо ідею та можлиівсть її втілення в проєкт',
    },
    {
        id: 2,
        name: 'ДИЗАЙН',
        description: 'Розробляємо дизайн та визначаємо технології',
    },
    {
        id: 3,
        name: 'РОЗРОБКА',
        description: 'Розробляємо та тестуємо проєкт',
    },
    {
        id: 4,
        name: 'ПІДТРИМКА',
        description: 'Підтримуємо проєкт та розвиваємо його',
    },
    {
        id: 5,
        name: 'ЗАВЕРШЕННЯ',
        description: 'Завершуємо проєкт та підготовлюємо до використання',
    }
]

function renderWorkStages(stages) {
    let html = '';
    stages.forEach((stage) => {
        html += `
            <div class="col-6 mb-10">
                <div class="work_stage__card d-flex">
                    <div class="work_stage__card_number d-flex justify-content-center align-items-center"><h1>0${stage.id}</h1></div>
                    <div class="work_stage__card_text d-flex flex-column justify-content-center">
                        <h2>${stage.name}</h2>
                        <p>${stage.description}</p>
                    </div>
                </div>
            </div>`
        
        const STAGE = document.querySelector('#row_content');
        STAGE.innerHTML = html;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderWorkStages(STAGES);
  });