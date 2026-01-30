export interface Experience {
  title: string
  company: string
  period: string
  description: string[]
}

export interface Skill {
  category: string
  items: string[]
}

export interface Certificate {
  title: string
  institution: string
  year: string
}

export const experiences: Experience[] = [
  {
    title: "Engenheiro de Software Full Stack",
    company: "Mr. Turing",
    period: "Julho 2025 - Atualmente",
    description: [
      "Projeto e implementação de sistemas confiáveis e escaláveis",
      "Integração de IA com dados, busca semântica e workflows",
      "Decisões arquiteturais envolvendo embeddings, AI Search e pipelines"
    ]
  },
  {
    title: "Estágio em Engenharia de Projetos",
    company: "P2CRANE",
    period: "Janeiro 2024 - Janeiro 2025",
    description: [
      "Elaboração de documentação técnica em inglês",
      "Projeto, modelagem 3D e detalhamento técnico no SolidWorks",
      "Interface com clientes e fornecedores internacionais"
    ]
  },
  {
    title: "Bolsista de Iniciação Científica",
    company: "CNPq",
    period: "Setembro 2023 - Setembro 2024",
    description: [
      "Desenvolvimento de aplicações de IA em Python e JavaScript",
      "Modelos de deep learning com foco em visão computacional (CNNs)",
      "Predição de uso do solo a partir de imagens de satélite"
    ]
  },
  {
    title: "Experiência em Projetos",
    company: "COPEL Engenharia",
    period: "Março 2022 - Maio 2023",
    description: [
      "Liderança de equipe e resolução de problemas",
      "Modelagem 3D nos softwares Revit e SolidWorks",
      "Elaboração de desenhos técnicos e memoriais de cálculo"
    ]
  }
]

export const skills: Skill[] = [
  {
    category: "Backend & Arquitetura",
    items: ["Node.js", ".NET", "APIs REST", "Sistemas Distribuídos", "Pipelines de Dados"]
  },
  {
    category: "Frontend",
    items: ["React", "Angular", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "IA & Machine Learning",
    items: ["LLMs", "RAG", "Agentes Inteligentes", "Visão Computacional", "CNNs"]
  },
  {
    category: "Dados & Storage",
    items: ["SQL", "Azure Blob", "Object Storage (R2)", "Busca Semântica", "Embeddings"]
  }
]

export const certificates: Certificate[] = [
  {
    title: "AI Agents Specialization",
    institution: "Vanderbilt University",
    year: "2025"
  },
  {
    title: "Machine Learning Specialization",
    institution: "Stanford University",
    year: "2024"
  },
  {
    title: "TOEFL ITP - B2 Level",
    institution: "ETS",
    year: "2023"
  }
]
