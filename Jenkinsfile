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
                sh '''
                # Copy all files to Nginx directory
                sudo cp -r * /usr/share/nginx/html/
                
                # Restart Nginx to reflect changes
                sudo systemctl restart nginx
                '''
            }
        }
    }
}

