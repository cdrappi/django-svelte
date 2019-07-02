from backend.settings import *

# assert statement is only here to tell some
# less sophisticated editors (*cough* pycharm *cough*)
# that we actually use the * import for something
assert SECURE_SSL_REDIRECT

SECURE_SSL_REDIRECT = False
debug = True

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

CSRF_COOKIE_SECURE = False
CORS_ORIGIN_WHITELIST = ['http://localhost:8080', 'http://127.0.0.1:8080']
CSRF_TRUSTED_ORIGINS = ['localhost', '127.0.0.1']
