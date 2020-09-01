'use strict'

class PostController {
  async index({ request, view, response }) {
    const posts = [
      { title: 'Post One', body: 'lorem 1' },
      { title: 'Post Two', body: 'lorem 2' },
      { title: 'Post Three', body: 'lorem 3' },
    ]

    return view.render('posts.index', {
      title: 'Latest Posts',
      posts,
    })
  }
}

module.exports = PostController
