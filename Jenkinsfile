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
                script {
                    // Run Nginx container if not running
                    sh '''
                    if [ -z "$(docker ps -q -f name=jenkins-nginx)" ]; then
                        docker run -d --name jenkins-nginx -p 8081:80 -v $PWD:/usr/share/nginx/html:ro nginx:latest
                    else
                        docker cp * jenkins-nginx:/usr/share/nginx/html/
                    fi
                    '''
                }
            }
        }
    }
}

