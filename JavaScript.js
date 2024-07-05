
function submitTest() {
    var answers = {};
    var questions = document.querySelectorAll(".question");
    for (var i = 0; i < questions.length; i++) {
        var questionNumber = i + 1;
        var selectedOption = questions[i].querySelector("input[name='q" + questionNumber + "']:checked");
        if (selectedOption) {
            answers["q" + questionNumber] = selectedOption.value;
        } else {
            alert("Por favor, responda todas as perguntas.");
            return;
        }
    }

    var result = calculateResult(answers);

    var resultMessage = document.createElement("p");
    resultMessage.classList.add("result-message");
    resultMessage.textContent = result;
    document.body.appendChild(resultMessage);
}

function calculateResult(answers) {
    var scores = {
        'Edificações': 0,
        'Administração': 0,
        'Enfermagem': 0,
        'Contabilidade': 0,
        'Recursos Humanos': 0,
        'Biotecnologia': 0,
        'Desenvolvimento de Sistemas': 0,
        'Segurança do Trabalho': 0,
        'Saneamento': 0
    };

    switch (answers.q1) {
        case 'exatas':
            scores['Edificações']++;
            scores['Desenvolvimento de Sistemas']++;
            scores['Contabilidade']++;
            break;
        case 'humanas':
            scores['Administração']++;
            scores['Recursos Humanos']++;
            scores['Segurança do Trabalho']++;
            scores['Saneamento']++;
            break;
        case 'biologicas':
            scores['Enfermagem']++;
            scores['Biotecnologia']++;
            break;
    }

    switch (answers.q2) {
        case 'matematica':
            scores['Contabilidade']++;
            scores['Edificações']++;
            scores['Desenvolvimento de Sistemas']++;
            break;
        case 'historia':
            scores['Recursos Humanos']++;
            scores['Administração']++;
            scores['Saneamento']++;
            break;
        case 'biologia':
            scores['Biotecnologia']++;
            scores['Enfermagem']++;
            break;
    }

    switch (answers.q3) {
        case 'raciocinio_logico':
            scores['Desenvolvimento de Sistemas']++;
            scores['Edificações']++;
            scores['Contabilidade']++;
            break;
        case 'comunicacao':
            scores['Segurança do Trabalho']++;
            scores['Administração']++;
            break;
        case 'observacao':
            scores['Saneamento']++;
            scores['Biotecnologia']++;
            scores['Enfermagem']++;
            break;
    }

    switch (answers.q4) {
        case 'atividades_arlivres':
            scores['Edificações']++;
            scores['Saneamento']++;
            break;
        case 'atividades_intelectuais':
            scores['Desenvolvimento de Sistemas']++;
            scores['Contabilidade']++;
            scores['Biotecnologia']++;
            break;
        case 'atividades_artistica':
            scores['Enfermagem']++;
            scores['Segurança do Trabalho']++;
            break;
    }

    switch (answers.q5) {
        case 'curiosidade':
            scores['Administração']++;
            scores['Biotecnologia']++;
            break;
        case 'realizacao_pessoal':
            scores['Desenvolvimento de Sistemas']++;
            scores['Edificações']++;
            scores['Recursos Humanos']++;
            break;
        case 'pressao_externa':
            scores['Enfermagem']++;
            scores['Contabilidade']++;
            break;
    }

    switch (answers.q6) {
        case 'leitura':
            scores['Administração']++;
            scores['Biotecnologia']++;
            break;
        case 'pratica':
            scores['Edificações']++;
            scores['Enfermagem']++;
            scores['Segurança do Trabalho']++;
            break;
        case 'visual':
            scores['Desenvolvimento de Sistemas']++;
            scores['Recursos Humanos']++;
            break;
    }

    switch (answers.q7) {
        case 'individual':
            scores['Desenvolvimento de Sistemas']++;
            scores['Contabilidade']++;
            break;
        case 'em_grupo':
            scores['Enfermagem']++;
            scores['Biotecnologia']++;
            scores['Segurança do Trabalho']++;
            break;
        case 'hierarquico':
            scores['Administração']++;
            scores['Saneamento']++;
            break;
    }

    switch (answers.q8) {
        case 'carreira':
            scores['Edificações']++;
            scores['Contabilidade']++;
            break;
        case 'conhecimento':
            scores['Biotecnologia']++;
            scores['Recursos Humanos']++;
            scores['Desenvolvimento de Sistemas']++;
            break;
        case 'status':
            scores['Administração']++;
            scores['Segurança do Trabalho']++;
            break;
    }

    var recommendedCourse = Object.keys(scores).reduce(function (a, b) {
        return scores[a] > scores[b] ? a : b;
    });

    return recommendedCourse;
}
