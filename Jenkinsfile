pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
     environment {
            CI = 'true'
      }
    stages {
     stage('SonarQube Analysis') {
                tools {
                    nodejs 'nodejs'
                }
                steps {
                    nodejs('nodejs') {
                        script {
                            scannerHome = tool 'SonarScanner';
                        }
                        withSonarQubeEnv('SonarQubeServer') {
                            // some block
                            sh "${scannerHome}/bin/sonar-scanner"
                        }
                    }
                }
       }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}