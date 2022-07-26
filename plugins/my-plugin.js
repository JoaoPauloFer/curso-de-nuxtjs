export default (context, inject) => {
    // inject('name', 'Jon')
    inject('name', (nome)=>`Olá ${nome}`)
}