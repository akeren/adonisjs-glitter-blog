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

  async show({ request, view, response, params }) {
    const post = await Post.findBy('slug', params.slug)

    return view.render('posts.details', {post})
  }
}

module.exports = PostController
