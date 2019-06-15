# django-svelte
A template for Django/Svelte single-page apps

This gives you [JWT](https://jwt.io/) auth and a few extra files to help you deploy with heroku. There are a few TODO's in here where you should insert your own values (e.g. Django `SECRET_KEY`)

## Frontend
- [Svelte 3](https://svelte.dev/)
- [webpack](https://webpack.js.org/)

## Backend
- [Python 3.7](https://www.python.org/)
- [Django](https://www.djangoproject.com/) with ([Django REST framework](https://www.django-rest-framework.org/))
- [gunicorn](https://gunicorn.org/)
- [Whitenoise](http://whitenoise.evans.io/en/stable/)

## Instructions

### Environment variables
- `DATABASE_URL`
- `PYTHONPATH`. Point it to the outer `backend` dir, since our python does not live in the root directory
- `DJANGO_SECRET_KEY`. Create one with:  
```>>> from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())```

## Heroku
- Use the buildpack [negativetwelve/heroku-buildpack-subdir](https://github.com/negativetwelve/heroku-buildpack-subdir):  
```$ heroku buildpacks:set https://github.com/negativetwelve/heroku-buildpack-subdir```