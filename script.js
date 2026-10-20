const perguntas = [
"1. Qual é a principal qualidade de um bom professor?",
"2. O que um professor deve fazer quando um aluno não entende a matéria?",
"3. Como um bom professor deve tratar seus alunos?",
"4. O que o professor deve fazer quando um aluno comete um erro?",
"5. Como um professor pode tornar as aulas mais interessantes?",
"6. O que um bom professor deve fazer ao receber uma pergunta difícil?",
"7. Qual é a melhor maneira de resolver conflitos entre alunos?",
"8. Por que é importante que o professor planeje suas aulas?",
"9. O que um professor deve fazer para incentivar os alunos?",
"10. O que significa ser um bom professor?"
]

const resposta1 = [
"A) Ter paciência e ajudar os alunos a aprender.",
"A) Explicar novamente de outra maneira.",
"A) Tratar todos com respeito, igualdade e compreensão.",
"A) Ajudar o aluno a entender o erro e aprender com ele.",
"A) Usar atividades variadas e exemplos do cotidiano.",
"A) Pesquisar e buscar a resposta correta, se não souber.",
"A) Ouvir os envolvidos e procurar uma solução justa.",
"A) Organizar os conteúdos e facilitar a aprendizagem.",
"A) Reconhecer os esforços e incentivar o progresso dos alunos.",
"A) Ensinar, aprender continuamente e contribuir para o desenvolvimento dos alunos."
]

const resposta2 = [
"B) Seguir sempre o mesmo horário de aula.",
"B) Pedir ao aluno que revise o conteúdo em casa.",
"B) Conversar com os alunos principalmente durante as atividades.",
"B) Corrigir o erro e continuar a aula.",
"B) Seguir o conteúdo previsto no livro didático.",
"B) Dizer que responderá à pergunta em outra aula.",
"B) Conversar com os alunos depois da aula.",
"B) Definir os horários e as atividades da aula.",
"B) Acompanhar as notas e os resultados das atividades.",
"B) Transmitir os conteúdos previstos durante as aulas."
]

const resposta3 = [
"C) Ignorar os alunos.",
"C) Dizer que o aluno nunca vai aprender.",
"C) Favorecer os alunos de quem mais gosta.",
"C) Humilhar o aluno na frente da turma.",
"C) Impedir que os alunos façam perguntas.",
"C) Inventar uma resposta para fingir que sabe tudo.",
"C) Punir todos sem ouvir o que aconteceu.",
"C) Improvisar tudo e não se preocupar com a aprendizagem.",
"C) Desmotivar os alunos quando eles cometem erros.",
"C) Fazer com que os alunos apenas memorizem informações, sem compreender."
]

let i = 0
let pontos = 0

let pergunta = document.getElementById("pergunta")
let r1 = document.getElementById("opcao1")
let r2 = document.getElementById("opcao2")
let r3 = document.getElementById("opcao3")

function MostrarPergunta() {
    if (i >= perguntas.length) {
        pergunta.innerHTML = "Quiz finalizado! Pontuação: " + pontos
        r1.innerHTML = ""
        r2.innerHTML = ""
        r3.innerHTML = ""
    
    } else {
        pergunta.innerHTML = perguntas[i]
        r1.innerHTML = resposta1[i]
        r2.innerHTML = resposta2[i]
        r3.innerHTML = resposta3[i]
    }
}

function Resposta1() {
    if (i < perguntas.length) {
        pontos += 1
        i += 1
        MostrarPergunta()
    }
}

function Resposta2() {
    if (i < perguntas.length) {
        i += 1
        MostrarPergunta()
    }
}

function Resposta3() {
    if (i < perguntas.length) {
        pontos -= 1
        i += 1
        MostrarPergunta()
    }
}

MostrarPergunta()