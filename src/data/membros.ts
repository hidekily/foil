export interface Membro {
  nome: string
  idade: number
}

export const membros = {
  karina: {
    nome: "Karina",
    idade: 24,
    imgclass: "rin"
},
  winter: {
    nome: "Winter",
    idade: 23,
    imgclass: "win"
},
  giselle: {
    nome: "Giselle",
    idade: 23,
    imgclass: "gis"  
},
  ningning: {
    nome: "Ningning",
    idade: 22,
    imgclass: "nin"
    }
} as const