
pipeline {
    agent {
        label 'local_server_android'
    }
    stages{
        stage('Install Dependencies'){
            steps{
                sh "npm install"
            }
        }

        // stage('Launch AVD Emulator'){
        //     steps{
        //         sh "$ANDROID_HOME/emulator/emulator -avd Mobile_Retailer_Apps"
        //     }
        // }

        stage('Running Test'){
            steps{
                sh "npm run test-android"
            }

            post{
                always{
                    publishHTML target : [
                        allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'test/reports',
                        reportFiles: 'android_automation_report.html',
                        reportName: 'Android Automation Report',
                        reportTitles: 'ANDROID TEST REPORT'
                    ] 
                }
            }
        }
    }
    post{
        always{
            echo "Finish"
        }
    }
}
