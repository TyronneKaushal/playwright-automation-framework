pipeline {
    agent any

    tools {
        nodejs 'Node24'
    }

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['Smoke', 'Regression', 'All'],
            description: 'Choose which Playwright suite to run'
        )
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

        stage('Prepare Test Results') {
            steps {
                bat 'if not exist test-results mkdir test-results'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {

                    if (params.TEST_SUITE == 'Smoke') {

                        bat 'npm run test:smoke'

                    } else if (params.TEST_SUITE == 'Regression') {

                        bat 'npm run test:regression'

                    } else {

                        bat 'npm test'
                    }
                }
            }
        }

        stage('Verify JUnit Report') {
            steps {
                bat 'dir test-results'

                bat '''
                    if exist test-results\\results.xml (
                        echo JUnit XML found
                    ) else (
                        echo JUnit XML NOT FOUND
                        exit /b 1
                    )
                '''
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