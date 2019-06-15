# django-svelte
A template for Django/Svelte single-page apps, with a few extra files to help you deploy quickly to heroku

## Frontend
- [Svelte 3](https://svelte.dev/)
- [webpack](https://webpack.js.org/)

## Backend
- [Python 3.7](https://www.python.org/)
- [Django](https://www.djangoproject.com/) with ([Django REST framework](https://www.django-rest-framework.org/))
- [gunicorn](https://gunicorn.org/)
- [Whitenoise](http://whitenoise.evans.io/en/stable/)

# instructions
- Remember to set `PYTHONPATH` to the outer `backend` dir, since our python does not live in the root directory
- To deploy on Herkou, use the buildpack [negativetwelve/heroku-buildpack-subdir](https://github.com/negativetwelve/heroku-buildpack-subdir):

`$ heroku buildpacks:set https://github.com/negativetwelve/heroku-buildpack-subdir`