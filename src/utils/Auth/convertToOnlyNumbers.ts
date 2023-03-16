export const FormatCPF = async (cpf: string): Promise<string> => {
  return cpf.replace(/\D/g,'')
}
