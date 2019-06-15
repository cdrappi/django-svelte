# django-svelte
A template for Django/Svelte single-page apps

This gives you [JSON Web Token](https://jwt.io/) auth and a few extra files to help you deploy with heroku. I've left a few `TODO`s in the code, so you can set up your own app. You can see what the template looks like [here](https://django-svelte.herokuapp.com), but I'm not sure why you would want to, because it only lets you log in.

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
    ```
    >>> from django.core.management.utils import get_random_secret_key
    >>> get_random_secret_key()
    ```

### Heroku
- Use the buildpack [negativetwelve/heroku-buildpack-subdir](https://github.com/negativetwelve/heroku-buildpack-subdir):  
```$ heroku buildpacks:set https://github.com/negativetwelve/heroku-buildpack-subdir```
