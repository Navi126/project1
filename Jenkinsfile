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
                sudo cp -r * /usr/share/nginx/html/
                sudo systemctl restart nginx
                '''
            }
        }
    }
}
