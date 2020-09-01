'use strict'

const Post = use('App/Models/Post')

class PostController {
  async index({ view }) {
    const posts = await Post.all()

    return view.render('posts.index', {
      title: 'Latest Posts',
      posts: posts.toJSON(),
    })
  }

  async show({ params, view }) {
    const post = await Post.findBy('slug', params.slug)

    return view.render('posts.details', { post })
  }

  async create({ view }) {
    return view.render('posts.create')
  }
}

module.exports = PostController
