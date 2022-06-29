// buscar links salvos.
export async function getLinksSave(key) {
  // quem usar a função fornece a chave para mim
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || [] // conversão para array

  return linksSaves
}

// salvar um link no localStorage.
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key)

  // se ja estiver um link salvo com algum ID eu nao vou deixar duplicar
  const hasLink = linksStored.some((link) => link.id === newLink.id)

  if (hasLink) {
    console.log('Esse link já existe na sua lista')
    return
  }

  // adicionar esse novo link na lista.
  linksStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linksStored)) // convertendo para string o array JSON.stringf...
  console.log('link salvo com sucesso!')
}

// deletar algum link salvo.
