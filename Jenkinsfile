pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'node --version'
                bat 'npm run build'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}
