pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }
  stages {
    stage('Versions') {
      steps {
        sh 'node -v'
        sh 'npm -v'
      }
    }
    stage('Build') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
  }
}
