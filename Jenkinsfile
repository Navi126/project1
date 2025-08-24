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
                    def container = sh(script: "docker ps -q -f name=jenkins-nginx", returnStdout: true).trim()
                    if(container == "") {
                        // Start Nginx container with read-write volume
                        sh "docker run -d --name jenkins-nginx -p 8081:80 -v \$PWD:/usr/share/nginx/html nginx:latest"
                    } else {
                        // Copy all files and reload Nginx
                        sh "docker cp \$PWD/. jenkins-nginx:/usr/share/nginx/html/"
                        sh "docker exec jenkins-nginx nginx -s reload"
                    }
                }
            }
        }
    }
}

