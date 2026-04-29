export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  console.log('Datos recibidos:', body)

  return { ok: true }
})

