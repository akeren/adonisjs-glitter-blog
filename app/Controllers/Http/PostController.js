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
    const { slug } = params
    const post = await Post.findBy('slug', slug)

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
    const { slug } = params
    const post = await Post.findBy('slug', params.slug)

    return view.render('posts.edit', { post })
  }

  async update({ request, response, params, session }) {
    const { slug } = params
    const post = await Post.findBy('slug', slug)

    post.title = request.input('title')
    post.body = request.input('body')

    if (!(await post.save())) {
      session.flash({ notification: 'Unable to update post. Try again' })
      return response.redirect('back')
    }

    session.flash({ notification: 'Post updated successfully.' })
    return response.redirect('/posts')
  }

  async destroy({ params, session, response }) {
    const { slug } = params

    const post = await Post.findBy('slug', slug)

    if (!(await post.delete())) {
      session.flash({ notification: 'Unable to delete post!' })
      return response.redirect('back')
    }

    session.flash({ notification: 'Posted deleted successfully' })
    response.redirect('/posts')
  }
}

module.exports = PostController
