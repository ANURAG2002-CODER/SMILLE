# SMILLE( SM-ILL-E,Smart Autofill extension)
> SMILLE is the smartest way to log in using facial recognition.
</center>

---
<a href="http://127.0.0.1:8000/">SMILLE</a> is an Smart Autofill extension that recognises a user whenever he/she tries to Log-In any of the accounts. The user who has registered his/her face will only be given the option to access the accounts. The face recognition will be done every time the user tries to access any of the accounts. Option to open the accounts via pattern is also provided. Hence, there is no need to Log-Out every time of the account to keep the data safe. Without any single click you can access your accounts as well as keep the account password protected.

<br>


## Built With
| | | | |
|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|
|<a href="https://www.djangoproject.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg" alt="django" width="100" height="100"/> </a>|<a href="https://opencv.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/opencv/opencv-ar21.svg" alt="opencv" width="150" height="70"/> </a>| <a href="https://opencv.org/" target="_blank"> <img src="assets/mediapipe.png" alt="Mediapipe" width="210" height="50"/> </a>| <a href="" target="_blank"><img src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-ar21.svg" alt="bootstrap" width="200" height="100" /></a>




## 💪🏻 Features
- Save Password
- Auto-Fill with Facial Recognition 
- PIN Login 



## 👨‍💻 Dependencies
 - Chrome Browser
 - Python 3.8
 - Dlib



## 🏃‍♀️ Getting Started
### Running locally

- Clone the repository
```
git clone https://github.com/ANURAG2002-CODER/SMILLE
```
- Install the dependencies
```
pip install -r requirements.txt
```
- Start the server
```
python manage.py runserver
```

### Running this app using Docker

You'll need to have [Docker installed](https://docs.docker.com/get-docker/).
It's available on Windows, macOS and most distros of Linux. If you're new to
Docker and want to learn it in detail check out the [additional resources
links](#learn-more-about-docker-and-django) near the bottom of this README.

If you're using Windows, it will be expected that you're following along inside
of [WSL or WSL
2](https://nickjanetakis.com/blog/a-linux-dev-environment-on-windows-with-wsl-2-docker-desktop-and-more).
That's because we're going to be running shell commands. You can always modify
these commands for PowerShell if you want.

#### Clone this repo anywhere you want and move into the directory:

```sh
git clone https://github.com/ANURAG2002-CODER/SMILLE
cd SMILLE

# Optionally checkout a specific tag, such as: git checkout 0.4.0
```

#### Build everything:

*The first time you run this it's going to take 5-10 minutes depending on your
internet connection speed and computer's hardware specs. That's because it's
going to download a few Docker images and build the Python*

```sh
docker build --tag SMILLE:latest .
```

Now that everything is built. To get the app running use this command.


```sh
docker run --name SMILLE -d -p 8000:8000 SMILLE:latest
```

#### Setup the initial database:

```sh
./run manage migrate 
```

*We'll go over that `./run` script in a bit!*

#### Check it out in a browser:

Visit <http://localhost:8000> in your favorite browser.

## ⭐ Show your support

Give a ⭐ if this tool made your life easier!

Spread the word to your geek fellows to save their time!

## ✨ Contributors

<table>
	<tr align="center" style="font-weight:bold">
		<td>
		Anurag Mahajan
		<p align="center">
			<img src = "https://avatars.githubusercontent.com/ANURAG2002-CODER" width="150" height="150" alt="Anurag Mahajan">
		</p>
			<p align="center">
				<a href = "https://github.com/ANURAG2002-CODER">
					<img src = "http://www.iconninja.com/files/241/825/211/round-collaboration-social-github-code-circle-network-icon.svg" width="36" height = "36" alt="GitHub"/>
				</a>
			</p>
		</td>
	</tr>
</table>
