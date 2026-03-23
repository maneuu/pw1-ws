class Weight {
  private pesos: number[];
  constructor(pesos: number[]) {
    this.pesos = pesos;
  }
  public get getPesos(): number[] {
    return this.pesos;
  }
}

export class Answer {
  public nome: string;
  public respostas: string[];
  constructor(nome: string, respostas: string[]) {
    this.nome = nome;
    this.respostas = respostas;
  }

  public get getRespostas(): string[] {
    return this.respostas;
  }
}

class Exam {
  private weight: Weight;
  private answer: Answer;
  private exams: Answer[];

  constructor(weight: Weight, answer: Answer, exams: Answer[]) {
    this.weight = weight;
    this.answer = answer;
    this.exams = exams;
  }

  public add(exam: Answer): void {
    this.exams.push(exam);
  }
  public avg(): number {
    let notas: number[];

    for (let i: number = 0; i < this.exams.length; i++) {
      let exame: Answer = this.exams[i];
      let respostas = exame.getRespostas;

      let nota: number = 0;
      for (let i: number = 0; i < respostas.length; i++) {
        if (this.answer.getRespostas[i] == respostas[i]) {
          nota += this.weight.getPesos[i] * 1;
        }
        notas.push(nota);
      }
    }
  }
}
