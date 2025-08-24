pipeline {
    agent any

    stages {
        stage('Pull from GitHub') {
            steps {
                git branch: 'main', url: 'https://github.com/Navi126/project1.git'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                // Copy files directly to Nginx folder
                sh '''
                cp -r * /usr/share/nginx/html/
                '''
            }
        }
    }
}

