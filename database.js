// database.js - Concorrência Vestibular UEPG e UTFPR-PG
// Fontes: Editais CPS UEPG, relatórios UTFPR, notícias oficiais (2024-2025)

const database = [
    // UEPG 2025 (exemplos principais - Medicina, Psicologia, Eng. Software etc.)
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Medicina",
      candidatos: 2182, // aproximado total concorrentes
      vagas: 14, // total aproximado (incl. cotas)
      candidatosPorVaga: 114.741,
      notaMinima: null, // varia por cota; maior nota ~6943 pontos na edição
      salarioMedio: 12000 // R$ estimado inicial para médicos (aprox., Brasil/PR)
    },
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Psicologia",
      candidatos: 252, // aprox.
      vagas: 11, // aprox.
      candidatosPorVaga: 23.955,
      notaMinima: null,
      salarioMedio: 4500 // R$ estimado
    },
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Engenharia de Software",
      candidatos: 176, // aprox.
      vagas: 11, // aprox.
      candidatosPorVaga: 15.625,
      notaMinima: null,
      salarioMedio: 8000 // R$ estimado TI
    },
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Administração",
      candidatos: 99, // aprox. (um turno)
      vagas: 24,
      candidatosPorVaga: 12.375, // exemplo
      notaMinima: null,
      salarioMedio: 5000
    },
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Engenharia Civil",
      candidatos: null,
      vagas: null,
      candidatosPorVaga: null, // dados agregados disponíveis no PDF
      notaMinima: null,
      salarioMedio: 7000
    },
  
    // UEPG 2024 (para comparação)
    {
      ano: 2024,
      instituicao: "UEPG",
      curso: "Medicina",
      candidatos: 2646,
      vagas: 27,
      candidatosPorVaga: 98,
      notaMinima: null,
      salarioMedio: 12000
    },
    {
      ano: 2024,
      instituicao: "UEPG",
      curso: "Engenharia de Software",
      candidatos: 374,
      vagas: 24,
      candidatosPorVaga: 15.583,
      notaMinima: null,
      salarioMedio: 8000
    },
  
    // UTFPR-PG (exemplos 2025/1 - Campus Ponta Grossa)
    {
      ano: 2025,
      instituicao: "UTFPR-PG",
      curso: "Ciência da Computação",
      candidatos: 264,
      vagas: 44,
      candidatosPorVaga: 6.00,
      notaMinima: null, // ver maior/menor nota nos relatórios UTFPR
      salarioMedio: 7500
    },
    {
      ano: 2025,
      instituicao: "UTFPR-PG",
      curso: "Engenharia de Produção",
      candidatos: 136,
      vagas: 31,
      candidatosPorVaga: 4.39,
      notaMinima: null,
      salarioMedio: 6500
    },
    {
      ano: 2025,
      instituicao: "UTFPR-PG",
      curso: "Engenharia Mecânica",
      candidatos: 101,
      vagas: 31,
      candidatosPorVaga: 3.26,
      notaMinima: null,
      salarioMedio: 7000
    },
    {
      ano: 2025,
      instituicao: "UTFPR-PG",
      curso: "Análise e Desenvolvimento de Sistemas",
      candidatos: null,
      vagas: 30,
      candidatosPorVaga: null, // dados no PDF
      notaMinima: null,
      salarioMedio: 6000
    }
    // Adicione mais entradas conforme necessário a partir dos PDFs completos
  ];
  
  // Export para uso em Node.js ou browser
  module.exports = database; // ou export default database; (ES modules)