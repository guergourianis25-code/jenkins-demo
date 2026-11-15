pipeline {
    agent any
    environment {
        NETLIFY_SITE_ID = 'd5aa3c6e-3a40-46c2-8761-17521eee4046'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }
    stages {
        stage('Build') {
            steps {
                bat 'node --version'
                bat 'npm ci'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                bat 'node_modules\\.bin\\netlify --version'
                bat 'node_modules\\.bin\\netlify status'
                bat 'node_modules\\.bin\\netlify deploy --dir=build --prod'
            }
        }
    }
    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}
