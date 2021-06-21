function enviarEmail(nome: string, email: string){
    console.log(`Enviar email para ${nome} com email ${email}`)
}
enviarEmail("Silveira", "email@email.com")

// node index.ts executa arquivo type script com erro node nao entede typescript
// yarn tsc --init inica  o type script e gera arquivo tsconfig.json
// yarn tsc converte arquivo typescript para javascript