pipeline {
    agent any

    environment {
        CONTAINER_NAME = 'jenkins-nginx'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Navi126/project1.git'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                script {
                    // Stop and remove existing container if it exists
                    sh """
                        if [ \$(docker ps -aq -f name=$CONTAINER_NAME) ]; then
                            docker stop $CONTAINER_NAME
                            docker rm $CONTAINER_NAME
                        fi
                    """

                    // Run a new Nginx container with project files mounted
                    sh """
                        docker run -d --name $CONTAINER_NAME -p 8080:80 \
                        -v $WORKSPACE:/usr/share/nginx/html:ro nginx:latest
                    """

                    echo "Deployment completed. Access your site at http://<jenkins-host>:8080"
                }
            }
        }
    }

    post {
        success {
            echo "Deployment successful!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}

