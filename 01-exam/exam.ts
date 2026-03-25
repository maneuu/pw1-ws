export class Weight {
  private pesos: number[];

  constructor(pesos: number[]) {
    this.pesos = pesos;
  }

  public getPesos(): number[] {
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

  public getRespostas(): string[] {
    return this.respostas;
  }
}

export class Exam {
  private weight: Weight;
  private answer: Answer;
  private exams: Answer[];

  constructor(weight: Weight, answer: Answer, exams: Answer[] = []) {
    this.weight = weight;
    this.answer = answer;
    this.exams = exams;
  }

  public add(exam: Answer): void {
    this.exams.push(exam);
  }

  public avg(): number {
    let somaNotas = 0;

    for (let i = 0; i < this.exams.length; i++) {
      somaNotas += this.calcularNota(this.exams[i]);
    }

    return this.exams.length > 0 ? somaNotas / this.exams.length : 0;
  }

  public min(count: number = 1): number[] {
    let notas: number[] = [];

    for (let i = 0; i < this.exams.length; i++) {
      notas.push(this.calcularNota(this.exams[i]));
    }

    notas.sort((a, b) => a - b);

    return notas.slice(0, count);
  }

  public max(count: number = 1): number[] {
    let notas: number[] = [];

    for (let i = 0; i < this.exams.length; i++) {
      notas.push(this.calcularNota(this.exams[i]));
    }

    notas.sort((a, b) => a - b);

    return notas.slice(-count);
  }

  public lt(limit: number): number[] {
    let resultado: number[] = [];

    for (let i = 0; i < this.exams.length; i++) {
      let nota = this.calcularNota(this.exams[i]);

      if (nota < limit) {
        resultado.push(nota);
      }
    }

    return resultado;
  }

  public gt(limit: number): number[] {
    let resultado: number[] = [];

    for (let i = 0; i < this.exams.length; i++) {
      let nota = this.calcularNota(this.exams[i]);

      if (nota > limit) {
        resultado.push(nota);
      }
    }

    return resultado;
  }

  // Util
  private calcularNota(exame: Answer): number {
    const respostas = exame.getRespostas();
    const gabarito = this.answer.getRespostas();
    const pesos = this.weight.getPesos();

    let nota = 0;

    for (let i = 0; i < respostas.length; i++) {
      if (respostas[i] === gabarito[i]) {
        nota += pesos[i];
      }
    }

    return nota;
  }
}
