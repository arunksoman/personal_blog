import os, sys

# edit your username below
sys.path.append("/home/arunksom/public_html/personal_blog");

sys.path.insert(0, os.path.dirname(__file__))
from BlogFactory import create_app
application = create_app()

# make the secret code a little better
application.secret_key = 'fdgukhuyyre4454556566rddfrtrt'

if __name__ == "__main__":
  app.run()
