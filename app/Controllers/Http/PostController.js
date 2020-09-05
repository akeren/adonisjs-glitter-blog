'use strict'

const Post = use('App/Models/Post')
const { validate } = use('Validator')

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

  async store({ request, response, session }) {
    const post = new Post()

    post.title = request.input('title')
    post.body = request.input('body')

    if (!(await post.save())) {
      session.flash({ notification: 'Unable to create post!' })
      return response.redirect('back')
    }

    session.flash({ notification: 'Created post successfully!' })

    return response.redirect('/posts')
  }

  async edit({ params, view }) {
    const post = await Post.findBy('slug', params.slug)

    return view.render('posts.edit', { post })
  }

  async update({ request, response, params, session }) {
    const post = await Post.findBy('slug', params.slug)

    post.title = request.input('title')
    post.body = request.input('body')

    if (!post.save()) {
      session.flash({ notification: 'Unable to update post. Try again' })
      return response.redirect('back')
    }

    session.flash({ notification: 'Post updated successfully.' })
    return response.redirect('/posts')
  }
}

module.exports = PostController
