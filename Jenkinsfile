//Command

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Navi126/project1.git'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                // Copy files to nginx root
                sh '''
                cp -r * /usr/share/nginx/html/
                systemctl restart nginx
                '''
            }
        }
    }
}
