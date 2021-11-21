pipeline {
  agent {
    docker { image 'node:12.21.0' }
  }

  stages {
     stage('Initialize') {
        steps {
          script {
            def dockerHome = tool 'docker-jenkins'
            env.PATH = "${dockerHome}/bin:${env.PATH}"
          }
        }
    }

    stage('Build') {
      steps {
        sh 'docker build -t ui ui/'
        sh 'docker build -t api api/'
      }    
    }

    stage('Deploy') {
      steps {
        sh 'docker-compose up -d'
      }
    }
  }
}