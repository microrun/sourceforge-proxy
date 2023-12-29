export default {
  async fetch(request, env, ctx) {
    let url = new URL(request.url)
    let download = await fetch('https://sourceforge.net' + url.pathname, {
      headers: {
        'User-Agent': 'Wget/1.21.4'
      }
    })
    return new Response(download.body)
  },
};
