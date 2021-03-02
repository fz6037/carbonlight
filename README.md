# AO Project

## Git Clone (with SSH)

> git@gitlab.com:node_creativehub/er_project.git


### Install Python3 on Debian 10

All this article is very clear and complete : https://linuxize.com/post/how-to-install-python-3-8-on-debian-10/


### Creating a Virtual Environment for Python

1. Create the project directory and switch to it

> mkdir ~/carbonlight && cd ~/carbonlight

2. From inside the project root run the following command to create a virtual environment named carbonlight

> python3.8 -m venv carbonlight

3. Activate the environment

> sudo source carbonlight/bin/activate

4. Run the server (in background with "nohup" argument)

> sudo nohup python manage.py runserver 0.0.0.0:80


### Upload requirements (dependencies installation)

You need to upload the requirements.txt file to the root directory of the project


### Build the backend

In /carbonlight root directory (with sudo)

> pip install psycopg2-binary

> pip install whitenoise

> pip install Pillow

> pip install -r requirements.txt

> python manage.py migrate


### Build the frontend

> curl -sL deb.nodesource.com/setup_14.x | sudo bash -

> sudo apt-get install -y nodejs

> sudo apt install nodejs npm

> npm install

> npm rebuild

> npm run build

> python manage.py collectstatic


### Run the server (from project root directory)

> sudo source carbonlight/bin/activate

> sudo nohup python manage.py runserver 0.0.0.0:80


### Website access

Connect to :

> http://carbonlight.D29.tes.local/


Admin page :

> http://carbonlight.D29.tes.local/admin