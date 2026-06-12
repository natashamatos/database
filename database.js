// database.js - Concorrência Vestibular UEPG e UTFPR-PG
// Fontes: Editais CPS UEPG, relatórios UTFPR, notícias oficiais (2024-2025)

const database = [
    // UEPG 2025 (exemplos principais - Odontologia, Eng. Software, Veterinaria etc.)
    {
      cota: "Publica",
      ano: 2025,
      instituicao: "UEPG",
      curso: "Odontologia",
      candidatos: 90,
      vagas: 6,
      candidatosPorVaga: 15.000,
      notaMinima: 3646,
      salarioMedio: 6.200 #RS APROX EM BRASIL
    },
    {
      cota: "Publica",
      ano: 2025,
      instituicao: "UEPG",
      curso: "Educação Física-bachalerado",
      candidatos: 75, // aprox.
      vagas: 6, // aprox.
      candidatosPorVaga: 12.500,
      notaMinima: 2934,
      salarioMedio: 4500 #RS APROX EM BRASIL
    },
    {
      cota: "Publica",
      ano: 2025,
      instituicao: "UEPG",
      curso: "Engenharia de Software",
      candidatos: 156, // aprox.
      vagas: 4, // aprox.
      candidatosPorVaga: 39.000,
      notaMinima: 3952,
      salarioMedio: 7000 // R$ estimado TI
    },
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Turismo",
      candidatos: 1, // aprox. (um turno)
      vagas: 4,
      candidatosPorVaga: 0.250, // exemplo
      notaMinima: 1737,
      salarioMedio: 3000
    },
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Psicologia",
      candidatos: 228,
      vagas: 4,
      candidatosPorVaga: 57.000, // dados agregados disponíveis no PDF
      notaMinima: 4134,
      salarioMedio: 4500
    },
    {
      ano: 2025,
      instituicao: "UEPG",
      curso: "Enfermagem",
      candidatos: 62,
      vagas: 5,
      candidatosPorVaga: 12,400, // dados agregados disponíveis no PDF
      notaMinima: 4134,
      salarioMedio: 4500
    },
  
    // UEPG 2024 (para comparação)
    {
      cota: "Publica",
      ano: 2024,
      instituicao: "UEPG",
      curso: "Odontologia",
      candidatos: 96,
      vagas: 6,
      candidatosPorVaga: 16.000,
      notaMinima: 3661,
      salarioMedio: 5.300 #RS APROX EM BRASIL
    },
    {
      cota: "Publica",
      ano: 2024,
      instituicao: "UEPG",
      curso: "Educação Física-bachalerado",
      candidatos: 68, // aprox.
      vagas: 6, // aprox.
      candidatosPorVaga: 11.333,
      notaMinima: 2869,
      salarioMedio: 3500 #RS APROX EM BRASIL
    },
    {
      cota: "Publica",
      ano: 2024,
      instituicao: "UEPG",
      curso: "Engenharia de Software",
      candidatos: 160, // aprox.
      vagas: 4, // aprox.
      candidatosPorVaga: 40.000,
      notaMinima: 3951,
      salarioMedio: 15000 // R$ estimado TI
    },
    {
      ano: 2024,
      instituicao: "UEPG",
      curso: "Turismo",
      candidatos: 1, // aprox. (um turno)
      vagas: 4,
      candidatosPorVaga: 0.250, // exemplo
      notaMinima: 1737,
      salarioMedio: 3000
    },
    {
      ano: 2024,
      instituicao: "UEPG",
      curso: "Psicologia",
      candidatos: 228,
      vagas: 4,
      candidatosPorVaga: 57.000, // dados agregados disponíveis no PDF
      notaMinima: 4134,
      salarioMedio: 4500
    },
    {
      ano: 2024,
      instituicao: "UEPG",
      curso: "Enfermagem",
      candidatos: 62,
      vagas: 5,
      candidatosPorVaga: 12,400, // dados agregados disponíveis no PDF
      notaMinima: 4134,
      salarioMedio: 4500
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
    
  ];
  base; // ou export default database; (ES modules)
