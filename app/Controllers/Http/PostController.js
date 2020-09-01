'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index({ request, view, response }) {
    const posts = await Post.all();

    return view.render('posts.index', {
      title: 'Latest Posts',
      posts: posts.toJSON()
    })
  }
}

module.exports = PostController
