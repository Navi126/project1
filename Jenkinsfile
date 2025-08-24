pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                          branches: [[name: '*/main']],
                          userRemoteConfigs: [[url: 'https://github.com/Navi126/project1.git']]
                ])
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                cp -r * /usr/share/nginx/html/
                systemctl restart nginx
                '''
            }
        }
    }
}

