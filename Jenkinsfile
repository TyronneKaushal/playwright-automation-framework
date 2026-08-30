pipeline {
    agent any

    tools {
        nodejs 'Node24'
    }

    environment {
        BASE_URL = 'https://www.saucedemo.com'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Node.js') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Verify Test Results') {
            steps {
                bat 'dir test-results'
                bat 'if exist test-results\\results.xml (echo JUnit XML found) else (echo JUnit XML NOT FOUND & exit /b 1)'
            }
        }
    }

    post {
        always {
            junit(
                testResults: 'test-results/results.xml',
                allowEmptyResults: false
            )

            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )

            archiveArtifacts(
                artifacts: 'test-results/**',
                allowEmptyArchive: true
            )
        }
    }
}